require('dotenv').config();

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "17854",
    host: "localhost",
    port: 5432,
    database: "dbproject3"
});

module.exports = pool;
