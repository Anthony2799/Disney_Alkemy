'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.findOne({
    where:{
      email: email,
    }
  }).then(function(user){
      if(user){
        return done(null, false, {
          message: "este correo esta registrado",
        });
      }else{
        let contrasena = generateHash();
      };
  })
  .catch(()=>{
    console.error(error);
    return "Error";
  })
  

  return User;
};