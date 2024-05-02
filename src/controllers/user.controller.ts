import { Request, Response } from "express";
import UserService from "../services/user.service";

class UserController {

    private service: UserService

    constructor() {
        this.service = new UserService()
    }

    async createUser(req: Request, res: Response) {
        try {
            const user = await this.service.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllUsers(req: Request, res: Response) {
        const users = await this.service.getAllUsers();
        res.status(200).json(users);
    }

    async getUserById(req: Request, res: Response) {
        const user = await this.service.getUserById(req.params.id);
        res.status(200).json(user);
    }

    async updateUser(req: Request, res: Response) {
        const user = await this.service.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    }

    async deleteUser(req: Request, res: Response) {
        const user = await this.service.deleteUser(req.params.id);
        res.status(204).json(user);
    }
}

export default UserController;
