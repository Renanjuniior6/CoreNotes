import { Router } from "express"

import { TasksController } from "../controllers/tasks.controller"
import {
  createTaskSchema,
  deleteTaskSchema,
  updateTaskSchema,
} from "../dtos/tasks.dto"
import { TasksFactory } from "../factories/task.factory"
import { validator } from "../middlewares/validator.middleware"

export const tasksRoutes = Router()

const controller = new TasksController(TasksFactory.getServiceInstance())

tasksRoutes.get("/", controller.index)

tasksRoutes.post(
  "/",
  validator({
    schema: createTaskSchema,
  }),
  controller.create,
)

tasksRoutes.put(
  "/",
  validator({
    schema: updateTaskSchema,
  }),
  controller.update,
)

tasksRoutes.delete(
  "/",
  validator({
    schema: deleteTaskSchema,
  }),
  controller.delete,
)
