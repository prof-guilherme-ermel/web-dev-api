const mongoose = require('../database');

const ProdutoSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        unique: true,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    quantidadeEmEstoque: {
        type: Number,
        default: 0,
    },
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;