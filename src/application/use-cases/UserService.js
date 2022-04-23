import { UserRepositorie } from '../../infrastructure/repositories/index.js';

export const UserService = {
    async getAllUsers(jsonUser) {
        return await UserRepositorie.allUsers(jsonUser);
    },
    async postCreateUser(jsonUser){
        return await UserRepositorie.createUser(jsonUser);
    },
    async getShowUser(name){
        return await UserRepositorie.showUser(name);
    }

}