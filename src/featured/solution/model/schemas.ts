import { z } from 'zod';

export const solutionFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  industry: z.string().min(1, { message: 'Industry is required' }),
  website: z.string().min(1, { message: 'Website is required' }),
  company: z.string().min(1, { message: 'Company name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  marketingChallenge: z.string().min(1, { message: 'Please describe your marketing challenge' }),
  consent: z.literal(true, {
    message: 'You must confirm that you are an accredited or professional investor',
  }),
});

export type SolutionFormSchema = z.infer<typeof solutionFormSchema>;
