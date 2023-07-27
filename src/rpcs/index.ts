import { CallContext, ServerError, Status } from 'nice-grpc'
import { ChatMessage, ChatMessageType, Empty, JoinSessionRequest, SessionResponse, SessionResponseStatusType, SessionServiceImplementation } from '../generated/channel'
import { CLIENT_TYPE, ExtraMetadata, RPCPromiseHandler } from '../types/proto'
import generateSessionId from '../utils'
import logger from '../utils/logger'

const sessions = new Map()

async function generateSession(req: Empty, context: CallContext & ExtraMetadata): Promise<SessionResponse> {
	// this function should be called from the web client
	// check metadata for client type
	// if client type is not web, return error

	// Check client type
	logger.info('Request generate session')
	const clientType = context.metadata.get('client-type')
	if(!clientType || clientType !== CLIENT_TYPE.WEB) {
		throw new ServerError(Status.FAILED_PRECONDITION, 'Client type is not web')
	}

	try {
		// generate session
		// Generate session ID
		const sessionId = generateSessionId()

		// Add session to sessions map
		sessions.set(sessionId, { webClient: context, webClientMessageQueue: [], mobileClient: null, mobileClientMessageQueue: [] })

		logger.info(`Session generated: ${sessionId}`)

		return {
			sessionId,
			status: SessionResponseStatusType.SUCCESS
		}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch(err: any) {
		throw new ServerError(Status.INTERNAL, err.message)
	}
}

const joinSession: RPCPromiseHandler<'joinSession'> = async(
	req: JoinSessionRequest,
	context: CallContext & ExtraMetadata
) => {
	// this function should be called by the mobile client
	// check metadata for client type
	// if client type is not mobile, return error

	// Check client type
	const clientType = context.metadata.get('client-type')
	if(!clientType || clientType !== CLIENT_TYPE.MOBILE) {
		throw new ServerError(Status.FAILED_PRECONDITION, 'Client type is not mobile')
	}

	// check if web client exists
	const sessionId = req.sessionId

	logger.info(`Join session request: ${sessionId}`)

	if(!sessions.has(sessionId)) {
		throw new ServerError(Status.NOT_FOUND, `Session not found ${sessionId}`)
	}

	const session = sessions.get(sessionId)

	if(!session.webClient) {
		throw new ServerError(Status.FAILED_PRECONDITION, 'Web client not found')
	}

	// add mobile client to session
	session.mobileClient = context

	// send CONNECTED message to web client
	session.webClientMessageQueue.push({
		message: 'Mobile client connected',
		type: ChatMessageType.CONNECTED
	})

	// send CONNECTED message to mobile client
	session.appclientMessageQueue.push({
		message: 'Web client connected',
		type: ChatMessageType.CONNECTED
	})

	// send session response to mobile client
	return {
		sessionId,
		status: SessionResponseStatusType.SUCCESS
	}
}

const sendMessage: RPCPromiseHandler<'sendMessage'> = async(
	req: ChatMessage,
	context: CallContext & ExtraMetadata
) => {

	// get session ID from context metadata
	const sessionId = context.metadata.get('session-id')

	if(!sessionId) {
		throw new ServerError(Status.FAILED_PRECONDITION, 'Session ID not found')
	}

	// get session from sessions map
	const session = sessions.get(sessionId)

	if(!session) {
		throw new ServerError(Status.NOT_FOUND, 'Session not found')
	}

	// check if client is web or mobile
	const clientType = context.metadata.get('client-type')

	if(!clientType) {
		throw new ServerError(Status.FAILED_PRECONDITION, 'Client type not found')
	}

	// send message to other client
	if(clientType === CLIENT_TYPE.WEB) {
		if(!session.mobileClient) {
			throw new ServerError(Status.FAILED_PRECONDITION, 'Mobile client not found')
		}

		logger.info(`Pushing messages to mobile client ${req}`)
		session.mobileClientMessageQueue.push(req)
	}

	if(clientType === CLIENT_TYPE.MOBILE) {
		if(!session.webClient) {
			throw new ServerError(Status.FAILED_PRECONDITION, 'Web client not found')
		}

		logger.info(`Pushing messages to web client ${req}`)
		session.webClientMessageQueue.push(req)
	}

	return {}
}

// eslint-disable-next-line func-style
const receiveMessage: RPCPromiseHandler<'receiveMessage'> = async function* (
	_req: Empty,
	context: CallContext & ExtraMetadata
) {

	// get session ID from context metadata
	const sessionId = context.metadata.get('session-id')

	if(!sessionId) {
		throw new ServerError(Status.FAILED_PRECONDITION, 'Session ID not found')
	}

	// get session from sessions map
	const session = sessions.get(sessionId)
	logger.info(`Receive message request: ${sessionId}`)
	if(!session) {
		throw new ServerError(Status.NOT_FOUND, 'Session not found')
	}

	// check if client is web or mobile
	const clientType = context.metadata.get('client-type')

	if(!clientType) {
		throw new ServerError(Status.FAILED_PRECONDITION, 'Client type not found')
	}

	if(!session.webClient) {
		throw new ServerError(Status.FAILED_PRECONDITION, 'Web client not found')
	}

	// check if other client is connected
	if(!session.mobileClient) {
		yield { message: 'Waiting for mobile client to connect', type: ChatMessageType.CONNECTION_PENDING }
	}

	// send message to the client
	if(clientType === CLIENT_TYPE.WEB) {
		logger.info('web client receiving message')
		while(session.webClientMessageQueue.length > 0) {
			yield session.webClientMessageQueue.shift()
		}
	}

	if(clientType === CLIENT_TYPE.MOBILE) {
		logger.info('mobile client receiving message')
		while(session.mobileClientMessageQueue.length > 0) {
			yield session.mobileClientMessageQueue.shift()
		}
	}
}


const rpcs: SessionServiceImplementation = {
	generateSession,
	joinSession,
	sendMessage,
	receiveMessage,
}

export default rpcs