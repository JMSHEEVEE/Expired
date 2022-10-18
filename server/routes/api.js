const express = require('express');
// const controllers = require('../controllers/controller');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const router = express.Router();


// create user route
router.post('/newuser', userController.createUser, authController.createCookie, (req, res) => {
  //should redirect to /fridge
  return res.redirect('/fridge');
});

// user login route
router.post('/user', authController.signin, authController.createCookie, (req, res) => {
  //should redirect to /fridge
  return res.redirect('/fridge');
});

//get contents of fridge
// router.get('/fridge', authController.checkCookie, fridgeController.getContents,(req, res) => {
//   return res.status(200).json(res.locals.fridgeContents);
// });

// //add item to fridge
// router.post('/fridge', authController.checkCookie, fridgeController.addItem,(req, res) => {
//   //what should this return
//   return res.status(200).json(res.locals.fridgeContents);
// });

// //remove item from fridge
// router.put('/fridge', authController.checkCookie, fridgeController.removeItem,(req, res) => {
//   //what should this return
//   return res.status(200).json(res.locals.fridgeContents);
// });



module.exports = router;