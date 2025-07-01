'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './ReadyToMarket.module.scss';

import { useGeneralRequestPopup } from '@/featured/general-request/model/store';

export const ReadyToMarket = () => {
  const t = useTranslations('readyToMarket');

  const { setOpen } = useGeneralRequestPopup();

  const onOpenGeneralRequestHandle = () => setOpen(true);

  return (
    <section className={styles.readyToMarket}>
      <video src="/videos/readyToMarket.mp4" autoPlay muted loop />
      <div className={styles.readyToMarket__container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.readyToMarket__body}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: t('text', {
                fallback:
                  'Let’s talk about your goals — and how we’ll hit them. Book a <br/>consultation or request a custom quote.',
              }),
            }}
          />
          <h2
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Ready to Market Smarter?',
              }),
            }}
          />
          <Button url="#" color="grey" plus size="small" onClick={onOpenGeneralRequestHandle}>
            {t('button', {
              fallback: 'Request a Proposal',
            })}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
