import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import BaseEntityModel from "./abstrations/baseEntityModel";
import UserRoleEntity from "./user-role.entity";


@Entity({ name: "user" })
class UserEntity extends BaseEntityModel {

    @Column({ type: "varchar", length: 100 })
    name: string;

    @Column({ type: "varchar", length: 100 })
    lastname: string;

    @Column({ type: "varchar", length: 100, unique: true })
    email: string;
    @Column({ type: "varchar", length: 250 })
    password: string;

    @Column({ type: "date", nullable: true })
    birthdate: Date;

    @Column({ type: "varchar", length: 250, nullable: true })
    refreshTokens: string;
    @OneToMany(() => UserRoleEntity, userRole => userRole.user)
    userRoles: UserRoleEntity[];
}
export default UserEntity;