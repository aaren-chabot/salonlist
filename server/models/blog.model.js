const mongoose = require('mongoose');
const { imageUrlValidator } = require('./validators');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A blog title is required.'],
    trim: true
  },
  description: {
    short: {
      type: String,
      trim: true
    },
    long: {
      type: String,
      trim: true
    }
  },
  heroImg: {
    type: String,
    validate: imageUrlValidator,
    required: [true, 'A blog image is required.']
  },
  body: [
    {
      p: {
        type: String,
        trim: true
      },
      img: {
        type: String,
        trim: true,
        validate: imageUrlValidator
      },
      heading: {
        type: String,
        trim: true
      }
    }
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Blog = mongoose.model('blog', blogSchema, 'Blogs');
