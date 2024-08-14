import { Task } from "../../entities/tasks.entity";
import { TaskModel } from "../schemas/task.schema";
import { DeleteTaskDTO } from "../../dtos/tasks.dto";

export class TasksRepository {
    constructor( private model: typeof TaskModel ) {}

    async create({title, color, favorite, text}: Task): Promise<Task> {
        const createdTask = await this.model.create({title, color, favorite, text})

        return createdTask.toObject<Task>()
    }

    async index(): Promise<Task[]> {
        const tasks = await this.model.find()

        const tasksMap = tasks.map(item => item.toObject<Task>())

        return tasksMap
    }

    async update({title, color, favorite, text, _id}: Task): Promise<void> {

        await this.model.updateOne({_id: _id}, {title, color, favorite, text})

        return
    }

    async delete({_id}: DeleteTaskDTO): Promise<void> {

        await this.model.deleteOne({_id: _id})

        return
    }
}