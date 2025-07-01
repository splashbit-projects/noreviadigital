'use client';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit';

import styles from './AboutHero.module.scss';

export const AboutHero = () => {
  const t = useTranslations('aboutHero');
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section className={styles.about_hero} ref={ref}>
      <div className={'_container'}>
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
          <Button url="/contact-us" color="white" plus buttonType="link">
            {t('button', {
              fallback: 'Contact Us',
            })}
          </Button>
        </motion.div>

        <div className={styles.about_hero__image}>
          <video src="/videos/about-us/aboutHero.mp4" autoPlay muted loop />
        </div>
      </div>
    </section>
  );
};
