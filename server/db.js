const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PSQLPASSWORD,
    database: 'socialmediaapp',
    host: 'localhost',
    port: 5432
});

module.exports = pool;
