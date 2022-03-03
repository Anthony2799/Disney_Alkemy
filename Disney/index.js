const express = require('express');
const path = require('path');
const app = express();
const rutas = require('./router/generalRoute');

app.use(express.json());

