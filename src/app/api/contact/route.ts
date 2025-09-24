import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Use your SMTP_* variables (match .env)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false otherwise
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });
    

    // Optional: verify connection for clearer error messages during dev
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error('SMTP verify failed:', verifyErr);
      return NextResponse.json(
        { success: false, message: 'Email transport verification failed.' },
        { status: 502 }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;">${(message || '').toString()}</p>
      </div>
    `;

    await transporter.sendMail({
      from: {
        name: `${firstName} ${lastName} (Website)`,
        address: process.env.SMTP_FROM!,        // must be verified sender
      },
      to: process.env.SMTP_TO!,                 // your inbox
      replyTo: email,                              // so replying goes to client
      subject: `New contact form: ${firstName} ${lastName}`,
      html,
      headers: {
        'X-Original-From': email,                  // optional: preserve client email
      },
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
