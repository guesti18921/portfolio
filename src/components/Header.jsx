import ThemeToggle from "./ThemeToggle";

export default function Header({ theme, onToggle }) {
  return (
    <header className="wrap header__inner">
      <span className="mono-tag">А.К.</span>
      <ThemeToggle theme={theme} onToggle={onToggle} />
    </header>
  );
}