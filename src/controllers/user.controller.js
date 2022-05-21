const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        return res.send({ users });
    } catch (e) {
        return res.status(400).send({ error: 'List users failed' });
    }
});

module.exports = (app) => app.use('/users', router)