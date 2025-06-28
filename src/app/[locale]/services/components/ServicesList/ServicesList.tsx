'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { ServiceArrow } from '@/shared/ui/icons';
import { Button, Transform3D, TransformScale } from '@/shared/ui/kit';

import styles from './ServicesList.module.scss';

export const ServicesList = () => {
  const t = useTranslations('services');

  const data = [
    {
      title: 'Advertising Services',
      text: 'From high-impact digital ads to traditional placements, our advertising services are built to meet your audience wherever they are. Whether through search, social, TV, or billboards, we design campaigns that generate visibility, drive traffic, and convert attention into results.',
      link: '#',
      video: '/videos/service1.mp4',
    },
    {
      title: 'Marketing Services',
      text: "Marketing is more than exposure — it's alignment, consistency, and momentum. From SEO to branding, content to automation, we deliver complete marketing frameworks connecting strategy with execution and scale.",
      link: '#',
      video: '/videos/service2.mp4',
    },
    {
      title: 'Strategic & Diagnostic Services',
      text: 'If you’re not sure what’s broken — start here. These services audit your funnel, sharpen your offer, and define where your marketing should go next. Perfect for companies preparing to scale or pivot.',
      link: '#',
      video: '/videos/service3.mp4',
    },
    {
      title: 'Technical Services & Performance Support',
      text: 'Behind every successful campaign is clean data, smooth tracking, and high-functioning infrastructure. We implement the technical layer that makes your marketing measurable, optimised, and ready to perform.',
      link: '#',
      video: '/videos/service4.mp4',
    },
    {
      title: 'Content & Creative Support',
      text: 'Strong campaigns need the right story, the right visuals, and the right angle. From scripts to sales materials, we create assets that speak, persuade effectively, and perform under pressure.',
      link: '#',
      video: '/videos/service5.mp4',
    },
    {
      title: 'Client Education & Retention Services',
      text: 'Our support doesn’t end with delivery. We provide ongoing education, communication integration, and high-level briefings to help your internal teams stay aligned and your leadership informed.',
      link: '#',
      video: '/videos/service6.mp4',
    },
  ];

  return (
    <TransformScale>
      <section className={styles.services}>
        {data.map((item, index) => (
          <Transform3D key={index}>
            <Link href={item.link} className={styles.services__item}>
              <div className={styles.services__col}>
                <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className={styles.text}>{item.text}</p>
                <ServiceArrow />
              </div>
              <div className={styles.services__col}>
                <video src={item.video} autoPlay muted loop />
              </div>
            </Link>
          </Transform3D>
        ))}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.services__button}
        >
          <Button url="#" color="grey" plus size="large" buttonType="link">
            {t('button', {
              fallback: 'Explore Full Services',
            })}
          </Button>
        </motion.div>
      </section>
    </TransformScale>
  );
};
