import { ArrowRight, Sparkles, Cpu, Code2, Database } from 'lucide-react';
import { REGISTRATION_URL } from '../config/site';

const floatingIcons = [
  { Icon: Cpu, className: 'right-[8%] top-[22%]' },
  { Icon: Code2, className: 'right-[26%] top-[54%] [animation-delay:1.5s]' },
  { Icon: Database, className: 'right-[6%] top-[68%] [animation-delay:3s]' },
];

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-brand-teal-900" aria-label="Beranda">
      {/* Layered background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-900 via-brand-teal-800 to-brand-green-800" />
        <div className="dot-grid-light absolute inset-0 opacity-40" />
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand-green/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-yellow/15 blur-3xl" />
      </div>

      {/* Decorative floating tech icons */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        {floatingIcons.map(({ Icon, className }, i) => (
          <div key={i} className={`absolute animate-float ${className}`}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
              <Icon className="h-6 w-6 text-brand-yellow" />
            </div>
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44 lg:pb-32 lg:pt-48">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow ring-1 ring-white/20 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Penerimaan Mahasiswa Baru
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Bangun Masa Depan{' '}
            <span className="relative inline-block text-brand-yellow">
              Digital
              <svg
                className="absolute -bottom-2 left-0 w-full text-brand-yellow/60"
                viewBox="0 0 120 8"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 6C30 2 70 2 118 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{' '}
            Bersama HK Academy
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Mulai perjalanan akademikmu di bidang teknologi dan informatika. Kembangkan potensi,
            kreativitas, dan kemampuan untuk menghadapi dunia digital yang terus berkembang.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-yellow px-8 py-4 text-base font-bold text-brand-charcoal shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              Daftar Sekarang
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#program-studi"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/60 hover:bg-white/15"
            >
              Jelajahi Program Studi
            </a>
          </div>
        </div>
      </div>

      {/* Soft bottom transition into the page background */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-offwhite to-transparent" aria-hidden="true" />
    </section>
  );
}
