import { DataSource } from 'typeorm';
import IBootstrap from './bootstrap.interface';
import AppService from '../service/app-service';
declare class DatabaseBootstrap implements IBootstrap {
    private readonly appService;
    private static appDataSource;
    constructor(appService: AppService);
    initialize(): Promise<any>;
    close(): void;
    static get dataSource(): DataSource;
}
export default DatabaseBootstrap;
