import { ArrowRight, Leaf, GraduationCap, Compass } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';
import { SITE } from '../config/site';

const values = [
  { Icon: GraduationCap, label: 'Pendidikan yang relevan' },
  { Icon: Compass, label: 'Berorientasi masa depan' },
  { Icon: Leaf, label: 'Ruang tumbuh dan berkembang' },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="tentang" className="relative bg-brand-offwhite py-24 sm:py-32" aria-label="Tentang Kami">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
          {/* Editorial visual composition */}
          <div className="relative order-2 lg:order-1" aria-hidden="true">
            <div className="dot-grid absolute -left-6 -top-6 h-40 w-40 opacity-70" />
            <div className="relative overflow-hidden rounded-3xl bg-brand-teal-800 p-8 shadow-xl sm:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-700 to-brand-green-700 opacity-90" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                  <GraduationCap className="h-6 w-6 text-brand-yellow" />
                </span>
                <p className="mt-8 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
                  &ldquo;Mempersiapkan generasi masa depan melalui pendidikan yang relevan dengan
                  perkembangan zaman.&rdquo;
                </p>
                <div className="mt-10 grid grid-cols-3 gap-4">
                  {['Berjejaring', 'Berinovasi', 'Berkarakter'].map((word) => (
                    <div key={word} className="rounded-xl bg-white/10 px-3 py-3 text-center ring-1 ring-white/15">
                      <span className="text-xs font-semibold text-white/90 sm:text-sm">{word}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-3xl border-2 border-brand-green/20" />
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Tentang Kami"
              title={
                <>
                  Mengenal <span className="text-brand-green">Hubbul Khoir</span> Academy
                </>
              }
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-charcoal/70 sm:text-lg">
              {SITE.institutionName} merupakan institusi pendidikan yang hadir sebagai ruang untuk
              mengembangkan potensi dan mempersiapkan generasi masa depan melalui pendidikan yang
              relevan dengan perkembangan zaman.
            </p>

            <ul className="mt-8 space-y-4">
              {values.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green ring-1 ring-brand-green/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-base font-semibold text-brand-charcoal">{label}</span>
                </li>
              ))}
            </ul>

            <a
              href="#program-studi"
              className="group mt-9 inline-flex items-center gap-2 text-base font-bold text-brand-green transition-colors hover:text-brand-green-800"
            >
              Lihat program studi
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
