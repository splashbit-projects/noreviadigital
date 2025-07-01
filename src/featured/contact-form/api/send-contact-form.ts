'use server';

import sgMail from '@sendgrid/mail';

import type { ContactSchema } from '../model/schemas';

export async function sendContactForm(data: ContactSchema) {
  try {
    const { firstName, lastName, email, phone, projectDetails, file } = data;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const msg = {
      to: process.env.ADMIN_EMAIL!,
      from: process.env.FROM_EMAIL!,
      subject: `New Contact Form`,
      html: `
        <h2>New Contact Form</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Details:</strong> ${projectDetails}</p>
      `,
    };

    await sgMail.send({
      ...msg,
      attachments: file
        ? [
            {
              content: await file
                .arrayBuffer()
                .then((buffer) => Buffer.from(buffer).toString('base64')),
              filename: file.name,
              type: file.type,
              disposition: 'attachment',
            },
          ]
        : undefined,
    });

    return { message: 'Fund access request sent successfully.' };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return { message: 'Failed to send fund access request.', error: errorMessage };
  }
}
