const express = require('express');
const router = express.Router();
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const PassportLocal = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const {Bdd} = require('./../models');


router.use(cookieParser('Secreto'));
router.use(session({
    secret: 'Secreto',
    resave: true,
    saveUninitialized: true
}));


router.use(passport.initialize());
router.use(passport.session());
passport.use(new PassportLocal(function (username,password,done){
let conexion = Bdd.initialize;

if(username === 'anthony@hotmail.com' && password === '123' ){
    return done(null,{id : 1,user: 'Anthony'});
}
done(null,false);
}));

//serializacion
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//deserealizacion
passport.deserializeUser(function(id,done){
    done(null,{id : 1,user: 'Anthony'});
})

router.get('/', (req, res)=>{
    res.send('aloo');
});


router.get('/login', (req,res) =>{
    //Mostramos el formulario (cuando tengamos el form lo ponemos)
    res.status(200).render("index");

})


router.post('/login', passport.authenticate('local',{
    successRedirect:"/api/v1/session/",
    failureRedirect: "/api/v1/session/login",
}));

module.exports = router;