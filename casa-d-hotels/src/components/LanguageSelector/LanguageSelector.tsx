import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

type languageOption = { language: string; code: string };

const languageOptions: languageOption[] = [
  {
    language: "EN",
    code: "en",
  },
  { language: "IT", code: "it" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const storedLanguage =
    localStorage.getItem("appLanguage") || i18next.language;
  const [language, setLanguage] = useState(storedLanguage);

  const toggleLanguage = () => {
    const nextLanguage = language === "en" ? "it" : "en";
    setLanguage(nextLanguage);
    i18next.changeLanguage(nextLanguage);
    localStorage.setItem("appLanguage", nextLanguage);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const currentLanguageLabel =
    languageOptions.find((opt) => opt.code === language)?.language || "EN";

  return (
    <button
      onClick={toggleLanguage}
      className="border border-[#CA9D75] w-12 h-12 rounded-full text-[#CA9D75] hover:bg-[#CA9D75] hover:text-white transition-colors"
    >
      {currentLanguageLabel}
    </button>
  );
};

export default LanguageSelector;
