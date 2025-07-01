import { TwoLinks } from '@/shared/ui/components/two-links/TwoLinks';

import { MarketingGoing } from '../services/components';
import { Hero, ReadyMadePackages, SolutionList } from './components';

export default function SolutionsPage() {
  return (
    <main>
      <Hero />
      <ReadyMadePackages />
      <SolutionList />
      <MarketingGoing />
      <TwoLinks
        title="Not Sure What Services You Need?"
        description="We understand — sometimes it's hard to match your needs to specific services. That’s why we offer two easy ways to move forward:"
        items={[
          {
            title: 'Explore our full range of individual marketing and advertising services.',
            url: '/services',
          },
          {
            title: 'Tell us your goals — we’ll help you shape the right marketing approach.',
            url: '/',
            generalRequest: true,
          },
        ]}
      />
    </main>
  );
}
