<<<<<<< HEAD
const { Pool } = require('pg');

const myURI = 'postgres://sejnvhxh:TXPhGUk3h9w5TEplugO1l8FWAwnajZXb@peanut.db.elephantsql.com/sejnvhxh';

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
    connectionString: URI,
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
};




=======
const { Pool } = require("pg");

// please enter the postgres URI here! thank you!!
const PG_URI = "postgres://sejnvhxh:TXPhGUk3h9w5TEplugO1l8FWAwnajZXb@peanut.db.elephantsql.com/sejnvhxh";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
>>>>>>> dev
