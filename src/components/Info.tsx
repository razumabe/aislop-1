import { School, Tag, BookOpen, BadgeCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';
import { SITE } from '../config/site';

const infoItems = [
  { Icon: School, label: 'Nama Institusi', value: SITE.institutionName },
  { Icon: Tag, label: 'Nama Brand', value: SITE.brandName },
  { Icon: BookOpen, label: 'Program Studi', value: SITE.programName },
  { Icon: BadgeCheck, label: 'Status Program', value: SITE.programStatus, highlight: true },
];

export default function Info() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="informasi" className="relative bg-white py-24 sm:py-32" aria-label="Informasi Akademik">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Informasi"
          title="Informasi Akademik"
          description="Informasi resmi yang telah dikonfirmasi mengenai institusi dan program studi kami."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
          {infoItems.map(({ Icon, label, value, highlight }) => (
            <div
              key={label}
              className={`rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                highlight
                  ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20'
                  : 'bg-brand-offwhite ring-1 ring-brand-lightgray hover:shadow-lg'
              }`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  highlight ? 'bg-white/15 text-brand-yellow' : 'bg-brand-green-50 text-brand-green'
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <p
                className={`mt-5 text-xs font-bold uppercase tracking-[0.16em] ${
                  highlight ? 'text-white/70' : 'text-brand-charcoal/50'
                }`}
              >
                {label}
              </p>
              <p className={`mt-1.5 text-lg font-bold leading-snug ${highlight ? 'text-white' : 'text-brand-charcoal'}`}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
