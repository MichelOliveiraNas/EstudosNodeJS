const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1} = req.query; //UTILIZANDO DESESTRUTURAÇÃO PARA BUSCAR O PARÂMETRO "PAGE" DA REQUISIÇÃO GET.
        const products = await Product.paginate({/*CONDIÇÕES/FILTROS*/},{ page, limit: 10 } ); //page = PÁGINA ATUAL. limit = LIMITE DE REGISTROS EXIBIDOS EM CADA PÁGINA.

        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id); //RECUPERANDO O ID QUE FOI PASSADO NOS PARÂMETROS DA ROTA NO ARQUIVO "ROUTES.JS".

        return res.json(product);
    },

    async create(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // RETORNANDO O PRODUTO COM ID PASSADO NO PARÂMETRO E ATUALIZANDO COM O CONTEUDO QUE FOR PASSADO NO REQ.BODY.
        // "{ new: true }" = CASO ESSE PARÂMETRO NÃO SEJA PASSADO, O MONGOOSE RETORNA OS DADOS ANTIGOS ANTES DA ATUALIZAÇÃO ACONTECER.

        return res.json(product);
    },

    async delete(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};