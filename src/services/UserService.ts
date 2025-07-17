import { createUser, findAllUser } from "../repositories/UserRepository"
import bcrypt from "bcryptjs"
export const listUsers = async () => {
    return findAllUser()
}

export const registerUser = async (data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
    photo?: string;
}) => {
    const hashedPassword = await bcrypt.hash(data.password, 10)
    return createUser({...data, password: hashedPassword})
}