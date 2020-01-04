const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//TRAZENDO TODOS OS DADOS
routes.get('/products', ProductController.index);

//BUSCANDO UM DADO PELO ID
routes.get('/products/:id', ProductController.show); //BUSCANDO UM PRODUTO PELO ID.

//METODO DE CRIAÇÃO DE REGISTRO
routes.post('/products', ProductController.create);

//METODO DE ATUALIZAÇÃO DE REGISTRO
routes.put('/products/:id', ProductController.update);

//METODO DE EXCLUSÃO DE REGISTRO
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;