
const Recipe = require('./recipes');
const User = require('./user');
const Ingredient = require('./ingredient');
const RecipeIngredient = require('./recipeIngredient');

//set up the relationship between user and recipe
//a user can have many recipes
User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

module.exports = { Recipe , User, RecipeIngredient, Ingredient};