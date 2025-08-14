import { Work_Sans } from 'next/font/google';
import LocalFont from 'next/font/local';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import { cn } from '@/shared/lib/helpers/styles';
import { CursorFollower, Footer, Header, Preloader } from '@/shared/ui/components';
import { LenisScrollProvider } from '@/shared/ui/kit';

import '@/shared/lib/styles/null.scss';
import '@/shared/lib/styles/base.scss';

import { GeneralRequestPopup } from '@/featured/general-request/ui/GeneralRequestPopup';

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
  title: {
    template: '%s | Norevia Digital',
    default: 'Advertising and Marketing Services | Norevia Digital',
  },
  description:
    'Discover performance-driven advertising and marketing services for businesses ready to scale, convert, and lead in competitive markets.',
  openGraph: {
    title: {
      template: '%s | Norevia Digital',
      default: 'Advertising and Marketing Services | Norevia Digital',
    },
    description:
      'Discover performance-driven advertising and marketing services for businesses ready to scale, convert, and lead in competitive markets.',
    images: 'https://noreviadigital.com/images/meta.png',
  },
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
      <GoogleAnalytics gaId="G-03VHZK1CNT" />
      <body className={cn(workSans.variable, kola.variable)}>
        <NextIntlClientProvider>
          <LenisScrollProvider>
            <Preloader />
            <Header />
            {children}
            <Footer />
            <CursorFollower />
            <GeneralRequestPopup />
          </LenisScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
