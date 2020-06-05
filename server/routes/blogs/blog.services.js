const Blog = require('../../models/blog.model');

const getAllBlogs = async () => {
  try {
    return await Blog.find();
  } catch (error) {
    throw error;
  }
};

const createBlog = async (blogData) => {
  try {
    const blog = new Blog(blogData);
    return await blog.save();
  } catch (error) {
    throw error;
  }
};

const getBlogById = async (Id) => {
  try {
    const blog = await Blog.findById(Id);
    if (!blog) throw new Error('404');
    return blog;
  } catch (error) {
    throw error;
  }
};

const updateBlogById = async (Id, blogData) => {
  try {
    const blog = await Blog.findById(Id);
    if (!blog) throw new Error('404');
    blog.set(blogData);
    return await blog.save();
  } catch (error) {
    throw error;
  }
};

const deleteBlogById = async (Id) => {
  try {
    const response = await Blog.deleteOne({ _id: Id });
    if (!response.ok) throw new Error('404');
    return response.deletedCount;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById
};
