// Update with your config settings.
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

module.exports = {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'domain'
    }

};
