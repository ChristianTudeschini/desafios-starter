const mongoose = require('mongoose');

const Product = mongoose.model('Product');

// Exportando objeto com funções
module.exports = {
    // Função que vai fazer listagem de todos os registros de produtos do BD
    async index(req, res) {
        const { page = 1 } = req.query;

        // find sem parametros vai puxar TODOS os dados (é a mesma coisa do * no SQL)
        // const products = await Product.find();

        const products = await Product.paginate({} ,{
            // Página na qual está
            page,
            // Limite de conteudo por página
            limit: 10
        });

        // Retornando esses dados numa estrutura JSON
        return res.json(products);
    },

    // Mostra apenas um cadastro, por meio do id que já é automaticamente gerado por ele
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // Criar um product
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // Atualiza um product
    async update(req, res) {
        // new: true = pedindo para o mongoose retornar esse produto ATUALIZADO, sem ele o mongoose retorna o antigo
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    // Deleta um product
    async destroy(req, res) {
        await Product.findByIdAndDelete(req.params.id);

        return res.send();
    }
}