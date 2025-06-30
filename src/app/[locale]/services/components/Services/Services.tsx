'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import { ServicesList } from '../ServicesList/ServicesList';
import st from './Services.module.scss';

export const Services = () => {
  const t = useTranslations('servicesPage.services');

  return (
    <section className={st.services}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={st.layout}
        >
          {t('title', { fallback: 'Tailored Services for Every Marketing Need' })}
        </motion.h2>
      </div>
      <ServicesList />
    </section>
  );
};
