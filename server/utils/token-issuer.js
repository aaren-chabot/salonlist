require('dotenv').config();
const jwt = require('jsonwebtoken');

const keys = require('./config');

const issueJWT = async (userData) => {
  const { _id: id, email } = userData;

  const payload = {
    id,
    email
  };

  return jwt.sign(payload, process.env.JWT_SECRET);
};

module.exports = issueJWT;
