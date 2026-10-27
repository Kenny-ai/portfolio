import { ThemeText } from '@/components/theme-copy';
import { ArrowUpRight, Asterisk, Check, Command, Ellipsis, Plus } from 'lucide-react';

export function DeveloperArt() {
  return (
    <div className="creative-canvas" aria-label="An illustrated developer workspace combining creative design and code" role="img">
      <div className="canvas-grid" />
      <div className="canvas-label"><Plus aria-hidden="true" className="size-4" strokeWidth={1.5} /> <ThemeText copyKey="artLabel" /></div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="mini-browser">
        <div className="mini-toolbar"><div><i /><i /><i /></div><span>something-good.dev</span><ArrowUpRight aria-hidden="true" className="size-2.5" /></div>
        <div className="mini-page">
          <span className="mini-kicker"><ThemeText copyKey="artKicker" /></span>
          <div className="mini-heading"><ThemeText copyKey="artFirst" /><br /><em><ThemeText copyKey="artLast" /></em></div>
          <div className="mini-line" />
          <span className="mini-button"><ThemeText copyKey="artButton" /> <ArrowUpRight aria-hidden="true" className="inline-block size-2" /></span>
          <div className="sculpture"><div /><div /><div /><div /><div /></div>
        </div>
      </div>
      <div className="code-card">
        <div className="code-title"><span className="status-dot" /> behind-the-scenes.ts <span><Ellipsis aria-hidden="true" className="size-3" /></span></div>
        <pre><span className="muted-code">// a little of both</span>{'\n'}<span className="purple">const</span>{' approach = {\n  design: '}<span className="green">&apos;intentional&apos;</span>{',\n  details: '}<span className="green">&apos;considered&apos;</span>{',\n  possibilities: '}<span className="orange">Infinity</span>{'\n};'}</pre>
        <div className="code-bottom"><span><Check aria-hidden="true" className="inline-block size-2" /> Built with purpose</span><span><Command aria-hidden="true" className="inline-block size-2" /> S</span></div>
      </div>
      <div className="round-sticker"><span>DESIGN<ArrowUpRight aria-hidden="true" className="mx-auto my-0.5 size-3" />DEVELOP</span></div>
      <span className="canvas-coordinate"><ThemeText copyKey="artCoordinate" /></span>
      <span className="canvas-star" aria-hidden="true"><Asterisk aria-hidden="true" size="1em" /></span>
    </div>
  );
}
