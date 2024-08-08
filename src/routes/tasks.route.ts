import { Router } from "express";
import { TasksControler } from "../controllers/tasks.controller";

export const tasksRoutes = Router()

const controller = new TasksControler()

tasksRoutes.post('/', controller.create)