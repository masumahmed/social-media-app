const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'masum',
    password: process.env.PSQLPASSWORD,
    database: 'socialmediaapp',
    host: 'localhost',
    port: 5432
});

module.exports = pool;
