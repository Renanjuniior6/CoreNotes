import { TasksRepository } from "../database/repositories/tasks.repository";
import { CreateTaskDTO, DeleteTaskDTO, UpdateTaskDTO } from "../dtos/tasks.dto";
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

 
 async update ({_id, title, color, text, favorite}: UpdateTaskDTO): Promise<void> {
    
   const task = new Task({
       _id,
       title,
       color,
       text,
       favorite,
   })

    await this.tasksRepository.update(task)

    return
}

async delete ({_id}: DeleteTaskDTO): Promise<void> {

    await this.tasksRepository.delete({_id})

    return
}

}