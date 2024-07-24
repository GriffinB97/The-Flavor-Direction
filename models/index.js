const Recipe = require('./recipes');
const User = require('./user');
const Ingredient = require('./ingredient');
const RecipeIngredient = require('./recipeIngredient');

//set up the relationship between user and recipe
//a user can have many recipes
User.hasMany(Recipe, {
    foreignKey: 'poster_id',
    onDelete: 'CASCADE'
})

module.exports = { Recipe , User, RecipeIngredient, Ingredient};