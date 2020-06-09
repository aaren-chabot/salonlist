const express = require('express');
const router = express.Router();

const businessServices = require('./business.services');

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const pageSize = +req.query.pagesize;
      const currentpage = +req.query.page;
      const businesses = await businessServices.getAllBusinesses(
        pageSize,
        currentpage
      );
      res.status(200).json({ results: businesses.length, data: businesses });
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const createdBusiness = await businessServices.createBusinesses(req.body);
      res.status(200).send({ data: createdBusiness });
    } catch (error) {
      next(error);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const business = await businessServices.getBusinessById(req.params.id);
      res.status(200).send({ data: business });
    } catch (error) {
      next(error);
    }
  })
  .patch(async (req, res, next) => {
    try {
      const updatedBusiness = await businessServices.updateBusinessById(
        req.params.id,
        req.body
      );
      res.status(200).send({ data: updatedBusiness });
    } catch (error) {
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const deleteCount = await businessServices.deleteBusinessById(
        req.params.id
      );
      res.status(200).send({ data: deleteCount });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
