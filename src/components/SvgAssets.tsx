import React from 'react';

/**
 * 08. character-symbol.svg
 * The original symbol representing STEALTH + AI + HOOD.
 * Clean, minimal geometric emblem: an angular origami hood apex integrated with
 * an asymmetric AI data pulse and chevron break.
 */
export const NullCrestSymbol: React.FC<{
  size?: number;
  className?: string;
  fillColor?: string;
  glow?: boolean;
}> = ({ size = 64, className = '', fillColor = '#0DF569', glow = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TRACE Brand Symbol - The Null Crest"
    >
      <defs>
        <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="crestGrad" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0DF569" />
          <stop offset="1" stopColor="#054F31" />
        </linearGradient>
      </defs>

      {/* Background circular subtle guide */}
      <circle cx="50" cy="50" r="46" stroke="#151817" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Outer Angular Stealth Hood Chevron */}
      <path
        d="M 50 14 L 84 48 L 76 56 L 50 30 L 24 56 L 16 48 Z"
        fill={fillColor}
        filter={glow ? 'url(#emeraldGlow)' : undefined}
      />

      {/* Inner AI Core Diamond & Asymmetric Cipher Notch */}
      <path
        d="M 50 40 L 70 60 L 50 80 L 30 60 Z"
        stroke={fillColor}
        strokeWidth="3.5"
        strokeLinejoin="miter"
      />

      {/* Central Omniscient Slit Node */}
      <path
        d="M 40 60 L 60 60"
        stroke="#EDECE8"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Asymmetric stealth data pin */}
      <circle cx="78" cy="22" r="2.5" fill="#0DF569" />
      <line x1="78" y1="22" x2="86" y2="14" stroke="#0DF569" strokeWidth="1" strokeDasharray="1 1" />
    </svg>
  );
};

/**
 * 09. character-avatar.svg
 * Vector avatar representation of TRACE.
 * Structured futuristic hood with geometric origami facets, deep shadow mask,
 * and piercing emerald glowing eyes with off-white specular cores.
 */
