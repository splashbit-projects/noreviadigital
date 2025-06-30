import {
  Details,
  DoYouKnow,
  HowResponds,
  MarketingHero,
  NotisingSigns,
  TimeToAct,
} from './components';

import { UrgentRequestPopup } from '@/featured/urgent-request';

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
