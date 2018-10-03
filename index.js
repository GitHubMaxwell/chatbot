'use strict'
require('dotenv').config()
require('babel-register');


const app = require('./src/app.js');

app.start(process.env.PORT)