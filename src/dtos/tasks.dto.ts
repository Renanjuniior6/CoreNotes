import { z } from 'zod'

export const createTaskSchema = {
    title: z.string(),
    color: z.string().regex(/^#[A-Fa-f0-9]{6}$/),
    text: z.string(),
    favorite: z.boolean()
}

const createTaskObject = z.object(createTaskSchema)

export type CreateTaskDTO = z.infer<typeof createTaskObject>