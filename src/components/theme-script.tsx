// Inline script — runs before paint to avoid a flash of the wrong theme.
const SCRIPT = `
(function () {
  var stored = localStorage.getItem('theme');
  var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
