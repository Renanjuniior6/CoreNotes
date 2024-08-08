import { TasksRepository } from "../database/repositories/tasks.repository";
import { TaskModel } from "../database/schemas/task.schema";
import { TasksService } from "../services/tasks.service";

export class TasksFactory {
    private static tasksService: TasksService

    static getServiceInstance() {
        if(this.tasksService) {
            return this.tasksService
        }

        const repository = new TasksRepository(TaskModel)

        const service = new TasksService(repository)

        this.tasksService = service

        return service
    }
}