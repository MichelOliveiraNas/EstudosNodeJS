const express = require('express'); //IMPORTANDO O EXPRESS.
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express(); // DEFININDO A CONSTANTE 'APP' COMO UMA FUNÇÃO EXPRESS.
app.use(express.json()); // PERMITIR O ENVIO DE DADOS PARA A APLICAÇÃO NO FORMATO DE JSON.
app.use(cors());

//INICIANDO O DB
mongoose.connect(
    'mongodb://192.168.99.100:27017/nodeapi',
    { useNewUrlParser: true },
);

requireDir('./src/models');

//ROTAS
app.use('/api', require('./src/routes'));

app.listen(3001); //DEFININDO A PORTA COMO 3001 DO NAVEGADOR.