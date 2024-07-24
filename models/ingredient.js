const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingedient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
    },
    {
        sequelize, 
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'ingredient',
    }
);

module.exports = Ingredient;