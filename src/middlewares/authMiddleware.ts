import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export const generateToken = (payload: object) => {
    return jwt.sign(payload, process.env.JWT_SECRET as string, {expiresIn: "1d"})
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({error: "Token não fornecido"})
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (error, user) => {
        if(error){
            return res.status(403).json({error: "Token inválido"});
        }

        req.user = user;
        next()
    })
}