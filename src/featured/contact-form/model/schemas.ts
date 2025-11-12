import type { useTranslations } from 'next-intl';
import { z } from 'zod';

export const getContactSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    firstName: z
      .string()
      .min(1, { message: t('errors.firstName', { fallback: 'First name is required' }) }),
    lastName: z
      .string()
      .min(1, { message: t('errors.lastName', { fallback: 'Last name is required' }) }),
    email: z
      .string()
      .email({ message: t('errors.email', { fallback: 'Please enter a valid email address' }) }),
    phone: z
      .string()
      .min(1, { message: t('errors.phone', { fallback: 'Phone number is required' }) }),
    projectDetails: z.string().min(1, {
      message: t('errors.projectDetails', { fallback: 'Please provide project details' }),
    }),
    file: z.instanceof(File).optional(),
    consent: z.literal(true, {
      message: t('errors.consent', {
        fallback: 'You must confirm that you are an accredited or professional investor',
      }),
    }),
  });

export type ContactSchema = z.infer<ReturnType<typeof getContactSchema>>;
