import { z } from 'zod';

export const urgentRequestSchema = z.object({
  firstName: z.string().nonempty({ message: 'First name is required' }),
  lastName: z.string().nonempty({ message: 'Last name is required' }),
  website: z.string().nonempty({ message: 'Website is required' }),
  companyName: z.string().optional(),
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  phone: z.string().nonempty({ message: 'Phone is required' }),
  description: z.string().optional(),
  consent: z.literal(true, {
    message: 'You must confirm that you are an accredited or professional investor',
  }),
});

export type UrgentRequestValues = z.infer<typeof urgentRequestSchema>;
