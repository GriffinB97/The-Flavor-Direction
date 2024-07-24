const router = require('express').Router();

const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipeRoutes');

router.use('/users', userRoutes);
router.use('/recipes', userRoutes);

module.exports = router;


//the routes are api/users
    //api//recipes