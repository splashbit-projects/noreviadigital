import React from 'react';
import Image from 'next/image';

import type { Metadata } from 'next';

import { Faq, InsightContent, TimeToAct } from '../components';
import st from './page.module.scss';

import { getFaqData, getPost, getPostSlugs } from '@/featured/insights/insights';

type PageParams = { locale: string; slug: string };

export async function generateStaticParams(): Promise<PageParams[]> {
  const locales = ['en', 'de', 'it', 'et'];
  const params: PageParams[] = [];

  for (const locale of locales) {
    const slugs = await getPostSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const { locale, slug } = awaitedParams;
  const post = await getPost(slug, locale);
  const pageTitle = `${post.title}`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: '',
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const awaitedParams = await params;
  const { locale, slug } = awaitedParams;
  const post = await getPost(slug, locale);

  const faq = await getFaqData(slug, locale);

  return (
    <>
      <section className={st.postTitle}>
        <div className="_container">
          <div className={st.postTitle__content}>
            <Image src={post.image} alt={post.title} width={1320} height={400} />
            <h1>{post.title}</h1>
          </div>
        </div>
      </section>
      <InsightContent content={post.body as string} />
      <Faq data={faq} />
      <TimeToAct />
    </>
  );
}
