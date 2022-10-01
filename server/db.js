const Pool = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: process.env.PSQLPASSWORD,
    database: 'socialmediaapp',
    host: 'localhost',
    port: 5432
});

module.exports = pool;
