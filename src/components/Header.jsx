import ThemeToggle from "./ThemeToggle";

export default function Header({ theme, onToggle }) {
  return (
    <header className="wrap header__inner">
      <div />
      <div className="header__controls">
        <ThemeToggle theme={theme} onToggle={onToggle} />
      </div>
    </header>
  );
}
