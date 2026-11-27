import { Cpu, Lightbulb, TrendingUp, Telescope } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

const values = [
  {
    Icon: Cpu,
    title: 'Fokus pada Teknologi',
    description:
      'Kesempatan untuk mulai menjelajahi dunia informatika dan teknologi digital sejak awal perjalanan akademikmu.',
  },
  {
    Icon: Lightbulb,
    title: 'Semangat Inovasi',
    description:
      'Membangkitkan rasa ingin tahu, kreativitas, dan cara berpikir inovatif dalam menyelesaikan berbagai tantangan.',
  },
  {
    Icon: TrendingUp,
    title: 'Pengembangan Potensi',
    description:
      'Mendampingi pertumbuhan pribadimu melalui proses belajar yang bertahap, terarah, dan penuh dukungan.',
  },
  {
    Icon: Telescope,
    title: 'Perspektif Masa Depan',
    description:
      'Mengenalkan peluang serta tantangan era digital agar kamu siap menghadapi perkembangan teknologi.',
  },
];

export default function WhyUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-brand-offwhite py-24 sm:py-32" aria-label="Mengapa Memilih Kami">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Nilai Kami"
          title={
            <>
              Mengapa Memulai Perjalanan di <span className="text-brand-green">HK Academy?</span>
            </>
          }
          description="Empat nilai pendidikan yang menjadi dasar perjalanan akademik di HK Academy."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
          {values.map(({ Icon, title, description }, i) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-lightgray transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="absolute right-6 top-6 font-display text-5xl font-semibold text-brand-lightgray transition-colors duration-300 group-hover:text-brand-green-100">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-50 text-brand-green ring-1 ring-brand-green/15 transition-all duration-300 group-hover:bg-brand-green group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-bold leading-snug text-brand-charcoal">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/65">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
