import UserEntity from "./user.entity";
import RoleEntity from "./role.entity";
import BaseEntityModel from "./abstrations/baseEntityModel";
declare class UserRoleEntity extends BaseEntityModel {
    idUser: string;
    idRol: string;
    user: UserEntity;
    role: RoleEntity;
}
export default UserRoleEntity;
