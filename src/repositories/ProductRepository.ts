import { PrismaClient, ProductStatus } from "../generated/prisma"

const prisma = new PrismaClient()

export const findAllProduct = async () => {
    return prisma.product.findMany();
}

export const findProductById = async (id: string) => {
    return prisma.product.findUnique({where: {id}})
}

export const findProductByCategoryOrStatus = (query: {
    categoryId?: string;
    status?: ProductStatus;
}) => {
    const {categoryId, status} = query;

    return prisma.product.findMany({
        where: {
            ...(categoryId && {categoryId}),
            ...(status && {status})
        }
    })
}

export const createProduct = async (data: {
    title: string;
    price: number;
    description: string;
    status: ProductStatus;
    userId: string;
    categoryId: string;

}) =>{
    return prisma.product.create({data})
}

export const updateProduct = async (id: string, data: {
    title?: string;
    price?: number;
    description?: string;
    status?: ProductStatus;
    categoryId?: string;
}) => {
    return prisma.product.update({where: {id}, data})
}

export const deleteProduct = (id: string) => {
    return prisma.product.delete({where: {id}})
}