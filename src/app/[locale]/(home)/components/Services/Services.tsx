'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { ServiceArrow } from '@/shared/ui/icons';
import { Button, TransformScale } from '@/shared/ui/kit';

import styles from './Services.module.scss';

export const Services = () => {
  const t = useTranslations('services');

  const data = [
    {
      title: t('service1.title', {
        fallback: 'Advertising <br/>Services',
      }),
      text1: t('service1.text', {
        fallback: 'From digital to physical – everywhere your brand should be.',
      }),
      text2: t('service1.text2', {
        fallback:
          'Google Ads, social media campaigns, display banners, video ads, outdoor, print, radio, and TV—we build high-performance campaigns that reach and convert across every channel.',
      }),
      link: '#',
      video: '/videos/service1.mp4',
    },
    {
      title: t('service2.title', {
        fallback: 'Marketing <br/>Strategy & <br/>Consulting',
      }),
      text1: t('service2.text', {
        fallback: 'Smart, data-backed direction tailored to your goals.',
      }),
      text2: t('service2.text2', {
        fallback:
          'Brand strategy, positioning, market research, competitive analysis, conversion optimization, automation—we don’t guess. We engineer your market edge.',
      }),
      link: '#',
      video: '/videos/service2.mp4',
    },
    {
      title: t('service3.title', {
        fallback: 'Content & <br/>Engagement',
      }),
      text1: t('service3.text', {
        fallback: 'Stories, formats, and visuals that drive interaction.',
      }),
      text2: t('service3.text2', {
        fallback:
          'Content marketing, social media management, email campaigns, branding, PR, influencer outreach—strategic and scalable communications that build real connection.',
      }),
      link: '#',
      video: '/videos/service3.mp4',
    },
    {
      title: t('service4.title', {
        fallback: 'Analytics & <br/>Optimization',
      }),
      text1: t('service4.text', {
        fallback: 'Track. Measure. Improve. Repeat.',
      }),
      text2: t('service4.text2', {
        fallback:
          'Campaign performance analysis, marketing analytics, CRM setup, SEO, CRO, automation workflows—turn insight into impact.',
      }),
      link: '#',
      video: '/videos/service4.mp4',
    },
    {
      title: t('service5.title', {
        fallback: 'Event & Offline <br/>Marketing',
      }),
      text1: t('service4.text', {
        fallback: 'Your brand, experienced live.',
      }),
      text2: t('service4.text2', {
        fallback:
          'Event marketing, sponsorship, outdoor campaigns, direct mail—offline channels with online precision.',
      }),
      link: '#',
      video: '/videos/service5.mp4',
    },
  ];

  return (
    <TransformScale>
      <section className={styles.services}>
        {data.map((item, index) => (
          <div key={index} className={'fadeIn3D'}>
            <Link href={item.link} className={styles.services__item}>
              <div className={styles.services__col}>
                <span>0{index + 1}</span>
                <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className={styles.subtitle}>
                  <Image src={'/images/plus.svg'} alt="plus" width={8} height={8} />
                  <span>{item.text1}</span>
                  <Image src={'/images/plus.svg'} alt="plus" width={8} height={8} />
                </p>
                <p className={styles.text}>{item.text2}</p>
                <ServiceArrow />
              </div>
              <div className={styles.services__col}>
                <video src={item.video} autoPlay muted loop />
              </div>
            </Link>
          </div>
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
