import { profile } from "../data/projects";

export default function Hero() {
  return (
    <section className="hero wrap">
      <p className="mono-tag hero__kicker">{profile.role}</p>
      <h1 className="hero__title">
        <span className="hero__line">Строю системы,</span>
        <span className="hero__line">которые считают,</span>
        <span className="hero__line">учатся и работают.</span>
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