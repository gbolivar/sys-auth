//import { Integration } from '../../domain/entities/index.js';
import { OrmKnex } from '../orm/knexjs/index.js';

export const ChannelRepositorie = {
    async getAllChannels() {
        return (await OrmKnex.main()).from('channels').where({'status': true }).select('*').then(rows => rows);

    },
    async createChannel(jsonData) {
        
    },
    async updateChannel(id, jsonData) {
        
    },
    async showChannel(id, jsonData) {

    }
}

