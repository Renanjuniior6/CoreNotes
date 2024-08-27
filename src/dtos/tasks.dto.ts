import { z } from 'zod'

export const createTaskSchema = {
    title: z.string(),
    color: z.string().regex(/^#[A-Fa-f0-9]{6}$/),
    text: z.string(),
    favorite: z.boolean()
}

export const updateTaskSchema = {
    _id: z.string(),
    title: z.string().optional(),
    color: z.string().regex(/^#[A-Fa-f0-9]{6}$/).optional(),
    text: z.string().optional(),
    favorite: z.boolean().optional()
}

export const deleteTaskSchema = {
    _id: z.string(),
}



const createTaskObject = z.object(createTaskSchema)

export type CreateTaskDTO = z.infer<typeof createTaskObject>


const updateTaskObject = z.object(updateTaskSchema)

export type UpdateTaskDTO = z.infer<typeof updateTaskObject>


const deleteTaskObject = z.object(deleteTaskSchema)

export type DeleteTaskDTO = z.infer<typeof deleteTaskObject>