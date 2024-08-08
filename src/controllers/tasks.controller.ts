import { Request, Response } from "express";
import { TasksService } from "../services/tasks.service";
import { TasksRepository } from "../database/repositories/tasks.repository";
import { TaskModel } from "../database/schemas/task.schema";
import { CreateTaskDTO } from "../dtos/tasks.dto";

export class TasksControler {
    async create (req: Request<unknown, unknown, CreateTaskDTO>, res: Response) {

        const {title, color} = req.body

        const repository = new TasksRepository(TaskModel)

        const service = new TasksService(repository)

        const result = await service.create({title, color})

        return res.status(201).json(result)
    }
}