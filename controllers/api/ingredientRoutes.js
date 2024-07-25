const router = require('express').Router();
const { Ingredient } = require('../../models');
//api/ingredients

//get all, get by id, post

//get all
router.get('/', async (req, res) => {
    try{
        const ingredientData = await Ingredient.findAll();
        const ingredientTotal = [];
        for (ingredient of ingredientData){
            ingredientTotal.push(ingredient.dataValues);
        }
        console.log(ingredientTotal);
        res.json(ingredientTotal);
        //handelbars as per standard
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

//get by id
router.get('/:id', async (req, res) => {
    try{
        const ingredient = (await Ingredient.findByPk(req.params.id)).dataValues;
        console.log(ingredient);
        res.json(ingredient);
    }
    catch (err) {
        console.log(err);
        res.status(404).json('Ingredient not found');
    }
});

//post new ingredient
router.post('/', async (req, res) => {
    try{
        const newIngredient = await Ingredient.create(req.body);
        res.json(newIngredient);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})



module.exports = router;