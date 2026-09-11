import { profile } from "../data/projects";

export default function Contact() {
  return (
    <section className="wrap contact" id="contact">
      <h2 className="section-title">Связаться</h2>
      <hr className="rule" />
      <div className="contact__row">
        <a className="contact__link" href={`mailto:${profile.email}`}>
          Написать на почту
          <span className="mono-tag contact__value">{profile.email}</span>
        </a>

        <a className="contact__link"
          href={`https://t.me/${profile.telegram}`}
          target="_blank"
          rel="noreferrer"
        >
          Написать в Telegram
          <span className="mono-tag contact__value">@{profile.telegram}</span>
        </a>
      </div>
    </section>
  );
}