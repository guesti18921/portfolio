import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header({ theme, onToggle }) {
  return (
    <header className="wrap header__inner">
      <div />
      <div className="header__controls">
        <LanguageToggle />
        <ThemeToggle theme={theme} onToggle={onToggle} />
      </div>
    </header>
  );
}