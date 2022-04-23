import { IntegrationRepositorie } from '../../infrastructure/repositories/index.js';
export const IntegrationService = {
  async getByToken(token){
    return await IntegrationRepositorie.getByToken(token);    
  }
}