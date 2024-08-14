import { NextFunction, Request, Response } from "express";
import { TasksService } from "../services/tasks.service";
import { CreateTaskDTO, DeleteTaskDTO, UpdateTaskDTO } from "../dtos/tasks.dto";
import { StatusCodes } from 'http-status-codes'

export class TasksController {
    constructor(private tasksService: TasksService){}

    create = async (req: Request<unknown, unknown, CreateTaskDTO>, res: Response, next: NextFunction) => {

        try {
            const {title, color, favorite, text} = req.body
    
            const result = await this.tasksService.create({title, color, favorite, text})
    
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

    update = async (req: Request<unknown, unknown, UpdateTaskDTO>, res: Response, next: NextFunction) => {

        try {
            const {_id, title, color, favorite, text} = req.body
    
            await this.tasksService.update({_id, title, color, favorite, text})
    
            return res.status(StatusCodes.OK).json({ message: "Updated succesfully!"})

        } catch (err) {
            next(err)
        }

    }

    delete = async (req: Request<unknown, unknown, DeleteTaskDTO>, res: Response, next: NextFunction) => {

        try {
            const { _id } = req.body
    
            await this.tasksService.delete({_id})
    
            return res.status(StatusCodes.OK).json({ message: "Deleted succesfully!"})

        } catch (err) {
            next(err)
        }

    }
}