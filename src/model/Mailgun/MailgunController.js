const MailgunService = require("./MailgunService");

const sendMail = async (req, res) => {
  const response = await MailgunService.sendMail(req);
  console.log(response)
  return response.error
    ? res.status(response.code).json(response)
    : res.status(200).json(response);
};

const getSentMails = async (_req, res) => {
  const response = await MailgunService.getSentMails();
  return response.error
    ? res.status(response.code).json(response)
    : res.status(200).json(response);
};

module.exports = { sendMail, getSentMails };
