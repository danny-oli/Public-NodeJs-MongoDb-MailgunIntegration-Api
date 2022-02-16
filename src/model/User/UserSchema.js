const mongoose = require("../../config/database");


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    integrationKey: { type: String, required: true }
  }, {
    timestamps: { createdAt: true, updatedAt: true }
  })



module.exports = mongoose.model("User", UserSchema);
