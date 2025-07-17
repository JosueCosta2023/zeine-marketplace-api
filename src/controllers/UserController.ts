import { editUser, listUsers, loginUser, registerUser, removeUser } from "../services/UserService";
import { Request, Response } from "express";


export const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const result = await loginUser(email, password);
        res.status(200).json({message: "Login realizado com sucesso",result})
        
    } catch (error) {
        console.error(`Erro ao efetuar o login: ${error}`)
        res.status(500).json({error: "Erro de servidor ao efetuar o login"})
    }
}


export const list = async (req: Request, res: Response) => {
    try {
        const users = await listUsers()
        res.status(200).json(users)
        
    } catch (error) {
        console.error(`Erro ao listar usuarios: ${error}`)
        res.status(500).json({error: "Erro de servidor ao listar usuarios"})
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const user = await registerUser(req.body)
        res.status(201).json({message: "Usuario cadastrado com sucesso", user: user.id})
    } catch (error) {
        console.error(`Erro ao cadastrar usuario: ${error}`)
        res.status(500).json({error: "Erro de servidor ao cadastrar usuario."})
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        await editUser(id, req.body)
        res.status(200).json({message: "Usuario atualizado com sucesso"})
        
    } catch (error) {
        console.error(`Erro ao atualizar usuario: ${error}`)
        res.status(500).json({error: "Erro de servidor ao atualizar usuario"})
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        await removeUser(id)
        res.status(200).json({message: "Usuario excluido com sucesso"})
        
    } catch (error) {
        console.error(`Erro ao excluir usuario: ${error}`)
        res.status(500).json({error: "Erro de servidor ao excluir usuario"})
    }
}