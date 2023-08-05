import type { Logger } from 'pino';
import { SessionServiceImplementation } from '../generated/channel';
export type ServiceImplementation = SessionServiceImplementation<ExtraMetadata>;
export type RPCName = keyof ServiceImplementation;
export declare enum CLIENT_TYPE {
    WEB = "web",
    MOBILE = "app"
}
export type ExtraMetadata = {
    token: string;
    logger: Logger;
    clientType: CLIENT_TYPE;
};
