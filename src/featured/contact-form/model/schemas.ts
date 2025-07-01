import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  projectDetails: z.string().min(1, { message: 'Please provide project details' }),
  file: z.instanceof(File).optional(),
  consent: z.literal(true, {
    message: 'You must confirm that you are an accredited or professional investor',
  }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
