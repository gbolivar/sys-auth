import { TokenRepositorie } from '../../infrastructure/repositories/index.js';
export const TokenService = {
  async getByToken(token, secret){
    return await TokenRepositorie.getAuthorizationForAppCredential(token, secret);
  }
}