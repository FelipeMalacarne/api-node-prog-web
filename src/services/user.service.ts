import { IUser } from "../models/user";
import User from "../models/user";
import { validateCPF, validateEmail } from "../utils/validation";

class UserService {
    async createUser(userData: IUser): Promise<IUser> {
        if (!validateEmail(userData.email)) {
            throw new Error('Email inválido');
        }

        if (!validateCPF(userData.cpf)) {
            throw new Error('CPF inválido');
        }

        const user = new User(userData);
        return user.save();
    }

    async getAllUsers(): Promise<IUser[]> {
        return await User.find();
    }

    async getUserById(id: string): Promise<IUser | null> {
        return await User.findById(id);
    }

    async updateUser(id: string, userData: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(id, userData, { new: true });
    }

    async deleteUser(id: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserService();
