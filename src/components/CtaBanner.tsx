import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { REGISTRATION_URL } from '../config/site';

export default function CtaBanner() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-white pb-24 sm:pb-32" aria-label="Ajakan Mendaftar">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} relative overflow-hidden rounded-[2.5rem] bg-brand-green px-8 py-16 text-center shadow-2xl shadow-brand-green/25 sm:px-16 sm:py-20`}
        >
          <div className="absolute inset-0" aria-hidden="true">
            <div className="dot-grid-light absolute inset-0 opacity-30" />
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-teal/60 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-brand-yellow/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-charcoal">
              Pendaftaran Dibuka
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">
              Langkah Pertamamu Menuju Dunia Teknologi Dimulai di Sini.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Jadilah bagian dari perjalanan baru HK Academy dan mulai eksplorasi potensimu di
              bidang Teknik Informatika.
            </p>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-yellow px-9 py-4 text-base font-bold text-brand-charcoal shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
            >
              Mulai Pendaftaran
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
