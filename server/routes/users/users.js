const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../../models/user.model');
const userService = require('./user.services');

const registerValidation = require('./validation/register');
const loginValidation = require('./validation/login');

router.post('/register', async (req, res, next) => {
  try {
    const { errors, isValid } = registerValidation(req.body);
    if (!isValid) return res.status(400).json(errors);

    const { email, password } = req.body;
    const user = await userService.registerUser(email, password);
    res.status(201).json({
      data: {
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { errors, isValid } = loginValidation(req.body);
    if (!isValid) return res.status(400).json(errors);

    const { email, password } = req.body;
    const token = await userService.loginUser(email, password);

    res.status(200).json({
      token: `Bearer ${token}`
    });
  } catch (e) {
    next(e);
  }
});

router.get('/auth/local', passport.authenticate('local'), (req, res) => {
  console.log('res.user', req.user);
  res.send('success');
});

router.get('/auth/jwt', passport.authenticate('jwt'), (req, res) => {
  console.log('res.user', req.user);
  res.send('success');
});

router.get('/auth/twitter', passport.authenticate('twitter'), (req, res) => {
  console.log('res.user', req.user);
  res.send('success');
});

router.get(
  '/auth/google',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('res.user', req.user);
    res.send('success');
  }
);

app.get(
  '/auth/google/return',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  }
);

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
