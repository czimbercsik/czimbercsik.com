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

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
    description: t('description')
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
