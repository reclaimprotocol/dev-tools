import { Metadata } from 'nice-grpc-web'
import { ChatMessage, ClientType, SessionResponse } from '../generated/channel'
import { makeGrpcClient } from '../api-client'
export class ChatBackendClient {
	private readonly accessToken: string
	private readonly clientType: string

	constructor(accessToken: string, clientType: string) {
		this.accessToken = accessToken
		this.clientType = clientType
	}

	private getClient = async () => {
		const client = await makeGrpcClient(this.accessToken, this.clientType)
		return client
	}

	public async generateSessionId(): Promise<SessionResponse> {
		const client = await this.getClient()
		try {
			const response = await client.generateSession({})
			console.log('response received', response)
			return response
		} catch (err) {
			throw err
		}
	}

	public async joinSession(sessionId: string) {
		const client = await this.getClient()
		try {
			const response = await client.joinSession({ sessionId })
			console.log('join session response', response)
			return response
		} catch (err) {
			throw err
		}
	}

	public async sendMessage(message: ChatMessage, sessionId: string) {
		const client = await this.getClient()
		const metadata = new Metadata()
		metadata.set('session-id', sessionId)
		metadata.set('client-type', this.clientType)
		metadata.set('Authorization', this.accessToken)
		try {
			const response = await client.sendMessage({
				message: message.message,
				type: message.type
			}, {
				metadata
			})

			console.log('send message response', response)
			return response
		} catch (err) {
			throw err
		}
	}

	public async receiveMessage(sessionId: string) {
		const client = await this.getClient()
		const metadata = new Metadata()
		metadata.set('session-id', sessionId)
		metadata.set('client-type', this.clientType)
		metadata.set('Authorization', this.accessToken)

		const messages: ChatMessage[] = []

		try {
			for await (const response of client.receiveMessage({}, {
				metadata
			})) {
				console.log('response', response)
				// return response
				messages.push(response)
			}

			return messages
		} catch (err) {
			throw err
		}
	}

}