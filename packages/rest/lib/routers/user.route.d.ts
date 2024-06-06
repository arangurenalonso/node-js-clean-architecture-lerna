import { Router } from "express";
import UserController from "../controllers/user.controller";
declare class UserRouter {
    private controller;
    router: Router;
    constructor(controller: UserController);
    private initRoutes;
}
export default UserRouter;
