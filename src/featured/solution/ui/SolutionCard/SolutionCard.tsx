'use client';

import { cn } from '@/shared/lib/helpers/styles';
import { Button } from '@/shared/ui/kit';

import { useSolutionPopup } from '../../model/store';
import type { Solution } from '../../model/types';
import st from './SolutionCard.module.scss';

export const SolutionCard = ({
  description,
  includes,
  price,
  purpose,
  subtitle,
  title,
}: Solution) => {
  const { setSolution, setPopupOpened } = useSolutionPopup();

  const onRequestHandle = () => {
    setSolution({ description, includes, price, purpose, subtitle, title });
    setPopupOpened(true);
  };

  return (
    <section className={st.layout}>
      <section className={st.contentLayout}>
        <div className={st.headingLayout}>
          <div className={st.heading}>
            <h3>{title}</h3>
            <p className={st.subtitle}>{subtitle}</p>
          </div>
          <p className={st.text}>{description}</p>
        </div>
        <section className={st.content}>
          <section className={st.contentText}>
            <div className={st.purposeLayout}>
              <p className={cn(st.text, st.purposeHeading)}>Who It’s For:</p>
              <p className={st.text}>{purpose.join(', ')}</p>
            </div>
          </section>
          <section className={st.priceLayout}>
            <div className={st.priceInner}>
              <p className={st.text}>Starting from:</p>
              <h3>{price}</h3>
            </div>
            <Button color="white" onClick={onRequestHandle} plus>
              Request Solution
            </Button>
          </section>
        </section>
      </section>
      <div className={st.includesLayout}>
        <p>What’s Included:</p>
        <ul className={st.list}>
          {includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
