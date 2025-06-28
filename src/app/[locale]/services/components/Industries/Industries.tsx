'use client';

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
  return (
    <div className="_container">
      <section className={st.industries}>
        <section className={st.content}>
          <div>
            <h2>Industries We Serve</h2>
            <p>We know how to position, promote, and grow businesses in:</p>
          </div>
          <p>
            We speak your industry’s language — and your customer’s.
            <br />
            From strategy to execution, we tailor campaigns that match your niche, drive real
            demand, and earn lasting trust.
          </p>
        </section>
        <Cards />
      </section>
    </div>
  );
};

const Cards = () => {
  const items = [
    { icon: TechIcon, name: 'Tech & SaaS' },
    { icon: FinanceIcon, name: 'Finance & Fintech' },
    { icon: RetailIcon, name: 'Retail & Ecommerce' },
    { icon: HealthcareIcon, name: 'Healthcare & Life Sciences' },
    { icon: PropertyIcon, name: 'Property & Real Estate' },
    { icon: EducationIcon, name: 'Education & Training' },
    { icon: TravelIcon, name: 'Travel & Hospitality' },
    { icon: ProfessionalServicesIcon, name: 'Professional Services' },
    { icon: B2bIcon, name: 'B2B & Enterprise' },
  ];

  return (
    <section className={st.cardsContainer}>
      <section className={st.cards}>
        {items.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </section>
      <div className={st.mobileCard}>
        <Card icon={B2bIcon} name="B2B & Enterprise" />
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
