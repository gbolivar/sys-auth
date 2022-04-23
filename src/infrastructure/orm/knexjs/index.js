import { db } from '../../config/index.js';
import knex  from 'knex';

export const OrmKnex = {
   async main(){
      return knex(db);
   }
}