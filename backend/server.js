const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: [
    'https://hrhklogistics.vercel.app',
    'https://hrhk-ajaybuwaniwal4-gmailcoms-projects.vercel.app',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Quote request route
app.post('/api/quote', async (req, res) => {
  try {
    console.log('Received quote request:', req.body);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Quote Request from HRHK Logistics',
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>From Location:</strong> ${req.body.fromLocation}</p>
        <p><strong>To Location:</strong> ${req.body.toLocation}</p>
        <p><strong>Service Type:</strong> ${req.body.serviceType}</p>
        <p><strong>Message:</strong> ${req.body.message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      message: 'Error sending quote request',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Email User:', process.env.EMAIL_USER);
});

module.exports = app; 