'use client';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Transform3D } from '@/shared/ui/kit';
import { Button } from '@/shared/ui/kit';

import styles from './AboutHero.module.scss';

export const AboutHero = () => {
  const t = useTranslations('aboutHero');
  const tw = useTranslations('whyWeStarted');
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const data = [
    {
      text: tw('text1', {
        fallback:
          'Most marketing agencies are stuck in the past. Strategies don’t evolve. Services don’t scale. Outcomes don’t meet expectations.',
      }),
      video: '/videos/about-us/why1.mp4',
    },
    {
      text: tw('text2', {
        fallback: 'Norevia Digital was founded to change that.',
      }),
      video: '/videos/about-us/why2.mp4',
    },
    {
      text: tw('text3', {
        fallback:
          'We deliver marketing that matches the complexity of today’s business needs — combining advanced strategy, compliant execution, and measurable impact. No shortcuts. No manipulation. No black-hat tactics. Ever.',
      }),
      video: '/videos/about-us/why3.mp4',
    },
  ];

  return (
    <section className={styles.about_hero} ref={ref}>
      <div>
        <motion.div
          className={styles.about_hero__content}
          style={{
            opacity,
            scale,
          }}
        >
          <p>
            {t('subtitle', {
              fallback:
                'Built for the reality of modern marketing — precise, adaptive, and results-focused.',
            })}
          </p>
          <h1
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Who We Are',
              }),
            }}
          />
          <Button url="/contacts" color="white" plus buttonType="link">
            {t('button', {
              fallback: 'Contact Us',
            })}
          </Button>
        </motion.div>

        <motion.div className={styles.about_hero__image}>
          <div className={'_container'}>
            <video src="/videos/about-us/aboutHero.mp4" autoPlay muted loop />
          </div>
        </motion.div>

        <section className={styles.whyWeStarted}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.whyWeStarted__title}
          >
            <h2>{tw('title', { fallback: 'Why We Started Norevia Digital' })}</h2>
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
                __html: tw('text', {
                  fallback:
                    'Everything we do is real, safe, and <br/>built for sustainable growth.',
                }),
              }}
            />
          </motion.div>
        </section>
      </div>
    </section>
  );
};
