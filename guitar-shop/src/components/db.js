    const {Pool} = require('pg');

    const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'floortiles_Shop',
    password: `0000`,
    port: 5432,
    })

    module.exports = pool; 




    