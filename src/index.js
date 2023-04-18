const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./controllers/usuario.controller')(app);
require('./controllers/produto.controller')(app);

app.listen(process.env.PORT);

module.exports = app;
