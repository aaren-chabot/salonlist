const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({});

module.exports = Business = mongoose.model(
  'business',
  businessSchema,
  'Businesses'
);
