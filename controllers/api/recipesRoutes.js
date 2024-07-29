const router = require('express').Router();
const { Recipe, User } = require('../../models');
//api//recipes

//needs a get , get by id , a post recipe that requires a user
router.get('/', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/api/users/login');
        return;
      }
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
        // res.json(recipeTotal);
    //   res.render('login');
    //handelbars call goes here
        res.render('recipe', {recipeTotal});
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

//it requires a user id, a title, a description, and a food type
router.post('/createrecipe', async (req, res) => {
    try {
        //sequelize function create
        //req.body has the variables
        console.log(JSON.stringify(req.body) + " this is where I am");
        console.log(req.body);
        console.log(typeof(req.body));
        req.body.foodType = (req.body.foodType).toLowerCase(); //this turns the foodType into a lower case string to prevent Dessert AND dessert
        const newRecipe = await Recipe.create(req.body);
        // const newRecipe = await Recipe.create({ "title" : req.body.title,  "description" : req.body.description, 
        //      "instructions" : req.body.instructions,  "foodType" : req.body.foodType,  "user_id" : req.session.user_id});
        //this should create the new recipe
        res.json(newRecipe);
        //if there is a page for post successful, put the handelbars here
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

//login info
// {{!-- GET ROUTE --}}
//api/users/login
router.get('/createrecipe', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/api/users/login');
    return;
  }

  res.render('createrecipe');
});








router.get('/:id', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/api/users/login');
        return;
      }
    try {
        const recipeTotal = [(await Recipe.findByPk(req.params.id, {
            include: [{ model: User }]
        })).dataValues];
        //this should work
        console.log(recipeTotal);
        // res.json(recipeData);
        res.render('recipe', {recipeTotal});
        
        //handelbars call goes here
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

//get by food type
router.get('/meal/:foodType', async (req, res) => { // /api/recipe/meal/dinner
    if (!req.session.logged_in) {
        res.redirect('/api/users/login');
        return;
      }
    try {
        const allMeals = await Recipe.findAll({ //this should be how searching for a specific thing works
            where: {
                foodType: req.params.foodType
            },
            include: [{ model: User }]
        });
        const recipeTotal = [];
        for (meal of allMeals) {
            recipeTotal.push(meal.dataValues);
        }
        // console.log(allType);
        // res.json(allType);
        res.render('recipe', {recipeTotal});
        //handelbars call
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// //it requires a user id, a title, a description, and a food type
// {user_id : req.session.user_id, }
// {title : req.body.title, }
// router.post('/', async (req, res) => {
//     try {
//         //sequelize function create
//         //req.body has the variables
//         if (!req.body.user_id) {
//             res.status(400).json({ message: 'User ID is required to create a recipe' });
//             return;
//         }
//         req.body.foodType = (req.body.foodType).toLowerCase(); //this turns the foodType into a lower case string to prevent Dessert AND dessert
//         const newRecipe = await Recipe.create(req.body);
//         //this should create the new recipe
//         res.json(newRecipe);
//         //if there is a page for post successful, put the handelbars here
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json(err)
//     }
// });


//delete recipe
//works
router.delete('/:id', async (req,res) => {
    try{
        // const deleteRecipe = await Recipe.findByPk(req.params.id);
        const deleteRecipe = await Recipe.destroy({
            where: {
                id: req.params.id
            }
        });
        if(!deleteRecipe){
            res.status(404).json('Recipe not found!');
            return; //need to stop the call from reaching another res
        }
        res.json('Recipe deleted!');
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;
