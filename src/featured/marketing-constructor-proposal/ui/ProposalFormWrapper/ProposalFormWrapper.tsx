'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { TransformScale } from '@/shared/ui/kit';

import styles from './ProposalFormWrapper.module.scss';

import {
  MessageSent,
  ProposalFormFields,
  ProposalFormServices,
} from '@/featured/marketing-constructor-proposal';

export const ProposalFormWrapper = () => {
  const t = useTranslations('marketingConstructor');

  return (
    <>
      <TransformScale>
        <section className={styles.proposalFormWrapper}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('proposalFormWrapper.title', {
              fallback: 'Your package',
            })}
          </motion.h2>
          <div className={styles.proposalFormWrapper__content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <ProposalFormFields />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <ProposalFormServices />
            </motion.div>
          </div>
        </section>
      </TransformScale>
      <MessageSent />
    </>
  );
};
