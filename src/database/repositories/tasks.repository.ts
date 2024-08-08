import { Task } from "../../entities/tasks.entity";
import { TaskModel } from "../schemas/task.schema";

export class TasksRepository {
    constructor( private model: typeof TaskModel ) {}

    async create({title, color}: Task): Promise<Task> {
        const createdTask = await this.model.create({title, color})

        return createdTask.toObject<Task>()
    }

    async index(): Promise<Task[]> {
        const tasks = await this.model.find()

        const tasksMap = tasks.map(item => item.toObject<Task>())

        return tasksMap
    }
}