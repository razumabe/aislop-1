import { MapPin, Mail, Phone, ArrowUpRight, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, SITE } from '../config/site';

const socials = [
  { Icon: Instagram, label: 'Instagram (segera hadir)' },
  { Icon: Facebook, label: 'Facebook (segera hadir)' },
  { Icon: Youtube, label: 'YouTube (segera hadir)' },
  { Icon: Twitter, label: 'Twitter / X (segera hadir)' },
];

const placeholders = [
  { Icon: MapPin, label: 'Alamat kampus', value: 'Akan segera diperbarui' },
  { Icon: Mail, label: 'Email', value: 'Akan segera diperbarui' },
  { Icon: Phone, label: 'Telepon / WhatsApp', value: 'Akan segera diperbarui' },
];

export default function Footer() {
  return (
    <footer id="kontak" className="relative bg-brand-teal-900 text-white" aria-label="Kontak">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="dot-grid-light absolute inset-0 opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {SITE.institutionName} — {SITE.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label }) => (
                <span
                  key={label}
                  title={label}
                  aria-label={label}
                  className="flex h-10 w-10 cursor-default items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/20"
                >
                  <Icon className="h-4 w-4 text-white/80" />
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-3" aria-label="Navigasi footer">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">Navigasi</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-medium text-white/75 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#program-studi"
                  className="text-sm font-medium text-white/75 transition-colors hover:text-white"
                >
                  {SITE.programName}
                </a>
              </li>
            </ul>
          </nav>

          {/* Program */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">Program Studi</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="#program-studi" className="text-sm font-medium text-white/75 transition-colors hover:text-white">
                  {SITE.programName}
                </a>
              </li>
              <li className="text-sm text-white/50">{SITE.programStatus}</li>
            </ul>
          </div>

          {/* Contact placeholders */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">Kontak</h3>
            <ul className="mt-5 space-y-4">
              {placeholders.map(({ Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-medium text-white/85">{label}</span>
                    <span className="block text-xs text-white/50">{value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/55">
            &copy; {new Date().getFullYear()} {SITE.institutionName}. Seluruh hak cipta dilindungi.
          </p>
          <a
            href="#beranda"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 transition-colors hover:text-brand-yellow"
          >
            Kembali ke atas
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
