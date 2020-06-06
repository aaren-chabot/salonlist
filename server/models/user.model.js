const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const {
  bcrypt: { saltRounds }
} = require('../utils/config');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    first: {
      type: String,
      trim: true
    },
    last: {
      type: String,
      trim: true
    }
  },
  phoneNumber: {
    type: String,
    trim: true
  },

  businesses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', async function (next) {
  const user = this;
  console.log('user', user);
  if (user.isModified('password') || user.isNew) {
    try {
      user.password = await bcrypt.hash(user.password, saltRounds);
      return next();
    } catch (err) {
      return next(err);
    }
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = User = mongoose.model('user', userSchema, 'Users');
