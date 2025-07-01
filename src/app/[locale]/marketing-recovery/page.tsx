import type { Metadata } from 'next';

import {
  Details,
  DoYouKnow,
  HowResponds,
  MarketingHero,
  NotisingSigns,
  TimeToAct,
} from './components';

import { UrgentRequestPopup } from '@/featured/urgent-request';

export const metadata: Metadata = {
  title: 'Urgent Marketing Recovery',
  description:
    'Fix what’s broken. Explore recovery strategies designed to revive stalled campaigns, wasted ad spend, or declining brand performance.',
  openGraph: {
    title: 'Urgent Marketing Recovery',
    description:
      'Fix what’s broken. Explore recovery strategies designed to revive stalled campaigns, wasted ad spend, or declining brand performance.',
    images: 'https://noreviadigital.com/images/meta.png',
  },
};

export default function MarketingConstructor() {
  return (
    <>
      <MarketingHero />
      <DoYouKnow />
      <HowResponds />
      <NotisingSigns />
      <Details />
      <TimeToAct />
      <UrgentRequestPopup />
    </>
  );
}
