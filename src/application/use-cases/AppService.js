import { AppRepositorie } from '../../infrastructure/repositories/index.js';

export const AppService = {
    async getAllApps(jsonApp) {
        return await AppRepositorie.allApps(jsonApp);
    },
    async postCreateApp(jsonApp){
        return await AppRepositorie.createApp(jsonApp);
    },
    async getShowApp(id, jsonApp){
        return await AppRepositorie.showApp(id, jsonApp);
    },
    async findCredential(credential) {
        return await AppRepositorie.findCredential(credential)
    },
    async findExtisRows(label, credential) {
        return await AppRepositorie.findExtisRows(label, credential)
    }

    

}