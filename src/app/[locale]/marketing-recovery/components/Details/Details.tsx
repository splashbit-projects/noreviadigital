'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { ArrowDownRight } from '@/shared/ui/icons';

import styles from './Details.module.scss';

export const Details = () => {
  const t = useTranslations('details');

  const data = [
    {
      title: t('title1', {
        fallback: 'No calls or <br/>purchases',
      }),
      description: t('description1', {
        fallback: "You’re running ads but not getting any real customers.",
      }),
    },
    {
      title: t('title2', {
        fallback: 'No ads seen <br/>at all',
      }),
      description: t('description2', {
        fallback: "You don’t see your own ads anywhere — and neither do your clients.",
      }),
    },
    {
      title: t('title3', {
        fallback: 'No orders <br/>from your <br/>website',
      }),
      description: t('description3', {
        fallback: 'Visitors arrive but don’t place orders, sign up, or contact you.',
      }),
    },
    {
      title: t('title4', {
        fallback: 'Irrelevant <br/>customer <br/>requests',
      }),
      description: t('description4', {
        fallback: "People are misunderstanding your offer or asking about things you don’t sell.",
      }),
    },
  ];

  return (
    <section className={styles.details}>
      <div className={'_container'}>
        <div className={styles.details__content}>
          {data.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
              key={index}
            >
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
              <ArrowDownRight />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
