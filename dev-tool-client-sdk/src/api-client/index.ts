import { Channel, createChannel, createClient, Metadata } from 'nice-grpc-web'
import { BACKEND_URL } from '../config'
import { ClientType, SessionServiceClient, SessionServiceDefinition } from '../generated/channel'
import {ReactNativeTransport} from '@improbable-eng/grpc-web-react-native-transport'

async function makeGrpcClient(accessToken: string, clientType: ClientType) {
	// grpc-web channel
	// both the witness & backend can be accessed from this 
	let channel: Channel
	if(clientType === ClientType.MOBILE) {
		const transport = ReactNativeTransport({
			withCredentials: false,
		});
		channel = createChannel(BACKEND_URL, transport)
	}
	else {
		channel = createChannel(BACKEND_URL)
	}
	// metadata for auth token
	const metadata = new Metadata()

	metadata.set('Authorization', accessToken)
	metadata.set('client-type', clientType as unknown as string)
	// actual client to communicate with backend
	const client: SessionServiceClient = createClient(
		SessionServiceDefinition,
		channel,
		{ '*': { metadata } }
	)

	return client
}

export { makeGrpcClient }

// function FetchTransport(): import('nice-grpc-web/lib/client/Transport').Transport | undefined {
// 	throw new Error('Function not implemented.')
// }
