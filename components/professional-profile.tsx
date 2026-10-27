import Link from 'next/link';
import { ArrowUpRight, CodeXml, BriefcaseBusiness, CalendarDays } from 'lucide-react';
import { profile } from '@/lib/portfolio';

export function ProfessionalProfile() {
  return (
    <div className="wrap mt-10 md:mt-12" aria-labelledby="profile-details-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 id="profile-details-title" className="text-lg font-medium tracking-tight">The practical details</h3>

      </div>
      <div className="mt-7 grid gap-8 md:grid-cols-3">
        <section>
          <h4 className="mb-4 flex items-center gap-2 text-xs font-medium"><CodeXml aria-hidden="true" className="size-4 text-orange" />Working toolkit</h4>
          <div className="space-y-4">{profile.skillGroups.map(group => <div key={group.label}><h5 className="mb-2 text-[0.75rem] font-medium text-muted">{group.label}</h5><div className="flex flex-wrap gap-2">{group.skills.map(skill => <span key={skill} className="rounded border border-line px-2.5 py-1.5 text-[0.75rem] text-muted">{skill}</span>)}</div></div>)}</div>
        </section>
        <section>
          <h4 className="mb-4 flex items-center gap-2 text-xs font-medium"><BriefcaseBusiness aria-hidden="true" className="size-4 text-orange" />Experience & leadership</h4>
          <p className="text-sm leading-relaxed text-muted">{profile.experience}</p>
          <h5 className="mt-5 mb-2 text-xs font-medium">{profile.currentRole}</h5>
          <p className="text-sm leading-relaxed text-muted">{profile.leadership}</p>
          <Link href="/projects/inawo" className="mt-4 inline-flex items-center gap-2 text-xs underline decoration-orange underline-offset-4">Explore the Inawo work <ArrowUpRight aria-hidden="true" className="size-3" /></Link>
        </section>
        <section>
          <h4 className="mb-4 flex items-center gap-2 text-xs font-medium"><CalendarDays aria-hidden="true" className="size-4 text-orange" />Project availability</h4>
          <p className="text-sm leading-relaxed text-muted">Tell me what you’re building and your target timeline. We can discuss scope, fit, and a start date.</p>
          <a className="mt-4 inline-flex items-center gap-2 text-xs underline decoration-orange underline-offset-4" href={`mailto:${profile.email}`}>Ask about availability <ArrowUpRight aria-hidden="true" className="size-3" /></a>
        </section>
      </div>
    </div>
  );
}
