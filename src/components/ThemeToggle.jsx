export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      <span className="mono-tag">{isDark ? "тёмная" : "светлая"}</span>
    </button>
  );
}