import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, REGISTRATION_URL } from '../config/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/95 shadow-[0_1px_0_0_rgba(32,40,32,0.08)] backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 sm:px-8" aria-label="Navigasi utama">
        <Logo variant={scrolled || open ? 'dark' : 'light'} />

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/90 transition-colors duration-200 hover:text-brand-yellow"
            >
              {link.label}
            </a>
          ))}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-charcoal shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md"
          >
            Pendaftaran
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
            scrolled || open ? 'bg-brand-lightgray text-brand-charcoal' : 'bg-white/15 text-white'
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[26rem] border-t border-brand-lightgray opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-5 py-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-brand-charcoal transition-colors hover:bg-brand-green-50 hover:text-brand-green-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-green-700"
          >
            Pendaftaran
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
