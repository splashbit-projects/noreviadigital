'use client';

import dynamic from 'next/dynamic';

import { useTranslations } from 'next-intl';

import { Transform3D } from '@/shared/ui/kit';

import st from './SolutionList.module.scss';

import type { Solution } from '@/featured/solution/model/types';
import { SolutionCard } from '@/featured/solution/ui/SolutionCard';

const SolutionPopup = dynamic(
  () => import('@/featured/solution/ui/SolutionPopup').then((mod) => mod.SolutionPopup),
  {
    ssr: false,
  }
);

export const SolutionList = () => {
  const t = useTranslations('solution.solutionList');

  const solutions: Solution[] = [
    {
      title: t('0.title'),
      subtitle: t('0.subtitle'),
      description: t('0.description'),
      purpose: [t('0.purpose.0'), t('0.purpose.1'), t('0.purpose.2'), t('0.purpose.3')],
      price: '€20,000',
      includes: [
        t('0.includes.0'),
        t('0.includes.1'),
        t('0.includes.2'),
        t('0.includes.3'),
        t('0.includes.4'),
        t('0.includes.5'),
        t('0.includes.6'),
      ],
    },
    {
      title: t('1.title'),
      subtitle: t('1.subtitle'),
      description: t('1.description'),
      purpose: [t('1.purpose.0'), t('1.purpose.1'), t('1.purpose.2'), t('1.purpose.3')],
      price: '€25,000',
      includes: [
        t('1.includes.0'),
        t('1.includes.1'),
        t('1.includes.2'),
        t('1.includes.3'),
        t('1.includes.4'),
        t('1.includes.5'),
        t('1.includes.6'),
        t('1.includes.7'),
        t('1.includes.8'),
        t('1.includes.9'),
        t('1.includes.10'),
        t('1.includes.11'),
      ],
    },
    {
      title: t('2.title'),
      subtitle: t('2.subtitle'),
      description: t('2.description'),
      purpose: [t('2.purpose.0'), t('2.purpose.1'), t('2.purpose.2')],
      price: '€30,000',
      includes: [
        t('2.includes.0'),
        t('2.includes.1'),
        t('2.includes.2'),
        t('2.includes.3'),
        t('2.includes.4'),
        t('2.includes.5'),
        t('2.includes.6'),
        t('2.includes.7'),
        t('2.includes.8'),
        t('2.includes.9'),
      ],
    },
    {
      title: t('3.title'),
      subtitle: t('3.subtitle'),
      description: t('3.description'),
      purpose: [t('3.purpose.0'), t('3.purpose.1'), t('3.purpose.2')],
      price: '€35,000',
      includes: [
        t('3.includes.0'),
        t('3.includes.1'),
        t('3.includes.2'),
        t('3.includes.3'),
        t('3.includes.4'),
        t('3.includes.5'),
        t('3.includes.6'),
        t('3.includes.8'),
        t('3.includes.9'),
        t('3.includes.10'),
        t('3.includes.11'),
      ],
    },
    {
      title: t('4.title'),
      subtitle: t('4.subtitle'),
      description: t('4.description'),
      price: '€38,000',
      purpose: [t('4.purpose.0'), t('4.purpose.1'), t('4.purpose.2')],
      includes: [
        t('4.includes.0'),
        t('4.includes.1'),
        t('4.includes.2'),
        t('4.includes.3'),
        t('4.includes.4'),
        t('4.includes.5'),
        t('4.includes.6'),
        t('4.includes.7'),
        t('4.includes.8'),
        t('4.includes.9'),
        t('4.includes.10'),
        t('4.includes.11'),
        t('4.includes.12'),
        t('4.includes.13'),
        t('4.includes.14'),
        t('4.includes.15'),
      ],
    },
    {
      title: t('5.title'),
      subtitle: t('5.subtitle'),
      description: t('5.description'),
      price: '€23,000',
      purpose: [t('5.purpose.0'), t('5.purpose.1'), t('5.purpose.2')],
      includes: [
        t('5.includes.0'),
        t('5.includes.1'),
        t('5.includes.2'),
        t('5.includes.3'),
        t('5.includes.4'),
        t('5.includes.5'),
        t('5.includes.6'),
        t('5.includes.7'),
      ],
    },
  ];

  return (
    <div className="_container">
      <section className={st.cards}>
        {solutions.map((solution) => (
          <Transform3D key={solution.title}>
            <SolutionLayout {...solution} />
          </Transform3D>
        ))}
      </section>
      <SolutionPopup />
    </div>
  );
};

const SolutionLayout = (props: Solution) => (
  <article className={st.cardLayout}>
    <SolutionCard {...props} />
  </article>
);
