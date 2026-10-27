import { CodeXml } from 'lucide-react';
import { profile } from '@/lib/portfolio';

export function Wordmark() {
  return (
    <a href="#" aria-label={`${profile.name}, back to top`} className="inline-flex items-center gap-[9px] font-display text-[21px] font-bold tracking-[-1.1px] md:text-2xl">
      <span className="grid size-[29px] -rotate-7 place-items-center rounded-[5px] bg-ink text-[14px] tracking-[-2px] text-paper md:size-[34px] md:text-base"><CodeXml aria-hidden="true" className="size-[19px] md:size-[22px]" strokeWidth={2} /></span>
      {profile.shortName}<span className="-ml-[9px] text-orange">.</span>
    </a>
  );
}
