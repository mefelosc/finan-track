// server/src/index.js

const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3001;

async function testDbConnection() {
  try {
    const result = await db.query('SELECT NOW()');
    console.log('Conexão com o banco de dados bem-sucedida!', result.rows[0]);
  } catch (err) {
    // Se a conexão falhar, esta linha será executada!
    console.error('ERRO AO CONECTAR AO BANCO DE DADOS:', err);
  }
}

app.get('/', (req, res) => {
  res.send('Olá, mundo! Nosso servidor Express para o FinanTrack está funcionando! 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta http://localhost:${PORT}`);
  testDbConnection();
});