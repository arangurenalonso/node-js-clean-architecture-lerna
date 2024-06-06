import { IUserRepository } from "@project-app/domain";
import { inject, injectable } from "tsyringe";


@injectable()
class UserGetAllCommandHandler {

    constructor(@inject("IUserRepository") private userRepository: IUserRepository) {
    }

    async execute() {

        console.log("BBBBBBBBBBBBBBB");
        const users = await this.userRepository.getAll();
        console.log(users);
        return users;
    }
}

export default UserGetAllCommandHandler;