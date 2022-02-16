const dotenv = require("dotenv");

// Config ambient variables
dotenv.config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
};
