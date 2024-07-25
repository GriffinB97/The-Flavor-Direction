const router = require('express').Router();
const { Recipe } = require('../../models');
//api//recipes



//needs a get , get by id , a post recipe that requires a user
router.get('/', async (req,res) => {
    //goes through the recipe database and feeds the entries into a handelbars template
    try{
        const recipeData = await Recipe.findAll();
        const recipeTotal = [];
        for (recipe of recipeData){
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

router.get('/:id', async (req,res) => {
    try{
        const recipeData = (await Recipe.findByPk(req.params.id)).dataValues;
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
router.get('/meal/:foodType', async (req, res) => { // /api/recipe/meal/dinner
    try {
        const allMeals = await Recipe.findAll({ //this should be how searching for a specific thing works
            where: {
                foodType : req.params.foodType
            }
        });
        const allType = [];
        for (meal of allMeals){
            allType.push(meal.dataValues);
        }
        console.log(allType);
        res.json(allType);
        //handelbars call
    }
    catch (err){
        res.status(500).json(err);
    }
});

//get ingredient list
router.get('/:id/ingredient', async (req, res) => {
    try {
        //this needs to check the recipe for ingridients and store them in a list
        //I don't know how the connection is set up yet

    }
    catch (err) {
        res.status(500).json(err);
    };
});



router.post('/', async (req,res) => {
    try{
        //sequelize function create
        //req.body has the variables
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


//all recipe page
//all user page
//all ingredient

//specific recipe id page  //multiple specific recipe (get all dinner)
    //all of these pages could be the same handel bars

//specific user id page

//recipe name, ingredients
//user name , user.ingredients



module.exports = router;
