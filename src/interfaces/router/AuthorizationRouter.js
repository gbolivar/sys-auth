import { AuthorizationController } from '../controllers/index.js';

export const AuthorizationRouter = (router) => {
    router.get("/authorizations", AuthorizationController.getAll);
    router.post("/authorization", AuthorizationController.createAuthorization);
    router.get("/authorization/:appCredential", AuthorizationController.getAuthorizationForAppCredential); 
}