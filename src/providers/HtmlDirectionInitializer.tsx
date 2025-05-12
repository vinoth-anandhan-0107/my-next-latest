'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HtmlDirectionInitializer = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Get language from localStorage
    const storedLang = localStorage.getItem('language');
    const nextLang = storedLang || i18n.language;

    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
    }

    // Set <html lang> and <html dir>
    const dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLang;
    document.documentElement.dir = dir;
  }, []);

  return null;
};

export default HtmlDirectionInitializer;
