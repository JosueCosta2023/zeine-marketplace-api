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