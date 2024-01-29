const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.json());

// Define the POST endpoint to send email verification
app.post('/send-verification-email', async (req, res) => {
  try {
    const { email } = req.body;

    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your_email@gmail.com', // Replace with your email
        pass: 'your_password', // Replace with your password or use environment variables
      },
    });

    // Email content
    let mailOptions = {
      from: 'your_email@gmail.com',
      to: email,
      subject: 'Email Verification',
      text: 'This is your email verification message.',
      html: '<p>This is your email verification message.</p>',
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.messageId);
    res.status(200).send('Email verification sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email verification.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
