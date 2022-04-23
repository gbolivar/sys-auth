import { TokenHasAutorizationController } from '../controllers/index.js';
import { TokenBearerHandler } from '../middlewares/index.js';


export const TokenHasAutorizationRouter = (router) => {
    router.get("/tokenHasAutorizations", TokenBearerHandler, TokenHasAutorizationController.getAll);
    router.post("/tokenHasAutorization", TokenHasAutorizationController.createTokenHasAutorization);
    router.get("/tokenHasAutorization/:id", TokenHasAutorizationController.showTokenHasAutorization);
}