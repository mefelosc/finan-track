// server/src/db.js

require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// A MÁGICA ESTÁ AQUI:
// Estamos exportando um OBJETO que tem uma propriedade chamada "query".
// Essa propriedade "query" é uma função que executa o comando no nosso pool de conexões.
module.exports = {
  query: (text, params) => pool.query(text, params),
};