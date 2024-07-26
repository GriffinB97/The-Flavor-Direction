const router = require('express').Router();
const { User } = require('../../models');

//api//user
//needs a post
//needs a delete
//needs a get by ID
//needs a get all?

//get all
router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll();
        const userTotal = [];
        for(user of userData){
            userTotal.push(user.dataValues);
        }
        console.log(userTotal);
        res.json(userTotal);
        //handelbars call go here
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get by id
//works
router.get('/:id', async (req,res) => {
    try {
        const userData = (await User.findByPk(req.params.id)).dataValues;
        console.log(userData);
        res.json(userData);
        //handelbars call go here
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//post, so creating a new user
//works
router.post('/', async (req,res) => {
    try {
        const userData = await User.create(req.body);
        res.json(userData);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//delete
//sort of works
//the onDelete cascade isn't working, so a user with recipes cannot be deleted
router.delete('/:id', async (req,res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!userData){
            res.status(404).json({message : 'No user was found'}); //the message template is because json
            return;
        }
        res.status(200).json(userData);

    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;