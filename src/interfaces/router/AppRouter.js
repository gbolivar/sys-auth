import { AppController } from '../controllers/index.js';
import { CreateTokenHandler } from '../middlewares/index.js';


export const AppRouter = (router) => {
    router.get("/apps", AppController.getAll);
    router.post("/app", CreateTokenHandler, AppController.createApp);
    router.get("/app/:id", AppController.showApp);
}