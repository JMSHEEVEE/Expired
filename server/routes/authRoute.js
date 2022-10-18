const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}))

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}),
  (req, res) => {
    // console.log('req.user in auth js: ', req.user.data);
    // res.cookie('id', req.user.data)
    res.redirect('/')
    console.log('oauth worked');
  }
)

module.exports = router;
