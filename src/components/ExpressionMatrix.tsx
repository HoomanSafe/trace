import React, { useState } from 'react';
import { CHARACTER_EXPRESSIONS, ASSET_PATHS } from '../data/characterData';
import { TraceVectorAvatar } from './SvgAssets';
import { Smile, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

export const ExpressionMatrix: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>('confident');

  const activeExp =
    CHARACTER_EXPRESSIONS.find((e) => e.id === selectedExpId) ||
    CHARACTER_EXPRESSIONS[1];

  return (
    <section className="py-12 border-b border-[#1C201F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F9B95] tracking-wider uppercase mb-1">
            <span>Section 25 & 26 Protocol</span>
            <span aria-hidden="true" className="text-[#0DF569]">·</span>
            <span>8-State Expression Reference</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#EDECE8] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            The Expression Matrix
          </h2>
          <p className="text-[#8F9B95] text-sm mt-1 max-w-2xl">
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
                    ? 'bg-[#151817] border-[#0DF569] shadow-[0_0_15px_rgba(13,245,105,0.15)] ring-1 ring-[#0DF569]'
                    : 'bg-[#111413] border-[#1C201F] hover:border-[#28302D] hover:bg-[#141816]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-[#697570]">{exp.code}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#0DF569]" />}
                  </div>
                  <span className={`text-xs font-bold block ${isSelected ? 'text-[#0DF569]' : 'text-[#EDECE8]'}`}>
                    {exp.name}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#8F9B95] mt-2 italic">
                  {exp.quote}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Expression Spotlight Stage */}
        <div className="bg-[#111413] border border-[#1C201F] rounded-xl p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Portrait Rendering */}
            <div className="lg:col-span-5 bg-[#090A0A] border border-[#1C201F] rounded-xl p-6 flex flex-col items-center justify-center relative min-h-[340px]">
              <div className="relative w-56 h-56 rounded-xl overflow-hidden border border-[#28302D] shadow-2xl">
                <img
                  src={ASSET_PATHS.portrait}
                  alt={activeExp.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0A] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="px-2.5 py-1 bg-[#090A0A]/90 backdrop-blur-md rounded border border-[#0DF569]/30 text-xs font-mono text-[#0DF569]">
                    {activeExp.quote}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#697570]">
                <span>OCULAR STATE:</span>
                <span className="text-[#0DF569]">{activeExp.eyeLuminance}</span>
              </div>
            </div>

            {/* Expression Specification Details */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-mono text-[#0DF569] tracking-wider uppercase">
                  {activeExp.code} · FACIAL MECHANICS
                </span>
                <h3 className="text-2xl font-bold text-[#EDECE8] mt-1">
                  {activeExp.name}
                </h3>
                <p className="text-sm text-[#8F9B95] mt-2 leading-relaxed">
                  {activeExp.description}
                </p>
              </div>

              {/* Technical Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-b border-[#1C201F] py-4 text-xs">
                <div>
                  <span className="text-[#697570] font-mono block mb-1">Brow Vector</span>
                  <span className="text-[#EDECE8] font-semibold">{activeExp.browAngle}</span>
                </div>
                <div>
                  <span className="text-[#697570] font-mono block mb-1">Eye Glow Intensity</span>
                  <span className="text-[#0DF569] font-semibold">{activeExp.eyeLuminance}</span>
                </div>
                <div>
                  <span className="text-[#697570] font-mono block mb-1">Lower Jaw Profile</span>
                  <span className="text-[#EDECE8] font-semibold">{activeExp.mouthExpression}</span>
                </div>
              </div>

              {/* Meme & Humor In Context */}
              <div className="p-4 bg-[#090A0A] border border-[#1C201F] rounded-lg space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#EDECE8]">
                  <MessageSquare className="w-3.5 h-3.5 text-[#0DF569]" />
                  <span className="font-bold">Meme Context In The Wild:</span>
                </div>
                <p className="text-xs text-[#8F9B95] leading-relaxed">
                  {activeExp.humorContext}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
