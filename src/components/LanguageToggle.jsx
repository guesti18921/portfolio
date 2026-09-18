import { useLanguage } from "../context/languageContext";

function RuFlag() {
  return (
    <svg viewBox="0 0 24 16" width="20" height="14" aria-hidden="true">
      <rect width="24" height="16" fill="#fff" />
      <rect y="5.33" width="24" height="5.33" fill="#0039a6" />
      <rect y="10.67" width="24" height="5.33" fill="#d52b1e" />
    </svg>
  );
}

function GbFlag() {
  return (
    <svg viewBox="0 0 24 16" width="20" height="14" aria-hidden="true">
      <rect width="24" height="16" fill="#00247d" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="2.4" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#cf142b" strokeWidth="1.2" />
      <path d="M12 0V16M0 8H24" stroke="#fff" strokeWidth="4" />
      <path d="M12 0V16M0 8H24" stroke="#cf142b" strokeWidth="2.2" />
    </svg>
  );
}

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const isEn = lang === "en";

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-toggle__flag ${!isEn ? "is-active" : ""}`}
        onClick={() => setLang("ru")}
        aria-label="Русский"
        aria-pressed={!isEn}
      >
        <RuFlag />
      </button>
      <button
        type="button"
        className={`lang-toggle__flag ${isEn ? "is-active" : ""}`}
        onClick={() => setLang("en")}
        aria-label="English"
        aria-pressed={isEn}
      >
        <GbFlag />
      </button>
      <span className={`lang-toggle__pill ${isEn ? "is-right" : ""}`} />
    </div>
  );
}
