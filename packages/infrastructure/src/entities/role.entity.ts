import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import BaseEntityModel from "./abstrations/baseEntityModel";
import UserRoleEntity from "./user-role.entity";
@Entity({ name: "role" })
class RoleEntity extends BaseEntityModel {
    @Column({ type: "varchar", length: 100 })
    name: string;

    @OneToMany(() => UserRoleEntity, userRole => userRole.role)
    userRoles: UserRoleEntity[];

}
export default RoleEntity;
