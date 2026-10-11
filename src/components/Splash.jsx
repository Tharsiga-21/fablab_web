// src/components/Splash.jsx
// Intro screen: animated FabLab logo, then calls onDone() to reveal the site.
import { useEffect } from "react";

const DURATION_MS = 3600; // total time before the site appears

export default function Splash({ onDone }) {
  useEffect(() => {
    const DURATION_MS = 5000; // 1 second
    const timer = setTimeout(onDone, DURATION_MS);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="splash fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#2A4BB8] via-[#4169E1] to-[#2A4BB8] overflow-hidden">
      <style>{`
        @keyframes splash-pop {
          0%   { transform: scale(0.4) rotate(-12deg); opacity: 0; }
          60%  { transform: scale(1.08) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes splash-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes splash-rise {
          0%   { transform: translateY(24px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes splash-glow {
          0%, 100% { filter: drop-shadow(0 0 4px #FF8C00); }
          50%      { filter: drop-shadow(0 0 18px #FF8C00); }
        }
        @keyframes splash-exit {
          0%, 85% { opacity: 1; }
          100%    { opacity: 0; visibility: hidden; }
        }
        .splash { animation: splash-exit ${DURATION_MS}ms ease forwards; }
        .splash-box { animation: splash-pop 0.9s cubic-bezier(.2,.8,.2,1) forwards; }
        .splash-outline {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: splash-draw 1.6s ease forwards 0.4s;
        }
        .splash-bulb { animation: splash-glow 1.6s ease-in-out infinite; }
        .splash-letter {
          opacity: 0;
          animation: splash-rise 0.6s ease forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .splash, .splash-box, .splash-outline, .splash-letter, .splash-bulb {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      <div className="splash-box">
        <svg viewBox="0 0 200 200" width="180" height="180">
          <rect
            x="20" y="20" width="160" height="160" rx="36"
            fill="none" stroke="#FFFFFF" strokeWidth="6"
            className="splash-outline"
          />
          <g className="splash-bulb">
            <circle cx="100" cy="82" r="28" fill="#FF8C00" />
            <rect x="88" y="106" width="24" height="18" rx="4" fill="#FF8C00" />
          </g>
          <rect x="82" y="130" width="36" height="6" rx="3" fill="#FFFFFF" />
        </svg>
      </div>

      <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-wide text-white flex gap-2">
        {"LICET".split("").map((ch, i) => (
          <span key={`a${i}`} className="splash-letter" style={{ animationDelay: `${1.0 + i * 0.1}s` }}>
            {ch}
          </span>
        ))}
        <span className="splash-letter text-[#FF8C00]" style={{ animationDelay: "1.6s" }}>
          FabLab
        </span>
      </h1>

      <p className="splash-letter mt-3 text-sm md:text-base text-white/80 tracking-widest uppercase" style={{ animationDelay: "2.0s" }}>
        Fabrication and Ideation Workspace
      </p>

      <button
        onClick={onDone}
        className="absolute bottom-8 right-8 text-sm text-white/80 hover:text-white underline underline-offset-4"
      >
        Skip intro
      </button>
    </div>
  );
}