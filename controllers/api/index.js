const router = require('express').Router();

const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipesRoutes');
const ingredientRoutes = require('./ingredientRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/ingredients', ingredientRoutes);

module.exports = router;


//the routes are api/users
    //api//recipes
