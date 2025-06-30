'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Transform3D, TransformScale } from '@/shared/ui/kit';

import styles from './WhyWeStarted.module.scss';

export const WhyWeStarted = () => {
  const t = useTranslations('whyWeStarted');

  const data = [
    {
      text: t('text1', {
        fallback:
          'Most marketing agencies are stuck in the past. Strategies don’t evolve. Services don’t scale. Outcomes don’t meet expectations.',
      }),
      video: '/videos/about-us/why1.mp4',
    },
    {
      text: t('text2', {
        fallback: 'Norevia Digital was founded to change that.',
      }),
      video: '/videos/about-us/why2.mp4',
    },
    {
      text: t('text3', {
        fallback:
          'We deliver marketing that matches the complexity of today’s business needs — combining advanced strategy, compliant execution, and measurable impact. No shortcuts. No manipulation. No black-hat tactics. Ever.',
      }),
      video: '/videos/about-us/why3.mp4',
    },
  ];

  return (
    <TransformScale>
      <section className={styles.whyWeStarted}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.whyWeStarted__title}
        >
          <h2>{t('title', { fallback: 'Why We Started Norevia Digital' })}</h2>
        </motion.div>
        {data.map((item, index) => (
          <Transform3D key={index}>
            <div className={styles.whyWeStarted__item}>
              <div className={styles.whyWeStarted__col}>
                <video src={item.video} autoPlay muted loop />
              </div>
              <div className={styles.whyWeStarted__col}>
                <p className={styles.text}>{item.text}</p>
              </div>
            </div>
          </Transform3D>
        ))}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.whyWeStarted__text}
        >
          <h5
            dangerouslySetInnerHTML={{
              __html: t('text', {
                fallback: 'Everything we do is real, safe, and <br/>built for sustainable growth.',
              }),
            }}
          />
        </motion.div>
      </section>
    </TransformScale>
  );
};
