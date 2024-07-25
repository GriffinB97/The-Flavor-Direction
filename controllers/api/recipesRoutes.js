const router = require('express').Router();
const { Recipe, User } = require('../../models');
//api//recipes

//needs a get , get by id , a post recipe that requires a user
router.get('/', async (req, res) => {
    //goes through the recipe database and feeds the entries into a handelbars template
    try {
        const recipeData = await Recipe.findAll({
            include: [{ model: User }]
        });
        const recipeTotal = [];
        for (recipe of recipeData) {
            recipeTotal.push(recipe.dataValues);
        }
        console.log(recipeTotal);
        res.json(recipeTotal);
        //handelbars call goes here
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const recipeData = (await Recipe.findByPk(req.params.id, {
            include: [{ model: User }]
        })).dataValues;
        //this should work
        console.log(recipeData);
        res.json(recipeData);
        //handelbars call goes here
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

//get by food type
router.get('/meal/:foodType', async (req, res) => {
    try {
        const allMeals = await Recipe.findAll({ //this should be how searching for a specific thing works
            where: {
                foodType: req.params.foodType
            },
            include: [{ model: User }]
        });
        const allType = [];
        for (meal of allMeals) {
            allType.push(meal.dataValues);
        }
        console.log(allType);
        res.json(allType);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        //sequelize function create
        //req.body has the variables
        if (!req.body.user_id) {
            res.status(400).json({ message: 'User ID is required to create a recipe' });
            return;
        }
        const newRecipe = await Recipe.create(req.body);
        //this should create the new recipe
        res.json(newRecipe);
        //if there is a page for post successful, put the handelbars here
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router;
