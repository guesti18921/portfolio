import { profileData } from "../data/projects";
import { useLanguage } from "../context/languageContext";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const { lang } = useLanguage();
  const profile = profileData[lang];
  const [ref, isVisible] = useReveal();

  return (
    <section ref={ref} className={`hero wrap reveal ${isVisible ? "is-visible" : ""}`}>
      <p className="mono-tag hero__kicker">{profile.role}</p>
      <h1 className="hero__title">
        {lang === "ru" ? (
          <>
            <span className="hero__line">Строю системы,</span>
            <span className="hero__line">которые считают,</span>
            <span className="hero__line">учатся и работают.</span>
          </>
        ) : (
          <>
            <span className="hero__line">Building systems</span>
            <span className="hero__line">that calculate,</span>
            <span className="hero__line">learn, and work.</span>
          </>
        )}
      </h1>
      <p className="hero__bio">{profile.bio}</p>
      <dl className="hero__facts">
        {profile.facts.map((f) => (
          <div className="hero__fact" key={f.label}>
            <dt className="mono-tag">{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
