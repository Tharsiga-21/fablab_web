// Site footer displaying the official LICET FabLab logo, copyright, navigation links, and social channels.

import { ExternalLink } from 'lucide-react';
import { site } from '../config/site';
import { features } from '../config/features';
import Logo from './Logo';

export default function Footer() {
  const navItems = features.filter((item) => item.showInNav);

  return (
    <footer className="bg-[#1A1F36] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          {/* Column 1: Logo, Institution & Address */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#hero"
              aria-label={site.name}
              className="inline-block focus-visible:outline-2 focus-visible:outline-[#FF8C00] rounded-xl"
            >
              <Logo className="h-13 w-auto" />
            </a>
            <p className="text-sm text-white/80 font-medium leading-relaxed max-w-sm pt-1">
              {site.institution}
            </p>
            <p className="text-sm text-white/65 leading-relaxed max-w-sm">
              {site.address}
            </p>
            <p className="text-xs text-white/60 pt-1">
              {site.email} · {site.phone}
            </p>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-[#FF8C00] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Official Social Channels */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wide">
              Connect with LICET
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {site.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-2 hover:text-[#FF8C00] transition-colors"
                  >
                    <span className="font-medium text-white group-hover:text-[#FF8C00]">
                      {social.name}:
                    </span>
                    <span className="text-white/75 group-hover:text-white">
                      {social.handle}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 mt-1 shrink-0 opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 LICET FabLab. All rights reserved.</p>
          <p>{site.institution}, Chennai</p>
        </div>
      </div>
    </footer>
  );
}
