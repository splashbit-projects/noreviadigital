import type { Metadata } from 'next';

import { BuildYourOwn, MarketingHero } from './components';

import { ReadyToMarket } from '@/app/[locale]/(home)/components';
import { ProposalFormWrapper } from '@/featured/marketing-constructor-proposal';

export const metadata: Metadata = {
  title: 'Marketing Constructor',
  description:
    'Build a personalized marketing service package by selecting only the tools, channels, and support your business actually needs.',
  openGraph: {
    title: 'Marketing Constructor',
    description:
      'Build a personalized marketing service package by selecting only the tools, channels, and support your business actually needs.',
    images: 'https://noreviadigital.com/images/meta.png',
  },
};

export default function MarketingConstructor() {
  return (
    <>
      <MarketingHero />
      <BuildYourOwn />
      <ProposalFormWrapper />
      <ReadyToMarket />
    </>
  );
}
