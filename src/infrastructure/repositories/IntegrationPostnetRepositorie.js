//import { Integration } from '../../domain/entities/index.js';
import { OrmKnex } from '../orm/knexjs/index.js';

export const IntegrationPostnetRepositorie = {
    async getAllIntegrationPostnets() {
        return (await OrmKnex.main()).from('integrations_postnets').where({ 'status': true }).select('*').then(rows => rows);
    },
    async createIntegrationPostnet(jsonData) {     
        return (await OrmKnex.main()).insert(jsonData).insert([{ "serial": jsonData.serial, "id_local": jsonData.id_local, "channel_id": jsonData.channel_id }]).into('integrations_postnets')
    },
    async updateIntegrationPostnet(id, jsonData) {

    },
    async showIntegrationPostnet(id, jsonData) {
        return (await OrmKnex.main()).from('integrations_postnets').where({ 'id_local': id }).select('*').then(rows => rows);
    }
}

