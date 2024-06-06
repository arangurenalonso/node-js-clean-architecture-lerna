import express from 'express';
import RouterConfig from './bootstrap/router.config';
class App {
    app: express.Application
    constructor() {
        this.app = express()
        this.middlewares()
        this.mountRoutes()
    }
    middlewares(): void {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }
    mountRoutes(): void {
        console.log("mountRoutes")
        const routerConfig = new RouterConfig();
        this.app.use("/api", routerConfig.router)
    }
}


export default App




