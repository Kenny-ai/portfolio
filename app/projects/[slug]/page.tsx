import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaGithub } from 'react-icons/fa6';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Quote } from 'lucide-react';
import { projects, profile } from '@/lib/portfolio';
import { caseStudies } from '@/lib/case-studies';
import { siteUrl } from '@/lib/site';
import { MobileApp } from '@/components/mobile-app';
import { Wordmark } from '@/components/wordmark';
import { ThemeSelector } from '@/components/theme-selector';

type Props = { params: Promise<{ slug: string }> };

const sections = [
  { id: 'brief', label: 'The brief' },
  { id: 'contribution', label: 'My contribution' },
  { id: 'engineering', label: 'Engineering perspective' },
  { id: 'delivery', label: 'Delivery & perspective' },
];

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  const study = caseStudies[slug];
  return {
    title: `${project.title} — Case Study | ${profile.name}`,
    description: study.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} — Case Study`,
      description: study.summary,
      type: 'article',
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
      url: new URL(`/projects/${slug}`, siteUrl),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Case Study`,
      description: study.summary,
      images: ['/twitter-image'],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex(project => project.slug === slug);
  if (projectIndex === -1) notFound();
  const project = projects[projectIndex];
  const study = caseStudies[slug];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <a className="fixed -top-28 left-4 z-50 bg-ink px-5 py-3 text-paper focus:top-2" href="#case-study">Skip to case study</a>
      <header className="site-header wrap flex flex-wrap items-center justify-between gap-5 py-6">
        <Wordmark />
        <Link className="inline-flex items-center gap-2 text-xs hover:text-orange" href="/#work"><ArrowLeft aria-hidden="true" className="size-4" />All projects</Link>
        <ThemeSelector />
      </header>
      <main id="case-study" className="wrap pt-12 pb-12 md:pt-20 md:pb-16">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">CASE STUDY / {project.category}</p>
          <span className="hidden shrink-0 font-mono text-[0.75rem] text-muted md:inline">{String(projectIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
        </div>
        <h1 className="mt-5 text-5xl leading-tight font-medium tracking-[-2px] md:text-7xl">{project.title}<span className="text-orange">.</span></h1>
        <p className="mt-5 max-w-3xl text-[23px] leading-snug font-medium tracking-[-.6px] md:text-[30px]">{study.headline}</p>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-muted md:text-sm">{study.summary}</p>
        <div className="my-8 flex flex-wrap items-center gap-4">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="button">Visit live project <span aria-hidden="true"><ArrowUpRight className="size-5" /></span></a>
          {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-3 text-xs hover:text-orange"><FaGithub aria-hidden="true" className="size-4" />View source<ArrowUpRight aria-hidden="true" className="size-3" /></a>}
        </div>
        <dl className="mb-10 grid gap-5 border-y border-line py-6 md:grid-cols-3 md:gap-8">
          {study.snapshot.map(item => <div key={item.label}><dt className="font-display text-[0.75rem] tracking-[1.3px] text-muted uppercase">{item.label}</dt><dd className="mt-2 text-sm font-medium md:text-sm">{item.value}</dd></div>)}
        </dl>
        <figure>
          <div className={`project-preview overflow-hidden rounded-xl border border-line p-5 md:p-9 ${project.tone}`}>
            <div className="project-frame max-h-[420px] overflow-hidden rounded-lg"><Image src={project.image} alt={`${project.title} live homepage`} width={project.imageWidth ?? 766} height={project.imageHeight ?? 860} sizes="(max-width: 1440px) 90vw, 1200px" className="h-auto w-full" priority /></div>
          </div>
          <figcaption className="mt-3 flex flex-wrap justify-between gap-2 font-mono text-[0.75rem] text-muted"><span>FIG. 01 / THE LIVE PRODUCT</span><span>{new URL(project.url).hostname}</span></figcaption>
        </figure>
        {project.mobileApp && <MobileApp app={project.mobileApp} />}
        <div className="mt-14 grid items-start gap-12 lg:mt-20 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
          <aside className="case-study-sidebar space-y-8 lg:sticky lg:top-8">
            <section><h2 className="eyebrow mb-3">{study.roleLabel ?? 'MY ROLE'}</h2><p className="text-sm leading-relaxed font-medium">{study.role}</p></section>
            <section><h2 className="eyebrow mb-3">FOCUS AREAS</h2><div className="flex flex-wrap gap-2">{study.focusAreas.map(area => <span key={area} className="rounded border border-line px-2.5 py-1.5 text-[0.75rem] text-muted">{area}</span>)}</div></section>
            {study.technologies.length > 0 && <section><h2 className="eyebrow mb-3">TECHNOLOGIES</h2><div className="flex flex-wrap gap-2">{study.technologies.map(technology => <span key={technology} className="rounded border border-line px-2.5 py-1.5 text-[0.75rem] text-muted">{technology}</span>)}</div></section>}
            <nav aria-label="Case study sections" className="border-t border-line pt-6"><p className="eyebrow mb-4">IN THIS CASE STUDY</p><ol className="space-y-3">{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="flex gap-3 text-xs text-muted hover:text-orange"><span className="font-mono text-[0.75rem]">0{index + 1}</span>{section.id === 'contribution' ? study.contributionHeading ?? section.label : section.label}</a></li>)}</ol></nav>
            {study.references && <section className="border-t border-line pt-6"><h2 className="eyebrow mb-4">EXPLORE THE CODE</h2><ul className="space-y-3">{study.references.map(reference => <li key={reference.url}><a className="inline-flex items-center gap-2 text-xs text-muted underline decoration-line underline-offset-4 hover:text-orange" href={reference.url} target="_blank" rel="noopener noreferrer">{reference.label}<ArrowUpRight aria-hidden="true" className="size-3 shrink-0" /></a></li>)}</ul></section>}
          </aside>
          <div className="min-w-0 space-y-12 md:space-y-16">
            <section id="brief" aria-labelledby="brief-title"><p className="eyebrow mb-4 text-orange">01 / THE BRIEF</p><h2 id="brief-title" className="text-[28px] leading-tight font-medium tracking-[-1px]">The product and the work behind it.</h2><p className="mt-5 text-sm leading-loose text-muted">{study.brief}</p></section>
            <section id="contribution" aria-labelledby="contribution-title" className="border-t border-line pt-8"><p className="eyebrow mb-4 text-orange">02 / OWNERSHIP</p><h2 id="contribution-title" className="text-[28px] leading-tight font-medium tracking-[-1px]">{study.contributionHeading ?? 'Where I contributed.'}</h2><div className="mt-7 space-y-7">{study.contribution.map((item, index) => <div key={item.title} className="grid grid-cols-[24px_1fr] gap-3"><span className="pt-1 font-mono text-[0.75rem] text-orange">0{index + 1}</span><div><h3 className="text-[15px] font-medium">{item.title}</h3><p className="mt-2 text-sm leading-loose text-muted">{item.description}</p></div></div>)}</div></section>
            <section id="engineering" aria-labelledby="engineering-title" className="border-t border-line pt-8"><p className="eyebrow mb-4 text-orange">03 / ENGINEERING PERSPECTIVE</p><h2 id="engineering-title" className="text-[28px] leading-tight font-medium tracking-[-1px]">{study.challengeHeading ?? 'The engineering context'}</h2><p className="mt-5 text-sm leading-loose text-muted">{study.challenge}</p><h3 className="mt-7 text-lg font-medium tracking-tight">{study.approachHeading ?? 'My approach'}</h3><p className="mt-3 text-sm leading-loose text-muted">{study.approach}</p>
              {study.flow && <div className="my-8 rounded-xl border border-line bg-surface p-5 md:p-6"><h3 className="mb-5 text-sm font-medium">How the issuance and verification flow fits together</h3><ol className="grid gap-6 md:grid-cols-2">{study.flow.map((step, index) => <li key={step.title}><span className="font-mono text-[0.75rem] text-orange">0{index + 1}</span><h4 className="mt-2 text-xs font-medium">{step.title}</h4><p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p></li>)}</ol></div>}
              <div className="mt-8 rounded-xl border border-line bg-surface p-5 md:p-7"><h3 className="mb-5 font-display text-[0.75rem] tracking-[1.3px] text-muted uppercase">Engineering priorities</h3><div className="space-y-5">{study.engineeringNotes.map(note => <div key={note.title}><h4 className="text-[0.875rem] font-medium">{note.title}</h4><p className="mt-2 text-sm leading-loose text-muted">{note.description}</p></div>)}</div></div>
            </section>
            <section id="delivery" aria-labelledby="delivery-title" className="border-t border-line pt-8"><p className="eyebrow mb-4 text-orange">04 / DELIVERY</p><h2 id="delivery-title" className="text-[28px] leading-tight font-medium tracking-[-1px]">{study.outcomesHeading ?? 'What shipped'}</h2><ul className="mt-6 space-y-4">{study.outcomes.map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-orange" />{item}</li>)}</ul><blockquote className="mt-9 border-l-2 border-orange py-1 pl-5"><Quote aria-hidden="true" className="mb-3 size-5 text-orange" /><p className="font-serif text-lg leading-relaxed italic">{study.takeaway}</p><footer className="mt-4 text-[0.75rem] text-muted">{profile.name} / SOFTWARE DEVELOPER</footer></blockquote></section>
          </div>
        </div>
        <div className="mt-20 grid items-center gap-7 border-t border-line pt-8 md:grid-cols-[1fr_auto]"><div><p className="eyebrow text-muted">ANOTHER PART OF THE STORY</p><Link href={`/projects/${nextProject.slug}`} className="mt-3 inline-flex items-center gap-4 text-2xl font-medium tracking-tight hover:text-orange">{nextProject.title}<ArrowRight aria-hidden="true" className="size-5" /></Link></div><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-xs hover:text-orange">Let’s talk about your next project <ArrowUpRight aria-hidden="true" className="size-4" /></a></div>
      </main>
    </>
  );
}
