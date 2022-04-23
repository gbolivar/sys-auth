//import { Integration } from '../../domain/entities/index.js';
import { OrmKnex } from '../orm/knexjs/index.js';

export const TokenRepositorie = {
    async createToken(jsonData) {
        return (await OrmKnex.main()).returning(['id', 'access_token', 'user_id', 'app_id']).insert([{ "access_token": jsonData.access_token, "user_id": jsonData.user_id, "app_id": jsonData.app_id }]).into('tokens')

    },
    async updateToken(id, jsonData) {

    },
    async findUserIdAndAppId(userId, appId)  {
        return (await OrmKnex.main()).from('tokens')
            .where({ 'tokens.user_id': userId, 'tokens.app_id': appId, 'tokens.status': true })
            .select('*').then(rows => rows);

    },
    async postCheckUserNameAndAppCredentials(userName, AppCredentials) {
        return (await OrmKnex.main()).from('users')
            .where({ 'users.name': userName, 'users.status': true })
            .select('users.id as user_id', (await OrmKnex.main()).raw("COALESCE((SELECT p.id FROM public.apps AS p WHERE p.credential='" + AppCredentials +"'),0) AS app_id")).then(rows => rows);
    },
    async getAuthorizationForAppCredential(bearerToken, secret) {
        return (await OrmKnex.main()).from('tokens')
            .innerJoin('users', 'users.id', 'tokens.user_id')
            .innerJoin('apps', 'apps.id', 'tokens.app_id')
            .where({ 'tokens.access_token': bearerToken, 'users.secret': secret, 'tokens.status': true })
            .select('*', 'tokens.id as token_id', (await OrmKnex.main()).raw('array(SELECT authorizations.grant FROM public.token_has_authorizations INNER JOIN public.authorizations  ON authorizations.id = token_has_authorizations.authorization_id WHERE token_has_authorizations.token_id = tokens.id) as grants')).then(rows => rows);
    }
}
