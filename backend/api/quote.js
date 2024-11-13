const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
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
      return res.status(200).json({ message: 'Quote request sent successfully' });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Error sending quote request' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
} 