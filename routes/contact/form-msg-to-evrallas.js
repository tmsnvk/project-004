const nodemailer = require('nodemailer');
const { regexEmail, regexUsername } = require("../../utilities/helpers/regex");

module.exports = (request, response) => {
  try {
    const { username, email, message } = request.body;

    if (!username || !email || !message) return response.status(400).json({ message: "Please fill out all fields!" });

    if (!username.match(regexUsername)) return response.status(400).json({ message: "Use only letters and numbers." });
    if (username.length < 5 || username.length > 20) return response.status(400).json({ message: "NAME is required - use only letters and numbers; minimum 5, maximum 20 characters long." });

    if (!email.match(regexEmail)) return response.status(400).json({ message: "Provide a valid EMAIL." });

    if (message.length > 500) return response.status(400).json({ message: "MESSAGE is required." });

    const output = `
      <main>
        <h1>We have received a contact request message from this [${request.body.email}] email address.</h1>
        <h2>Contact Details</h2>
        <div>  
          <p>Name: <span>${request.body.username}</span></p>
          <p>Email: <span>${request.body.email}</span></p>
        </div>
        <h2>Message</h2>
        <p>${request.body.message}</p>
      </main>
    `;

    let transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_AUTH_HOST,
      port: 465,
      secure: true,
      auth: {
          user: process.env.NODEMAILER_AUTH_USER,
          pass: process.env.NODEMAILER_AUTH_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: process.env.NODEMAILER_AUTH_USER,
      to: "evrallas@tamasnovak.net",
      subject: "Contact Form Submission Message",
      text: null,
      html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) return console.log(error);
      
      console.log("Message sent: %s", info.messageId);   
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });

    return response.json({ message: "The Tower librarians have archived your message in their Archives." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};