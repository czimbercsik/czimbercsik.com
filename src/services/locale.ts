'use server'

import { Locale, defaultLocale } from '@/src/i18n/config';
import { cookies, headers } from 'next/headers';

const COOKIE_NAME = 'CZIMBERCSIK_LOCALE';

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value ||
    (await headers()).get('accept-language')?.slice(0, 2) ||
    defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}