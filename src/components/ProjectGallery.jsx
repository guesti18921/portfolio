import { useEffect, useRef, useState } from "react";
import "../styles/gallery.css";

export default function ProjectGallery({ shots, projectTitle, lang, accent }) {
  const ru = lang === "ru";
  const [index, setIndex] = useState(0);
  const dialog = useRef(null);
  const [activeShot, setActiveShot] = useState(null);

  useEffect(() => {
    if (!activeShot) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [activeShot]);
  if (!shots?.length) return null;

  const current = index % shots.length;
  const shot = shots[current];
  const change = (step) => setIndex((value) => (value + step + shots.length) % shots.length);

  return (
    <section className="project-gallery" aria-labelledby="project-gallery-title">
      <div className="project-gallery__heading">
        <h2 id="project-gallery-title">{ru ? "Интерфейс проекта" : "Project interface"}</h2>
      </div>
      <figure className="project-detail__shot carousel" style={{ "--accent": accent }}>
        <div className="carousel__stage">
          <img src={shot} alt={`${projectTitle} — ${current + 1}`} draggable="false" />
          {shots.length > 1 && (
            <>
              <button type="button" className="carousel__arrow carousel__arrow--prev"
                aria-label={ru ? "Предыдущее изображение" : "Previous image"}
                onClick={() => change(-1)}>‹</button>
              <button type="button" className="carousel__arrow carousel__arrow--next"
                aria-label={ru ? "Следующее изображение" : "Next image"}
                onClick={() => change(1)}>›</button>
            </>
          )}
        </div>
        <figcaption className="project-gallery__caption">
          <div className="carousel__dots" aria-label={ru ? "Выбор изображения" : "Choose image"}>
            {shots.map((src, i) => (
              <button type="button" key={`${src}-${i}`}
                aria-label={`${ru ? "Изображение" : "Image"} ${i + 1}`}
                aria-pressed={i === current}
                onClick={() => setIndex(i)}><span /></button>
            ))}
          </div>
          <button type="button" className="project-gallery__original" onClick={() => setActiveShot(shot)}>
            {ru ? "Открыть оригинал" : "Open original"}
          </button>
        </figcaption>
      </figure>
      <dialog
        ref={dialog}
        className="original-viewer"
        aria-label={ru ? "Оригинал скриншота" : "Original screenshot"}
        onCancel={(event) => {
          event.preventDefault();
          setActiveShot(null);
        }}
      >
        <div className="original-viewer__toolbar">
          <span>{ru ? "Оригинальный размер · прокрутите для просмотра деталей" : "Original size · scroll to inspect details"}</span>
          <button type="button" onClick={() => setActiveShot(null)}>
            {ru ? "Закрыть · Esc" : "Close · Esc"}
          </button>
        </div>
        <div className="original-viewer__stage" tabIndex={0}>
          {activeShot && <img src={activeShot} alt={projectTitle} draggable="false" />}
        </div>
      </dialog>
    </section>
  );
}
