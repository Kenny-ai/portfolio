import { ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowUp, ArrowUpRight, Asterisk, CornerDownRight, Undo2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { ProfessionalProfile } from '@/components/professional-profile';
import { ContactOptions } from '@/components/contact-options';
import { Mail } from 'lucide-react';
import { DeveloperArt } from '@/components/developer-art';
import { ProjectGrid } from '@/components/project-grid';
import { ThemeText, ThemeHeadline } from '@/components/theme-copy';
import { ThemeSelector } from '@/components/theme-selector';
import { Wordmark } from '@/components/wordmark';
import { profile, projects } from '@/lib/portfolio';

const capabilities = [
  ['Websites & frontend', 'Interfaces built with HTML, CSS, JavaScript, TypeScript, React, and Next.js.'],
  ['Backend systems & APIs', 'Node.js, Python, MongoDB, SQL, REST, and GraphQL products.'],
  ['Mobile & product engineering', 'React Native apps, technical leadership, and product decisions.'],
];

export default function Home() {
  return (
    <>
      <a className="fixed -top-28 left-[15px] z-50 bg-ink px-5 py-3 text-paper focus:top-2.5" href="#main">Skip to content</a>
      <header className="site-header wrap flex flex-wrap items-center justify-between gap-x-5 gap-y-4 pt-[22px] pb-5 min-[1101px]:min-h-28 min-[1101px]:flex-nowrap min-[1101px]:py-5">
        <Wordmark />
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-[19px] text-sm font-medium md:gap-[22px] md:text-[0.875rem] lg:gap-9">
          <a href="#work" className="hover:text-orange"><ThemeText copyKey="navWork" /> <span className="ml-1 align-super text-[0.75rem] text-muted md:text-[0.75rem]">{String(projects.length).padStart(2, '0')}</span></a>
          <a href="#about" className="hidden hover:text-orange md:block"><ThemeText copyKey="navAbout" /></a>
          <a href="#contact" className="rounded-full border border-ink px-[13px] py-[9px] hover:text-orange md:px-5 md:py-3"><ThemeText copyKey="navContact" /> <span aria-hidden="true" className="ml-[5px] text-sm md:ml-[15px] md:text-[17px]"><ArrowUpRight aria-hidden="true" size="1em" className="inline-block shrink-0" /></span></a>
        </nav>
        <ThemeSelector />
      </header>
      <main id="main">
        <section className="hero-section wrap pt-[25px] md:pt-7 lg:pt-[46px]" aria-labelledby="hero-title">
          <div className="flex items-center justify-between"><p className="eyebrow"><span className="status-dot" /> KENNY SOYOYE / SOFTWARE DEVELOPER</p><span className="hidden font-display text-[0.75rem] tracking-[1px] text-muted md:block"><ThemeText copyKey="edition" /></span></div>
          <div className="grid items-center gap-3 pb-6 md:min-h-[420px] md:grid-cols-[1.13fr_1fr] md:gap-2.5 md:pb-[42px] min-[1101px]:min-h-[490px] min-[1101px]:gap-[25px]">
            <div>
              <h1 id="hero-title" className="hero-heading mt-[27px] mb-[25px] whitespace-nowrap text-[clamp(43px,10.2vw,63px)] leading-[1.07] font-medium tracking-[-2.8px] md:mt-[35px] md:mb-[26px] md:text-[53px] md:tracking-[-3px] lg:text-[62px] lg:tracking-[-3.5px] min-[1101px]:text-[clamp(62px,5.6vw,82px)] min-[1101px]:tracking-[-5px]"><ThemeHeadline section="hero" /></h1>
              <p className="mb-6 text-sm leading-[1.8] text-muted md:mb-[30px] lg:text-sm"><ThemeText copyKey="heroDescription" /></p>
              <a href="#work" className="button"><ThemeText copyKey="heroButton" /> <span aria-hidden="true"><ArrowDownRight aria-hidden="true" size="1em" className="inline-block shrink-0" /></span></a>
              <div className="mt-1.5 ml-[33px] flex items-center gap-3 font-serif text-xs text-muted italic md:mt-3 md:text-[0.875rem]"><span aria-hidden="true" className="-rotate-45 text-[32px] text-muted"><Undo2 aria-hidden="true" size="1em" className="inline-block shrink-0" /></span><ThemeText copyKey="heroNote" /></div>
            </div>
            <DeveloperArt />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-[15px] border-t border-line py-[18px] font-display text-[0.75rem] tracking-[.7px] text-muted md:py-[22px] md:text-[0.75rem] md:tracking-[1.4px]"><span><ThemeText copyKey="heroFooter" /></span><a href="#work" className="flex items-center gap-2 whitespace-nowrap md:gap-[22px]"><ThemeText copyKey="scroll" /> <span className="text-[15px] text-ink md:text-lg"><ArrowDown aria-hidden="true" size="1em" className="inline-block shrink-0" /></span></a></div>
        </section>
        <div className="border-y border-line bg-strip" aria-label="Development focus"><div className="wrap flex flex-wrap items-center justify-center gap-3 py-[17px] md:justify-between md:py-[22px] lg:gap-5"><span className="font-serif text-[0.875rem] italic md:text-[15px] lg:text-[19px]"><ThemeText copyKey="focus1" /></span><b className="text-xl font-normal text-orange"><Asterisk aria-hidden="true" size="1em" className="inline-block" /></b><span className="font-serif text-[0.875rem] italic md:text-[15px] lg:text-[19px]"><ThemeText copyKey="focus2" /></span><b className="hidden text-2xl font-normal text-orange md:block"><Asterisk aria-hidden="true" size="1em" className="inline-block" /></b><span className="hidden font-serif text-[15px] italic md:block lg:text-[19px]"><ThemeText copyKey="focus3" /></span><b className="hidden text-2xl font-normal text-orange md:block"><Asterisk aria-hidden="true" size="1em" className="inline-block" /></b></div></div>
        <section className="wrap pt-[62px] pb-12 md:pt-[100px] md:pb-[82px]" id="work" aria-labelledby="work-title">
          <div className="mb-[30px] items-end justify-between gap-[30px] md:mb-[42px] md:flex"><div><p className="eyebrow"><ThemeText copyKey="workEyebrow" /></p><h2 id="work-title" className="section-title mt-[17px] md:mt-[22px]"><ThemeHeadline section="work" /></h2></div><p className="mt-[19px] text-sm leading-[1.8] text-muted md:mb-1"><ThemeText copyKey="workDescription" /></p></div>
          <ProjectGrid />
          <div className="mt-[30px] flex items-start gap-[11px] text-[0.75rem] leading-[1.7] text-muted md:items-center md:text-[0.75rem]"><span className="text-xl text-orange"><CornerDownRight aria-hidden="true" size="1em" className="inline-block shrink-0" /></span><ThemeText copyKey="workFootnote" /></div>
        </section>
        <section className="border-y border-line bg-surface py-[55px] md:py-[85px]" id="about">
          <div className="wrap grid items-center gap-10 md:grid-cols-[.8fr_1fr] md:gap-[35px] lg:grid-cols-[.85fr_1fr] lg:gap-[60px] min-[1101px]:gap-[100px]">
            <div className="mx-auto w-full max-w-[315px] pt-3 pr-2.5 md:max-w-none md:pt-[18px] md:pr-[14px]"><div className="about-art group relative aspect-[1.1] -rotate-4 border border-line bg-art p-[22px] md:aspect-[.85] md:p-[18px] lg:aspect-[1.05] lg:p-[25px]"><span className="eyebrow text-[0.75rem] tracking-[1px] md:text-[0.75rem] lg:text-[0.75rem]"><ThemeText copyKey="aboutArtLabel" /></span><div aria-hidden="true" className="absolute inset-x-0 top-[15px] bottom-0 grid place-items-center font-serif text-[200px] leading-none text-orange transition-transform duration-700 group-hover:rotate-90 md:top-[30px] md:text-[180px] lg:text-[220px] min-[1101px]:text-[250px]"><Asterisk aria-hidden="true" size="1em" strokeWidth={1.8} /></div><div className="absolute right-[22px] bottom-[22px] left-[22px] text-[0.75rem] leading-[1.6] tracking-[1px] md:right-[18px] md:bottom-5 md:left-[18px] md:text-[0.75rem] lg:right-[25px] lg:bottom-[25px] lg:left-[25px] lg:text-[0.75rem]"><ThemeText copyKey="aboutArtFirst" /><br /><ThemeText copyKey="aboutArtLast" /><span className="absolute right-0 bottom-0 text-[34px]"><ArrowUpRight aria-hidden="true" size="1em" className="inline-block shrink-0" /></span></div></div><p className="mt-7 text-center font-serif text-sm text-muted italic"><ThemeText copyKey="aboutCaption" /></p></div>
            <div><p className="eyebrow"><ThemeText copyKey="aboutEyebrow" /></p><h2 className="section-title mt-[22px] mb-[22px] text-[37px] md:text-[31px] lg:text-[36px] min-[1101px]:text-[40px]"><ThemeHeadline section="about" /></h2><p className="max-w-[440px] text-sm leading-[1.9] text-muted"><ThemeText copyKey="aboutParagraph1" /></p><p className="mt-3 max-w-[440px] text-sm leading-[1.9] text-muted"><ThemeText copyKey="aboutParagraph2" /></p><div className="mt-[27px]">{capabilities.map(([name, description], i) => <div key={name} className="relative border-t border-line py-4 pl-[30px] md:pt-[14px] md:pb-3"><span className="absolute top-[17px] left-0 font-mono text-[0.75rem] text-muted">0{i + 1}</span><h3 className="mb-[5px] text-[0.875rem] font-medium md:text-xs">{name}</h3><p className="text-sm leading-normal text-muted">{description}</p></div>)}</div></div>
          </div>
          <ProfessionalProfile />
        </section>
        <section className="contact-section wrap pt-[58px] pb-[45px] md:pt-[90px] md:pb-[75px]" id="contact"><div className="flex items-center justify-between"><p className="eyebrow"><ThemeText copyKey="contactEyebrow" /></p><span className="font-display text-[0.75rem] tracking-[.6px] text-muted md:text-[0.75rem] md:tracking-[1.3px]"><ThemeText copyKey="contactAside" /> <ArrowDownLeft aria-hidden="true" className="ml-1 inline-block size-3" /></span></div><h2 className="relative mt-[30px] mb-[30px] text-[65px] leading-[1.03] font-medium tracking-[-3px] md:mt-[35px] md:text-[80px] md:tracking-[-5px] lg:text-[85px] min-[1101px]:text-[100px]"><ThemeHeadline section="contact" /><span aria-hidden="true" className="absolute top-[43px] right-0 rotate-12 font-serif text-[73px] text-orange md:top-7 md:right-[3%] md:text-[100px] min-[1101px]:top-5 min-[1101px]:right-[7%] min-[1101px]:text-[130px]"><Asterisk aria-hidden="true" size="1em" className="inline-block shrink-0" /></span></h2><div className="items-center justify-between gap-5 md:flex"><p className="mb-[25px] text-sm leading-[1.8] text-muted md:mb-0"><ThemeText copyKey="contactDescription" /></p><ContactOptions /></div></section>
      </main>
      <footer className="wrap flex flex-wrap items-center justify-between gap-[21px] border-t border-line py-[25px] md:gap-5 md:py-[27px]"><Wordmark /><span className="order-3 w-full text-[0.75rem] text-muted md:order-none md:w-auto md:text-[0.75rem]"><ThemeText copyKey="footer" /></span><div className="ml-auto flex flex-wrap gap-[15px] text-[0.75rem] md:ml-0 md:gap-5 md:text-[0.75rem]"><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-orange"><Mail aria-hidden="true" className="size-3.5" />Email</a><a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-orange"><FaGithub aria-hidden="true" className="size-3.5" />GitHub <ArrowUpRight aria-hidden="true" className="size-3" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-orange"><FaLinkedin aria-hidden="true" className="size-3.5" />LinkedIn <ArrowUpRight aria-hidden="true" className="size-3" /></a><a href="#" className="inline-flex items-center gap-1.5 hover:text-orange">Back to top <ArrowUp aria-hidden="true" className="size-3" /></a></div></footer>
    </>
  );
}
