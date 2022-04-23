import { OrmKnex } from '../orm/knexjs/index.js';

export const AuthorizationRepositorie = {
    async allAuthorizations() {
        return (await OrmKnex.main()).from('authorizations').where({ 'status': true }).select('*').then(rows => rows);

    },
    async createAuthorization(appId, grant) {
        return (await OrmKnex.main()).returning(['id', 'app_id', 'grant']).insert([{ "app_id": appId, "grant": grant }]).into('authorizations')

    },
    async updateAuthorization(id, jsonData) {

    },
    async getAuthorizationForAppCredential(appId) {
        return (await OrmKnex.main()).from('authorizations').where({ 'app_id': appId}).select('*').then(rows => rows);
    },
    async findAppIdAndGrant(appId, grant){
        // find match appId and grant
        return (await OrmKnex.main()).from('authorizations').where({ 'app_id':appId, 'grant': grant }).select('*').then(rows => rows);
    } 
}
