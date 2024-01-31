const dotenv = require("dotenv");

dotenv.config();

const data = {
    apiPort: process.env.REST_API_PORT,
    postgres: {
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT
    }
};

module.exports = { data }