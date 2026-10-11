// Responsive top navigation bar featuring the official LICET FabLab logo and dynamic links from config/features.js.

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '../config/site';
import { features } from '../config/features';
import Button from './Button';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = features.filter((item) => item.showInNav);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#4169E1]/12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Official LICET FabLab Logo */}
        <a
          href="#hero"
          aria-label={site.name}
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#4169E1] rounded-xl"
        >
          <Logo className="h-11 sm:h-12 w-auto" />
        </a>

        {/* Zone 2: Desktop Navigation Links from feature registry */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#1A1F36]/80"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="py-1 hover:text-[#2A4BB8] border-b-2 border-transparent hover:border-[#FF8C00] transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:block">
            <Button href="#services" variant="primary">
              Book Facility
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-[#1A1F36] hover:bg-[#F4F7FF] hover:text-[#2A4BB8] transition-colors focus-visible:outline-2 focus-visible:outline-[#4169E1]"
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#4169E1]/15 px-4 pt-2 pb-5 shadow-lg">
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-1"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#1A1F36] hover:bg-[#F4F7FF] hover:text-[#2A4BB8] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <Button
                href="#services"
                variant="primary"
                onClick={handleNavClick}
                className="w-full"
              >
                Book Facility
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
