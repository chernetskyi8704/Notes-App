require("dotenv").config();
const nodeMailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodeMailer.createTransport({
      service: "gmail",
      host: process.env.SMTP_HOST,
      port: process.env.SMPT_PORT,
      secure: false,
      auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMain(firstName, lastName, to, link) {
    await this.transporter.sendMail({
      from: process.env.SMPT_USER,
      to,
      subject: "Account activation",
      text: "",
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); text-align: center;">
        <h1 style="font-size: 28px; color: #004085; margin-bottom: 20px;">
          Welcome, ${firstName} ${lastName}!
        </h1>
        <p style="font-size: 16px; color: #343a40; line-height: 1.5em; margin-bottom: 20px;">
          Thank you for registering on our website.
        </p>
        <a href="${link}" style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; font-size: 16px; padding: 10px 20px; border-radius: 5px; margin-bottom: 20px;">
          Click to confirm registration
        </a>
        <p style="font-size: 16px; color: #343a40; line-height: 1.5em; margin-bottom: 20px;">
          If you did not register on our website, please ignore this message.
        </p>
        <p style="font-size: 16px; color: #343a40; line-height: 1.5em; margin-bottom: 0;">
          Best regards, Your Notes Team!
        </p>
      </div>`,
    });
  }
}

module.exports = new MailService();
