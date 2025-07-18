import {z} from "zod";

export const productCreateValidation = z.object({
    title: z.string().min(4),
    price: z.number().min(0),
    description: z.string().min(6),
    status: z.string(),
    userId: z.string().optional(),
    categoryId: z.string().optional()
})
export const productUpdateValidation = z.object({
    title: z.string().min(4).optional(),
    price: z.number().min(0).optional(),
    description: z.string().min(6).optional(),
    status: z.string().optional(),
    categoryId: z.string().optional()
})