export const TraceVectorAvatar: React.FC<{
  size?: number;
  className?: string;
  glow?: boolean;
  eyesOnly?: boolean;
  silhouetteOnly?: boolean;
}> = ({
  size = 120,
  className = '',
  glow = true,
  eyesOnly = false,
  silhouetteOnly = false,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TRACE Character Avatar"
    >
      <defs>
        <filter id="eyeNeon" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="hoodFacetLeft" x1="40" y1="30" x2="100" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E2321" />
          <stop offset="1" stopColor="#0B0E0D" />
        </linearGradient>
        <linearGradient id="hoodFacetRight" x1="160" y1="30" x2="100" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#141816" />
          <stop offset="1" stopColor="#070908" />
        </linearGradient>
      </defs>

      {/* Background Frame (if not silhouette test) */}
      {!silhouetteOnly && !eyesOnly && (
        <rect width="200" height="200" rx="32" fill="#090A0A" />
      )}

      {/* If Eyes Only, just pitch black background with glowing eyes */}
      {eyesOnly ? (
        <g>
          <rect width="200" height="200" fill="#030404" />
          {/* Subtle hood interior shadow rim */}
          <path
            d="M 54 85 Q 100 68 146 85"
            stroke="#0A140F"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Left Eye */}
          <path
            d="M 62 108 L 86 103 L 88 106 L 66 112 Z"
            fill="#0DF569"
            filter="url(#eyeNeon)"
          />
          <circle cx="80" cy="104.5" r="1.5" fill="#EDECE8" />

          {/* Right Eye */}
          <path
            d="M 114 103 L 138 108 L 134 112 L 112 106 Z"
            fill="#0DF569"
            filter="url(#eyeNeon)"
          />
          <circle cx="120" cy="104.5" r="1.5" fill="#EDECE8" />
        </g>
      ) : silhouetteOnly ? (
        /* Pure Solid Black Silhouette */
        <g fill="#000000">
          {/* Shoulders */}
          <path d="M 10 195 C 30 155 60 142 100 142 C 140 142 170 155 190 195 Z" />
          {/* Cowl and Neck */}
          <path d="M 68 148 L 100 162 L 132 148 L 126 122 L 74 122 Z" />
          {/* Hood Geometric Dome */}
          <path d="M 100 22 L 158 72 L 150 128 L 100 148 L 50 128 L 42 72 Z" />
        </g>
      ) : (
        /* Full Colored Vector Mascot Avatar */
        <g>
          {/* Shoulder Silhouette */}
          <path
            d="M 14 196 C 36 158 66 144 100 144 C 134 144 164 158 186 196 Z"
            fill="#0E1210"
          />
          {/* Collar High Tech Cowl */}
          <path
            d="M 68 148 L 100 164 L 132 148 L 126 118 L 74 118 Z"
            fill="#121614"
            stroke="#1C2420"
            strokeWidth="1.5"
          />
          {/* Center Seam Zip Line */}
          <line x1="100" y1="164" x2="100" y2="196" stroke="#252F2A" strokeWidth="2" />

          {/* Outer Hood Base Layer */}
          <path
            d="M 100 24 L 156 70 L 148 126 L 100 146 L 52 126 L 44 70 Z"
            fill="#090A0A"
            stroke="#1B221E"
            strokeWidth="2"
          />

          {/* Left Hood Facet */}
          <path
            d="M 100 24 L 44 70 L 58 124 L 100 96 Z"
            fill="url(#hoodFacetLeft)"
          />

          {/* Right Hood Facet */}
          <path
            d="M 100 24 L 156 70 L 142 124 L 100 96 Z"
            fill="url(#hoodFacetRight)"
          />

          {/* Signature Cipher Seam (asymmetric green data thread along right hood crest) */}
          <path
            d="M 100 24 L 148 64"
            stroke="#0DF569"
            strokeWidth="2"
            strokeLinecap="round"
            filter={glow ? 'url(#eyeNeon)' : undefined}
          />
          <circle cx="148" cy="64" r="2" fill="#0DF569" />

          {/* Inner Deep Shadow Void in Face Cavity */}
          <path
            d="M 58 76 L 100 62 L 142 76 L 132 124 L 100 134 L 68 124 Z"
            fill="#040605"
          />

          {/* Distinctive Eyes - Narrow, Sharp, Intelligent */}
          {/* Left Eye */}
          <path
            d="M 68 100 L 88 95 L 90 98 L 71 103 Z"
            fill="#0DF569"
            filter={glow ? 'url(#eyeNeon)' : undefined}
          />
          <circle cx="83" cy="97" r="1.5" fill="#EDECE8" />

          {/* Right Eye */}
          <path
            d="M 110 95 L 130 100 L 127 103 L 108 98 Z"
            fill="#0DF569"
            filter={glow ? 'url(#eyeNeon)' : undefined}
          />
          <circle cx="115" cy="97" r="1.5" fill="#EDECE8" />

          {/* Subtle nose shadow ridge */}
          <path d="M 98 108 L 100 116 L 96 117" stroke="#080D0B" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
};

/**
 * Helper to download raw SVG string
 */
export const downloadSvg = (svgString: string, filename: string) => {
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const RAW_SYMBOL_SVG = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="46" stroke="#151817" stroke-width="1.5" stroke-dasharray="3 3"/>
  <path d="M 50 14 L 84 48 L 76 56 L 50 30 L 24 56 L 16 48 Z" fill="#0DF569"/>
  <path d="M 50 40 L 70 60 L 50 80 L 30 60 Z" stroke="#0DF569" stroke-width="3.5" stroke-linejoin="miter"/>
  <path d="M 40 60 L 60 60" stroke="#EDECE8" stroke-width="3" stroke-linecap="round"/>
  <circle cx="78" cy="22" r="2.5" fill="#0DF569"/>
</svg>`;

export const RAW_AVATAR_SVG = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="32" fill="#090A0A"/>
  <path d="M 14 196 C 36 158 66 144 100 144 C 134 144 164 158 186 196 Z" fill="#0E1210"/>
  <path d="M 68 148 L 100 164 L 132 148 L 126 118 L 74 118 Z" fill="#121614" stroke="#1C2420" stroke-width="1.5"/>
  <line x1="100" y1="164" x2="100" y2="196" stroke="#252F2A" stroke-width="2"/>
  <path d="M 100 24 L 156 70 L 148 126 L 100 146 L 52 126 L 44 70 Z" fill="#090A0A" stroke="#1B221E" stroke-width="2"/>
  <path d="M 100 24 L 44 70 L 58 124 L 100 96 Z" fill="#1E2321"/>
  <path d="M 100 24 L 156 70 L 142 124 L 100 96 Z" fill="#141816"/>
  <path d="M 100 24 L 148 64" stroke="#0DF569" stroke-width="2" stroke-linecap="round"/>
  <circle cx="148" cy="64" r="2" fill="#0DF569"/>
  <path d="M 58 76 L 100 62 L 142 76 L 132 124 L 100 134 L 68 124 Z" fill="#040605"/>
  <path d="M 68 100 L 88 95 L 90 98 L 71 103 Z" fill="#0DF569"/>
  <circle cx="83" cy="97" r="1.5" fill="#EDECE8"/>
  <path d="M 110 95 L 130 100 L 127 103 L 108 98 Z" fill="#0DF569"/>
  <circle cx="115" cy="97" r="1.5" fill="#EDECE8"/>
</svg>`;
