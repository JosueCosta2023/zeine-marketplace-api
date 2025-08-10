import { ProductStatus } from "../generated/prisma";
import { createProduct, deleteProduct, findAllProduct, findProductByCategoryOrStatus, findProductById, updateProduct } from "../repositories/ProductRepository"

export const listProducts = async () => {
    return findAllProduct();
}

export const listProductById = async (id: string) => {
    return findProductById(id);
}

export const listProductByCategoryOrStatus = (categoryId?: string, status?: ProductStatus) => {
    return findProductByCategoryOrStatus({categoryId, status})
}

export const registerProduct = async (data:{
    title: string;
    price: number;
    description: string;
    photo?: string;
    status?: ProductStatus;
    userId: string;
    categoryId: string;
}) => {
    return createProduct({...data})
}

export const editProduct = async (id: string, data: {
    title?: string;
    price?: number;
    description?: string;
    photo?: string;
    status?: ProductStatus;
    categoryId?: string;
}) => {
    return updateProduct(id, data)
}

export const removeProduct = (id: string) => {
    return deleteProduct(id);
}