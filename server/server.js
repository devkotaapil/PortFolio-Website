require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth:{
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
})

app.post('/send-message',(req,res)=>{
  const formData = req.body.text;
  const {name,email,description} = formData;
  console.log(`Received message from ${name} (${email}): ${description}`);

  const mailOptions ={
    from:process.env.MAIL_USER,
    to:process.env.SEND_USER,
    replyTo:email,
    subject:`New Portfolio message from ${name} `,
    text:`You received a message from ${name} (${email}\n\n Message:${description})`
  };

  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      return  res.status(500).send(error.toString());
    }
     res.status(200).json({message: 'Message received successfully'});
  })

})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
