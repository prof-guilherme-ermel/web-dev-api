const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/web-dev-api');
mongoose.Promise = global.Promise;

module.exports = mongoose;