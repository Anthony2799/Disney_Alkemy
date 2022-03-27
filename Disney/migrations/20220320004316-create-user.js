'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        someUnique: { type: DataTypes.STRING, unique: true },
      },
      password: {
        type: DataTypes.STRING(64),
        validate:{
          is: /^[0-9a-f]{64}$/i
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};