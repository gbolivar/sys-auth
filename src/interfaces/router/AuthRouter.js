import { AuthController } from '../controllers/index.js';


export const AuthRouter = (router) => {
    router.post("/check", AuthController.postAuth);
}