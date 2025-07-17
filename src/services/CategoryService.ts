import { createCatgory, deleteCategory, findAllCategory, updateCategory } from "../repositories/CategoryRepository"

export const listCategorys = async () => {
    return findAllCategory();
}


export const registerCategory = async (data: {
    name: string
}) => {
    return createCatgory(data)
}

export const editCategory = async (id: string, data: {
    name?: string
}) => {
    return updateCategory(id, data)
}

export const removeCategory = async (id: string)  => {
    return deleteCategory(id)
}   