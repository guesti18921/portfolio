import { contactInfo, uiText } from "../data/projects";
import { useLanguage } from "../context/languageContext";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { lang } = useLanguage();
  const [ref, isVisible] = useReveal();

  return (
    <section ref={ref} className={`wrap contact reveal ${isVisible ? "is-visible" : ""}`} id="contact">
      <h2 className="section-title">{uiText[lang].contactTitle}</h2>
      <hr className="rule" />
      <div className="contact__row">
        <a className="contact__link" href={`mailto:${contactInfo.email}`}>
          {uiText[lang].emailLabel}
          <span className="mono-tag contact__value">{contactInfo.email}</span>
        </a>

        <a className="contact__link"
          href={`https://t.me/${contactInfo.telegram}`}
          target="_blank"
          rel="noreferrer"
        >
          {uiText[lang].telegramLabel}
          <span className="mono-tag contact__value">@{contactInfo.telegram}</span>
        </a>

        <a className="contact__link"
          href={`https://github.com/${contactInfo.github}`}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <span className="mono-tag contact__value">@{contactInfo.github}</span>
        </a>
      </div>
    </section>
  );
}
