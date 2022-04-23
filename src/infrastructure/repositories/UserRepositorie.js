import { OrmKnex } from '../orm/knexjs/index.js';

export const UserRepositorie = {
    async allUsers() {
        return (await OrmKnex.main()).from('users').where({ 'status': true }).select('*').then(rows => rows);

    },
    async createUser(jsonData) {
        return (await OrmKnex.main()).returning(['id', 'name', 'secret']).insert([{ "name": jsonData.name, "secret": jsonData.AppHash }]).into('users')
    },
    async updateUser(id, jsonData) {

    },
    async showUser(name) {
        return (await OrmKnex.main()).from('users').where({ "name": name, 'status': true }).select('*').then(rows => rows);
    }
}
