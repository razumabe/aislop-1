interface LogoProps {
  variant?: 'dark' | 'light';
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  const monogram =
    variant === 'light'
      ? 'bg-white/15 text-white ring-white/30'
      : 'bg-brand-green text-white ring-brand-green/30';
  const text = variant === 'light' ? 'text-white' : 'text-brand-charcoal';
  const sub = variant === 'light' ? 'text-white/70' : 'text-brand-charcoal/60';

  return (
    <a href="#beranda" className="group flex items-center gap-3" aria-label="HK Academy — Beranda">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105 ${monogram}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 9.5 12 4l9 5.5-9 5.5-9-5.5Z" fill="currentColor" opacity="0.9" />
          <path d="M7 12.5V17c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4.5l-5 3-5-3Z" fill="currentColor" opacity="0.55" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-semibold tracking-tight ${text}`}>HK Academy</span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.18em] ${sub}`}>
          Hubbul Khoir Academy
        </span>
      </span>
    </a>
  );
}
