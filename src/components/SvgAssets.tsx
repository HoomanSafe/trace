import React from 'react';

/**
 * 08. character-symbol.svg
 * The original symbol representing STEALTH + SOLANA + AI + HOOD.
 * Clean, minimal geometric emblem: an angular origami hood apex integrated with
 * an asymmetric Solana data pulse and chevron break.
 */
export const NullCrestSymbol: React.FC<{
  size?: number;
  className?: string;
  fillColor?: string;
  glow?: boolean;
}> = ({ size = 64, className = '', fillColor = '#14F195', glow = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TRACE Brand Symbol - The Solana Null Crest"
    >
      <defs>
        <filter id="solanaCrestGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="solanaCrestGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
      </defs>

      {/* Background circular subtle guide */}
      <circle cx="50" cy="50" r="46" stroke="#1E233D" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Outer Angular Stealth Hood Chevron */}
      <path
        d="M 50 14 L 84 48 L 76 56 L 50 30 L 24 56 L 16 48 Z"
        fill="url(#solanaCrestGrad)"
        filter={glow ? 'url(#solanaCrestGlow)' : undefined}
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
      <circle cx="78" cy="22" r="2.5" fill="#14F195" />
      <line x1="78" y1="22" x2="86" y2="14" stroke="#9945FF" strokeWidth="1" strokeDasharray="1 1" />
    </svg>
  );
};

/**
 * Solana Blockchain Official Logo (Vector 3-Bar Parallelograms)
 */
export const SolanaLogo: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 20, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Solana Blockchain"
    >
      <defs>
        <linearGradient id="solGradTop" x1="16" y1="24" x2="112" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
        <linearGradient id="solGradMid" x1="16" y1="64" x2="112" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14F195" />
          <stop offset="100%" stopColor="#9945FF" />
        </linearGradient>
        <linearGradient id="solGradBot" x1="16" y1="104" x2="112" y2="104" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
      </defs>
      {/* Top Bar */}
      <path
        d="M 28 14 C 29 11 32 9 36 9 L 112 9 C 117 9 119 14 116 18 L 100 37 C 99 40 96 42 92 42 L 16 42 C 11 42 9 37 12 33 Z"
        fill="url(#solGradTop)"
      />
      {/* Middle Bar (reversed slant) */}
      <path
        d="M 12 55 C 9 59 11 64 16 64 L 92 64 C 96 64 99 62 100 59 L 116 40 C 119 36 117 31 112 31 L 36 31 C 32 31 29 33 28 36 Z"
        fill="url(#solGradMid)"
        transform="translate(128, 128) rotate(180)"
      />
      {/* Bottom Bar */}
      <path
        d="M 28 86 C 29 83 32 81 36 81 L 112 81 C 117 81 119 86 116 90 L 100 109 C 99 112 96 114 92 114 L 16 114 C 11 114 9 109 12 105 Z"
        fill="url(#solGradBot)"
      />
    </svg>
  );
};

/**
 * Pump.fun Official Pill Capsule Logo (Vector)
 * Tilted green capsule pill with happy smiley face and specular shine.
 */
export const PumpFunLogo: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 20, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pump.fun Pill Capsule"
    >
      <g transform="translate(50, 50) rotate(-45) translate(-50, -50)">
        {/* Top half green */}
        <path
          d="M 26 50 L 26 30 C 26 16.7 36.7 6 50 6 C 63.3 6 74 16.7 74 30 L 74 50 Z"
          fill="#10B981"
        />
        {/* Bottom half soft mint/white with pill seam */}
        <path
          d="M 26 50 L 74 50 L 74 70 C 74 83.3 63.3 94 50 94 C 36.7 94 26 83.3 26 70 Z"
          fill="#34D399"
        />
        {/* Divider line */}
        <line x1="26" y1="50" x2="74" y2="50" stroke="#047857" strokeWidth="3" />
        {/* Specular pill shine */}
        <path
          d="M 36 20 C 36 17 40 14 46 14"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Smiling eyes and mouth on bottom half */}
        <circle cx="42" cy="65" r="2.5" fill="#064E3B" />
        <circle cx="58" cy="65" r="2.5" fill="#064E3B" />
        <path d="M 46 72 Q 50 76 54 72" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
};

