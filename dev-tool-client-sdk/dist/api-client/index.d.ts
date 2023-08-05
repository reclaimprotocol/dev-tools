import { ClientType, SessionServiceClient } from '../generated/channel';
declare function makeGrpcClient(accessToken: string, clientType: ClientType): Promise<SessionServiceClient<{}>>;
export { makeGrpcClient };
