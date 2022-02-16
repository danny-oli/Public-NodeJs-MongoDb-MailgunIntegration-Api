const MailgunLog = require("./MailgunLogSchema");
const MailgunClient = require("./MailgunClient");
const { NotFoundException } = require("../Error/Errors");

async function sendMail(req, _res) {
  try {
    const emailContent = {
      from: req.body.user.email,
      to: req.body.to.toString(),
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.html,
    };

    const successMail = await MailgunClient.messages.create(
      process.env.MAILGUN_DOMAIN,
      emailContent
    );
    const mailgunLog = new MailgunLog(emailContent);

    mailgunLog.status = "sent";
    mailgunLog.error = false;
    mailgunLog.details = successMail.message;
    const response = await mailgunLog.save();

    return {
      to: response.to,
      from: response.from,
      subject: response.subject,
      text: response.text,
      html: response.html,
      error: false,
      deatails: response.details
    };
  } catch (err) {
    console.log(err)
    const emailContent = {
      from: req.body.user.email,
      to: req.body.to.toString(),
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.html,
    };
    const mailgunLog = new MailgunLog(emailContent);

    mailgunLog.code = err.status;
    mailgunLog.details = err.details;
    mailgunLog.error = true;

    const response = await mailgunLog.save();

    return {
      to: response.to,
      from: response.from,
      subject: response.subject,
      text: response.text,
      html: response.html,
      error: true,
      code: response.code,
      deatails: response.details,
    };
  }
}

async function getSentMails() {
  try {
    const mailgunLogs = await MailgunLog.find({});
    if (!mailgunLogs.length) throw new NotFoundException("Mails not found");

    return mailgunLogs;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { sendMail, getSentMails };
