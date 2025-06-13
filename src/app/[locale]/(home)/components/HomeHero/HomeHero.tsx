'use client';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit';

import styles from './HomeHero.module.scss';

export const HomeHero = () => {
  const t = useTranslations('homeHero');
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section className={styles.home_hero} ref={ref}>
      <div className={'_container'}>
        <motion.div
          className={styles.home_hero__content}
          style={{
            opacity,
            scale,
          }}
        >
          <p>
            {t('subtitle', {
              fallback:
                'Clear strategy, clean execution, and measurable results — for businesses that expect more.',
            })}
          </p>
          <h1
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'We Build Marketing <br/>That Works.',
              }),
            }}
          />
          <Button url="/" color="white" plus>
            {t('button', {
              fallback: 'Get Your Solution',
            })}
          </Button>
        </motion.div>

        <div className={styles.home_hero__image}>
          <video src="/videos/homeHero.mp4" autoPlay muted loop />
        </div>
      </div>
    </section>
  );
};
