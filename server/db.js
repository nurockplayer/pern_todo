const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "psql",
    host: "db",
    post: 5432,
    database: "perntodo"
});

module.exports = pool;