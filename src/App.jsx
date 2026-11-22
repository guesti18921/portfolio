import { useEffect, useRef } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { projectsData, profileData, contactInfo } from "./data/projects";
import "./portfolio-v2.css";
import iqnixLogin from "./assets/iqnix-login.png";

const PARTICLES_CONFIG = {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#FFFFFF"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 100,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.8,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 10
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
let particlesLoader;
function loadParticles() {
  if (window.particlesJS) return Promise.resolve();
  if (!particlesLoader) {
    particlesLoader = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `${import.meta.env.BASE_URL}particles.min.js`;
      script.onload = resolve;
      script.onerror = () => { script.remove(); particlesLoader = undefined; reject(new Error("Particles could not be loaded.")); };
      document.head.appendChild(script);
    });
  }
  return particlesLoader;
}

function Icon({ type }) {
  if (type === "mail") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>;
  if (type === "up") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m5 14 7-7 7 7M12 7v13"/></svg>;
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.55.1.76-.24.76-.53v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.04-1.14 3.04-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08v3.05c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"/></svg>;
}

function Stars() {
  const host = useRef(null);
  useEffect(() => {
    let cancelled = false;
    let instance;
    let resize;
    loadParticles().then(() => {
      if (cancelled || !host.current) return;
      window.pJSDom = window.pJSDom || [];
      const config = JSON.parse(JSON.stringify(PARTICLES_CONFIG));
      config.interactivity.events.resize = false;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) config.particles.move.enable = false;
      window.particlesJS(host.current.id, config);
      instance = window.pJSDom[window.pJSDom.length - 1];
      resize = () => {
        const p = instance.pJS;
        p.canvas.w = p.canvas.el.offsetWidth * (p.tmp.retina ? p.canvas.pxratio : 1);
        p.canvas.h = p.canvas.el.offsetHeight * (p.tmp.retina ? p.canvas.pxratio : 1);
        p.fn.canvasSize();
        p.fn.vendors.densityAutoParticles();
        if (!p.particles.move.enable) p.fn.particlesDraw();
      };
      window.addEventListener("resize", resize);
    }).catch(() => { /* The page remains usable with its plain background. */ });
    return () => {
      cancelled = true;
      if (resize) window.removeEventListener("resize", resize);
      if (!instance) return;
      const p = instance.pJS;
      cancelAnimationFrame(p.fn.drawAnimFrame);
      cancelAnimationFrame(p.fn.checkAnimFrame);
      p.particles.move.enable = false;
      // Release the canvas and animation when leaving the home page.
      p.canvas.el.remove();
      window.pJSDom = (window.pJSDom || []).filter(item => item !== instance);
    };
  }, []);
  return <div ref={host} id="portfolio-particles" className="v2-stars" aria-hidden="true" />;
}

