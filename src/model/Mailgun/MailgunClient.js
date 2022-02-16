const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mailgunClient = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_INTEGRATION_APIKEY,
  domain: process.env.MAILGUN_DOMAIN,
});

module.exports = mailgunClient;
