"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yenv_1 = __importDefault(require("yenv"));
class AppService {
    constructor() {
        this.env = (0, yenv_1.default)();
    }
    get PORT() {
        return this.env.PORT;
    }
    get dbConfig() {
        return {
            host: this.env.DB_HOST,
            port: this.env.DB_PORT,
            entities: this.env.DB_ENTITIES.split(","),
            username: this.env.DB_USERNAME,
            password: "" + this.env.DB_PASSWORD,
            database: this.env.DB_DATABASE_NAME,
            synchronize: this.env.DB_SYNCHRONIZE,
            logging: this.env.DB_LOGGING
        };
    }
}
exports.default = AppService;
//# sourceMappingURL=app-service.js.map