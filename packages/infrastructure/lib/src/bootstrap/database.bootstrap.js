"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = __importDefault(require("@project-app/infrastructure/src/entities/user.entity"));
const role_entity_1 = __importDefault(require("@project-app/infrastructure/src/entities/role.entity"));
const user_role_entity_1 = __importDefault(require("@project-app/infrastructure/src/entities/user-role.entity"));
class DatabaseBootstrap {
    constructor(appService) {
        this.appService = appService;
    }
    initialize() {
        const AppDataSource = new typeorm_1.DataSource({
            type: "mysql",
            host: this.appService.dbConfig.host,
            port: this.appService.dbConfig.port,
            username: this.appService.dbConfig.username,
            password: this.appService.dbConfig.password,
            database: this.appService.dbConfig.database,
            entities: [user_entity_1.default, role_entity_1.default, user_role_entity_1.default],
            synchronize: this.appService.dbConfig.synchronize,
            logging: this.appService.dbConfig.logging,
            migrations: [],
            subscribers: [],
        });
        DatabaseBootstrap.appDataSource = AppDataSource;
        return AppDataSource.initialize();
    }
    close() {
        var _a;
        (_a = DatabaseBootstrap.appDataSource) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    static get dataSource() {
        if (!DatabaseBootstrap.appDataSource) {
            throw new Error("Database not initialized");
        }
        return DatabaseBootstrap.appDataSource;
    }
}
exports.default = DatabaseBootstrap;
//# sourceMappingURL=database.bootstrap.js.map