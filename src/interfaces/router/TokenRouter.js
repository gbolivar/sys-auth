import { TokenController } from '../controllers/index.js';
import { CreateTokenHandler } from '../middlewares/index.js';
export const TokenRouter = (router) => {
    router.get("/tokens",  TokenController.getAll);
    router.post("/token", CreateTokenHandler, TokenController.createToken);
    router.post("/token/check",  TokenController.showToken);
}