import { getTranslations } from 'next-intl/server';

import { TwoLinks } from '@/shared/ui/components/two-links/TwoLinks';

import { MarketingGoing } from '../services/components';
import { Hero, ReadyMadePackages, SolutionList } from './components';

export default async function SolutionsPage() {
  const t = await getTranslations('solution.twoLinks');

  return (
    <main>
      <Hero />
      <ReadyMadePackages />
      <SolutionList />
      <MarketingGoing />
      <TwoLinks
        title={t('title')}
        description={t('description')}
        items={[
          {
            title: t('0'),
            url: '/services',
          },
          {
            title: t('1'),
            url: '/',
            generalRequest: true,
          },
        ]}
      />
    </main>
  );
}
