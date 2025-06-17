import { BuildYourOwn, MarketingHero } from './components';

import { ReadyToMarket } from '@/app/[locale]/(home)/components';
import { ProposalFormWrapper } from '@/featured/marketing-constructor-proposal';

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
