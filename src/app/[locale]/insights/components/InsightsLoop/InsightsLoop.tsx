'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button, TransformScale } from '@/shared/ui/kit';

import styles from './InsightsLoop.module.scss';

export const InsightsLoop = () => {
  const t = useTranslations('insightsLoop');

  const data = [
    {
      title: t('article1.title', {
        fallback: 'Google Ads vs Social Media: What Really Brings the Best ROI?',
      }),
      subtitle: t('article1.subtitle', {
        fallback: 'Compare real use cases for B2B and B2C',
      }),
      text: t('article1.text', {
        fallback:
          'Two powerful channels. One marketing budget. Which delivers better returns? This breakdown explores how intent, targeting, cost, and funnel stage define which channel wins—Google Ads or paid social.',
      }),
      image: '/images/insights/article1.png',
      link: '/insights/google-ads-vs-social-media-what-really-brings-the-best-roi',
    },
    {
      title: t('article2.title', {
        fallback: 'Programmatic Advertising in 2025: Smarter, Faster, More Profitable',
      }),
      subtitle: t('article2.subtitle', {
        fallback: 'Discover how to make every impression count',
      }),
      text: t('article2.text', {
        fallback:
          'Automation meets precision. Learn how programmatic ads use AI, real-time bidding, and cross-channel delivery to maximize ROI—at scale.',
      }),
      image: '/images/insights/article2.png',
      link: '/insights/programmatic-advertising-in-2025-smarter-faster-more-profitable',
    },
    {
      title: t('article3.title', {
        fallback: 'Why Your Marketing Isn’t Working (And How Strategy Fixes It)',
      }),
      subtitle: t('article3.subtitle', {
        fallback: 'Fix the strategy. Watch everything improve.',
      }),
      text: t('article3.text', {
        fallback:
          'Campaigns failing quietly? It’s not your channels—it’s your lack of strategy. Learn how to build data-driven marketing that aligns audience, message, and results',
      }),
      image: '/images/insights/article3.png',
      link: '/insights/why-your-marketing-isnt-working-and-how-strategy-fixes-it',
    },
    {
      title: t('article4.title', {
        fallback: 'Tracking Made Simple: UTMs, Pixels & Analytics That Work',
      }),
      subtitle: t('article4.subtitle', {
        fallback: 'Clear data. Smarter decisions. Better ROI.',
      }),
      text: t('article4.text', {
        fallback:
          'Not a tech expert? No problem. This guide breaks down how to track what matters—so you know exactly where your marketing money is going and what it brings back.',
      }),
      image: '/images/insights/article4.png',
      link: '/insights/tracking-made-simple-utm-pixels-analytics-that-work',
    },
  ];

  return (
    <TransformScale>
      <section className={styles.insightsLoop}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.insightsLoop__title}
        >
          <h2>{t('title', { fallback: 'Latest From the Field' })}</h2>
          <p>
            {t('text', {
              fallback:
                'Real takeaways, practical strategies, and expert commentary — straight from our team.',
            })}
          </p>
        </motion.div>
        {data.map((item, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.insightsLoop__item}
            key={index}
          >
            <Image src={item.image} alt={item.title} width={1320} height={400} />
            <div className={styles.content}>
              <div>
                <h3>{item.title}</h3>
                <h5>
                  <Image src={'/images/plus.svg'} alt="plus" width={8} height={8} />
                  <span>{item.subtitle}</span>
                  <Image src={'/images/plus.svg'} alt="plus" width={8} height={8} />
                </h5>
                <p>{item.text}</p>
                <Button url={item.link} color="black" plus size="small" buttonType="link">
                  {t('button', { fallback: 'Read Article' })}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </TransformScale>
  );
};
