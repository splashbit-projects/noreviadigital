'use client';

import { useTranslations } from 'next-intl';
import type { JSX } from 'react';

import { B2bIcon } from '@/shared/ui/icons/domains/b2b';
import { EducationIcon } from '@/shared/ui/icons/domains/education';
import { FinanceIcon } from '@/shared/ui/icons/domains/finance';
import { HealthcareIcon } from '@/shared/ui/icons/domains/healthcare';
import { ProfessionalServicesIcon } from '@/shared/ui/icons/domains/professional-services';
import { PropertyIcon } from '@/shared/ui/icons/domains/property';
import { RetailIcon } from '@/shared/ui/icons/domains/retail';
import { TechIcon } from '@/shared/ui/icons/domains/tech';
import { TravelIcon } from '@/shared/ui/icons/domains/travel';

import st from './Industries.module.scss';

export const Industries = () => {
  const t = useTranslations('servicesPage.industries');

  return (
    <div className="_container">
      <section className={st.industries}>
        <section className={st.content}>
          <div>
            <h2>{t('title', { fallback: 'Industries We Serve' })}</h2>
            <p>
              {t('text', { fallback: 'We know how to position, promote, and grow businesses in:' })}
            </p>
          </div>
          <p>
            {t('text2.0', { fallback: 'We speak your industry’s language — and your customer’s.' })}
            <br />
            {t('text2.1', {
              fallback:
                'From strategy to execution, we tailor campaigns that match your niche, drive real demand, and earn lasting trust.',
            })}
          </p>
        </section>
        <Cards />
      </section>
    </div>
  );
};

const Cards = () => {
  const t = useTranslations('servicesPage.industries');

  const items = [
    { icon: TechIcon, name: t('items.0', { fallback: 'Tech & SaaS' }) },
    { icon: FinanceIcon, name: t('items.1', { fallback: 'Finance & Fintech' }) },
    { icon: RetailIcon, name: t('items.2', { fallback: 'Retail & Ecommerce' }) },
    { icon: HealthcareIcon, name: t('items.3', { fallback: 'Healthcare & Life Sciences' }) },
    { icon: PropertyIcon, name: t('items.4', { fallback: 'Property & Real Estate' }) },
    { icon: EducationIcon, name: t('items.5', { fallback: 'Education & Training' }) },
    { icon: TravelIcon, name: t('items.6', { fallback: 'Travel & Hospitality' }) },
    { icon: ProfessionalServicesIcon, name: t('items.7', { fallback: 'Professional Services' }) },
    { icon: B2bIcon, name: t('items.8', { fallback: 'B2B & Enterprise' }) },
  ];

  return (
    <section className={st.cardsContainer}>
      <section className={st.cards}>
        {items.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </section>
      <div className={st.mobileCard}>
        <Card icon={B2bIcon} name={t('8', { fallback: 'B2B & Enterprise' })} />
      </div>
    </section>
  );
};

const Card = ({ icon: Icon, name }: { icon: () => JSX.Element; name: string }) => (
  <article className={st.card}>
    <Icon />
    <p>{name}</p>
  </article>
);
