const nodemailer = require('nodemailer');

module.exports = (request, response) => {
  console.log(request.body);
  try {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${request.body.userName}</li>
        <li>Email: ${request.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${request.body.message}</p>
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
        subject: "Contact Form Submission Notification",
        text: null,
        html: output
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);   
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
    
    return response.json("DONE");
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};