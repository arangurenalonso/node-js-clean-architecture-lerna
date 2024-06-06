import { IUserRepository, UserDTO } from "@project-app/domain";
declare class UserRepository implements IUserRepository {
    getAll(): Promise<UserDTO[]>;
}
export default UserRepository;
