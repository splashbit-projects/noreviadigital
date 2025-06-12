import {
  HomeHero,
  MarketingBudgets,
  MarketingOffTrack,
  ReadyToMarket,
  Services,
  WhatWeDeliver,
  WhyChooseUs,
} from './components';

export default function Home() {
  return (
    <>
      <HomeHero />
      <MarketingBudgets />
      <WhatWeDeliver />
      <Services />
      <MarketingOffTrack />
      <WhyChooseUs />
      <ReadyToMarket />
    </>
  );
}
