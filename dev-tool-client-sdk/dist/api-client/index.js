"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGrpcClient = void 0;
const nice_grpc_web_1 = require("nice-grpc-web");
const config_1 = require("../config");
const channel_1 = require("../generated/channel");
const common_grpc_web_transport_1 = require("@questbook/common-grpc-web-transport");
function makeGrpcClient(accessToken, clientType) {
    return __awaiter(this, void 0, void 0, function* () {
        // grpc-web channel
        let channel;
        const transport = (0, common_grpc_web_transport_1.CommonTransport)({});
        channel = (0, nice_grpc_web_1.createChannel)(config_1.BACKEND_URL, transport);
        // metadata for auth token
        const metadata = new nice_grpc_web_1.Metadata();
        metadata.set('Authorization', accessToken);
        metadata.set('client-type', clientType);
        // actual client to communicate with backend
        const client = (0, nice_grpc_web_1.createClient)(channel_1.SessionServiceDefinition, channel, { '*': { metadata } });
        return client;
    });
}
exports.makeGrpcClient = makeGrpcClient;
// function FetchTransport(): import('nice-grpc-web/lib/client/Transport').Transport | undefined {
// 	throw new Error('Function not implemented.')
// }
