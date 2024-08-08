import { NextFunction, Request, Response } from "express";
import { TasksService } from "../services/tasks.service";
import { TasksRepository } from "../database/repositories/tasks.repository";
import { TaskModel } from "../database/schemas/task.schema";
import { CreateTaskDTO } from "../dtos/tasks.dto";
import { StatusCodes } from 'http-status-codes'

export class TasksController {
    async create (req: Request<unknown, unknown, CreateTaskDTO>, res: Response, next: NextFunction) {

        try {
            const {title, color} = req.body

            const repository = new TasksRepository(TaskModel)
    
            const service = new TasksService(repository)
    
            const result = await service.create({title, color})
    
            return res.status(StatusCodes.CREATED).json(result)

        } catch (err) {
            next(err)
        }

    }
}