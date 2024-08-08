import { Router } from "express";
import { TasksController } from "../controllers/tasks.controller";
import { validator } from "../middlewares/validator.middleware";
import { createTaskSchema } from "../dtos/tasks.dto";

export const tasksRoutes = Router()

const controller = new TasksController()

tasksRoutes.post('/', validator({
    schema: createTaskSchema
}), controller.create)