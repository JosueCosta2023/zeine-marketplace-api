import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

export const findAllCategory = async () => {
    return prisma.category.findMany();
}


export const createCatgory = async (data: {
    name: string;
}) => {
    return prisma.category.create({data})
}

export const updateCategory = (id: string, data: {
    name?: string
}) => {
    return prisma.category.update({
        where: {id},
        data
    })
}

export const deleteCategory = async (id: string) => {
    return prisma.category.delete({
        where: {id}
    })
}