
import { IUserRepository } from "@project-app/domain";
import { container } from "tsyringe";
import { UserController, UserRouter } from "@project-app/rest";
import { UserGetAllCommandHandler } from "@project-app/application";
import UserRepository from '@project-app/infrastructure/src/repositories/user.repository';


export class DependencyContainer {
    private static instance: DependencyContainer;

    private constructor() {
        this.configureContainer();
    }

    public static getInstance(): DependencyContainer {
        console.log("DependencyContainer.getInstance");
        if (!DependencyContainer.instance) {
            DependencyContainer.instance = new DependencyContainer();
        }
        return DependencyContainer.instance;
    }

    private configureContainer(): void {
        console.log("DependencyContainer.configureContainer");
        container.registerSingleton<IUserRepository>("IUserRepository", UserRepository);
        container.registerSingleton<UserController>(UserController);
        container.registerSingleton<UserGetAllCommandHandler>(UserGetAllCommandHandler);
        container.registerSingleton<UserRouter>(UserRouter);
    }

    public getContainer() {
        return container;
    }
}
