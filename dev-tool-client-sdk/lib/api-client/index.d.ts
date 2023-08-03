import { SessionServiceClient } from '../generated/channel';
declare function makeGrpcClient(accessToken: string, clientType: string): Promise<SessionServiceClient<{}>>;
export { makeGrpcClient };
