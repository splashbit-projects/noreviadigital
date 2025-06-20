import { Work_Sans } from 'next/font/google';
import LocalFont from 'next/font/local';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import { CursorFollower, Footer, Header } from '@/shared/ui/components';
import { LenisScrollProvider } from '@/shared/ui/kit';

import '@/shared/lib/styles/null.scss';
import '@/shared/lib/styles/base.scss';

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
});

const kola = LocalFont({
  src: [
    { path: '../fonts/Kola-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Kola-Regular.woff', weight: '400', style: 'normal' },
    { path: '../fonts/Kola-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/Kola-Regular.eot', weight: '400', style: 'normal' },
  ],
  variable: '--font-kola',
});

export const metadata: Metadata = {
  title: 'Norevia',
  description: 'Norevia',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${workSans.variable} ${kola.variable}`}>
        <NextIntlClientProvider>
          <LenisScrollProvider>
            <Header />
            {children}
            <Footer />
            <CursorFollower />
          </LenisScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
