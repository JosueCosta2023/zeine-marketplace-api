import { listUsers, registerUser } from "../services/UserService";
import { Request, Response } from "express";

export const list = async (req: Request, res: Response) => {
    try {
        const users = await listUsers()
        res.status(200).json(users)
        
    } catch (error) {
        console.error(`Erro ao listar usuarios ${error}`)
        res.status(500).json({error: "Erro de servidor ao listar usuarios"})
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const user = await registerUser(req.body)
        res.status(201).json({message: "Usuario cadastrado consucesso", user: user})
    } catch (error) {
        console.error(`Erro ao cadastrar usuario: ${error}`)
        res.status(500).json({error: "Erro de servidor ao cadastrar usuario."})
    }
}