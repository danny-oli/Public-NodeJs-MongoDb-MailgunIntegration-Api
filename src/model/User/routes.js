const IntegrationKeyValidation = require("../../middleware/IntegrationKeyValidation");
const UserController = require("./UserController");

module.exports = (app) => {

  app.post("/createUser", UserController.create);
  app.get("/findUsers", IntegrationKeyValidation, UserController.list);
  app.get("/findUserById/:id", IntegrationKeyValidation, UserController.findById);
  app.put("/updateUser/:id", IntegrationKeyValidation, UserController.update);
  app.delete(
    "/deleteUser/:id",
    IntegrationKeyValidation,
    UserController.deleteUser
  );
  return app;
};
