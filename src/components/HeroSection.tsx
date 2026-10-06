import React, { useState } from 'react';
import { ASSET_PATHS, CHARACTER_NAME, CHARACTER_CODENAME, SIGNATURE_ELEMENT } from '../data/characterData';
import { NullCrestSymbol } from './SvgAssets';
import { Eye, Shield, Sparkles, Download, Layers } from 'lucide-react';

interface HeroSectionProps {
  onOpenDossier: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDossier, onNavigateToTab }) => {
  const [viewMode, setViewMode] = useState<'standard' | 'silhouette' | 'ocular'>('standard');
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 border-b border-[#1C201F]">
      {/* Background ambient grid with subtle emerald dust */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#0DF569_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Master Character Dossier & Identity */}
          <div className="lg:col-span-6 space-y-6">
            {/* Zero-Pill Unboxed Metadata Header */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#8F9B95] tracking-wider uppercase">
              <span>MEMEAI Universe</span>
              <span aria-hidden="true" className="text-[#0DF569]">·</span>
              <span>Single Stealth Mascot</span>
              <span aria-hidden="true" className="text-[#0DF569]">·</span>
              <span>Archetype: The Unknown Operator</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <div className="space-y-2">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#EDECE8] leading-none"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {CHARACTER_NAME}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#0DF569] tracking-wide">
                The Guy In The Shadows
              </p>
            </div>

            {/* Core Narrative / Philosophy */}
            <p className="text-[#9BA7A1] text-base sm:text-lg leading-relaxed max-w-xl">
              Someone who exists on the internet, but nobody knows who they really are.
              He appears suddenly. He watches. He calculates. He disappears. He knows something.
              He is neither hero nor villain—he is the internet’s calm chaos incarnate.
            </p>

            {/* Technical Specifications Grid (Clean Unboxed Grid) */}
            <div className="pt-2 border-t border-[#1C201F] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="block text-[#697570] font-mono mb-1">Codename</span>
                <span className="text-[#EDECE8] font-semibold">{CHARACTER_CODENAME}</span>
              </div>
              <div>
                <span className="block text-[#697570] font-mono mb-1">Ocular Glow</span>
                <span className="text-[#0DF569] font-semibold">Emerald #0DF569</span>
              </div>
              <div>
                <span className="block text-[#697570] font-mono mb-1">Signature Mark</span>
                <span className="text-[#EDECE8] font-semibold">{SIGNATURE_ELEMENT}</span>
              </div>
              <div>
                <span className="block text-[#697570] font-mono mb-1">Fabric Spec</span>
                <span className="text-[#EDECE8] font-semibold">Matte Stealth Carbon</span>
              </div>
              <div>
                <span className="block text-[#697570] font-mono mb-1">Linework</span>
                <span className="text-[#EDECE8] font-semibold">Bold Graphic Novel</span>
              </div>
              <div>
                <span className="block text-[#697570] font-mono mb-1">Meme Stance</span>
                <span className="text-[#0DF569] font-semibold">Deadpan / Calm Chaos</span>
              </div>
            </div>

            {/* Interactive Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigateToTab('tests')}
                className="px-5 py-3 text-xs font-semibold text-[#090A0A] bg-[#0DF569] hover:bg-[#00E05B] rounded-md transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(13,245,105,0.2)] flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Shield className="w-4 h-4" />
                <span>Run 7 Quality Tests</span>
              </button>

              <button
                onClick={onOpenDossier}
                className="px-5 py-3 text-xs font-semibold text-[#EDECE8] bg-[#151817] hover:bg-[#1E2321] border border-[#28302D] rounded-md transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#0DF569]" />
                <span>Read Master Dossier</span>
              </button>

              <button
                onClick={() => onNavigateToTab('meme-studio')}
                className="px-4 py-3 text-xs font-semibold text-[#8F9B95] hover:text-[#EDECE8] transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Launch Meme Studio →</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual with Interactive Mode Switcher */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-[#111413] border border-[#222A26] rounded-xl p-3 shadow-2xl">
              
              {/* Image Viewport Mode Switcher (Functional Segmented Control) */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-[#1C201F]">
                <div className="flex items-center gap-1">
                  <NullCrestSymbol size={22} glow={false} />
                  <span className="text-xs font-mono text-[#8F9B95] ml-1">MASTER POSE 01</span>
                </div>

                <div className="flex items-center gap-1 bg-[#090A0A] p-0.5 rounded border border-[#1C201F] text-xs">
                  <button
                    onClick={() => setViewMode('standard')}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      viewMode === 'standard'
                        ? 'bg-[#151817] text-[#0DF569] font-medium'
                        : 'text-[#697570] hover:text-[#EDECE8]'
                    }`}
                  >
                    Full Art
                  </button>
                  <button
                    onClick={() => setViewMode('silhouette')}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      viewMode === 'silhouette'
                        ? 'bg-[#151817] text-[#0DF569] font-medium'
                        : 'text-[#697570] hover:text-[#EDECE8]'
                    }`}
                  >
                    Silhouette
                  </button>
                  <button
                    onClick={() => setViewMode('ocular')}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      viewMode === 'ocular'
                        ? 'bg-[#151817] text-[#0DF569] font-medium'
                        : 'text-[#697570] hover:text-[#EDECE8]'
                    }`}
                  >
                    Eyes Only
                  </button>
                </div>
              </div>

              {/* Main Visual Display Frame */}
              <div
                className={`relative w-full aspect-[3/4] overflow-hidden rounded-lg mt-3 transition-all duration-300 ${
                  viewMode === 'silhouette'
                    ? 'bg-[#0DF569]'
                    : viewMode === 'ocular'
                    ? 'bg-[#020303]'
                    : 'bg-[#090A0A]'
                }`}
              >
                {/* Mode 1: Standard Full Hero Illustration */}
                {viewMode === 'standard' && (
                  <img
                    src={ASSET_PATHS.hero}
                    alt="TRACE - Master Stealth Mascot for MEMEAI"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isZoomed ? 'scale-125' : 'scale-100'
                    }`}
                  />
                )}

                {/* Mode 2: Silhouette Test (Pure black figure against high contrast emerald) */}
                {viewMode === 'silhouette' && (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none">
                    <img
                      src={ASSET_PATHS.hero}
                      alt="Silhouette benchmark of TRACE"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-0 contrast-200"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-[#090A0A]/90 p-2.5 rounded text-xs font-mono text-[#EDECE8] border border-[#1C201F]">
                      <span className="text-[#0DF569]">TEST 1 PASS:</span> Silhouette recognized instantly by hood peak, athletic shoulders, and zero-weapon posture.
                    </div>
                  </div>
                )}

                {/* Mode 3: Ocular Isolation (Only the iconic sharp green eyes in pitch black) */}
                {viewMode === 'ocular' && (
                  <div className="w-full h-full flex flex-col items-center justify-center relative select-none">
                    <img
                      src={ASSET_PATHS.portrait}
                      alt="Eye identity benchmark"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-[0.25] contrast-[300%]"
                    />
                    <div className="absolute inset-0 bg-radial from-transparent via-[#000000]/80 to-[#000000] pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 bg-[#090A0A]/90 p-2.5 rounded text-xs font-mono text-[#EDECE8] border border-[#1C201F]">
                      <span className="text-[#0DF569]">TEST 2 PASS:</span> "I already know." Narrow, intelligent, zero-robotics emerald gaze.
                    </div>
                  </div>
                )}

                {/* Atmospheric overlay badge */}
                <div className="absolute top-3 left-3 bg-[#090A0A]/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-[#8F9B95] border border-[#1C201F]">
                  01 / HERO · LEAN ATHLETIC
                </div>

                {/* Zoom toggle button */}
                {viewMode === 'standard' && (
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="absolute top-3 right-3 p-2 bg-[#090A0A]/80 hover:bg-[#151817] text-[#EDECE8] rounded border border-[#1C201F] transition-colors text-xs cursor-pointer"
                    title={isZoomed ? 'Zoom Out' : 'Zoom In on Details'}
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Floating Quote Stamp */}
                <div className="absolute bottom-3 right-3 bg-[#090A0A]/85 backdrop-blur-md px-3 py-1.5 rounded border border-[#0DF569]/30 text-xs font-mono text-[#0DF569]">
                  "I already know."
                </div>
              </div>

              {/* Bottom metadata strip */}
              <div className="flex items-center justify-between pt-3 px-1 text-xs text-[#697570] font-mono">
                <span>FILE: character-hero.webp</span>
                <span>ORIGIN: 0xNULL_MEMEAI</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
