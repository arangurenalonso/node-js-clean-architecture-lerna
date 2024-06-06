import { IUserRepository } from "@project-app/domain";
declare class UserGetAllCommandHandler {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(): Promise<import("@project-app/domain").UserDTO[]>;
}
export default UserGetAllCommandHandler;
