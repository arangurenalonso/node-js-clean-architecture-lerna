import { Router } from "express";
import { injectable } from "tsyringe";
import { DependencyContainer } from "./dependency.container";
import { UserRouter } from "@project-app/rest";

@injectable()
class RouterConfig {
    public router: Router;

    constructor() {
        this.router = Router();
        this.configureRoutes();
    }

    private configureRoutes(): void {
        const container = DependencyContainer.getInstance().getContainer();
        const userRouter = container.resolve(UserRouter);
        this.router.use("/users", userRouter.router);
    }
}

export default RouterConfig;