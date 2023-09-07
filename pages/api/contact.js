import nodemailer from "nodemailer";
// import sgTransport from "nodemailer-sendgrid-transport";
import SMTPTransport from "nodemailer/lib/smtp-transport";


const transporter = {
  // pool: true,
  host: "outlook.office365.com",
  port: 587,
  secure: false, // use TLS
    auth: {
     user: "Website@cybervision.com.sa",
     pass: "Cyber#Vision@123"
   } 

/*   service: 'Gmail',
  // host: 'smtp.google.com', 
  auth: {
    user: 'shahid.sohail@gmail.com',
    pass: 'subhanall1!'
  }, */

};

const mailer = nodemailer.createTransport( new SMTPTransport(transporter));

export default async (req, res) => {
  console.log(req.body);
  const { name, email, number, subject, text } = req.body;

  const data = {
    // Update your email
    to: "Website@cybervision.com.sa",
    from: "Website@cybervision.com.sa",
    subject: "Contact from Cybervision Site",
    text: text,
    html: `
            <b>From:</b> ${name} - ${email} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
