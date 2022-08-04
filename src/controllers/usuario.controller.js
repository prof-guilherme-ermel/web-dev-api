const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        return res.send({ usuarios });
    } catch (e) {
        return res.status(400).send({ error: 'Falha ao listar usuários' });
    }
});

router.post('/registro', async (req, res) => {
    const { email } = req.body;
    
    try {
        if (await Usuario.findOne({ email })) {
            return res.status(400).send({ error: 'Usuário já registrado' });
        }

        const usuario = await Usuario.create(req.body);
        
        usuario.senha = undefined;
        return res.send({ usuario });
    } catch (e) {
        return res.status(400).send({ error: 'Falha ao registrar usuário' });
    }
});

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ email }).select('+senha');
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        if (!await bcrypt.compare(senha, usuario.senha)) {
            throw new Error('Senha inválida');
        }

        usuario.senha = undefined;
        return res.send({ usuario });
    } catch (e) {
        return res.status(400).send({ error: 'Usuário ou senha inválido' });
    }
});

module.exports = (app) => app.use('/usuarios', router)