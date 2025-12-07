export type Locale = (typeof locales)[number];

export const locales = ['en', 'hu'] as const;
export const defaultLocale: Locale = 'en';

export const ogLocaleMap: Record<Locale, string> = {
  en: 'en_US',
  hu: 'hu_HU',
};

export function getOgLocale(locale: Locale): string {
  return ogLocaleMap[locale] ?? ogLocaleMap[defaultLocale];
}