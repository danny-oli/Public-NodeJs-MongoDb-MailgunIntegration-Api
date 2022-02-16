// const validationResult = require("express-validator");
const UserService = require("./UserService");

const list = async (_, res) => {
  const response = await UserService.list();
  return response.error
    ? res.status(response.code).json(response)
    : res.status(200).json(response);
};

const create = async (req, res) => {
  const response = await UserService.create(req.body);
  return response.error
    ? res.status(response.code).json(response)
    : res.status(201)
        .header("integrationKey", response.integrationKey)
        .json(response);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const response = await UserService.findById(id);
  return response.error
    ? res.status(response.code).json(response)
    : res.status(200).json(response);
};

const update = async (req, res) => {
  const { id } = req.params;
  const response = await UserService.update(id, req.body);
  return response.error
    ? res.status(response.code).json(response)
    : res.status(200).json(response);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const response = await UserService.deleteUser(id);
  return response.error
    ? res.status(response.code).json(response)
    : res.status(200).json(response);
};

module.exports = { list, create, findById, update, deleteUser };
