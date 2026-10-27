import Image from 'next/image';
import Link from 'next/link';
import { ThemeText } from '@/components/theme-copy';
import { ArrowRight, ArrowUpRight, Circle } from 'lucide-react';
import { caseStudies } from '@/lib/case-studies';
import { projects } from '@/lib/portfolio';

export function ProjectGrid() {
  return (
      <div className="grid grid-cols-1 gap-x-5 gap-y-9 md:grid-cols-2 lg:gap-x-[30px]">
        {projects.map((project, index) => (
          <article key={project.slug} className={`project-card group min-w-0 ${projects.length % 2 !== 0 && index === projects.length - 1 ? "md:col-span-2" : ""}`}>
            <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`} className="block rounded-[5px]">
            <div className={`project-preview relative block h-[325px] overflow-hidden rounded-[5px] px-[22px] pt-[22px] transition-transform duration-300 hover:-translate-y-[5px] md:h-[270px] md:px-[27px] md:pt-[27px] lg:h-[315px] min-[1101px]:h-[350px] ${project.tone}`}>
              <div className="project-frame h-full overflow-hidden rounded-t-[5px] bg-toolbar shadow-[0_10px_28px_#23231f1a] transition-transform duration-300 group-hover:-translate-y-[3px]">
                <div className="flex h-[25px] items-center justify-between gap-3 border-b border-line bg-toolbar px-2.5 font-mono text-[0.75rem] text-muted"><span aria-hidden="true" className="flex gap-1 text-muted">{[0, 1, 2].map(dot => <Circle key={dot} className="size-1" fill="currentColor" />)}</span><span>{new URL(project.url).hostname}</span><ArrowUpRight aria-hidden="true" className="size-2" /></div>
                <Image src={project.image} alt={`Live ${project.title} website preview`} width={project.imageWidth ?? 766} height={project.imageHeight ?? 860} sizes={projects.length % 2 !== 0 && index === projects.length - 1 ? "(max-width: 1440px) 90vw, 1200px" : "(max-width: 620px) 90vw, (max-width: 1440px) 45vw, 600px"} className="block h-auto w-full" />
              </div>
              <span aria-hidden="true" className="absolute right-[17px] bottom-[17px] grid size-[35px] place-items-center rounded-full bg-paper text-[21px] transition duration-200 group-hover:rotate-45 group-hover:bg-orange"><ArrowUpRight aria-hidden="true" size="1em" className="inline-block" /></span>
            </div>
            <div className="mt-[19px] flex justify-between gap-3 md:mt-[23px]">
              <div><p className="mb-[9px] text-sm tracking-[1.5px] text-muted">{project.category}</p><h3 className="text-xl font-medium tracking-[-.6px] md:text-lg lg:text-[21px]"><span className="group-hover:text-orange">{project.title} <span aria-hidden="true" className="ml-1.5 text-[17px]"><ArrowUpRight aria-hidden="true" size="1em" className="inline-block" /></span></span></h3><p className="mt-2 text-sm font-medium text-ink">{caseStudies[project.slug].role}</p><p className="mt-2.5 text-sm leading-[1.7] text-muted">{project.description}</p></div>
              <span className="mt-[3px] font-mono text-[0.75rem] text-muted">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="mt-[17px] flex flex-wrap items-start justify-between gap-2.5 md:items-center"><div className="flex flex-wrap gap-[5px] md:gap-1.5">{project.tags.map(tag => <span key={tag} className="rounded border border-line px-1.5 py-[5px] text-[0.75rem] text-muted md:px-2 md:py-1.5 md:text-[0.75rem]">{tag}</span>)}</div><span className="shrink-0 border-b border-line py-1.5 text-[0.75rem] text-muted group-hover:text-orange md:text-[0.75rem]"><ThemeText copyKey="projectDetails" /> <ArrowRight aria-hidden="true" className="ml-1 inline-block size-2.5" /></span></div>
            </Link>
          </article>
        ))}
      </div>
  );
}
