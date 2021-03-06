require('dotenv').config();

// set enviroment variables
const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    CORS: process.env.CORS,
    dbUSer: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
}

module.exports = { config };