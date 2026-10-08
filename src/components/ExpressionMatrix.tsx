import React, { useState } from 'react';
import { CHARACTER_EXPRESSIONS, ASSET_PATHS } from '../data/characterData';
import { TraceVectorAvatar, SolanaLogo, PumpFunLogo } from './SvgAssets';
import { TraceImage } from './TraceImage';
import { Smile, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

export const ExpressionMatrix: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>('confident');

  const activeExp =
    CHARACTER_EXPRESSIONS.find((e) => e.id === selectedExpId) ||
    CHARACTER_EXPRESSIONS[1];

  return (
    <section className="py-12 border-b border-[#1A1E30] bg-[#07080E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F98BA] tracking-wider uppercase mb-1">
            <SolanaLogo size={14} />
            <span>Solana Ocular Protocol</span>
            <span aria-hidden="true" className="text-[#9945FF]">·</span>
            <span>8-State Expression Reference</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#E4E7F5] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            The Expression Matrix
          </h2>
          <p className="text-[#8F98BA] text-sm mt-1 max-w-2xl">
            Controlled micro-expressions maintaining TRACE’s signature deadpan mystery. The humor emerges through context and calm chaos, never through exaggerated cartoon silliness.
          </p>
        </div>

        {/* 8-Card Interactive Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CHARACTER_EXPRESSIONS.map((exp) => {
            const isSelected = selectedExpId === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? 'bg-[#121629] border-[#14F195] shadow-[0_0_15px_rgba(20,241,149,0.25)] ring-1 ring-[#14F195]'
                    : 'bg-[#0B0E1C] border-[#1E2542] hover:border-[#2A345C] hover:bg-[#121629]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-[#6C7699]">{exp.code}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#14F195]" />}
                  </div>
                  <span className={`text-xs font-bold block ${isSelected ? 'text-[#14F195]' : 'text-[#E4E7F5]'}`}>
                    {exp.name}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#8F98BA] mt-2 italic">
                  {exp.quote}
                </span>
              </button>
            );
          })}
        </div>

        {/* Deep Dive into Active Expression */}
        <div className="bg-[#0B0E1C] border border-[#1E2542] rounded-xl p-6 lg:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Expression Avatar Display */}
            <div className="lg:col-span-5 bg-[#07080E] border border-[#1E2542] rounded-xl p-6 flex flex-col items-center justify-center relative min-h-[320px]">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-[#232B4C] bg-[#07080E] shadow-2xl flex items-center justify-center">
                <TraceVectorAvatar size={180} glow={true} />
              </div>

              <div className="mt-4 px-3 py-1.5 bg-[#121629] rounded border border-[#1E2542] text-xs font-mono text-[#14F195]">
                {activeExp.code} · {activeExp.name.toUpperCase()}
              </div>
            </div>

            {/* Expression Analysis */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#14F195] tracking-wider uppercase">
                  CANONICAL BEHAVIOR PROFILE
                </span>
                <span className="text-xl font-mono text-[#E4E7F5] font-bold">
                  {activeExp.quote}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#E4E7F5]">
                {activeExp.name}
              </h3>

              <p className="text-sm text-[#8F98BA] leading-relaxed">
                {activeExp.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#07080E] rounded-lg border border-[#1E2542] text-xs font-mono">
                  <span className="text-[#6C7699] block mb-1">BROW GEOMETRY</span>
                  <span className="text-[#E4E7F5] font-semibold">{activeExp.browAngle}</span>
                </div>
                <div className="p-3 bg-[#07080E] rounded-lg border border-[#1E2542] text-xs font-mono">
                  <span className="text-[#6C7699] block mb-1">SOLANA OCULAR FLUX</span>
                  <span className="text-[#14F195] font-semibold">{activeExp.eyeLuminance}</span>
                </div>
                <div className="p-3 bg-[#07080E] rounded-lg border border-[#1E2542] text-xs font-mono">
                  <span className="text-[#6C7699] block mb-1">MOUTH APERTURE</span>
                  <span className="text-[#E4E7F5] font-semibold">{activeExp.mouthExpression}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#1E2542] text-xs text-[#8F98BA]">
                <strong className="text-[#14F195]">Meme / Telegram Context: </strong>
                <span>{activeExp.humorContext}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
