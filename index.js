const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();

const api = require('./src/router');

app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, () => {
    console.log('Server listenning on port', port);
});