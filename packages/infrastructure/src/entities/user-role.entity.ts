import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import UserEntity from "./user.entity";
import RoleEntity from "./role.entity";
import BaseEntityModel from "./abstrations/baseEntityModel";


@Entity({ name: "user_roles" })
class UserRoleEntity extends BaseEntityModel {

    @Column({ type: "uuid" })
    idUser: string;

    @Column({ type: "uuid" })
    idRol: string;

    @ManyToOne(() => UserEntity, user => user.userRoles)
    @JoinColumn({ name: "idUser", referencedColumnName: "id", foreignKeyConstraintName: "FK_UserRole_User" })
    user: UserEntity;

    @ManyToOne(() => RoleEntity, role => role.userRoles)
    @JoinColumn({ name: "idRol", referencedColumnName: "id", foreignKeyConstraintName: "FK_UserRole_Role" })
    role: RoleEntity;
}
export default UserRoleEntity;
