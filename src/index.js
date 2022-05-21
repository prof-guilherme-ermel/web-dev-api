const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./controllers/auth/register-controller')(app);
require('./controllers/user.controller')(app);

app.listen(process.env.PORT);
