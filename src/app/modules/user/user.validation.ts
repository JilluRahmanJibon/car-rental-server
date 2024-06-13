import z from 'zod'

const createUserValidation = z.object({
    body: z.object({
        name:z.string()
    })
})