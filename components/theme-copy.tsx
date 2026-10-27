import { themeCopy, headlines, type CopyKey, type HeadlineSection } from '@/lib/theme-copy';
import { themes } from '@/lib/themes';

// The same root attribute controls both appearance and wording. Keeping variants
// in the rendered HTML makes a saved theme's copy visible before hydration and
// keeps hidden alternatives out of the accessibility tree.
export function ThemeText({ copyKey }: { copyKey: CopyKey }) {
  return themes.map(theme => (
    <span key={theme.id} data-theme-copy={theme.id} className="theme-copy whitespace-pre-line">
      {themeCopy[theme.id][copyKey]}
    </span>
  ));
}

export function ThemeHeadline({ section }: { section: HeadlineSection }) {
  return themes.map(theme => {
    const lines = headlines[theme.id][section];
    return (
      <span key={theme.id} data-theme-copy={theme.id} className="theme-copy">
        {lines[0]}<br />
        {section === 'hero' ? <>{lines[1]}<span className="code-word">{lines[2]}<svg viewBox="0 0 400 20" aria-hidden="true"><path d="M4 13 Q180 -4 395 9 M80 18 Q230 7 355 14" /></svg></span><span className="text-orange">.</span></> : section === 'contact' ? <>{lines[1]}<span className="serif">{lines[2]}</span></> : <span className="serif">{lines[1]}</span>}
      </span>
    );
  });
}
