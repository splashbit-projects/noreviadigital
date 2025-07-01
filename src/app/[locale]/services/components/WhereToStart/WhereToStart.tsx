'use client';

import Link from 'next/link';

import { useTranslations } from 'next-intl';

import st from './WhereToStart.module.scss';

import { useGeneralRequestPopup } from '@/featured/general-request/model/store';

export const WhereToStart = () => {
  const t = useTranslations('servicesPage.whereToStart');

  const items = [
    {
      title: t('0', {
        fallback: 'Discover pre-built packages designed to solve real business challenges.',
      }),
      url: '/solutions',
    },
    {
      title: t('1', {
        fallback:
          'Get personal guidance from our team to map out the right approach for your goals.',
      }),
      url: '/',
    },
  ];

  return (
    <div className="_container">
      <section className={st.whereToStart}>
        <section className={st.heading}>
          <h2>{t('title', { fallback: 'Don’t Know Where to Start?' })}</h2>
          <p>
            {t('text', {
              fallback:
                'We get it — choosing the right service isn’t always obvious. That’s why we offer two simple paths forward:',
            })}
          </p>
        </section>
        <section className={st.cards}>
          {items.map((item, i) => (
            <Card key={item.title + i} {...item} generalRequest={i === 1} />
          ))}
        </section>
      </section>
    </div>
  );
};

const Card = ({
  title,
  url,
  generalRequest,
}: {
  title: string;
  url: string;
  generalRequest?: boolean;
}) => {
  const { setOpen } = useGeneralRequestPopup();

  const onOpenGeneralRequestHandle = () => setOpen(true);

  return (
    <Link
      href={generalRequest ? '#' : url}
      className={st.card}
      onClick={generalRequest ? onOpenGeneralRequestHandle : undefined}
    >
      <p>{title}</p>
      <svg
        style={{ marginLeft: 'auto' }}
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M23.3335 23.3335L56.6668 56.6668M56.6668 56.6668V30.0002M56.6668 56.6668H30.0002"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};
