import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const titleColor = tone === 'light' ? 'text-white' : 'text-brand-charcoal';
  const descColor = tone === 'light' ? 'text-white/75' : 'text-brand-charcoal/70';

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
            tone === 'light' ? 'text-brand-yellow' : 'text-brand-green'
          }`}
        >
          <span className={`h-px w-6 ${tone === 'light' ? 'bg-brand-yellow' : 'bg-brand-green'}`} aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>}
    </div>
  );
}
