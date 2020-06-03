const express = require('express');
const router = express.Router();

const blogUtils = require('./blog.utils');

router
  .route('/')
  .get(async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  })
  .patch(async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
