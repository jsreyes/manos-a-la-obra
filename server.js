// import modules installed at the previous step. We need them to run Node.js server
// and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();
// create a new Express application instance
const app = express();

// configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  let user = req.body;
  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      res.send(info);
    }
  });
});

const sendMail = (user, callback) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.USER_MAIL}`,
      pass: `${process.env.KEY_MAIL}`
    }
  });
  transporter.sendMail({
    from: `${process.env.USER_MAIL}`,
    to: `jreyes@belatrixsf.com`,
    subject: `Contactar a ${user.name}`,
    html: `<p><b>Nombre:</b> ${user.name}</p>
          <p><b>Email de contacto:</b> ${user.email}</p>
          <p><b>Número Celular:</b> ${user.phoneNumber}</p>`
  }, callback);
}
