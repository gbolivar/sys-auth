import { UserController } from '../controllers/index.js';
import { CreateTokenHandler } from '../middlewares/index.js';

export const UsersRouter = (router) => {
    router.get("/users", UserController.getAll);
    router.post("/user", CreateTokenHandler, UserController.createUser);
    router.get("/user/:name", UserController.showUser);
}