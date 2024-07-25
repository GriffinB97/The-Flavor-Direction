const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {
    //nothing special here
}


Recipe.init(
    //Name / Description / Rating / Instructions OR url / has nuts (or other restrictions)  / Type of food (breakfast, lunch, etc) /
    {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title : {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            validate: {
                mine: 1,
                max: 5
            }
        },
        foodType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hasNuts: {
            //if it isn't inputed, defaults to undefined with is falsey 
            type: DataTypes.BOOLEAN
        },
        glutenFree: {
            type: DataTypes.BOOLEAN
        },
        vegan: {
            type: DataTypes.BOOLEAN
        },
        url: {
            //if a url is not given, the link will be created by the id
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        instructions : {
            type: DataTypes.ARRAY
            //can be null because it may be a url
        },
        ingredients : {
            type: DataTypes.ARRAY
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
      }
);

module.exports = Recipe;
