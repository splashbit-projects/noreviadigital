'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './ReadyToMarket.module.scss';

export const ReadyToMarket = () => {
  const t = useTranslations('readyToMarket');

  return (
    <section className={styles.readyToMarket}>
      <Image src="/images/home/ready.png" alt="ready-to-market" width={1920} height={1080} />
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
          <Button url="#" color="grey" plus size="small" buttonType="link">
            {t('button', {
              fallback: 'Request a Proposal',
            })}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
