'use client';

import Link from 'next/link';

import st from './TwoLinks.module.scss';

import { useGeneralRequestPopup } from '@/featured/general-request/model/store';

export const TwoLinks = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: { title: string; url: string; generalRequest?: boolean }[];
}) => {
  return (
    <div className="_container">
      <section className={st.whereToStart}>
        <section className={st.heading}>
          <h2>{title}</h2>
          <p>{description}</p>
        </section>
        <section className={st.cards}>
          {items.map((item, i) => (
            <Card key={item.title + i} {...item} />
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
