import React, { useState } from 'react';
import { TURNAROUND_VIEWS, ASSET_PATHS } from '../data/characterData';
import { NullCrestSymbol, TraceVectorAvatar } from './SvgAssets';
import { TraceImage } from './TraceImage';
import { RotateCw, Compass, CheckCircle2, Ruler, Eye, Shield } from 'lucide-react';

export const TurnaroundInspector: React.FC = () => {
  const [selectedViewId, setSelectedViewId] = useState<string>('three_quarter');
  const [showGuidelines, setShowGuidelines] = useState<boolean>(true);
  const [showAnatomyTags, setShowAnatomyTags] = useState<boolean>(true);

  const activeView = TURNAROUND_VIEWS.find((v) => v.id === selectedViewId) || TURNAROUND_VIEWS[1];

  return (
    <section className="py-12 border-b border-[#1C201F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F9B95] tracking-wider uppercase mb-1">
            <span>Section 24 Production Spec</span>
            <span aria-hidden="true" className="text-[#0DF569]">·</span>
            <span>360° Turnaround Blueprint</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#EDECE8] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Character Turnaround Reference
          </h2>
          <p className="text-[#8F9B95] text-sm mt-1 max-w-2xl">
            Orthographic model sheet ensuring 100% visual consistency across all future 3D modeling, comic illustrations, stickers, and animation pipelines.
          </p>
        </div>

        {/* View Angles Selector Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#111413] p-3 rounded-xl border border-[#1C201F]">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#0DF569]" />
            <span className="text-xs font-mono text-[#8F9B95] mr-2">Orthographic Angle:</span>
            {TURNAROUND_VIEWS.map((view) => {
              const isSelected = selectedViewId === view.id;
              return (
                <button
                  key={view.id}
                  onClick={() => setSelectedViewId(view.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#151817] text-[#0DF569] font-semibold border border-[#0DF569]/40 shadow-sm'
                      : 'text-[#8F9B95] hover:text-[#EDECE8] border border-transparent'
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
                showGuidelines ? 'text-[#0DF569] bg-[#151817]' : 'text-[#697570] hover:text-[#EDECE8]'
              }`}
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>Proportion Guides</span>
            </button>
            <button
              onClick={() => setShowAnatomyTags(!showAnatomyTags)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                showAnatomyTags ? 'text-[#0DF569] bg-[#151817]' : 'text-[#697570] hover:text-[#EDECE8]'
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
          <div className="lg:col-span-7 bg-[#090A0A] border border-[#1C201F] rounded-xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#151817_1px,transparent_1px),linear-gradient(to_bottom,#151817_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

            {/* Proportion Calibration Guide Lines (Horizontal) */}
            {showGuidelines && (
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute top-[12%] left-0 right-0 border-b border-[#0DF569]/30 flex justify-between px-3 text-[10px] font-mono text-[#0DF569]/70">
                  <span>HOOD CREST APEX (Y: 0.12)</span>
                  <span>118° ORIGAMI PEAK</span>
                </div>
                <div className="absolute top-[28%] left-0 right-0 border-b border-[#0DF569]/30 flex justify-between px-3 text-[10px] font-mono text-[#0DF569]/70">
                  <span>EYE HORIZON / VISOR OVERHANG (Y: 0.28)</span>
                  <span>EMERALD CORE GLOW</span>
                </div>
                <div className="absolute top-[38%] left-0 right-0 border-b border-[#8F9B95]/20 flex justify-between px-3 text-[10px] font-mono text-[#8F9B95]/50">
                  <span>SHOULDER GIRDLE PIVOT (Y: 0.38)</span>
                  <span>ATHLETIC COMPACT FRAME</span>
                </div>
                <div className="absolute top-[62%] left-0 right-0 border-b border-[#8F9B95]/20 flex justify-between px-3 text-[10px] font-mono text-[#8F9B95]/50">
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
                  <div className="absolute top-[22%] right-[5%] z-20 bg-[#090A0A]/90 border border-[#0DF569] text-[#0DF569] text-[10px] font-mono px-2 py-0.5 rounded shadow-lg animate-pulse">
                    ◆ Cipher Seam [Fiber Optic]
                  </div>
                  <div className="absolute top-[32%] left-[5%] z-20 bg-[#090A0A]/90 border border-[#EDECE8] text-[#EDECE8] text-[10px] font-mono px-2 py-0.5 rounded shadow-lg">
                    ◆ Intelligent Emerald Slit
                  </div>
                  <div className="absolute bottom-[20%] right-[10%] z-20 bg-[#090A0A]/90 border border-[#1C201F] text-[#8F9B95] text-[10px] font-mono px-2 py-0.5 rounded shadow-lg">
                    ◆ Matte Ripstop Carbon #090A0A
                  </div>
                </>
              )}
            </div>

            {/* Stage Footer Status */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#697570] z-20">
              <span className="text-[#0DF569]">MODEL: TRACE_V1_MASTER</span>
              <span>ANGLE: {activeView.angle}</span>
            </div>
          </div>

          {/* Model Specification Card */}
          <div className="lg:col-span-5 bg-[#111413] border border-[#1C201F] rounded-xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#0DF569]">ORTHOGRAPHIC SPECIFICATION</span>
                <span className="text-xs font-mono text-[#697570] bg-[#090A0A] px-2 py-0.5 rounded border border-[#1C201F]">
                  {activeView.angle}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#EDECE8]">
                {activeView.label} Architectural Notes
              </h3>

              <p className="text-sm text-[#8F9B95] leading-relaxed">
                {activeView.notes}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono text-[#EDECE8] font-semibold block mb-2">
                  VERIFIED DESIGN CRITERIA:
                </span>
                <ul className="space-y-2.5 text-xs text-[#8F9B95]">
                  {activeView.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0DF569] shrink-0 mt-0.5" />
                      <span className="text-[#EDECE8]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Consistency Seal */}
            <div className="p-3.5 bg-[#090A0A] border border-[#1C201F] rounded-lg flex items-center gap-3">
              <NullCrestSymbol size={32} glow={false} />
              <div className="text-xs">
                <span className="font-mono text-[#EDECE8] font-bold block">
                  BRAND CONSISTENCY LOCK
                </span>
                <span className="text-[#697570] text-[11px]">
                  All views maintain identical 118° hood peak, asymmetric right-side cipher seam, and zero weapon baggage.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
