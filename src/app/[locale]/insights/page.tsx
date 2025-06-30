import { InsightsHero, InsightsLoop, TimeToAct } from './components';

import { UrgentRequestPopup } from '@/featured/urgent-request';

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
