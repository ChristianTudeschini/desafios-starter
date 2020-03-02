const express = require('express');
const routes = express.Router();

// Importando o ProductController para poder chamar a função index
const ProductController = require('./controllers/ProductController');

// "Adicionando" a rota, mostrando os dados do ProductController
routes.get('/products', ProductController.index);
// Por meio do express, podemos pegar o id (:id)
routes.get('/products/:id', ProductController.show)
routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)

// Exportando o routes
module.exports = routes;