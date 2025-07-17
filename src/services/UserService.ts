import {
  createUser,
  deleteUser,
  findAllUser,
  updateUser,
} from "../repositories/UserRepository";
import bcrypt from "bcryptjs";
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
    return deleteUser(id)
}
