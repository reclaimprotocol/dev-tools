import type { Logger } from 'pino'
import { SessionServiceImplementation } from '../generated/channel'

export type ExtraMetadata = {
	token: string
	logger: Logger
	clientType: CLIENT_TYPE
}

export type ServiceImplementation = SessionServiceImplementation<ExtraMetadata>

export type RPCName = keyof ServiceImplementation
export type RPCPromiseHandler<R extends RPCName> = ServiceImplementation[R]

// eslint-disable-next-line no-restricted-syntax
export enum CLIENT_TYPE {
	WEB = 'web',
	MOBILE = 'app',
}