const express = require('express');
const controllers = require('../controllers/controller');
const router = express.Router();


router.get('/fridge', controllers.getFridge, (req, res) => {
    return res.status(200).send(res.locals.data);
});

router.post('/fridge', controllers.addToFridge, (req, res) => {
    res.status(200)
})

router.delete('/fridge/:id', controllers.deleteFromFridge, (req, res) => {
    return res.status(200);
});

module.exports = router;