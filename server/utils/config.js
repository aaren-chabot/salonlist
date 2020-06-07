require('dotenv').config();

module.exports = {
  mongoose: {
    URI: 'mongodb+srv://cluster0-gva0e.mongodb.net',
    config: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      user: process.env.MONGOOSE_USER,
      pass: process.env.MONGOOSE_PASS,
      dbName: 'test'
    }
  },
  server: {
    PORT: process.env.PORT || 5000
  },
  jwt: {
    EXPIRATION_MS: 2592000000
  }
};
