"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGrpcClient = void 0;
const nice_grpc_web_1 = require("nice-grpc-web");
const config_1 = require("../config");
const channel_1 = require("../generated/channel");
async function makeGrpcClient(accessToken, clientType) {
    // grpc-web channel
    // both the witness & backend can be accessed from this URL
    const channel = (0, nice_grpc_web_1.createChannel)(config_1.BACKEND_URL);
    // metadata for auth token
    const metadata = new nice_grpc_web_1.Metadata();
    metadata.set('Authorization', accessToken);
    metadata.set('client-type', clientType);
    // actual client to communicate with backend
    const client = (0, nice_grpc_web_1.createClient)(channel_1.SessionServiceDefinition, channel, { '*': { metadata } });
    return client;
}
exports.makeGrpcClient = makeGrpcClient;
// function FetchTransport(): import('nice-grpc-web/lib/client/Transport').Transport | undefined {
// 	throw new Error('Function not implemented.')
// }
