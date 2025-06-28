'use client';

import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './MarketingGoing.module.scss';

export const MarketingGoing = () => {
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
          <h2>
            Marketing going off track?
            <br />
            We’ll fix it — fast. 
          </h2>
          <Button url="#" color="grey" plus size="small" buttonType="link">
            Get Immediate Help
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
