'use server'

import { Locale, defaultLocale, locales } from '@/src/i18n/config';
import { cookies, headers } from 'next/headers';

const COOKIE_NAME = 'CZIMBERCSIK_LOCALE';

export async function getUserLocale() {
  const cookieLocale = (await cookies()).get(COOKIE_NAME)?.value;
  const headerLocale = (await headers()).get('accept-language')?.slice(0, 2);

  const detectedLocale = cookieLocale || headerLocale || defaultLocale;

  if(!locales.includes(detectedLocale as Locale)) {
    return defaultLocale;
  }

  return detectedLocale as Locale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}