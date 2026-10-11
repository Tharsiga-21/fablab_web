// Hero banner section featuring the primary value proposition, LICET FabLab logo badge, and direct links to the Google Forms from services.js.

import { ArrowUpRight, Layers, Cpu, Zap, Compass } from 'lucide-react';
import { services } from '../data/services';
import { site } from '../config/site';
import Button from '../components/Button';
import Logo from '../components/Logo';

export default function Hero() {
  const printingService =
    services.find((s) => s.id === '3d-printing') || services[0];
  const bookingService =
    services.find((s) => s.id === 'space-booking') || services[1];

  const highlights = [
    {
      icon: Layers,
      metric: '25 × 21 × 21 cm',
      label: 'Prusa MK3 3D Build Volume',
    },
    {
      icon: Zap,
      metric: '1300 × 900 mm',
      label: '100W CO2 Laser Working Bed',
    },
    {
      icon: Cpu,
      metric: '10+ Filaments',
      label: 'PLA, PETG, ABS, Nylon, Flex & Carbon',
    },
    {
      icon: Compass,
      metric: 'Ideation + Lab',
      label: 'Thinking Corner & Workshop Access',
    },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#2A4BB8] via-[#4169E1] to-[#1E3A8A] text-white"
    >
      {/* Subtle geometric orange accent shapes */}
      <div
        className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#FF8C00]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-12 right-12 hidden lg:block h-64 w-64 rounded-3xl border border-[#FF8C00]/30 bg-[#FF8C00]/10 rotate-12"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/5 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 lg:pt-24 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-white/80">
              {site.institution} · Chennai
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Fabrication and Ideation Workspace
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
              Turn your ideas into reality at the LICET FabLab.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              {printingService && (
                <Button href={printingService.url} variant="primary" external>
                  <span>Request 3D Printing</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              )}

              {bookingService && (
                <Button
                  href={bookingService.url}
                  variant="secondary"
                  inverse
                  external
                >
                  <span>Book a Space</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Architectural Blueprint Card with Official Logo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-white/15">
                <div>
                  <p className="text-xs text-white/70">Facility Overview</p>
                  <h2 className="text-lg font-bold text-white mt-0.5">
                    Rapid Prototyping Ecosystem
                  </h2>
                </div>
                <Logo className="h-12 w-auto shrink-0" />
              </div>

              <p className="text-sm text-white/85 leading-relaxed mb-6">
                Open to LICET students and faculty for academic coursework,
                interdisciplinary research, national competitions, and hardware
                incubation.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/75">Additive Manufacturing</span>
                  <span className="font-mono font-medium text-white tabular-nums">
                    Prusa MK3 FFF
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/75">Laser Cutting & Engraving</span>
                  <span className="font-mono font-medium text-white tabular-nums">
                    100W CO2 System
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/75">Collaborative Zones</span>
                  <span className="font-mono font-medium text-white">
                    Thinking Corner & Workshop
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Capability Strip */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-start gap-3.5 rounded-xl bg-white/5 px-4 py-3.5 border border-white/10"
              >
                <div className="p-2 rounded-lg bg-[#FF8C00]/20 text-[#FF8C00] shrink-0 mt-0.5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-base font-bold text-white tabular-nums">
                    {item.metric}
                  </p>
                  <p className="text-xs text-white/75 mt-0.5">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
