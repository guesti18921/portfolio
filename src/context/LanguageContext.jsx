import { useEffect, useState } from "react";
import { LanguageContext } from "./languageContext";

function getInitialLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;
  return navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

