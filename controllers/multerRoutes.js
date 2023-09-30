const express = require('express');

const app = express();
const debug = require('debug')('app');

app.set('view engine', 'ejs');
