import { OrmKnex } from '../orm/knexjs/index.js';

export const TokenHasAutorizationRepositorie = {
    async allAuthorizations() {
        return (await OrmKnex.main()).from('authorizations').where({ 'status': true }).select('*').then(rows => rows);

    },
    async createAuthorization(jsonData) {

    },
    async updateAuthorization(id, jsonData) {

    },
    async showAuthorization(id, jsonData) {

    }
}
