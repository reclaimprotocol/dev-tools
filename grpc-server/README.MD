# GRPC SERVER
## Description
This is a server that helps in establishing communication channel between the web and client app for developing http providers

## Run it locally
1. Clone the repo
2. If not inside folder **grpc-server**, run `cd grpc-server`
3. Run `npm install`
4. Run `npm run compile:proto`
5. Run `npm run start:tsc`

It starts the server on port 9090

Default port is defined in [**src/config/index.ts**](src/config/index.ts)