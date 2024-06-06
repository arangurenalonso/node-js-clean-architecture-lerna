
import { DataSource } from 'typeorm'
import UserEntity from '@project-app/infrastructure/src/entities/user.entity';
import RoleEntity from '@project-app/infrastructure/src/entities/role.entity';
import UserRoleEntity from '@project-app/infrastructure/src/entities/user-role.entity';
import IBootstrap from './bootstrap.interface';
import AppService from '../service/app-service';

class DatabaseBootstrap implements IBootstrap {

    private static appDataSource: DataSource

    constructor(private readonly appService: AppService) {
    }
    initialize(): Promise<any> {

        const AppDataSource = new DataSource({
            type: "mysql",
            host: this.appService.dbConfig.host,
            port: this.appService.dbConfig.port,
            username: this.appService.dbConfig.username,
            password: this.appService.dbConfig.password,
            database: this.appService.dbConfig.database,
            entities: [UserEntity, RoleEntity, UserRoleEntity],
            synchronize: this.appService.dbConfig.synchronize,
            logging: this.appService.dbConfig.logging,
            migrations: [],
            subscribers: [],
        })
        DatabaseBootstrap.appDataSource = AppDataSource;
        return AppDataSource.initialize()
    }
    close(): void {
        DatabaseBootstrap.appDataSource?.destroy()
    }
    static get dataSource(): DataSource {
        if (!DatabaseBootstrap.appDataSource) {
            throw new Error("Database not initialized")
        }
        return DatabaseBootstrap.appDataSource
    }
}
export default DatabaseBootstrap