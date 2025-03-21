import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../Locales/en.json";
import es from "../Locales/es.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }, 
    },
    fallbackLng: "en",
    debug: true, 
    interpolation: { escapeValue: false }, 
  });

export default i18n;
