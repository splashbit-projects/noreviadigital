import type { Metadata } from 'next';

import { Hero, ReachOut } from './components';

import { ContactForm } from '@/featured/contact-form/ui/contact-form';

export const metadata: Metadata = {
  title: 'Contact Marketing Experts | Norevia Digital',
  description:
    'Reach out to discuss your marketing needs, request a proposal, or ask questions about how we can support your growth.',
  openGraph: {
    title: 'Contact Marketing Experts | Norevia Digital',
    description:
      'Reach out to discuss your marketing needs, request a proposal, or ask questions about how we can support your growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Marketing Experts | Norevia Digital',
    description:
      'Reach out to discuss your marketing needs, request a proposal, or ask questions about how we can support your growth.',
  },
};

export default function ContactsPage() {
  return (
    <main>
      <Hero />
      <ReachOut />
      <ContactForm />
    </main>
  );
}
