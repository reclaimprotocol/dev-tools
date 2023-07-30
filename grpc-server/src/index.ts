import { makeGrpcServer } from './server/make-grpc-server'

async function main() {
	const srv = await makeGrpcServer()

	process.on('SIGINT', async() => {
		await srv.close()
	})
}

main()