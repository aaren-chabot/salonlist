const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const issueJWT = async (userData) => {
  const { _id: id, email } = userData;

  const payload = {
    id,
    email
  };

  return jwt.sign(payload, keys.SECRET);
};

module.exports = issueJWT;
