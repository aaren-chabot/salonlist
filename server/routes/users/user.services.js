const User = require('../../models/user.model');
const issueJWT = require('../../utils/token-issuer');

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
    const [user] = await User.find({ email: email });
    if (!user) throw new Error('403'); // Email not found

    const match = await user.comparePassword(password);
    if (!match) throw new Error('402'); // Email & Pass do not match

    return await issueJWT(user);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registerUser,
  loginUser
};
