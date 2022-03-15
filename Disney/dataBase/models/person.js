const {Model, DataTypes ,Sequelize} = require('sequelize');

const Personaje_Table = 'personajes';

const PersonajeShema ={
    id: {
        allowNull: null,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    imagen:{
        type: DataTypes.STRING,
        unique:true,
    },
    nombre:{
        type: DataTypes.STRING,
        unique:true,
        validate: {
            is: ["^[a-z]+$",'i'],
        }
    },
    Edad:{
        type:DataTypes.INTEGER,
        defaultValue:0,
        validate: {
            isNumeric: true,
        },
    },
    Peso:{
        type: DataTypes.FLOAT,
        defaultValue:0,
        validate: {
            isNumeric: true,
        },
    },
    Historia:{
        type:DataTypes.STRING,

    },

    Peliculas_Series:{
    
    },

}