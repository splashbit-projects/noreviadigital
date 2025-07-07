import type { Metadata } from 'next';

import { AboutCta, AboutHero, HowWeAct, WhyChoose } from './components';

export const metadata: Metadata = {
  title: 'Complex Marketing Expertise',
  description:
    'Explore how we deliver marketing outcomes—see our process, project benchmarks, and the performance standards clients rely on.',
  openGraph: {
    title: 'Complex Marketing Expertise',
    description:
      'Explore how we deliver marketing outcomes—see our process, project benchmarks, and the performance standards clients rely on.',
    images: 'https://noreviadigital.com/images/meta.png',
  },
};

export default function AboutUs() {
  return (
    <>
      <AboutHero />

      <HowWeAct />
      <WhyChoose />
      <AboutCta />
    </>
  );
}
