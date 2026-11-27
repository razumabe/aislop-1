import { ArrowRight, Code2, Braces, Globe, Cpu } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';
import { REGISTRATION_URL, SITE } from '../config/site';

const highlights = [
  { Icon: Code2, label: 'Pemrograman' },
  { Icon: Braces, label: 'Komputasi' },
  { Icon: Globe, label: 'Solusi Digital' },
  { Icon: Cpu, label: 'Teknologi Informasi' },
];

export default function StudyProgram() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="program-studi" className="relative bg-white py-24 sm:py-32" aria-label="Program Studi">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Program Studi"
          title={
            <>
              Satu langkah awal, <span className="text-brand-green">sejuta kemungkinan</span>
            </>
          }
          description="Saat ini Hubbul Khoir Academy membuka program studi unggulan di bidang teknologi."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-14`}>
          <article className="group relative overflow-hidden rounded-[2rem] bg-brand-teal-900 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <div className="grid lg:grid-cols-5">
              {/* Visual side */}
              <div className="relative overflow-hidden p-10 lg:col-span-2" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green-700 via-brand-teal-700 to-brand-teal-800" />
                <div className="dot-grid-light absolute inset-0 opacity-50" />
                <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-brand-yellow/20 blur-3xl" />
                <div className="relative flex h-full min-h-[16rem] flex-col justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Code2 className="h-7 w-7 text-brand-yellow" />
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {highlights.map(({ Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-3 ring-1 ring-white/15 backdrop-blur-sm"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-brand-yellow" />
                        <span className="text-xs font-semibold text-white sm:text-sm">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center p-10 sm:p-12 lg:col-span-3">
                <span className="inline-flex w-fit items-center rounded-full bg-brand-yellow px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-charcoal">
                  {SITE.programStatus}
                </span>
                <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {SITE.programName}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Pelajari dunia teknologi informasi, pemrograman, komputasi, dan pengembangan
                  solusi digital melalui perjalanan akademik yang berorientasi pada perkembangan
                  teknologi.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-bold text-brand-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Daftar ke {SITE.programName}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </a>
                  <a
                    href="#informasi"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Informasi Program
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
