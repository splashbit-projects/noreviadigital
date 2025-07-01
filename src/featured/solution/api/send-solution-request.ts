'use server';

import sgMail from '@sendgrid/mail';

import type { SolutionFormSchema } from '../model/schemas';

export async function sendSolutionRequest(
  data: SolutionFormSchema,
  type: 'solution' | 'service',
  name: string
) {
  try {
    const { firstName, lastName, email, website, phone, company, industry, marketingChallenge } =
      data;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const msg = {
      to: process.env.ADMIN_EMAIL!,
      from: process.env.FROM_EMAIL!,
      subject: `New ${type === 'solution' ? 'Solution' : 'Service'} Request`,
      html: `
        <h2>${name} ${type === 'solution' ? 'Solution' : 'Service'}</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Company Name:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Marketing Challenge:</strong> ${marketingChallenge}</p>
      `,
    };

    await sgMail.send(msg);

    return { message: 'Fund access request sent successfully.' };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return { message: 'Failed to send fund access request.', error: errorMessage };
  }
}
