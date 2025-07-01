'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './NeedAssistance.module.scss';

export const NeedAssistance = () => {
  const t = useTranslations('needAssistance');

  return (
    <section className={styles.needAssistance}>
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.needAssistance__body}
        >
          <h2
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Need Assistance?',
              }),
            }}
          />
          <Button url="/contact-us" color="grey" plus size="small" buttonType="link">
            {t('button', {
              fallback: 'Contact Us',
            })}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
