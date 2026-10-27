'use client';

import { Gem, Palette, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { isTheme, themes, themeStorageKey, type Theme } from '@/lib/themes';

const icons = { studio: Palette, terminal: Terminal, prismatic: Gem };
const browserColors = { studio: '#f4f2eb', terminal: '#0c1110', prismatic: '#100d20' };

export function ThemeSelector() {
  const [activeTheme, setActiveTheme] = useState<Theme>('studio');

  function applyTheme(theme: Theme) {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', browserColors[theme]);
    setActiveTheme(theme);
  }

  useEffect(() => {
    const initial = document.documentElement.dataset.theme;
    if (isTheme(initial)) setActiveTheme(initial);
    function syncTheme(event: StorageEvent) {
      if (event.key === themeStorageKey || event.key === null) {
        applyTheme(isTheme(event.newValue) ? event.newValue : 'studio');
      }
    }
    window.addEventListener('storage', syncTheme);
    return () => window.removeEventListener('storage', syncTheme);
  }, []);

  function selectTheme(theme: Theme) {
    applyTheme(theme);
    try { localStorage.setItem(themeStorageKey, theme); } catch { /* Switching still works without storage. */ }
  }

  return (
    <div className="theme-selector order-3 flex w-full items-center justify-between gap-3 border-t border-line pt-3 min-[1101px]:w-auto min-[1101px]:border-0 min-[1101px]:pt-0">
      <span className="hidden font-display text-[0.75rem] tracking-[1.3px] text-muted md:block min-[1101px]:hidden">APPEARANCE</span>
      <div role="group" aria-label="Portfolio appearance" className="theme-options flex w-full rounded-full border border-line p-1 min-[381px]:w-auto">
        {themes.map(theme => {
          const Icon = icons[theme.id];
          return (
            <button key={theme.id} type="button" aria-pressed={activeTheme === theme.id} aria-label={`${theme.label} theme`} title={theme.description} onClick={() => selectTheme(theme.id)} className="theme-option flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-2 text-xs min-[381px]:text-sm font-medium transition-colors md:px-3">
              <Icon aria-hidden="true" className="size-3" strokeWidth={1.7} />
              {theme.label}
            </button>
          );
        })}
      </div>
      <span className="sr-only" role="status" aria-live="polite">{themes.find(theme => theme.id === activeTheme)?.label} theme selected</span>
    </div>
  );
}
