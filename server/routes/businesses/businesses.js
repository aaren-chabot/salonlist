const express = require('express');
const router = express.Router();

// const businessUtils = require('./business.utils');

const tempData = require('../../temp-data');

router.route('/').get(async (req, res, next) => {
  try {
    res.status(200).json(tempData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
