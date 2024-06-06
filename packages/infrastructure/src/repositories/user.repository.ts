import { IUserRepository, UserDTO } from "@project-app/domain";
import DatabaseBootstrap from "../../../../src/bootstrap/database.bootstrap";
import UserEntity from "../entities/user.entity";
import { injectable } from "tsyringe";

@injectable()
class UserRepository implements IUserRepository {
    async getAll(): Promise<UserDTO[]> {

        console.log("CCCCCCCCCCC");
        const repository = DatabaseBootstrap.dataSource.getRepository(UserEntity);
        const users: UserEntity[] = await repository.find({
            where: { active: true }
        });
        return users.map(user => (new UserDTO(user.id, user.name, user.email)));
    }
}
export default UserRepository