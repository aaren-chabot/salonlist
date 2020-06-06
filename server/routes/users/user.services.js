const User = require('../../models/user.model');

const registerUser = async (email, password) => {
  try {
    const user = new User({ email, password });
    return await user.save();
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await User.find({ email: email });
    if (user) {
      const match = await user.comparePassword(password);
      if (match) {
        return user;
      }
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  registerUser,
  loginUser
};
