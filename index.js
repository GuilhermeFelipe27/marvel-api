const express = require('express');
const path = require('path');
const { getCharacters } = require('./marvel');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Middleware para CORS (permitir requisições do frontend)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Rota para servir a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/characters', async (req, res) => {
  const { name } = req.query;
  try {
    const characters = await getCharacters(name || '');
    res.json(characters);
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    res.status(500).json({ error: 'Erro ao buscar personagens' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});
