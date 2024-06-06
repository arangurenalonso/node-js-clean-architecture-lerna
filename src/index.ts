import "reflect-metadata"
import App from "./App"
import ServerBootstrap from "./bootstrap/server.bootstrap"
import AppService from "./service/app-service";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";

const start = async () => {
    console.log("Iniciando Aplicación");

    const app = new App().app
    const appService = new AppService()
    const server = new ServerBootstrap(app, appService)
    const database = new DatabaseBootstrap(appService)
    try {

        const listPromises = [database.initialize(), server.initialize()]
        await Promise.all(listPromises)
        console.log("Inicialización Correcta");

    } catch (error) {
        console.log("Errores :> " + error);
        server.close()
        database.close()
    }
}

start();

