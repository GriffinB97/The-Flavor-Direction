const router = require('express').Router();

const apiRoutes = require('./api');

router.get('/', (req, res) => {
    res.render('home'); // homepage hanldebar
});

router.use('/api', apiRoutes);

module.exports = router;