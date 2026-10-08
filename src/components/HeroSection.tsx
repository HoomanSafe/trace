import React, { useState } from 'react';
import { ASSET_PATHS, CHARACTER_NAME, SIGNATURE_ELEMENT, SOLANA_CONFIG } from '../data/characterData';
import { NullCrestSymbol, SolanaLogo, PumpFunLogo } from './SvgAssets';
import { TraceImage } from './TraceImage';
import { Eye, Shield, Sparkles, ExternalLink, Copy, Check, TrendingUp, Award, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenDossier: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDossier, onNavigateToTab }) => {
  const [viewMode, setViewMode] = useState<'standard' | 'silhouette' | 'ocular'>('standard');
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [bondingProgress, setBondingProgress] = useState(SOLANA_CONFIG.bondingCurveProgress);

  const handleCopy = () => {
    navigator.clipboard.writeText(SOLANA_CONFIG.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 border-b border-[#1A1E30] bg-[#07080E]">
      {/* Background ambient grid with Solana dual-color tint */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(#14F195_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Master Character Dossier & Solana Identity */}
          <div className="lg:col-span-6 space-y-6">
            {/* Unboxed Metadata Header */}
            <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#8F98BA] tracking-wider uppercase">
              <span className="flex items-center gap-1.5 text-[#E4E7F5]">
                <SolanaLogo size={14} />
                <span>Solana Blockchain</span>
              </span>
              <span aria-hidden="true" className="text-[#9945FF]">·</span>
              <a
                href={SOLANA_CONFIG.pumpFunCoinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10B981] hover:underline flex items-center gap-1 font-semibold"
              >
                <PumpFunLogo size={14} />
                <span>Pump.fun Launch</span>
              </a>
              <span aria-hidden="true" className="text-[#14F195]">·</span>
              <span className="text-[#14F195] font-semibold">Ticker: {SOLANA_CONFIG.tokenTicker}</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <div className="space-y-2">
              <div className="flex items-center flex-wrap gap-3">
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#E4E7F5] leading-none"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {CHARACTER_NAME}
                </h1>
                <span className="text-xl sm:text-2xl font-mono font-bold bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent border border-[#23293F] px-3 py-0.5 rounded-lg bg-[#0F1222] shadow-[0_0_15px_rgba(153,69,255,0.25)]">
                  $TRACE
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-[#14F195] via-[#6EE7B7] to-[#9945FF] bg-clip-text text-transparent tracking-wide">
                The Solana Shadow Operator · Sub-Second Stealth
              </p>
            </div>

            {/* Core Narrative / Philosophy */}
            <p className="text-[#A5AFC9] text-base sm:text-lg leading-relaxed max-w-xl">
              Born inside the 400ms block slots of the Solana blockchain.
              He watches every transaction. He calculates every swing. He front-runs the noise.
              He is neither villain nor hero—he is Solana's calm chaos incarnate, now live on <strong className="text-[#10B981]">pump.fun</strong>.
            </p>

            {/* Pump.fun Live Bonding Curve Card */}
            <div className="p-4 bg-[#0B0E1C] border border-[#1E2542] rounded-xl space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-[#10B981]/20 border border-[#10B981]/40">
                    <PumpFunLogo size={14} />
                  </div>
                  <span className="font-mono font-bold text-[#E4E7F5]">PUMP.FUN BONDING CURVE</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[#10B981] font-semibold text-[11px] bg-[#0E1A17] px-2 py-0.5 rounded border border-[#10B981]/30">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{SOLANA_CONFIG.kingOfTheHillStatus}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs font-mono text-[#8F98BA] mb-1.5">
                  <span className="text-[#14F195] font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Bonding Curve: {bondingProgress}%</span>
                  </span>
                  <span>Target: Raydium Migration ($69K MC)</span>
                </div>
                <div className="w-full h-2.5 bg-[#141A30] rounded-full overflow-hidden p-0.5 border border-[#232B4C]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#9945FF] via-[#10B981] to-[#14F195] transition-all duration-500 shadow-[0_0_12px_rgba(20,241,149,0.5)]"
                    style={{ width: `${bondingProgress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#6C7699] pt-1">
                <span>Fair Launch: 0% Dev Dump</span>
                <span>Supply: {SOLANA_CONFIG.initialSupply}</span>
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div className="pt-2 border-t border-[#1A1E30] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="block text-[#6C7699] font-mono mb-1">Blockchain</span>
                <span className="text-[#E4E7F5] font-semibold flex items-center gap-1">
                  <SolanaLogo size={12} />
                  <span>Solana Mainnet</span>
                </span>
              </div>
              <div>
                <span className="block text-[#6C7699] font-mono mb-1">Launchpad</span>
                <a
                  href={SOLANA_CONFIG.pumpFunUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10B981] hover:underline font-semibold flex items-center gap-1"
                >
                  <PumpFunLogo size={12} />
                  <span>Pump.fun</span>
                </a>
              </div>
              <div>
                <span className="block text-[#6C7699] font-mono mb-1">Ocular Glow</span>
                <span className="text-[#14F195] font-semibold">Solana Mint #14F195</span>
              </div>
              <div>
                <span className="block text-[#6C7699] font-mono mb-1">Token Standard</span>
                <span className="text-[#E4E7F5] font-semibold">Solana SPL Token</span>
              </div>
              <div>
                <span className="block text-[#6C7699] font-mono mb-1">Tax & Security</span>
                <span className="text-[#14F195] font-semibold">0/0 · Mint Revoked</span>
              </div>
              <div>
                <span className="block text-[#6C7699] font-mono mb-1">Meme Stance</span>
                <span className="text-[#9945FF] font-semibold">Calm Chaos / "Probably nothing"</span>
              </div>
            </div>

            {/* Interactive Primary CTAs with Pump.fun Launch Button */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={SOLANA_CONFIG.pumpFunCoinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-bold text-[#06281E] bg-gradient-to-r from-[#10B981] via-[#14F195] to-[#86EFAC] hover:opacity-95 rounded-md transition-all active:scale-[0.98] shadow-[0_0_25px_rgba(20,241,149,0.4)] flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <PumpFunLogo size={18} />
                <span>Buy $TRACE on Pump.fun</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#06281E]" />
              </a>

              <button
                onClick={handleCopy}
                className="px-4 py-3 text-xs font-mono text-[#E4E7F5] bg-[#121626] hover:bg-[#1A1F36] border border-[#23293F] rounded-md transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-sm"
              >
                {copied ? <Check className="w-4 h-4 text-[#14F195]" /> : <Copy className="w-4 h-4 text-[#9945FF]" />}
                <span>{copied ? 'Solana CA Copied!' : 'Copy Solana CA'}</span>
              </button>

              <button
                onClick={onOpenDossier}
                className="px-4 py-3 text-xs font-semibold text-[#8F98BA] hover:text-[#E4E7F5] transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#9945FF]" />
                <span>Read Operator Lore →</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual with Interactive Mode Switcher */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-[#0D0F1A] border border-[#20253B] rounded-xl p-3 shadow-2xl">
              
              {/* Image Viewport Mode Switcher */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-[#1E233D]">
                <div className="flex items-center gap-1.5">
                  <NullCrestSymbol size={22} glow={false} />
                  <span className="text-xs font-mono text-[#8F98BA] ml-1">MASTER POSE 01 · SOLANA</span>
                </div>

                <div className="flex items-center gap-1 bg-[#07080E] p-0.5 rounded border border-[#1E233D] text-xs">
                  <button
                    onClick={() => setViewMode('standard')}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      viewMode === 'standard'
                        ? 'bg-[#151A30] text-[#14F195] font-semibold border border-[#14F195]/30'
                        : 'text-[#6C7699] hover:text-[#E4E7F5]'
                    }`}
                  >
                    Full Art
                  </button>
                  <button
                    onClick={() => setViewMode('silhouette')}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      viewMode === 'silhouette'
                        ? 'bg-[#151A30] text-[#14F195] font-semibold border border-[#14F195]/30'
                        : 'text-[#6C7699] hover:text-[#E4E7F5]'
                    }`}
                  >
                    Silhouette
                  </button>
                  <button
                    onClick={() => setViewMode('ocular')}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      viewMode === 'ocular'
                        ? 'bg-[#151A30] text-[#14F195] font-semibold border border-[#14F195]/30'
                        : 'text-[#6C7699] hover:text-[#E4E7F5]'
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
                    ? 'bg-[#14F195]'
                    : viewMode === 'ocular'
                    ? 'bg-[#030408]'
                    : 'bg-[#07080E]'
                }`}
              >
                {/* Resilient Character Visual with Instant Image Rendering */}
                <TraceImage
                  src={viewMode === 'ocular' ? ASSET_PATHS.portrait : ASSET_PATHS.hero}
                  alt="TRACE - Master Stealth Mascot for Solana & Pump.fun"
                  filterMode={viewMode}
                  zoom={isZoomed}
                  className="w-full h-full"
                />

                {viewMode === 'silhouette' && (
                  <div className="absolute bottom-4 left-4 right-4 bg-[#07080E]/90 backdrop-blur-md p-2.5 rounded text-xs font-mono text-[#E4E7F5] border border-[#1E233D] z-20">
                    <span className="text-[#14F195] font-bold">SOLANA STEALTH TEST:</span> Recognizable silhouette on high-speed DEX charts, Telegram stickers, and Discord avatars.
                  </div>
                )}

                {viewMode === 'ocular' && (
                  <div className="absolute bottom-4 left-4 right-4 bg-[#07080E]/90 backdrop-blur-md p-2.5 rounded text-xs font-mono text-[#E4E7F5] border border-[#1E233D] z-20">
                    <span className="text-[#14F195] font-bold">SOLANA OCULAR TEST:</span> "I already know." Sub-second calm calculation, glowing in Solana Mint (#14F195).
                  </div>
                )}

                {/* Atmospheric overlay badge */}
                <div className="absolute top-3 left-3 bg-[#07080E]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-[#8F98BA] border border-[#1E233D] flex items-center gap-1.5">
                  <SolanaLogo size={12} />
                  <span>01 / HERO · SOLANA OPERATOR</span>
                </div>

                {/* Zoom toggle button */}
                {viewMode === 'standard' && (
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="absolute top-3 right-3 p-2 bg-[#07080E]/85 hover:bg-[#151A30] text-[#E4E7F5] rounded border border-[#1E233D] transition-colors text-xs cursor-pointer"
                    title={isZoomed ? 'Zoom Out' : 'Zoom In on Details'}
                  >
                    <Eye className="w-3.5 h-3.5 text-[#14F195]" />
                  </button>
                )}

                {/* Floating Quote Stamp */}
                <div className="absolute bottom-3 right-3 bg-[#07080E]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#14F195]/40 text-xs font-mono text-[#14F195] shadow-lg flex items-center gap-1.5">
                  <PumpFunLogo size={12} />
                  <span>"I already know."</span>
                </div>
              </div>

              {/* Bottom metadata strip */}
              <div className="flex items-center justify-between pt-3 px-1 text-xs text-[#6C7699] font-mono">
                <span>FILE: character-hero.webp</span>
                <span className="text-[#9945FF]">$TRACE // PUMP.FUN</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
