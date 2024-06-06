import { Request, Response } from "express";
import { UserGetAllCommandHandler } from "@project-app/application";
declare class UserController {
    private getAllHandler;
    constructor(getAllHandler: UserGetAllCommandHandler);
    getAll(request: Request, response: Response): Promise<void>;
}
export default UserController;
