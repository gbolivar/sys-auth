import { TokenRepositorie } from '../../infrastructure/repositories/index.js';

export const TokenService = {
    async getAllTokens(jsonToken) {
        return await TokenRepositorie.getAllTokens(jsonToken);
    },
    async postCreateToken(jsonToken){
        return await TokenRepositorie.createToken(jsonToken);
    },
    async putToken(id, jsonToken) {
        return await TokenRepositorie.updateToken(id, jsonToken);
    },
    async postCheckToken(id, jsonToken) {
        return await TokenRepositorie.ckeckToken(jsonToken);
    },
    async postCheckUserNameAndAppCredentials(userName, AppCredentials) {
        return await TokenRepositorie.postCheckUserNameAndAppCredentials(userName, AppCredentials);
    },
    async findUserIdAndAppId(userId, appId){
        return await TokenRepositorie.findUserIdAndAppId(userId, appId);
    }

}