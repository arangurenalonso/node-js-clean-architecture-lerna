import IDbConfig from "./db-config.interface";
declare class AppService {
    private readonly env;
    get PORT(): number;
    get dbConfig(): IDbConfig;
}
export default AppService;
