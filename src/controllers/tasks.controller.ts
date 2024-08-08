import { NextFunction, Request, Response } from "express";
import { TasksService } from "../services/tasks.service";
import { CreateTaskDTO } from "../dtos/tasks.dto";
import { StatusCodes } from 'http-status-codes'

export class TasksController {
    constructor(private tasksService: TasksService){}

    create = async (req: Request<unknown, unknown, CreateTaskDTO>, res: Response, next: NextFunction) => {

        try {
            const {title, color} = req.body
    
            const result = await this.tasksService.create({title, color})
    
            return res.status(StatusCodes.CREATED).json(result)

        } catch (err) {
            next(err)
        }

    }

    index = async  (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const result = await this.tasksService.index()
    
            return res.status(StatusCodes.OK).json(result)

        } catch (err) {
            next(err)
        }

    }
}