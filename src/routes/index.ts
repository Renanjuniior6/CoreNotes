import { Router } from 'express'
import { baseRoutes } from '../routes/base.route'
import { tasksRoutes } from './tasks.route'

export const routes = Router()

routes.use('/', baseRoutes)
routes.use('/tasks', tasksRoutes)