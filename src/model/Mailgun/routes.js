const IntegrationKeyValidation = require("../../middleware/IntegrationKeyValidation");
const MailgunController = require("./MailgunController");

module.exports = (app) => {
  app.post("/sendMail",IntegrationKeyValidation , MailgunController.sendMail);
  app.get("/getSentMails",IntegrationKeyValidation , MailgunController.getSentMails);
  
  return app;
};
