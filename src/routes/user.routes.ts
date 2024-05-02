import { Router } from "express";
import UserController from "../controllers/user.controller";

class UserRoutes {

    public router: Router;

    private controller: UserController;

    constructor() {
        this.router = Router();
        this.controller = new UserController();
        this.routes();
    }

    routes() {
        this.router.post('/', this.controller.createUser);
        this.router.get('/', this.controller.getAllUsers);
        this.router.get('/:id', this.controller.getUserById);
        this.router.put('/:id', this.controller.updateUser);
        this.router.delete('/:id', this.controller.deleteUser);
    }
}

export default new UserRoutes().router;
