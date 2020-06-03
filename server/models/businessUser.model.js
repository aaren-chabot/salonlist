const mongoose = require('mongoose');

const businessUserSchema = new mongoose.Schema({});

module.exports = BusinessUser = mongoose.model(
  'businessUser',
  businessUserSchema,
  'BusinessUsers'
);
