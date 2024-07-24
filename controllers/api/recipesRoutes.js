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
router.get('/meal/:foodType', async (req, res) => {
    try {

    }
    catch (err){
        res.status(500).json(err);
    }
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







module.exports = router;
