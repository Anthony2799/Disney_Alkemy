const express = require('express');
const path = require('path');
const darRutas = require('./router/generalRoute');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.set('view engine', 'pug');
app.listen(3000, ()=>{console.log('puerto: ' + 3000)});
darRutas(app);
