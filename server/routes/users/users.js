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

router.get('/protected/local', passport.authenticate('local'), (req, res) => {
  console.log('res.user', req.user);
  res.send('success');
});

router.get('/protected/jwt', passport.authenticate('jwt'), (req, res) => {
  console.log('res.user', req.user);
  res.send('success');
});

module.exports = router;
