const messageModel = require("../models/Messages");
const nodeMailer = require("nodemailer");



exports.messageSent = async (req, res) => {
  const { name, email, mobile, message } = req.body;
  if (!name || !email || !mobile || !message) {
    return res.status(401).json({ message: "Please enter all details correctly" });
  }

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const preuser = await messageModel.findOne({ email: email });
   
    if (preuser) {
      const userMessage = await preuser.MessageSave(message);
      console.log(userMessage);

      const mailerOption = {
        from: process.env.email,
        to: email,
        subject: "Contact HQPencil.com Team",
        text: "Your response has been submitted at sachin sangwan shivcoder Database",
      };

      transporter.sendMail(mailerOption, (error, info) => {
        if (error) {
          console.log("Error occurred: " + error);
          return res.status(500).json({ status: 500, message: "Error occurred while sending the email" });
        } else {
          console.log("Email Sent: " + info.response);
          return res.status(200).json({ status: 200, message: "Mail sent successfully" });
        }
      });
    } else {
      const newUser = new messageModel({
        name,
        email,
        mobile,
        message,
      });

      const storeData = await newUser.save();
      const mailerOption = {
        from: process.env.email,
        to: email,
        subject: "Contact HQPencil.com Team",
        text: "Your response has been submitted at sachin sangwan shivcoder Database",
      };

      transporter.sendMail(mailerOption, (error, info) => {
        if (error) {
          console.log("Error occurred: " + error);
          return res.status(500).json({ status: 500, message: "Error occurred while sending the email" });
        } else {
          return res.status(200).json({ status: 200, message: "Mail sent successfully", storeData });
        }
      });
    }
  } catch (error) {
    console.log("Error occurred: " + error.message);
    return res.status(500).json({ status: 500, message: "Internal server error" });
  }
};
