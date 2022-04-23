import { OrmKnex } from '../orm/knexjs/index.js';

export const AppRepositorie = {
    async allApps() {
        return (await OrmKnex.main()).from('apps').where({ 'status': true }).select('*').then(rows => rows);

    },
    async createApp(jsonData) {
        let dataJson = { 
            "label": jsonData.label, 
            "credential": jsonData.credential, 
            "app_token": jsonData.JwtHash 
        }
        return (await OrmKnex.main()).returning(['label', 'credential', 'app_token']).insert([dataJson]).into('apps')

    },
    async updateApp(id, jsonData) {

    },
    async showApp(id, jsonApp) {
        return (await OrmKnex.main()).from('apps').where({"id":id}).select('*').then(rows => rows);

    },
    async findCredential(credential) {
        return (await OrmKnex.main()).from('apps').where({ "credential": credential, 'status': true }).select('*').then(rows => rows);

    },
    async findExtisRows(label, credential) {
        return (await OrmKnex.main()).from('apps').where({ "label": label, 'credential': credential }).select('*').then(rows => rows);

    }
}