/**
 * 09. character-avatar.svg
 * Vector avatar representation of TRACE.
 * Structured futuristic hood with geometric origami facets, deep shadow mask,
 * and piercing emerald glowing eyes with Solana mint/purple accents.
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
        <filter id="solEyeNeon" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="solHoodLeft" x1="40" y1="30" x2="100" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E233D" />
          <stop offset="1" stopColor="#0B0D19" />
        </linearGradient>
        <linearGradient id="solHoodRight" x1="160" y1="30" x2="100" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#141829" />
          <stop offset="1" stopColor="#07080E" />
        </linearGradient>
        <linearGradient id="solCyberSeam" x1="100" y1="24" x2="148" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
      </defs>

      {/* Background Frame (if not silhouette test) */}
      {!silhouetteOnly && !eyesOnly && (
        <rect width="200" height="200" rx="32" fill="#07080E" stroke="#1E233D" strokeWidth="1.5" />
      )}

      {/* If Eyes Only, just pitch black background with glowing eyes */}
      {eyesOnly ? (
        <g>
          <rect width="200" height="200" fill="#030408" />
          {/* Subtle hood interior shadow rim */}
          <path
            d="M 54 85 Q 100 68 146 85"
            stroke="#0C1024"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Left Eye */}
          <path
            d="M 62 108 L 86 103 L 88 106 L 66 112 Z"
            fill="#14F195"
            filter="url(#solEyeNeon)"
          />
          <circle cx="80" cy="104.5" r="1.5" fill="#EDECE8" />

          {/* Right Eye */}
          <path
            d="M 114 103 L 138 108 L 134 112 L 112 106 Z"
            fill="#14F195"
            filter="url(#solEyeNeon)"
          />
          <circle cx="120" cy="104.5" r="1.5" fill="#EDECE8" />
        </g>
      ) : silhouetteOnly ? (
        /* Pure Solid Black Silhouette */
        <g fill="#000000">
          <path d="M 10 195 C 30 155 60 142 100 142 C 140 142 170 155 190 195 Z" />
          <path d="M 68 148 L 100 162 L 132 148 L 126 122 L 74 122 Z" />
          <path d="M 100 22 L 158 72 L 150 128 L 100 148 L 50 128 L 42 72 Z" />
        </g>
      ) : (
        /* Full Colored Vector Mascot Avatar */
        <g>
          {/* Shoulder Silhouette */}
          <path
            d="M 14 196 C 36 158 66 144 100 144 C 134 144 164 158 186 196 Z"
            fill="#0F1222"
          />
          {/* Collar High Tech Cowl */}
          <path
            d="M 68 148 L 100 164 L 132 148 L 126 118 L 74 118 Z"
            fill="#151A30"
            stroke="#252D50"
            strokeWidth="1.5"
          />
          {/* Center Seam Zip Line */}
          <line x1="100" y1="164" x2="100" y2="196" stroke="#2A345C" strokeWidth="2" />

          {/* Outer Hood Base Layer */}
          <path
            d="M 100 24 L 156 70 L 148 126 L 100 146 L 52 126 L 44 70 Z"
            fill="#090B17"
            stroke="#212745"
            strokeWidth="2"
          />

          {/* Left Hood Facet */}
          <path
            d="M 100 24 L 44 70 L 58 124 L 100 96 Z"
            fill="url(#solHoodLeft)"
          />

          {/* Right Hood Facet */}
          <path
            d="M 100 24 L 156 70 L 142 124 L 100 96 Z"
            fill="url(#solHoodRight)"
          />

          {/* Signature Solana Cipher Seam (asymmetric gradient thread along right hood crest) */}
          <path
            d="M 100 24 L 148 64"
            stroke="url(#solCyberSeam)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter={glow ? 'url(#solEyeNeon)' : undefined}
          />
          <circle cx="148" cy="64" r="2.5" fill="#14F195" />

          {/* Inner Deep Shadow Void in Face Cavity */}
          <path
            d="M 58 76 L 100 62 L 142 76 L 132 124 L 100 134 L 68 124 Z"
            fill="#030408"
          />

          {/* Distinctive Eyes - Narrow, Sharp, Intelligent */}
          {/* Left Eye */}
          <path
            d="M 68 100 L 88 95 L 90 98 L 71 103 Z"
            fill="#14F195"
            filter={glow ? 'url(#solEyeNeon)' : undefined}
          />
          <circle cx="83" cy="97" r="1.5" fill="#EDECE8" />

          {/* Right Eye */}
          <path
            d="M 110 95 L 130 100 L 127 103 L 108 98 Z"
            fill="#14F195"
            filter={glow ? 'url(#solEyeNeon)' : undefined}
          />
          <circle cx="115" cy="97" r="1.5" fill="#EDECE8" />

          {/* Subtle nose shadow ridge */}
          <path d="M 98 108 L 100 116 L 96 117" stroke="#090C1A" strokeWidth="1.5" strokeLinecap="round" />
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
  <defs>
    <linearGradient id="solCrest" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9945FF"/>
      <stop offset="100%" stop-color="#14F195"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="46" stroke="#1E233D" stroke-width="1.5" stroke-dasharray="3 3"/>
  <path d="M 50 14 L 84 48 L 76 56 L 50 30 L 24 56 L 16 48 Z" fill="url(#solCrest)"/>
  <path d="M 50 40 L 70 60 L 50 80 L 30 60 Z" stroke="#14F195" stroke-width="3.5" stroke-linejoin="miter"/>
  <path d="M 40 60 L 60 60" stroke="#EDECE8" stroke-width="3" stroke-linecap="round"/>
  <circle cx="78" cy="22" r="2.5" fill="#14F195"/>
</svg>`;

export const RAW_AVATAR_SVG = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="32" fill="#07080E" stroke="#1E233D" stroke-width="1.5"/>
  <path d="M 14 196 C 36 158 66 144 100 144 C 134 144 164 158 186 196 Z" fill="#0F1222"/>
  <path d="M 68 148 L 100 164 L 132 148 L 126 118 L 74 118 Z" fill="#151A30" stroke="#252D50" stroke-width="1.5"/>
  <line x1="100" y1="164" x2="100" y2="196" stroke="#2A345C" stroke-width="2"/>
  <path d="M 100 24 L 156 70 L 148 126 L 100 146 L 52 126 L 44 70 Z" fill="#090B17" stroke="#212745" stroke-width="2"/>
  <path d="M 100 24 L 44 70 L 58 124 L 100 96 Z" fill="#1E233D"/>
  <path d="M 100 24 L 156 70 L 142 124 L 100 96 Z" fill="#141829"/>
  <path d="M 100 24 L 148 64" stroke="#14F195" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="148" cy="64" r="2.5" fill="#14F195"/>
  <path d="M 58 76 L 100 62 L 142 76 L 132 124 L 100 134 L 68 124 Z" fill="#030408"/>
  <path d="M 68 100 L 88 95 L 90 98 L 71 103 Z" fill="#14F195"/>
  <circle cx="83" cy="97" r="1.5" fill="#EDECE8"/>
  <path d="M 110 95 L 130 100 L 127 103 L 108 98 Z" fill="#14F195"/>
  <circle cx="115" cy="97" r="1.5" fill="#EDECE8"/>
</svg>`;
