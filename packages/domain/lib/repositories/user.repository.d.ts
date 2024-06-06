import UserDTO from "../viewmodel/UserDTO";
interface IUserRepository {
    getAll(): Promise<UserDTO[]>;
}
export default IUserRepository;
