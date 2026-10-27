import { ArrowUpRight, Smartphone } from 'lucide-react';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa6';
import type { Project } from '@/lib/portfolio';

export function MobileApp({ app }: { app: NonNullable<Project['mobileApp']> }) {
  return (
    <section className="mt-10 rounded-xl border border-line bg-surface p-6 md:p-8" aria-labelledby="mobile-app-title">
      <p className="eyebrow mb-4"><Smartphone aria-hidden="true" className="size-4 text-orange" />MOBILE / SOLE DEVELOPER</p>
      <h2 id="mobile-app-title" className="text-2xl font-medium tracking-tight">What I built: the Inawo mobile app.</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{app.description}</p>
      <div className="mt-6 flex flex-wrap gap-3">{app.links.map(link => {
        const Icon = link.platform === 'ios' ? FaAppStoreIos : FaGooglePlay;
        return <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-line bg-paper px-5 py-3.5 text-xs transition-colors hover:border-orange hover:text-orange"><Icon aria-hidden="true" className="size-5" /><span>View on {link.label}</span><ArrowUpRight aria-hidden="true" className="size-3.5" /></a>;
      })}</div>
    </section>
  );
}
