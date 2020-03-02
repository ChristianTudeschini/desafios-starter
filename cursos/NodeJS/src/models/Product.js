const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//Equivalente a criação de uma tabela
const ProductSchema = new mongoose.Schema({
    //Nome do produto
    title: {
        type: String,
        //Required true significa que é obrigatorio (no caso, o titulo)
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

//Aqui estamos "adicionando" essa nova tabela no banco de dados (no caso, enviando a estrutura dela)
mongoose.model('Product', ProductSchema);