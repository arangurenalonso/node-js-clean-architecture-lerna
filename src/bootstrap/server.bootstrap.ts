
import { Application } from 'express'
import http from 'http'
import IBootstrap from './bootstrap.interface'
import AppService from '../service/app-service'

class ServerBootstrap implements IBootstrap {
    constructor(private readonly app: Application,
        private readonly appService: AppService
    ) {

    }
    initialize() {
        const promise = new Promise((resolve, reject) => {
            const server = http.createServer(this.app)
            const port = this.appService.PORT
            server
                .listen(port)
                .on("listening", () => {
                    const resolveResponse = `Server running on port ${port}`
                    console.log(resolveResponse);
                    resolve(resolveResponse)
                })
                .on("error", (error) => {
                    const rejectResponse = "Server error :> " + error
                    console.log(rejectResponse);
                    reject(rejectResponse)
                    process.exit(1)
                })

        })

        return promise
    }
    close(): void {
        process.exit(1)
    }
}
export default ServerBootstrap