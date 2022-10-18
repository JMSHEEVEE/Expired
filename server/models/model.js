const { Pool } = require("pg");

// please enter the postgres URI here! thank you!!
const PG_URI = "postgres://vdvvejux:CS4RinjnJ6z-L-MZMFI6lEAlMhq2pEtm@peanut.db.elephantsql.com/vdvvejux";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};