import BaseEntityModel from "./abstrations/baseEntityModel";
import UserRoleEntity from "./user-role.entity";
declare class UserEntity extends BaseEntityModel {
    name: string;
    lastname: string;
    email: string;
    password: string;
    birthdate: Date;
    refreshTokens: string;
    userRoles: UserRoleEntity[];
}
export default UserEntity;
