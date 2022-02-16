const express = require("express");
const router = express.Router();

const userRoutes = require("../model/User/routes")(router);
const mailgunRoutes = require("../model/Mailgun/routes")(router);

module.exports = (app) => {
  app.use("/user", userRoutes);
  app.use("/mailgun", mailgunRoutes);

  return app;
};
