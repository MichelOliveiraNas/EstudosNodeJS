const express = require('express'); //IMPORTANDO O EXPRESS.
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express(); // DEFININDO A CONSTANTE 'APP' COMO UMA FUNÇÃO EXPRESS.

//INICIANDO O DB
mongoose.connect(
    'mongodb://192.168.99.100:27017/nodeapi',
    { useNewUrlParser: true },
);
requireDir('./src/models');


// O GET É ACIONADO QUANDO O USUÁRIO ACESSAR A ROTA PASSADA NO PRIMEIRO PARÂMETRO.
// O REQ SIMBOLIZA A REQUISIÇÃO QUE ESTÁ SENDO FEITA PARA O SERVIDOR. ELE CONTERÁ TODOS OS DETALHES E INFORMAÇÕES DESSA REQUISIÇÃO COMO PARÂMETROS, CORPO DA REQUISIÇÃO, USUÁRIO QUE FEZ A REQUISIÇÃO, ETC.
// O RES SIMBOLIZA A RESPOSTA QUE SERÁ DADA PARA A REQUISIÇÃO.

const Product  = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({
        title: 'ReactJS',
        description: 'Make web sites with React',
        url: 'http://github.com/facebook/react'
    });
    return res.send('Hello World');
});

app.listen(3001); //DEFININDO A PORTA COMO 3001 DO NAVEGADOR.