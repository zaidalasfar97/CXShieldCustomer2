import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';
import ar from './dictionaries/ar.json';
import en from './dictionaries/en.json';

export const locales = {
  ar: {
    translation: ar,
  },
  en: {
    translation: en,
  },
};

export const DEFAULT_LOCALE = 'en';

export const defaultLanguage = DEFAULT_LOCALE;

export const currentLanguage = i18n.language || defaultLanguage;

const useLanguageStorage: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    AsyncStorage.getItem('language')
      .then(lang => {
        if (lang) {
          if (lang === 'ar') {
            I18nManager.forceRTL(true);
          } else {
            I18nManager.forceRTL(false);
          }
          return callback(lang);
        } else {
          callback(DEFAULT_LOCALE);
        }
      })
      .catch(_e => {
        callback(DEFAULT_LOCALE);
      });
  },
  init: () => null,
  cacheUserLanguage: async (language: string) => {
    if (language === 'ar') {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
    AsyncStorage.setItem('language', language);
  },
};

i18n
  .use(useLanguageStorage)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    resources: locales,
    compatibilityJSON: 'v3',
    react: {
      useSuspense: false,
    },
  });

export default i18n;
