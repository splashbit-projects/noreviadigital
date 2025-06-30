import { NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';

type ContactFormData = {
  caseDescription: string;
  website: string;
  email: string;
  phone: string;
  name: string;
  selectedServices: string;
};

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const bodyJSON = (await request.json()) as ContactFormData;
    const { caseDescription, website, email, phone, name, selectedServices } = bodyJSON;

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    // Create email content
    const msg = {
      to: process.env.ADMIN_EMAIL!, // Your admin email address
      from: process.env.FROM_EMAIL!, // Verified sender email
      subject: 'New Marketing Constructor Proposal',
      html: `
        <h2>New Marketing Constructor Proposal</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Description:</strong> ${caseDescription}</p>
        <p><strong>Selected Services:</strong> ${selectedServices}</p>
      `,
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json({ message: 'Fund access request sent successfully.' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return NextResponse.json(
      { message: 'Failed to send fund access request.', error: errorMessage },
      { status: 500 }
    );
  }
}
