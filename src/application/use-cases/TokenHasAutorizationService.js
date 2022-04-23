import { TokenHasAutorizationRepositorie } from '../../infrastructure/repositories/index.js';

export const TokenHasAutorizationService = {
    async getAllAuthorizations(jsonAuthorization) {
        return await TokenHasAutorizationRepositorie.allAuthorizations(jsonAuthorization);
    },
    async postCreateAuthorization(jsonAuthorization){
        return await TokenHasAutorizationRepositorie.createAuthorization(jsonAuthorization);
    },
    async getShowAuthorization(id, jsonAuthorization){
        return await TokenHasAutorizationRepositorie.showAuthorization(id, jsonAuthorization);
    }

}