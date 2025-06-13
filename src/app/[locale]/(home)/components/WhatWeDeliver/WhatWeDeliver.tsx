'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { TransformScale } from '@/shared/ui/kit';

import styles from './WhatWeDeliver.module.scss';

export const WhatWeDeliver = () => {
  const t = useTranslations('whatWeDeliver');

  const data = [
    {
      title: t('title1', {
        fallback: 'We Are Strategic:',
      }),
      text: t('text1', {
        fallback: 'Every campaign starts with data and ends with ROI.',
      }),
    },
    {
      title: t('title2', {
        fallback: 'We Are Creative:',
      }),
      text: t('text2', {
        fallback: 'Messaging that connects. Design that converts.',
      }),
    },
    {
      title: t('title3', {
        fallback: 'We Are Full-Spectrum:',
      }),
      text: t('text3', {
        fallback: 'Online, offline, and everything in between.',
      }),
    },
  ];

  return (
    <section className={styles.whatWeDeliver}>
      <div className={'_container'}>
        <TransformScale>
          <h2>
            {t('title', {
              fallback: 'What We Deliver',
            })}
          </h2>
        </TransformScale>
        <div className={styles.whatWeDeliver__content}>
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
