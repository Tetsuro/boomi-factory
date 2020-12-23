import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import fr from "./locales/fr";
import jp from "./locales/jp";

const resources = {
  en: en,
  fr: fr,
  jp: jp,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  // Set to "." to allow for nested keys.
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
