import BaseEntityModel from "./abstrations/baseEntityModel";
import UserRoleEntity from "./user-role.entity";
declare class RoleEntity extends BaseEntityModel {
    name: string;
    userRoles: UserRoleEntity[];
}
export default RoleEntity;
