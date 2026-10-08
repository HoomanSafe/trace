import React, { useState } from 'react';
import { TURNAROUND_VIEWS, ASSET_PATHS } from '../data/characterData';
import { NullCrestSymbol, TraceVectorAvatar, SolanaLogo, PumpFunLogo } from './SvgAssets';
import { TraceImage } from './TraceImage';
import { RotateCw, Compass, CheckCircle2, Ruler, Eye, Shield } from 'lucide-react';

export const TurnaroundInspector: React.FC = () => {
  const [selectedViewId, setSelectedViewId] = useState<string>('three_quarter');
  const [showGuidelines, setShowGuidelines] = useState<boolean>(true);
  const [showAnatomyTags, setShowAnatomyTags] = useState<boolean>(true);

  const activeView = TURNAROUND_VIEWS.find((v) => v.id === selectedViewId) || TURNAROUND_VIEWS[1];

  return (
    <section className="py-12 border-b border-[#1A1E30] bg-[#07080E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F98BA] tracking-wider uppercase mb-1">
            <SolanaLogo size={14} />
            <span>Solana Production Spec</span>
            <span aria-hidden="true" className="text-[#9945FF]">·</span>
            <span>360° Turnaround Blueprint</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#E4E7F5] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Character Turnaround Reference
          </h2>
          <p className="text-[#8F98BA] text-sm mt-1 max-w-2xl">
            Orthographic model sheet ensuring 100% visual consistency across 3D metaverse assets, Telegram sticker engines, animated shorts, and pump.fun campaign artwork.
          </p>
        </div>

        {/* View Angles Selector Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0B0E1C] p-3 rounded-xl border border-[#1E2542] shadow-md">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#14F195]" />
            <span className="text-xs font-mono text-[#8F98BA] mr-2">Orthographic Angle:</span>
            {TURNAROUND_VIEWS.map((view) => {
              const isSelected = selectedViewId === view.id;
              return (
                <button
                  key={view.id}
                  onClick={() => setSelectedViewId(view.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#151A30] text-[#14F195] font-semibold border border-[#14F195]/40 shadow-sm'
                      : 'text-[#8F98BA] hover:text-[#E4E7F5] border border-transparent'
                  }`}
                >
                  {view.label}
                </button>
              );
            })}
          </div>

          {/* Toggle Display Overlays */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <button
              onClick={() => setShowGuidelines(!showGuidelines)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                showGuidelines ? 'text-[#14F195] bg-[#121629] border border-[#14F195]/30' : 'text-[#6C7699] hover:text-[#E4E7F5]'
              }`}
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>Proportion Guides</span>
            </button>
            <button
              onClick={() => setShowAnatomyTags(!showAnatomyTags)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                showAnatomyTags ? 'text-[#14F195] bg-[#121629] border border-[#14F195]/30' : 'text-[#6C7699] hover:text-[#E4E7F5]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Anatomy Callouts</span>
            </button>
          </div>
        </div>

        {/* Turnaround Stage & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual Blueprint Stage */}
          <div className="lg:col-span-7 bg-[#07080E] border border-[#1E2542] rounded-xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px] shadow-xl">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#151A30_1px,transparent_1px),linear-gradient(to_bottom,#151A30_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

            {/* Proportion Calibration Guide Lines (Horizontal) */}
            {showGuidelines && (
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute top-[12%] left-0 right-0 border-b border-[#14F195]/30 flex justify-between px-3 text-[10px] font-mono text-[#14F195]/80">
                  <span>HOOD CREST APEX (Y: 0.12)</span>
                  <span>118° ORIGAMI PEAK</span>
                </div>
                <div className="absolute top-[28%] left-0 right-0 border-b border-[#14F195]/30 flex justify-between px-3 text-[10px] font-mono text-[#14F195]/80">
                  <span>EYE HORIZON / VISOR OVERHANG (Y: 0.28)</span>
                  <span>SOLANA MINT GLOW</span>
                </div>
                <div className="absolute top-[38%] left-0 right-0 border-b border-[#8F98BA]/20 flex justify-between px-3 text-[10px] font-mono text-[#8F98BA]/50">
                  <span>SHOULDER GIRDLE PIVOT (Y: 0.38)</span>
                  <span>ATHLETIC COMPACT FRAME</span>
                </div>
                <div className="absolute top-[62%] left-0 right-0 border-b border-[#8F98BA]/20 flex justify-between px-3 text-[10px] font-mono text-[#8F98BA]/50">
                  <span>JACKET HEM TERMINUS (Y: 0.62)</span>
                  <span>STREAMLINED TACTICAL SILK</span>
                </div>
              </div>
            )}

            {/* The Character Visual Model for the Active View Angle */}
            <div className="relative z-0 max-w-sm w-full aspect-[3/4] flex items-center justify-center">
              {selectedViewId === 'front' ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <TraceVectorAvatar size={340} glow={true} />
                </div>
              ) : selectedViewId === 'three_quarter' ? (
                <TraceImage
                  src={ASSET_PATHS.hero}
                  alt="3/4 View Model Reference"
                  className="w-full h-full rounded-lg shadow-2xl"
                />
              ) : selectedViewId === 'profile' ? (
                <TraceImage
                  src={ASSET_PATHS.portrait}
                  alt="Profile View Model Reference"
                  className="w-full h-full rounded-lg shadow-2xl"
                />
              ) : (
                <TraceImage
                  src={ASSET_PATHS.lookback}
                  alt="Rear / Walk Away Model Reference"
                  className="w-full h-full rounded-lg shadow-2xl"
                />
              )}

              {/* Anatomy Callout Markers */}
              {showAnatomyTags && (
                <>
                  <div className="absolute top-[22%] right-[5%] z-20 bg-[#07080E]/90 border border-[#14F195] text-[#14F195] text-[10px] font-mono px-2 py-0.5 rounded shadow-lg animate-pulse">
                    ◆ Solana Optic Seam
                  </div>
                  <div className="absolute top-[32%] left-[5%] z-20 bg-[#07080E]/90 border border-[#EDECE8] text-[#EDECE8] text-[10px] font-mono px-2 py-0.5 rounded shadow-lg">
                    ◆ Intelligent Mint Slit
                  </div>
                  <div className="absolute bottom-[20%] right-[10%] z-20 bg-[#07080E]/90 border border-[#1E2542] text-[#8F98BA] text-[10px] font-mono px-2 py-0.5 rounded shadow-lg">
                    ◆ Matte Speed Carbon #07080E
                  </div>
                </>
              )}
            </div>

            {/* Stage Footer Status */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#6C7699] z-20">
              <span className="text-[#14F195]">MODEL: TRACE_SOLANA_V1</span>
              <span>ANGLE: {activeView.angle}</span>
            </div>
          </div>

          {/* Model Specification Card */}
          <div className="lg:col-span-5 bg-[#0B0E1C] border border-[#1E2542] rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#14F195]">ORTHOGRAPHIC SPECIFICATION</span>
                <span className="text-xs font-mono text-[#8F98BA] bg-[#07080E] px-2 py-0.5 rounded border border-[#1E2542]">
                  {activeView.angle}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#E4E7F5]">
                {activeView.label} Architectural Notes
              </h3>

              <p className="text-sm text-[#8F98BA] leading-relaxed">
                {activeView.notes}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono text-[#E4E7F5] font-semibold block mb-2">
                  VERIFIED DESIGN CRITERIA:
                </span>
                <ul className="space-y-2.5 text-xs text-[#8F98BA]">
                  {activeView.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#14F195] shrink-0 mt-0.5" />
                      <span className="text-[#E4E7F5]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Consistency Seal */}
            <div className="p-3.5 bg-[#07080E] border border-[#1E2542] rounded-lg flex items-center gap-3">
              <NullCrestSymbol size={32} glow={false} />
              <div className="text-xs">
                <span className="font-mono text-[#E4E7F5] font-bold block">
                  SOLANA BRAND CONSISTENCY LOCK
                </span>
                <span className="text-[#6C7699] font-mono text-[11px]">
                  All angles conform to 400ms speed silhouette discipline.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
