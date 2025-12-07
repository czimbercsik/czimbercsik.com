import { getOgLocale, Locale } from "@/src/i18n/config";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Calistoga, Inter } from 'next/font/google';
import { twMerge } from "tailwind-merge";
import "./globals.css";

const calistoga = Calistoga({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    metadataBase: new URL('https://czimbercsik.com'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(', '),
    authors: [{ name: 'Bence Czimbercsik', url: 'https://czimbercsik.com' }],
    creator: 'Bence Czimbercsik',
    publisher: 'Bence Czimbercsik',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'none',
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://czimbercsik.com',
      siteName: t('title'),
      images: '/opengraph-image.jpg',
      locale: getOgLocale(locale as Locale),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/opengraph-image.jpg'],
    },
  };
}

export const runtime = 'edge';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={twMerge(
          calistoga.variable,
          inter.variable,
          "bg-zinc-900 text-white antialiased font-sans"
        )}
      >
         <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
