import { AuthorizationRepositorie } from '../../infrastructure/repositories/index.js';

export const AuthorizationService = {
    // List allAuthorizations
    async getAllAuthorizations(jsonAuthorization) {
        return await AuthorizationRepositorie.allAuthorizations(jsonAuthorization);
    },
    // Create a new Authorization
    async postCreateAuthorization(appId, grant){
        return await AuthorizationRepositorie.createAuthorization(appId, grant);
    },
    // Show Authorization
    async getAuthorizationForAppCredential(appId){
        return await AuthorizationRepositorie.getAuthorizationForAppCredential(appId);
    },
    // Find Authorization
    async findAppIdAndGrant(appId, grant) {
        return await AuthorizationRepositorie.findAppIdAndGrant(appId, grant);
    }

}