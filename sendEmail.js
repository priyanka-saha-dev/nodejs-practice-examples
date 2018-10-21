var nodemailer = require('nodemailer');

/*
 * For GMAIL: (https://community.nodemailer.com/using-gmail/)
 * https://myaccount.google.com/lesssecureapps --> Turn ON
 * https://accounts.google.com/b/0/displayunlockcaptcha --> Allow
 */
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'priyanka.njoy9@gmail.com',
    pass: 'butterfly4$'
  }
});


var mailOptions = {
  from: 'priyanka.njoy9@gmail.com',
  to: 'priyanka.saha2@cognizant.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  attachments: [
    {
      // file on disk as an attachment
      filename: 'nodeJS_notes.txt',
      path: './attachments/nodeJS_notes.txt' // stream this file
    },
    {
      // file on disk as an attachment
      filename: 'test.pdf',
      path: './attachments/test.pdf' // stream this file
    }
  ]
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
