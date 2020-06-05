const express = require('express');
const router = express.Router();

const blogServices = require('./blog.services');

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const blogs = await blogServices.getAllBlogs();
      res.status(200).json({ data: blogs });
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const createdBlog = await blogServices.createBlog(req.body);
      res.status(200).send({ data: createdBlog });
    } catch (error) {
      next(error);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const blog = await blogServices.getBlogById(req.params.id);
      res.status(200).send({ data: blog });
    } catch (error) {
      next(error);
    }
  })
  .patch(async (req, res, next) => {
    try {
      const updatedBlog = await blogServices.updateBlogById(
        req.params.id,
        req.body
      );
      res.status(200).send({ data: updatedBlog });
    } catch (error) {
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const deletedCount = await blogServices.deleteBlogById(req.params.id);
      res.status(200).send({
        data: {
          deletedCount
        }
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
