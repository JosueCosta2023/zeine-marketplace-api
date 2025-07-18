import { generateToken } from "../middlewares/authMiddleware";
import {
  createUser,
  deleteUser,
  findAllUser,
  findUserByEmail,
  updateUser,
} from "../repositories/UserRepository";
import bcrypt from "bcryptjs";

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if(!user) throw new Error("Usuario nao encontrado");

  const valid = await bcrypt.compare(password, user.password);
  if(!valid) throw new Error("Senha invalida")

  const token = generateToken({id: user.id, email: user.email})

  const {password: _, ...userData} = user;
  return {user: userData, token}
}

export const listUsers = async () => {
  return findAllUser();
};

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  phone?: string;
  photo?: string;
}) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return createUser({ ...data, password: hashedPassword });
};

export const editUser = async (
  id: string,
  data: {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    photo?: string;
  }
) => {
  // Recreiado pq neste caso a senha nao e obrigatoria
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  return updateUser(id, data);
};

export const removeUser = async (id: string) => {
  return deleteUser(id);
};
