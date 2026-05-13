require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

app.post("/api/send", (req, res) => {
  // Updated to match the new frontend data structure
  const { name, email, description } = req.body; 
  
  console.log(`Received message from ${name} (${email}): ${description}`);

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.SEND_USER,
    replyTo: email,
    subject: `New Portfolio message from ${name}`,
    text: `You received a message from ${name} (${email})\n\nMessage: ${description}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Nodemailer Error:", error);
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: "Message received successfully" });
  });
});

// Use process.env.PORT for local development, but Vercel handles this in prod
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;