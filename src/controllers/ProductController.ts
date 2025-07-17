import { ProductStatus } from "../generated/prisma";
import { editProduct, listProductByCategoryOrStatus, listProductById, listProducts, registerProduct, removeProduct } from "../services/ProductService"
import { Request, Response } from "express"

export const list = async (req: Request, res: Response) => {
    try {
        const products = await listProducts();
        res.status(200).json({products})
        
    } catch (error) {
        console.error(`Error ao listar os produtos: ${error}`)
        res.status(500).json({error: "Erro de servidor ao listar os produtos"})
    }
}

export const listById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const result = await listProductById(id);
        if(!result){
            return res.status(404).json({error: "Produto não encontrado"})
        }
        res.status(200).json({result})
        
    } catch (error) {
        console.error(`Erro ao listar produtos por id: ${error}`);
        res.status(500).json({error: "Erro de servidor ao listar produto por id"})
    }
}


export const listByCategoryOrStatus = async (req: Request, res: Response) => {
    try {
        const {categoryId, status} = req.query;
        const result = await listProductByCategoryOrStatus(categoryId as string, status as ProductStatus)

        if(!result || result.length === 0){
            return res.status(404).json({error: "Produto não encontrado para o filtro escolhido."})
        }
        res.status(200).json({result})

    } catch (error) {
        console.error(`Erro ao listar produtos por categoria ou status: ${error}`);
        res.status(500).json({error: "Erro de servidor ao listar produtos por categoria ou status"})
    }
}

export const create =async (req: Request, res: Response) => {
    try {
        const product = await registerProduct(req.body);

        if(!product){
            return res.status(400).json({error: "Falha ao cadastrar produto:"})
        }

        res.status(201).json({messagem: `Produto ${product.title} cadastrado com sucesso`})
        
    } catch (error) {
        console.error(`Erro ao cadastrar produto: ${error}`)
        res.status(500).json({error: "Erro de servidor ao cadastrar produto"})
    }
}


export const update =async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const result = await editProduct(id, req.body)
        if(!result){
            return res.status(400).json({error: "Falha ao atualizar cadastro de produto"})
        }

        res.status(200).json({messagem: "Produto atualizado com suceso"})
        
    } catch (error) {
        console.error(`Erro ao atualizar produto: ${error}`)
        res.status(500).json({error: "Erro de servidor ao atualizar produto"})
    }
}


export const remove = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const result = await removeProduct(id);
        if(!result){
           return res.status(404).json({error: "Falha ao excluir produto."})
        }

        res.status(200).json({message: "Produto excluido com sucesso"})
        
    } catch (error) {
        console.error(`Erro ao excluir produto: ${error}`)
        res.status(500).json({error: "Erro de servidor ao excluir produto"})
    }
}