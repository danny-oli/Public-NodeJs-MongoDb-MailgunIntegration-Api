const mongoose = require("../../config/database");


const Schema = mongoose.Schema;

const MailgunLogSchema = new Schema({
    to: { type: Array, required: true },
    from: { type: String, required: true },
    subject: { type: String, required: true },
    text: { type: String, required: false },
    html: { type: String, required: false },
    status: { type: String, required: false },
    error: { type: String, required: false, default: false },
    details: { type: String, required: false }
  }, {
    timestamps: { createdAt: true, updatedAt: true }
  })



module.exports = mongoose.model("Mailgun", MailgunLogSchema);
