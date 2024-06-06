import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserGetAllCommandHandler } from "@project-app/application";

@injectable()
class UserController {
    constructor(
        @inject(UserGetAllCommandHandler) private getAllHandler: UserGetAllCommandHandler

    ) {
        this.getAll = this.getAll.bind(this)
    }
    async getAll(request: Request, response: Response) {
        console.log("AAAAAAAAAAAAAAA");

        const users = await this.getAllHandler.execute();
        console.log(users);
        response.json(users);
    }
}

export default UserController;