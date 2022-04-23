//import { Integration } from '../../domain/entities/index.js';
import { OrmKnex } from '../orm/knexjs/index.js';

export const IntegrationRepositorie = {
    async getAllIntegrations() {
        return (await OrmKnex.main()).where({ 'integrations.status': true }).select('integrations.*','channels.display as channel_name', 'channels.tips as channel_tips').from('integrations').join('channels', function(){
            this.on('channels.id','=','integrations.channel_id')
        })
        //.select('*').then(rows => rows);

    },
    async createIntegration(jsonData) {

    },
    async updateIntegration(id, jsonData) {

    },
    async showIntegration(id, jsonData) {
        return (await OrmKnex.main()).where({ 'integrations.id': id }).select('integrations.*', 'channels.display as channel_name', 'channels.tips as channel_tips').from('integrations').join('channels', function () {
            this.on('channels.id', '=', 'integrations.channel_id')
        })
    }
}

