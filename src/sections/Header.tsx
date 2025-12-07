"use client"
import { Locale } from '@/src/i18n/config';
import { setUserLocale } from '@/src/services/locale';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useLocale, useTranslations } from "next-intl";
import { startTransition } from 'react';
import { FaGlobeEurope } from "react-icons/fa";

const languages = [
  { code: 'en', icon: "🇬🇧", label: 'English' },
  { code: 'hu', icon: "🇭🇺", label: 'Magyar' },
] as const;

export const Header = () => {
  const t = useTranslations('Header');
  const locale = useLocale();

  function changeLocale(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <header className="flex justify-center md:justify-end items-center fixed top-3 w-full z-10 gap-2">
      <nav className="md:absolute md:left-1/2 md:-translate-x-1/2 flex gap-1 p-0.5 border border-white/10 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">{t('home')}</a>
        <a href="#projects" className="nav-item">{t('projects')}</a>
        <a href="#about" className="nav-item">{t('about')}</a>
      </nav>
      <div className="flex gap-1 p-0.5 border border-white/10 rounded-full bg-white/10 backdrop-blur md:mr-4">
        <Menu>
          <MenuButton className="nav-item" suppressHydrationWarning>
            <FaGlobeEurope />
            <span>{locale.toUpperCase()}</span>
          </MenuButton>
          <MenuItems anchor="bottom end" className="flex flex-col items-center p-2 mt-2 gap-2 bg-white/10 backdrop-blur rounded-sm text-white/70">
            {languages.map(lang => (
              <MenuItem key={lang.code}>
                <button className={`
                group flex gap-2 px-2 py-1 hover:bg-white/10 hover:text-white data-focus:bg-white/5 transition duration-300 hover:cursor-pointer rounded-full ${
                  locale === lang.code
                    ? 'bg-white/10 font-semibold'
                    : ''
                  }
                `} onClick={() => changeLocale(lang.code)}>
                  <span>{lang.icon}</span>
                  <span>{lang.label}</span>
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
};
