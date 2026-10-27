export const themeStorageKey = 'portfolio-theme';

export const themes = [
  { id: 'studio', label: 'Studio', description: 'Warm paper. Editorial character.' },
  { id: 'terminal', label: 'Terminal', description: 'Precise lines. Electric green.' },
  { id: 'prismatic', label: 'Prismatic', description: 'Iridescent color. Luminous glass.' },
] as const;

export type Theme = (typeof themes)[number]['id'];

export function isTheme(value: unknown): value is Theme {
  return themes.some(theme => theme.id === value);
}

// Apply a saved preference before the page paints. Storage can be unavailable
// in private or embedded contexts; the portfolio still defaults to Studio.
export const themeInitScript = `(() => {
  let theme = 'studio';
  try {
    const saved = localStorage.getItem('${themeStorageKey}');
    if (['studio', 'terminal', 'prismatic'].includes(saved)) theme = saved;
  } catch {}
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === 'studio' ? '#f4f2eb' : theme === 'terminal' ? '#0c1110' : '#100d20';
})();`;
