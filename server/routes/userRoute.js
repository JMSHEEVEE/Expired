const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.verifyUser, (req, res) => {
    console.log('sent to frontEnd', res.locals.user)
    res.status(200).json(res.locals.user);
})

router.post('/register', userController.createUser, (req, res) => {
    res.status(200).json(res.locals.user);
})

module.exports = router;
