// Official LICET FabLab logo component recreating the blue-and-orange lightbulb cube badge.

import { useState } from 'react';

export default function Logo({ className = 'h-11 w-auto', customSrc = '' }) {
  const [imgError, setImgError] = useState(false);

  if (customSrc && !imgError) {
    return (
      <img
        src={customSrc}
        alt="LICET FabLab Logo"
        onError={() => setImgError(true)}
        className={className}
      />
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 120"
      fill="none"
      role="img"
      aria-label="LICET FabLab Logo"
      className={className}
    >
      {/* Right Royal Blue Pill Extension */}
      <rect x="65" y="31" width="188" height="58" rx="29" fill="#1849D6" />

      {/* Left Circle with Orange Outer Ring & Royal Blue Fill */}
      <circle
        cx="62"
        cy="60"
        r="54"
        fill="#1849D6"
        stroke="#FF8C00"
        strokeWidth="6.5"
      />

      {/* Seamless Blue Join Where Pill Meets Circle */}
      <rect x="92" y="34" width="40" height="52" fill="#1849D6" />

      {/* Radiating Orange Light Rays Around Bulb */}
      <g stroke="#FF8C00" strokeWidth="5" strokeLinecap="round">
        <line x1="62" y1="15" x2="62" y2="25" />
        <line x1="31" y1="26" x2="38" y2="33" />
        <line x1="18" y1="53" x2="28" y2="53" />
        <line x1="30" y1="81" x2="38" y2="74" />
        <line x1="93" y1="26" x2="86" y2="33" />
        <line x1="93" y1="81" x2="85" y2="74" />
      </g>

      {/* Orange Lightbulb Head */}
      <path
        d="M62 31C48.745 31 38 41.745 38 55C38 63.3 42.2 70.6 48.6 74.9L47 79L55 77.8C57.2 78.5 59.6 78.9 62 78.9C75.255 78.9 86 68.255 86 55C86 41.745 75.255 31 62 31Z"
        fill="#FF8C00"
      />

      {/* Inner White & Royal Blue 3D FabLab Cube Emblem */}
      <circle cx="62" cy="55" r="17.5" fill="#FFFFFF" />
      <circle cx="62" cy="55" r="15.5" fill="#1849D6" />
      <path
        d="M62 41L74 48V62L62 69L50 62V48L62 41Z"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="#1849D6"
      />
      <path
        d="M62 41L68 44.5L62 48L56 44.5L62 41ZM50 55L56 51.5V58.5L50 62V55ZM74 55L68 51.5V58.5L74 62V55Z"
        fill="#FFFFFF"
      />
      <path
        d="M62 55V69M62 55L50 48M62 55L74 48"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="62" cy="55" r="3.5" fill="#FFFFFF" />

      {/* Lightbulb Screw Base */}
      <rect x="49" y="83" width="26" height="5.5" rx="2.75" fill="#FF8C00" />
      <rect x="51" y="91" width="22" height="5.5" rx="2.75" fill="#FF8C00" />
      <path
        d="M55 99H69C67.5 103.5 65 106 62 106C59 106 56.5 103.5 55 99Z"
        fill="#FF8C00"
      />

      {/* Right Pill Typography: LICET / Orange Bar / FABLAB */}
      <text
        x="173"
        y="54"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="'Plus Jakarta Sans', 'DM Sans', sans-serif"
        fontWeight="800"
        fontSize="20"
        letterSpacing="2.5"
      >
        LICET
      </text>

      <rect x="122" y="59.5" width="104" height="4.5" rx="2.25" fill="#FF8C00" />

      <text
        x="174"
        y="80"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="'Plus Jakarta Sans', 'DM Sans', sans-serif"
        fontWeight="800"
        fontSize="19.5"
        letterSpacing="1.8"
      >
        FABLAB
      </text>
    </svg>
  );
}
