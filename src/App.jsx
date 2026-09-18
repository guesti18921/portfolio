import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { profileData } from "./data/projects";
import { useLanguage } from "./context/languageContext";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <Header theme={theme} onToggle={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <footer className="footer wrap">
        <div className="footer__inner mono-tag">
          <span>{profileData[lang].name}</span>
        </div>
      </footer>
    </>
  );
}
