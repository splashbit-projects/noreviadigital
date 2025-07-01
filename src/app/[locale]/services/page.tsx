import type { Metadata } from 'next';

import { Hero, Industries, MarketingGoing, Services, WhereToStart } from './components';

export const metadata: Metadata = {
  title: 'Business Marketing and Advertising Services',
  description:
    'Discover flexible marketing and advertising services designed for companies of all sizes. Choose what fits, combine what works, and move forward with clarity.',
  openGraph: {
    title: 'Business Marketing and Advertising Services',
    description:
      'Discover flexible marketing and advertising services designed for companies of all sizes. Choose what fits, combine what works, and move forward with clarity.',
    images: 'https://noreviadigital.com/images/meta.png',
  },
};

export default function ServicesPage() {
  return (
    <section>
      <Hero />
      <Services />
      <Industries />
      <MarketingGoing />
      <WhereToStart />
    </section>
  );
}
