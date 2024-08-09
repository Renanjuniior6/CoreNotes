import { TasksRepository } from "../database/repositories/tasks.repository";
import { CreateTaskDTO } from "../dtos/tasks.dto";
import { Task } from "../entities/tasks.entity";

export class TasksService {
    constructor(private tasksRepository: TasksRepository){}

 async create ({title, color, text, favorite}: CreateTaskDTO): Promise<Task> {
    
    const task = new Task({
        title,
        color,
        text,
        favorite,
    })

    const createdTask = await this.tasksRepository.create(task)

    return createdTask
 }

 async index (): Promise<Task[]> {
    const tasks = await this.tasksRepository.index()

    return tasks
 }
}