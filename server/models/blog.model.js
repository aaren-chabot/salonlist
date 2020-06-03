const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({});

module.exports = Blog = mongoose.model('blog', blogSchema, 'Blogs');
