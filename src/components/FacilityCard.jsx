// src/components/FacilityCard.jsx
// Facility Overview card for the hero: glass panel with icon-based spec tiles.
import { Printer, Zap, Users, Sparkles } from "lucide-react";

const specs = [
  { icon: Printer, label: "Additive Manufacturing", value: "Prusa MK3 FFF" },
  { icon: Zap, label: "Laser Cutting & Engraving", value: "100W CO2 System" },
  { icon: Users, label: "Collaborative Zones", value: "Thinking Corner & Workshop" },
];

export default function FacilityCard({ logoSrc }) {
  return (
    <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/50 via-white/10 to-[#FF8C00]/60 shadow-2xl">
      <div className="relative rounded-3xl bg-[#1A1F36]/35 backdrop-blur-xl p-6 sm:p-7 overflow-hidden">
        {/* Soft glow that brightens on hover */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-[#FF8C00]/25 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Facility Overview
            </p>
            <h3 className="mt-1.5 text-xl sm:text-2xl font-extrabold leading-tight text-white">
              Rapid Prototyping
              <span className="block text-[#FF8C00]">Ecosystem</span>
            </h3>
          </div>

          {logoSrc ? (
            <img
              src={logoSrc}
              alt="LICET FabLab logo"
              className="h-14 w-auto shrink-0 drop-shadow-lg"
            />
          ) : (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF8C00] shadow-lg shadow-[#FF8C00]/40">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          )}
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-relaxed text-white/80">
          Open to LICET students and faculty for academic coursework,
          interdisciplinary research, national competitions, and hardware
          incubation.
        </p>

        {/* Spec tiles */}
        <ul className="mt-6 space-y-2.5">
          {specs.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-3 transition-all duration-300 hover:border-[#FF8C00]/50 hover:bg-white/10"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FF8C00]">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] uppercase tracking-wider text-white/55">
                  {label}
                </p>
                <p className="truncate font-mono text-sm font-semibold text-white">
                  {value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}