import { MethodoController } from '../controllers/index.js';
export const MethodoRouter = (router) => {
    // Informacion y bienvenida
    router.get("/", MethodoController.getHome);
    router.get("/info", MethodoController.getInfo);
}