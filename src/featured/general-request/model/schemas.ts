import { z } from 'zod';

export const generalRequestSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  industry: z.string().min(1),
  website: z.string().min(1),
  company: z.string().min(1),
  urgency: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  goal: z.string().min(1),
  marketingChallenge: z.string().min(1),
  consent: z.literal(true, {
    message: 'You must confirm that you are an accredited or professional investor',
  }),
});

export type GeneralRequestSchema = z.infer<typeof generalRequestSchema>;
