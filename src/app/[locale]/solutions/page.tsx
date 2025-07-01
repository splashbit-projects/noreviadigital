import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { TwoLinks } from '@/shared/ui/components/two-links/TwoLinks';

import { MarketingGoing } from '../services/components';
import { Hero, ReadyMadePackages, SolutionList } from './components';

export const metadata: Metadata = {
  title: 'Complex Marketing Solutions',
  description:
    'Discover marketing and advertising solutions tailored to the exact trigger your business is facing — from low lead flow to weak brand recall.',
  openGraph: {
    title: 'Complex Marketing Solutions',
    description:
      'Discover marketing and advertising solutions tailored to the exact trigger your business is facing — from low lead flow to weak brand recall.',
    images: 'https://noreviadigital.com/images/meta.png',
  },
};

export default async function SolutionsPage() {
  const t = await getTranslations('solutionsPage.twoLinks');

  return (
    <main>
      <Hero />
      <ReadyMadePackages />
      <SolutionList />
      <MarketingGoing />
      <TwoLinks
        title={t('title', { fallback: 'Not Sure What Services You Need?' })}
        description={t('description', {
          fallback:
            'We understand — sometimes it’s hard to match your needs to specific services. That’s why we offer two easy ways to move forward:',
        })}
        items={[
          {
            title: t('0', {
              fallback: 'Explore our full range of individual marketing and advertising services.',
            }),
            url: '/services',
          },
          {
            title: t('1', {
              fallback: 'Tell us your goals — we’ll help you shape the right marketing approach.',
            }),
            url: '/',
            generalRequest: true,
          },
        ]}
      />
    </main>
  );
}
