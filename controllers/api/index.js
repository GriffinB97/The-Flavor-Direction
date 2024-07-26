const router = require('express').Router();

const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipesRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;


//the routes are api/users
    //api//recipes
