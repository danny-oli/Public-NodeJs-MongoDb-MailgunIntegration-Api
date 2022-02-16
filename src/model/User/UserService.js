const User = require("./UserSchema");
const { v4: uuidv4 } = require("uuid");
const { NotFoundException, ConflictException } = require("../Error/Errors");

async function create(req) {
  try {
    const user = await User.findOne({ username: req.username });
    if (user) throw new ConflictException("Conflict!");

    const newUser = new User(req);
    newUser.integrationKey = uuidv4();
    await newUser.save();

    return newUser;
  } catch (error) {
    return error;
  }
}

async function list() {
  try {
    const users = await User.find();
    if (!users.length) throw new NotFoundException("User Not Found");
    return users;
  } catch (error) {
    return error;
  }
}

async function findById(id) {
  try {
    const user = await User.findOne({ _id: id });
    if (!user) throw new NotFoundException("User Not Found");
    return user;
  } catch (error) {
    return error;
  }
}

async function update(userId, requestBody) {
  try {
    const user = await User.findById(userId);
    if (!user) throw new NotFoundException("User Not Found");

    const hasUser = await User.findOne({ username: requestBody.username });
    if ( hasUser._id != userId) throw new ConflictException("User already exists.");

    return await User.findByIdAndUpdate(
      { _id: userId },
      { $set: requestBody },
      { new: true }
    );
  } catch (error) {
    return error;
  }
}

async function deleteUser(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) throw new NotFoundException("User Not Found");
    console.log(user)
    return await User.findByIdAndDelete(userId);
  } catch (error) {
    return error;
  }
}

module.exports = { create, list, findById, update, deleteUser };
