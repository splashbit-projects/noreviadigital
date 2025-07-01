import type { Metadata } from 'next';

import { InsightsHero, InsightsLoop, TimeToAct } from './components';

import { UrgentRequestPopup } from '@/featured/urgent-request';

export const metadata: Metadata = {
  title: 'Marketing Strategy Insights & Trends',
  description:
    'Discover expert articles on what drives performance in digital marketing—strategy, execution, data, and everything in between.',
  openGraph: {
    title: 'Marketing Strategy Insights & Trends',
    description:
      'Discover expert articles on what drives performance in digital marketing—strategy, execution, data, and everything in between.',
    images: 'https://noreviadigital.com/images/meta.png',
  },
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <InsightsLoop />
      <TimeToAct />
      <UrgentRequestPopup />
    </>
  );
}
