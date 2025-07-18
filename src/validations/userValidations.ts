import { z} from "zod";

export const userCreateValidation = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    phone: z.string().optional(),
    photo: z.string().url().optional()
})
export const userUpdateValidation = z.object({
    name: z.string().min(2).optional(),
    email: z.string().email().optional(),
    password: z.string().min(8).optional(),
    phone: z.string().optional(),
    photo: z.string().url().optional()
})