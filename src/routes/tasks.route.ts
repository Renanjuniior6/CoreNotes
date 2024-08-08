import { Router } from "express";
import { TasksController } from "../controllers/tasks.controller";

export const tasksRoutes = Router()

const controller = new TasksController()

tasksRoutes.post('/', controller.create)