'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSetter = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem('language') || i18n.language || 'en';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return null;
};

export default LanguageSetter;
