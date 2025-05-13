'use client';

import { useTranslation } from 'react-i18next';

export const useDirection = (): 'ltr' | 'rtl' => {
  const { i18n } = useTranslation();
  const lang =
    typeof window !== 'undefined'
      ? localStorage.getItem('language') || i18n.language
      : i18n.language;

  return lang === 'ar' ? 'rtl' : 'ltr';
};
