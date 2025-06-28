'use client';

import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import { ServicesList } from '../ServicesList/ServicesList';
import st from './Services.module.scss';

export const Services = () => {
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
          Tailored Services for Every Marketing Need
        </motion.h2>
      </div>
      <ServicesList />
    </section>
  );
};