function Footer({ home = false, showTop = true }) {
  return <footer className={`v2-footer ${home ? "v2-footer--home" : ""}`}>
    {!home && showTop && <button className="v2-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}><Icon type="up" /></button>}
    <div className="v2-socials">
      <a href={`https://github.com/${contactInfo.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon /></a>
      <a href={`mailto:${contactInfo.email}`} aria-label="Send an email"><Icon type="mail" /></a>
    </div>
  </footer>;
}

function Landing() {
  return <main className="v2-landing">
    <Stars />
    <div className="v2-landing-inner">
      <div className="v2-emblem" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M6 16 14 6h20l8 10-18 26Z"/><path d="M6 16h36M14 6l5 10 5 26 5-26 5-10M19 16l5-10 5 10"/></svg></div>
      <div className="v2-identity"><h1>M1STRELL</h1><p>{profileData.en.name}<br />Portfolio</p></div>
      <nav className="v2-home-nav" aria-label="Main navigation"><Link to="/about">About</Link><Link to="/projects">Projects</Link></nav>
    </div>
    <Footer home />
  </main>;
}

const quietStars = Array.from({ length: 90 }, (_, index) => {
  const fraction = (seed) => { const n = Math.sin(seed * 127.1 + 311.7) * 43758.5453; return n - Math.floor(n); };
  return {
    "--x": `${fraction(index + 1) * 100}%`,
    "--y": `${fraction(index + 101) * 100}%`,
    "--size": `${index % 9 === 0 ? 2.5 : index % 3 === 0 ? 1.8 : 1}px`,
    "--blink": `${3 + fraction(index + 201) * 7}s`,
    "--drift": `${20 + fraction(index + 301) * 25}s`,
    "--phase": `${-fraction(index + 401) * 30}s`,
    "--dx": `${(fraction(index + 501) - .5) * 55}px`,
    "--dy": `${(fraction(index + 601) - .5) * 45}px`,
    "--star-color": index % 7 === 0 ? "#e9b8ce" : index % 3 === 0 ? "#a8cfff" : "#e2edff",
  };
});

function QuietStars() {
  return <div className="v2-quiet-stars" aria-hidden="true">{quietStars.map((style, index) => <span key={index} style={style} />)}</div>;
}

function PageLayout({ children, starry = false }) {
  return <div className={`v2-inner-page ${starry ? "v2-starry" : ""}`}>
    {starry && <QuietStars />}
    <header className="v2-nav"><Link className="v2-brand" to="/">M1STRELL</Link>
      <nav aria-label="Main navigation"><NavLink to="/" end>Home</NavLink><NavLink to="/about">About</NavLink><NavLink to="/projects">Projects</NavLink></nav>
    </header>
    {children}
    <Footer showTop={window.location.pathname !== "/about"} />
  </div>;
}

const selectedProjects = projectsData.en.filter(project => ["iqnix-ptm", "todo-personal", "tallyn", "geralt-world"].includes(project.id));

function About() {
  const columns = [
    [{ name: "HTML", icon: "html5" }, { name: "React", icon: "react" }, { name: "PHP", icon: "php" }],
    [{ name: "JavaScript", icon: "javascript" }, { name: "CSS", icon: "css3" }, { name: "MySQL", icon: "mysql" }, { name: "Git", icon: "git" }],
    [{ name: "Laravel", icon: "laravel" }, { name: "Supabase", icon: "supabase" }, { name: "Vite", icon: "vitejs" }],
  ];
  return <PageLayout starry><main className="v2-about v2-container"><h1 className="v2-page-title">About</h1>
    <div className="v2-about-layout">
      <div className="v2-about-intro">
        <svg className="v2-person" viewBox="0 0 200 220" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <defs><linearGradient id="person-gradient" x1="30" y1="20" x2="175" y2="200" gradientUnits="userSpaceOnUse"><stop stopColor="#4bace5"/><stop offset=".5" stopColor="#a87ca6"/><stop offset="1" stopColor="#ff5279"/></linearGradient></defs>
          <g stroke="url(#person-gradient)"><path d="M100 13C66 13 61 42 62 68s11 43 38 43 37-17 38-43-4-55-38-55Z"/><path d="M73 121c-11 10-21 14-35 19-16 6-17 29-15 45 39 26 115 26 154 0 2-16 1-39-15-45-14-5-24-9-35-19"/></g>
        </svg>
        <div className="v2-about-text">
          <p>Hi, I'm Artem.</p>
          <p>I work on websites and web applications while learning frontend and backend development. My projects include a cost planning tool, a task organizer with account synchronization, and a fan site about The Witcher.</p>
          <p>I use these projects to practise building interfaces, connecting databases, and publishing applications online.</p>
        </div>
      </div>
      <div className="v2-tech-area">
        <h2 className="v2-visually-hidden">Technologies I've worked with</h2>
        <div className="v2-tech-columns">{columns.map((column, index) => <ul className="v2-tech-column" key={index}>{column.map(tech => <li className="v2-tech-card" key={tech.name}><img src={`${import.meta.env.BASE_URL}tech-icons/${tech.icon}.svg`} alt="" width="52" height="52"/><span>{tech.name}</span></li>)}</ul>)}</div>
      </div>
    </div>
  </main></PageLayout>;
}

function RepositoryLink({ project }) {
  const label = project.liveUrl ? "Learn more" : "Source code";
  if (project.repositories?.length > 1) return <details className="v2-repositories"><summary className="v2-project-link"><span>{label}</span></summary><div>{project.repositories.map(repo => <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer">{repo.label}</a>)}</div></details>;
  const url = project.repoUrl || project.repositories?.[0]?.url;
  return url ? <a className="v2-project-link" href={url} target="_blank" rel="noopener noreferrer"><span>{label}</span></a> : null;
}

function Projects() {
  return <PageLayout starry><main className="v2-projects v2-container"><h1 className="v2-page-title">Projects</h1>
    <div className="v2-project-list">{selectedProjects.map((project, index) => {
      const { liveUrl } = project;
      const Preview = liveUrl ? "a" : "div";
      const previewLinkProps = liveUrl ? {
        href: liveUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Open ${project.title} live app`,
      } : undefined;

      return <article className={`v2-project ${index % 2 ? "v2-project--reverse" : ""}`} key={project.id}>
        <Preview
          className={`v2-project-image${project.previews ? " v2-project-image--screens" : ""}${project.id === "todo-personal" ? " v2-project-image--portrait" : ""}`}
          {...previewLinkProps}
        >
          {project.previews ? project.previews.map(({ src, alt, width, height }) => (
            <img key={src} src={src} alt={alt} width={width} height={height} loading="lazy" />
          )) : (
            <img src={project.id === "iqnix-ptm" ? iqnixLogin : project.image} alt={`${project.title} application preview`} loading="lazy" />
          )}
        </Preview>
        <div className="v2-project-copy"><p className="v2-project-tag">{project.tag}</p><h2>{project.title}<span className="v2-project-subtitle">{project.subtitle}</span></h2><p>{project.description}</p><ul className="v2-stack">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
          <div className="v2-project-actions">
            {liveUrl ? (
              <a className="v2-project-link" href={liveUrl} target="_blank" rel="noopener noreferrer">
                <span>{project.liveLabel ?? "Live app"}</span>
              </a>
            ) : (
              <p className="v2-project-demo-status">{project.demoNote}</p>
            )}
            {project.downloadUrl && (
              <a className="v2-project-link" href={project.downloadUrl}>
                <span>Download Android APK</span>
              </a>
            )}
            <RepositoryLink project={project} />
          </div>
        </div>
      </article>;
    })}</div>
  </main></PageLayout>;
}

function NotFound() {
  return <PageLayout><main className="v2-about v2-container"><h1 className="v2-page-title">Page not found</h1><Link className="v2-button" to="/">Back to home</Link></main></PageLayout>;
}

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.lang = "en";
    document.body.classList.add("portfolio-v2");
    return () => document.body.classList.remove("portfolio-v2");
  }, []);
  useEffect(() => { window.scrollTo(0, 0); document.title = `${pathname === "/" ? "Home" : pathname === "/about" ? "About" : pathname === "/projects" ? "Projects" : "Page not found"} | M1STRELL`; }, [pathname]);
  return <Routes><Route path="/" element={<Landing />} /><Route path="/about" element={<About />} /><Route path="/projects" element={<Projects />} /><Route path="*" element={<NotFound />} /></Routes>;
}
