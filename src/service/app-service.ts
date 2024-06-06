import yenv from "yenv";
import IDbConfig from "./db-config.interface";

class AppService {

    private readonly env = yenv();

    public get PORT(): number {
        return this.env.PORT;
    }

    public get dbConfig(): IDbConfig {
        return {
            host: this.env.DB_HOST,
            port: this.env.DB_PORT,
            entities: this.env.DB_ENTITIES.split(","),
            username: this.env.DB_USERNAME,
            password: "" + this.env.DB_PASSWORD,
            database: this.env.DB_DATABASE_NAME,
            synchronize: this.env.DB_SYNCHRONIZE,
            logging: this.env.DB_LOGGING
        }
    }
}

export default AppService;