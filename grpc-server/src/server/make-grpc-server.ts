import axios from 'axios'
import { randomBytes } from 'crypto'
import { CallContext, createServer, ServerError, ServerMiddlewareCall, Status } from 'nice-grpc'
import { DEFAULT_PORT } from '../config'
import { SessionServiceDefinition } from '../generated/channel'
import rpcs from '../rpcs'
import { CLIENT_TYPE, ExtraMetadata, RPCName } from '../types/proto'
import MAIN_LOGGER from '../utils/logger'

const serverLogger = MAIN_LOGGER.child({ stream: 'server' })

export async function makeGrpcServer(port = DEFAULT_PORT) {
	const server = createServer().use(validateRPC)

	server.add(SessionServiceDefinition, rpcs)

	await server.listen(`0.0.0.0:${port}`)

	serverLogger.info(`server listening on port ${port}`)

	// Register services here

	return {
		close: async() => {
			await server.shutdown()
		}
	}
}

async function* validateRPC<Req, Res>(
	req: ServerMiddlewareCall<Req, Res, ExtraMetadata>,
	ctx: CallContext,
) {
	// last component of path is the RPC name
	const name = req.method.path.split('/').pop() as RPCName
	const requestId = randomBytes(4).toString('hex')

	// include the RPC name and request ID
	// in every log done by this RPC
	const logger = serverLogger.child({ name, requestId })

	logger.info('started')

	const accessToken = ctx.metadata.get('Authorization')
	const clientType = ctx.metadata.get('ClientType') as CLIENT_TYPE
	try {
		if(!accessToken) {
			throw new ServerError(Status.UNAUTHENTICATED, 'authorization token is missing')
		} else {
			const validationEndpoint = 'https://api.reclaimprotocol.org/api/users/validate'

			const response = await axios.get(validationEndpoint, {
				headers: {
					'Authorization': `Bearer ${accessToken}`
				},
			})

			if(!response.data.isSuccess) {
				logger.error('Access token validation failed')
				throw new ServerError(Status.UNAUTHENTICATED, 'authorization token is invalid')
			} else {
				logger.child({}).info('authorization token is present')

				const result = yield* req.next(
					req.request,
					{ ...ctx, logger, token: accessToken, clientType: clientType }
				)
				return result
			}
		}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch(error: any) {
		logger.error(error, 'RPC error')
		if(error instanceof ServerError) {
			throw error
		}

		throw new ServerError(
			Status.INTERNAL,
			`Internal(${error.message})`
		)
	}
}

