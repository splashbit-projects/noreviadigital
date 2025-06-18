import { z } from 'zod';

export const proposalSchema = z.object({
  caseDescription: z.string().nonempty({ message: 'Case description is required' }),
  website: z.string().nonempty({ message: 'Website is required' }),
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  phone: z.string().nonempty({ message: 'Phone is required' }),
  name: z.string().nonempty({ message: 'Name is required' }),
  selectedServices: z.string().nonempty({ message: 'No services selected' }),
});

export type ProposalFormValues = z.infer<typeof proposalSchema>;
