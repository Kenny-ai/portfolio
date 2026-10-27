import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '@/lib/portfolio';

export function ContactOptions() {
  return (
    <div className="flex flex-col items-start gap-3 md:items-end">
      <a className="button max-w-full" href={`mailto:${profile.email}`}><Mail aria-hidden="true" className="size-4 shrink-0" /><span className="break-all text-xs">{profile.email}</span></a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[0.75rem] text-muted hover:text-orange">Or connect on LinkedIn <ArrowUpRight aria-hidden="true" className="size-3" /></a>
    </div>
  );
}
