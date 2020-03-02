const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Permitindo o envio de dados no formato de JSON
app.use(express.json());

// Para gerenciar dominios
app.use(cors());

// Iniciando o DB
mongoose.connect(
    'mongodb+srv://tudeschini:1234@cluster0-t7fjy.mongodb.net/test?retryWrites=true&w=majority',
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// Importando as tabelas presentes no models
requireDir('./src/models');

// Rotas
app.use('/api', require("./src/routes"));


// Ouvindo a porta 3001 do navegador
app.listen(3001);