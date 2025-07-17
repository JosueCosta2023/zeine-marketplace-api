import { editCategory, listCategorys, registerCategory, removeCategory } from "../services/CategoryService"
import { Request, Response } from "express"


export const list = async (req: Request, res: Response) => {
    try {
        const categorys = await listCategorys()
        res.status(200).json(categorys)

    } catch (error) {
        console.error(`Erro ao listar categorias: ${error}`)
        res.status(500).json({eror: "Erro de servidor ao listar categorias"})
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const category = await registerCategory(req.body);
        res.status(201).json({message: "Categoria cadastrada com sucesso", category: category.id})
        
    } catch (error) {
        console.error(`Erro ao cadastrar categoria: ${error}`)
        res.status(500).json({error: "Erro de servidor ao cadastrar categoria"})
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        await editCategory(id, req.body)
        res.status(200).json({message: "Categoria atualizada com sucesso"})
        
    } catch (error) {
        console.error(`Erro ao atualizar categoria: ${error}`)
        res.status(500).json({error: "Erro de servidor ao atualizar categoria"})
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        await removeCategory(id);
        res.status(200).json({message: "Categoria excluida com sucesso"})
        
    } catch (error) {
        console.error(`Erro ao excluir categoria: ${error}`);
        res.status(500).json({error: "Erro de servidor ao excluir categoria"})
    }
}