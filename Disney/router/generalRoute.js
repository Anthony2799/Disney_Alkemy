const express = require('express');
const PersonajeRouter = require('./PersonajeRouter');

function darRutas(app){
    const router = express.Rputer();
    app.use('/api/v1',router);
    router.use('/personaje', PersonajeRouter);
}

module.exports = darRutas;