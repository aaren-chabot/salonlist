const express = require('express');
const router = express.Router();

const businessUserUtils = require('./businessUser.utils');

// Register
router.post('/register', async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

// Login
router.post('/login', async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

module.exports = router;
