import { Router } from "express";
import { inject, injectable } from "tsyringe";
import UserController from "../controllers/user.controller";

@injectable()
class UserRouter {
    router: Router;

    constructor(@inject(UserController) private controller: UserController) {
        this.router = Router()
        this.initRoutes()
    }
    private initRoutes() {
        this.router.get("/", this.controller.getAll)
    }
}
export default UserRouter

