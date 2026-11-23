import { profileData } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const [ref, isVisible] = useReveal();

  return (
    <section ref={ref} className={`hero wrap reveal ${isVisible ? "is-visible" : ""}`}>
      <p className="mono-tag hero__kicker">{profileData.role}</p>
      <h1 className="hero__title">
        <span className="hero__line">Building systems</span>
        <span className="hero__line">that calculate,</span>
        <span className="hero__line">learn, and work.</span>
      </h1>
      <p className="hero__bio">{profileData.bio}</p>
      <dl className="hero__facts">
        {profileData.facts.map((f) => (
          <div className="hero__fact" key={f.label}>
            <dt className="mono-tag">{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
