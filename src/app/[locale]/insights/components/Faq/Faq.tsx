'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { TransformScale } from '@/shared/ui/kit';

import styles from './Faq.module.scss';

export const Faq = ({ data }: { data: { title: string; description: string }[] }) => {
  const t = useTranslations('faq');

  return (
    <section className={styles.faq}>
      <div className={'_container'}>
        <div className={styles.faq__body}>
          <div className={styles.faq__col}>
            <TransformScale>
              <h2>
                {t('title', {
                  fallback: 'Your questions - our answers',
                })}
              </h2>
            </TransformScale>
          </div>
          <div className={styles.faq__col}>
            <div className={styles.faq__content}>
              {data.map((item, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: false }}
                    className={styles.divider}
                    transition={{
                      duration: 1.5,
                      ease: 'easeInOut',
                    }}
                  ></motion.div>
                  <div className={styles.item}>
                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
