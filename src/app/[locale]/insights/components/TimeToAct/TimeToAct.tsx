'use client';

import { motion } from 'framer-motion';
//import { useLenis } from 'lenis/react';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './TimeToAct.module.scss';

import { useUrgentRequestStore } from '@/featured/urgent-request';

export const TimeToAct = () => {
  const t = useTranslations('isightsTimeToAct');
  const { setPopupOpened } = useUrgentRequestStore();
  //const lenis = useLenis();

  const handleUrgentRequest = () => {
    setPopupOpened(true);
    document.body.style.overflow = 'hidden';
    //lenis?.stop();
  };

  return (
    <section className={styles.timeToAct}>
      <video src="/videos/readyToMarket.mp4" autoPlay muted loop />
      <div className={styles.timeToAct__container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.timeToAct__body}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: t('text', {
                fallback:
                  'If your marketing efforts are failing or your campaigns are going off-track, waiting only <br/>makes it worse. We’re ready to step in, assess fast, and get you back on course.',
              }),
            }}
          />
          <h2
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'It’s Time to Act',
              }),
            }}
          />
          <Button url="#" color="grey" plus size="small" onClick={handleUrgentRequest}>
            {t('button', {
              fallback: 'Urgent Assistance',
            })}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
