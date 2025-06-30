'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { TransformScale } from '@/shared/ui/kit';

import styles from './WhyChoose.module.scss';

export const WhyChoose = () => {
  const t = useTranslations('whyChoose');

  const data = [
    {
      title: t('title1', {
        fallback: 'Problem-Focused',
      }),
      text: t('text1', {
        fallback:
          'We address real marketing issues with tailored solutions — not generic service bundles.',
      }),
    },
    {
      title: t('title2', {
        fallback: 'Transparent Process',
      }),
      text: t('text2', {
        fallback:
          'You see the full picture: pricing, timelines, execution, and results. No hidden steps.',
      }),
    },
    {
      title: t('title3', {
        fallback: 'Strategic Execution',
      }),
      text: t('text3', {
        fallback:
          'We bring expert strategy and in-house delivery together — no handoffs, no disconnect.',
      }),
    },
  ];

  return (
    <section className={styles.whyChoose}>
      <div className={'_container'}>
        <TransformScale>
          <h2>
            {t('title', {
              fallback: 'Why Choose Norevia Digital',
            })}
          </h2>
        </TransformScale>
        <div className={styles.whyChoose__content}>
          {data.map((item, index) => (
            <div key={index}>
              <div className={styles.item}>
                <span>{item.title}</span>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.text,
                  }}
                />
              </div>
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: false }}
                className={styles.divider}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
              ></motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
