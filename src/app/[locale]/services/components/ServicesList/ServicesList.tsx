'use client';

import { useTranslations } from 'next-intl';

import { ServiceArrow } from '@/shared/ui/icons';
import { Transform3D, TransformScale } from '@/shared/ui/kit';

import styles from './ServicesList.module.scss';

import { useSolutionPopup } from '@/featured/solution/model/store';
import type { Service } from '@/featured/solution/model/types';
import { SolutionPopup } from '@/featured/solution/ui/SolutionPopup';

export const ServicesList = () => {
  const t = useTranslations('servicesPage.services');
  const { setService, setPopupOpened } = useSolutionPopup();

  const onRequestHandle = (item: Service) => {
    setService(item);
    setPopupOpened(true);
  };

  const data = [
    {
      title: t('0.title', { fallback: 'Advertising Services' }),
      text: t('0.text', {
        fallback:
          'From high-impact digital ads to traditional placements, our advertising services are built to meet your audience wherever they are. Whether through search, social, TV, or billboards, we design campaigns that generate visibility, drive traffic, and convert attention into results.',
      }),
      video: '/videos/service1.mp4',
    },
    {
      title: t('1.title', { fallback: 'Marketing Services' }),
      text: t('1.text', {
        fallback:
          "Marketing is more than exposure — it's alignment, consistency, and momentum. From SEO to branding, content to automation, we deliver complete marketing frameworks connecting strategy with execution and scale.",
      }),
      video: '/videos/service2.mp4',
    },
    {
      title: t('2.title', { fallback: 'Strategic & Diagnostic Services' }),
      text: t('2.text', {
        fallback:
          'If you’re not sure what’s broken — start here. These services audit your funnel, sharpen your offer, and define where your marketing should go next. Perfect for companies preparing to scale or pivot.',
      }),
      video: '/videos/service3.mp4',
    },
    {
      title: t('3.title', { fallback: 'Technical Services & Performance Support' }),
      text: t('3.text', {
        fallback:
          'Behind every successful campaign is clean data, smooth tracking, and high-functioning infrastructure. We implement the technical layer that makes your marketing measurable, optimised, and ready to perform.',
      }),
      video: '/videos/service4.mp4',
    },
    {
      title: t('4.title', { fallback: 'Content & Creative Support' }),
      text: t('4.text', {
        fallback:
          'Strong campaigns need the right story, the right visuals, and the right angle. From scripts to sales materials, we create assets that speak, persuade effectively, and perform under pressure.',
      }),
      video: '/videos/service5.mp4',
    },
    {
      title: t('5.title', { fallback: 'Client Education & Retention Services' }),
      text: t('5.text', {
        fallback:
          'Our support doesn’t end with delivery. We provide ongoing education, communication integration, and high-level briefings to help your internal teams stay aligned and your leadership informed.',
      }),
      video: '/videos/service6.mp4',
    },
  ];

  return (
    <TransformScale>
      <section className={styles.services}>
        {data.map((item, index) => (
          <Transform3D key={index}>
            <a className={styles.services__item} onClick={() => onRequestHandle(item)}>
              <div className={styles.services__col}>
                <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className={styles.text}>{item.text}</p>
                <ServiceArrow />
              </div>
              <div className={styles.services__col}>
                <video src={item.video} autoPlay muted loop />
              </div>
            </a>
          </Transform3D>
        ))}
      </section>
      <SolutionPopup />
    </TransformScale>
  );
};
