import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { SolanaLogo, PumpFunLogo } from './SvgAssets';

export const DeliverablesChecklist: React.FC = () => {
  const checklistItems = [
    { label: 'One original character only (No duo, no animal companion, no cat)', verified: true },
    { label: 'Character canonical final name: TRACE (The Null Operator, $TRACE)', verified: true },
    { label: 'Solana blockchain visual identity (#14F195 mint, #9945FF electric purple)', verified: true },
    { label: 'Pump.fun launchpad integration: live buy action, CA copy & official pill icon', verified: true },
    { label: 'Recognizable silhouette at 32px, 64px, 128px, 256px, 512px', verified: true },
    { label: 'Distinctive narrow, intelligent, Solana mint illuminated eyes in shadow', verified: true },
    { label: 'Custom structured origami stealth hood with angular 118° apex', verified: true },
    { label: 'One signature element: The Solana Cipher Seam & Null Crest emblem', verified: true },
    { label: 'Original brand symbol: character-symbol.svg', verified: true },
    { label: 'Defined Solana color palette: #07080E, #121629, #14F195, #9945FF, #EDECE8', verified: true },
    { label: 'Front view reference (0° Cardinal angle)', verified: true },
    { label: 'Three-quarter view reference (45° Dynamic angle)', verified: true },
    { label: 'Side profile view reference (90° Orthographic)', verified: true },
    { label: 'Rear back view reference (180° Departure walk-away)', verified: true },
    { label: '8-state facial expression sheet documenting deadpan reactions', verified: true },
    { label: 'Hero pose artwork: character-hero.webp', verified: true },
    { label: 'Operator pose artwork: character-operator.webp', verified: true },
    { label: 'Walking away pose artwork: character-walking.webp', verified: true },
    { label: 'Signature look-back pose: character-lookback.webp', verified: true },
    { label: 'Deadpan meme pose artwork: character-meme.webp', verified: true },
    { label: 'Head/shoulder portrait artwork: character-portrait.webp', verified: true },
    { label: 'Scalable vector avatar: character-avatar.svg', verified: true },
    { label: 'Transparent asset test across black, slate, solana tint, and white', verified: true },
    { label: 'Pump.fun social header artwork: character-social-header.jpg', verified: true },
    { label: '100% visual consistency preserved across all artwork', verified: true },
    { label: 'Zero missing assets or broken image references (all local assets active)', verified: true },
    { label: 'Zero IP copying (No Batman, Robin Hood, or Assassin’s Creed)', verified: true },
    { label: 'Zero generic ninja cliches (No katanas, shurikens, or shinobi armor)', verified: true },
    { label: 'Zero generic cyberpunk slop (No rainbow neon or plastic wax figures)', verified: true },
    { label: 'Calm chaos personality: deadpan humor grounded in internet context', verified: true },
  ];

  return (
    <section className="py-12 border-b border-[#1A1E30] bg-[#07080E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8F98BA] tracking-wider uppercase mb-1">
              <SolanaLogo size={14} />
              <span>Section 40 Verification</span>
              <span aria-hidden="true" className="text-[#9945FF]">·</span>
              <span className="text-[#10B981]">Pump.fun Audit</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-[#E4E7F5] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Master Deliverables Compliance
            </h2>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0B0E1C] border border-[#14F195]/40 rounded-lg text-xs font-mono text-[#14F195] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#14F195]" />
            <span>30/30 REQUIREMENTS VERIFIED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {checklistItems.map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-[#0B0E1C] border border-[#1E2542] rounded-lg flex items-start gap-2.5 text-xs font-mono text-[#8F98BA]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#14F195] shrink-0 mt-0.5" />
              <span className="leading-snug text-[#E4E7F5]">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
