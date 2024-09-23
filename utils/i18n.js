import i18n from "i18next";

import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      morning: "Morning",
      signup: "Sign Up",
      existingUser: "Existing User",
      onboard1stScreen: "Welcome to Lumi",
      onboard2ndScreen: "Be health Conscious",
      onboard3rdScreen: "Download Now",
    },
  },
  bn: {
    translation: {
      morning: "সকাল",
      signup: "সাইন আপ ",
      existingUser: "পূর্ববর্তী ব্যাবহারকারী ",
      onboard1stScreen: "লুমিতে স্বাগতম",
      onboard2ndScreen: "স্বাস্থ্য সচেতন হউন ",
      onboard3rdScreen: "এখনই ডাওনলোড করুন",
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "bn",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
