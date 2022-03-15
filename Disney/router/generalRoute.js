const express = require('express');

const PersonajeRouter = require('./PersonajeRouter');
const sessionInit = require('./SessionInit');

function darRutas(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/personaje', PersonajeRouter);
    router.use('/session', sessionInit)
};
module.exports = darRutas;
