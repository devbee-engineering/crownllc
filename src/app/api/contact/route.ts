import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Create a transporter object using SMTP transport.
    // You need to configure your environment variables for this to work.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_FROM, // Sender address (must be configured in your email service)
      to: process.env.EMAIL_TO,       // List of receivers
      subject: `New contact form submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Contact form email sent successfully.");

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });

  } catch (error) {
    console.error('Error handling contact form submission:', error);
    // It's good practice to not expose detailed error messages to the client.
    return NextResponse.json(
        { success: false, message: 'An internal server error occurred.' },
        { status: 500 }
    );
  }
}
