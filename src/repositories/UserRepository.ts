import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

export const findAllUser = async () => {
    return prisma.user.findMany();
}

export const createUser = async (data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
    photo?: string
}) => {
    return prisma.user.create({data})
}

export const updateUser = async (id: string, data: {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    photo?: string
}) => {
    return prisma.user.update({
        where: {id},
        data
    })
}

export const deleteUser = async (id: string) => {
    return prisma.user.delete({
        where: {id}
    })
}