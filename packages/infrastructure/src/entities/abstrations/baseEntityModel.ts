import { Column, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"


abstract class BaseEntityModel {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuidv4();

    @Column({ type: "boolean", default: true })
    active: boolean = true

    @Column({ type: "timestamp", name: "created_at", nullable: false })
    createdAt: Date = new Date();

    @Column({ type: "timestamp", name: "updated_at", nullable: true })
    updatedAt: Date;

    @Column({ type: "timestamp", name: "deleted_at", nullable: true })
    deletedAt: Date;
}
export default BaseEntityModel 