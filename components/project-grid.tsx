'use client';

import Image from 'next/image';
import { ThemeText } from '@/components/theme-copy';
import { ArrowUpRight, Circle, Plus, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { projects, type Project } from '@/lib/portfolio';

export function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selected && !dialog.current?.open) dialog.current?.showModal();
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-5 gap-y-9 md:grid-cols-2 lg:gap-x-[30px]">
        {projects.map((project, index) => (
          <article key={project.slug} className="project-card group min-w-0">
            <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`} className={`project-preview relative block h-[325px] overflow-hidden rounded-[5px] px-[22px] pt-[22px] transition-transform duration-300 hover:-translate-y-[5px] md:h-[270px] md:px-[27px] md:pt-[27px] lg:h-[315px] min-[1101px]:h-[350px] ${project.tone}`}>
              <div className="project-frame h-full overflow-hidden rounded-t-[5px] bg-toolbar shadow-[0_10px_28px_#23231f1a] transition-transform duration-300 group-hover:-translate-y-[3px]">
                <div className="flex h-[25px] items-center justify-between gap-3 border-b border-line bg-toolbar px-2.5 font-mono text-[7px] text-muted"><span aria-hidden="true" className="flex gap-1 text-muted">{[0, 1, 2].map(dot => <Circle key={dot} className="size-1" fill="currentColor" />)}</span><span>{new URL(project.url).hostname}</span><ArrowUpRight aria-hidden="true" className="size-2" /></div>
                <Image src={project.image} alt={`Live ${project.title} website preview`} width={766} height={860} sizes="(max-width: 620px) 90vw, (max-width: 1440px) 45vw, 600px" className="block h-auto w-full" />
              </div>
              <span aria-hidden="true" className="absolute right-[17px] bottom-[17px] grid size-[35px] place-items-center rounded-full bg-paper text-[21px] transition duration-200 group-hover:rotate-45 group-hover:bg-orange"><ArrowUpRight aria-hidden="true" size="1em" className="inline-block" /></span>
            </a>
            <div className="mt-[19px] flex justify-between gap-3 md:mt-[23px]">
              <div><p className="mb-[9px] text-[8px] tracking-[1.5px] text-muted">{project.category}</p><h3 className="text-xl font-medium tracking-[-.6px] md:text-lg lg:text-[21px]"><a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-orange">{project.title} <span aria-hidden="true" className="ml-1.5 text-[17px]"><ArrowUpRight aria-hidden="true" size="1em" className="inline-block" /></span></a></h3><p className="mt-2.5 text-[11px] leading-[1.7] text-muted">{project.description}</p></div>
              <span className="mt-[3px] font-mono text-[11px] text-muted">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="mt-[17px] flex items-start justify-between gap-2.5 md:items-center"><div className="flex flex-wrap gap-[5px] md:gap-1.5">{project.tags.map(tag => <span key={tag} className="rounded border border-line px-1.5 py-[5px] text-[7px] text-muted md:px-2 md:py-1.5 md:text-[8px]">{tag}</span>)}</div><button type="button" onClick={() => setSelected(project)} aria-label={`About ${project.title}`} className="shrink-0 border-b border-line py-1.5 text-[8px] text-muted hover:text-orange md:text-[9px]"><ThemeText copyKey="projectDetails" /> <Plus aria-hidden="true" className="ml-1 inline-block size-2.5" /></button></div>
          </article>
        ))}
      </div>
      <dialog ref={dialog} onClose={() => setSelected(null)} onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close();
      }} aria-labelledby="dialog-title" aria-describedby="dialog-description" className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-32px)] max-w-[580px] overflow-y-auto rounded-[10px] border border-line bg-paper px-[25px] py-[35px] text-ink shadow-[0_24px_100px_#0003] md:p-11">
        <button type="button" className="absolute top-3 right-[15px] grid size-10 place-items-center rounded-full hover:bg-ink/5" aria-label="Close dialog" onClick={() => dialog.current?.close()}><X aria-hidden="true" className="size-6" /></button>
        {selected && <><p className="eyebrow pr-6">{selected.category}</p><h2 id="dialog-title" className="my-5 text-[29px] leading-tight font-medium tracking-[-1px] md:text-[34px]">{selected.title}</h2><p id="dialog-description" className="text-sm leading-[1.8] text-muted">{selected.description}</p><ul className="my-5 list-disc pl-[18px] text-[13px] leading-loose text-muted">{selected.details.map(detail => <li key={detail}>{detail}</li>)}</ul><a className="button" href={selected.url} target="_blank" rel="noopener noreferrer"><ThemeText copyKey="projectVisit" /> <span aria-hidden="true"><ArrowUpRight aria-hidden="true" size="1em" className="inline-block" /></span></a></>}
      </dialog>
    </>
  );
}
