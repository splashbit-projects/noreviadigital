import React from 'react';

import type { Metadata } from 'next';

import { LegalContent, NeedAssistance } from '../components';
import st from './page.module.scss';

import { getPost, getPostSlugs } from '@/featured/policy/policy';

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

  return (
    <>
      <section className={st.postTitle}>
        <div className="_container">
          <div className={st.postTitle__content}>
            <h1>{post.title}</h1>
          </div>
        </div>
      </section>
      <LegalContent content={post.body as string} />
      <NeedAssistance />
    </>
  );
}
