const mongoose = require("mongoose");
const keys = require("./keys");

mongoose.set("useFindAndModify", false);

// useNewParser: true for compatibility with other mongo versions
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((connection) => {
  console.log(
    `Connected to Mongo database "${connection.connections[0].name}"`
  );
}).catch((err) => {
  throw err;
});

module.exports = mongoose;
