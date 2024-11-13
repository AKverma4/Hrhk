require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

// Add this to debug environment variables
console.log('Environment Variables:', {
  EMAIL_USER: process.env.EMAIL_USER,
  PORT: process.env.PORT
  // Don't log EMAIL_PASS for security
});

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

// Test the email configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

app.post('/api/quote', async (req, res) => {
  try {
    console.log('Received request body:', req.body);

    // Validate required fields
    if (!req.body.email || !req.body.name) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // sending to yourself for testing
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

    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    res.status(200).json({ message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Server error details:', error);
    res.status(500).json({ 
      message: 'Error sending quote request',
      error: error.message 
    });
  }
});

// Add a preflight route
app.options('/api/quote', cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Email User:', process.env.EMAIL_USER); // Check if env variables are loaded
}); 