const express = require('express');
const Produto = require('../models/produto');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find();
        return res.send({ produtos });
    } catch (e) {
        return res.status(400).send({ error: 'Falha ao listar produtos' });
    }
});

router.post('/', async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        return res.send({ produto });
    } catch (e) {
        return res.status(400).send({ error: 'Falha ao inserir produto' });
    }
});



module.exports = (app) => app.use('/produtos', router)