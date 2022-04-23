/**
 * @desc Configuration the data base 
 * @version 1.0.0
 * 
 */
export const db = {
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
}