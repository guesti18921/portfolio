import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { profile } from "./data/projects";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <Header theme={theme} onToggle={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Contact />
        <footer className="footer wrap">
  <div className="footer__inner mono-tag">
    <span>{profile.name}</span>
    <span>{new Date().getFullYear()}</span>
  </div>
</footer>
      </main>
    </>
  );
}