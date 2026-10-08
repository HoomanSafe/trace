import React, { useState } from 'react';
import { COLOR_PALETTE, CHARACTER_NAME, SIGNATURE_ELEMENT, SOLANA_CONFIG } from '../data/characterData';
import { NullCrestSymbol, TraceVectorAvatar, SolanaLogo, PumpFunLogo, RAW_SYMBOL_SVG, RAW_AVATAR_SVG, downloadSvg } from './SvgAssets';
import { Copy, Check, Download, Layers, Shield, Sparkles, ExternalLink, Zap } from 'lucide-react';

export const BrandSystem: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const materials = [
    {
      name: 'Solana Speed Carbon',
      spec: '280 GSM Micro-Ripstop Nylon with DWR Matte Obsidian Finish',
      texture: 'Zero-reflection woven textile engineered for silent sub-second agile movement',
      application: 'Structured outer hood panels, raglan sleeve drape, stealth trousers',
    },
    {
      name: 'Geometric Core Fleece',
      spec: 'Faceted Thermal Double-Knit Laminate with Memory Retention',
      texture: 'Firm memory-retention origami fold seams in Cyber Slate #121629',
      application: 'Inner hood cowl lining, high neck collar, ergonomic shoulder gussets',
    },
    {
      name: 'Solana Optic Seam',
      spec: '0.8mm Flexible Low-Flux Polymer Fiber with Dual Mint/Purple Emitter',
      texture: 'Steady 12-lumen illumination in Solana Mint (#14F195) and subtle purple rim',
      application: 'Asymmetric right temple hood ridge, terminal HUD data indicator',
    },
    {
      name: 'Anodized Dark Alloy',
      spec: 'Type III Hardcoat Anodized Aluminum with Brushed Satin Touch',
      texture: 'Non-magnetic, lightweight, zero glare',
      application: 'Minimalist low-profile zipper sliders, micro-hardware eyelets',
    },
  ];

  return (
    <section className="py-12 border-b border-[#1A1E30] bg-[#07080E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F98BA] tracking-wider uppercase mb-1">
            <SolanaLogo size={14} />
            <span>Solana SPL Visual Protocol</span>
            <span aria-hidden="true" className="text-[#9945FF]">·</span>
            <span className="text-[#10B981]">Pump.fun Brand System</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#E4E7F5] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Brand Identity & Token Protocol
          </h2>
          <p className="text-[#8F98BA] text-sm mt-1 max-w-2xl">
            Solana ecosystem color distribution, tactile textile specifications, and scalable vector brand marks embodying the STEALTH + SOLANA + MEME ethos.
          </p>
        </div>

        {/* Brand Symbol Deep Dive */}
        <div className="bg-[#0B0E1C] border border-[#1E2542] rounded-xl p-6 lg:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Symbol Stage */}
            <div className="lg:col-span-5 bg-[#07080E] border border-[#1E2542] rounded-xl p-8 flex flex-col items-center justify-center relative min-h-[300px]">
              <div className="relative p-6 bg-[#0B0E1C] rounded-2xl border border-[#232B4C] shadow-2xl">
                <NullCrestSymbol size={160} glow={true} />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => downloadSvg(RAW_SYMBOL_SVG, 'character-symbol.svg')}
                  className="px-3 py-1.5 bg-[#121629] hover:bg-[#1A1F36] text-[#14F195] rounded font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-[#1E2542]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>character-symbol.svg</span>
                </button>
                <button
                  onClick={() => downloadSvg(RAW_AVATAR_SVG, 'character-avatar.svg')}
                  className="px-3 py-1.5 bg-[#121629] hover:bg-[#1A1F36] text-[#E4E7F5] rounded font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-[#1E2542]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>character-avatar.svg</span>
                </button>
              </div>
            </div>

            {/* Symbol Anatomy */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-[#14F195] tracking-wider uppercase flex items-center gap-1.5">
                <SolanaLogo size={12} />
                <span>THE SIGNATURE BRAND MARK · THE SOLANA NULL CREST</span>
              </span>
              <h3 className="text-2xl font-bold text-[#E4E7F5]">
                HOOD + SOLANA + AI STEALTH Interlock
              </h3>
              <p className="text-sm text-[#8F98BA] leading-relaxed">
                The Null Crest is the definitive signature of TRACE. It is an origami apex Chevron combined with the 400ms speed pulse of the Solana blockchain.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs">
                  <div className="w-5 h-5 rounded bg-[#9945FF]/20 text-[#9945FF] flex items-center justify-center font-mono font-bold shrink-0">
                    01
                  </div>
                  <div>
                    <span className="font-semibold text-[#E4E7F5] block">Angular Hood Apex</span>
                    <span className="text-[#8F98BA]">Clean geometric folds eliminating traditional rounded hoodie tropes.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-5 h-5 rounded bg-[#14F195]/20 text-[#14F195] flex items-center justify-center font-mono font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <span className="font-semibold text-[#E4E7F5] block">Solana Gradient Thread</span>
                    <span className="text-[#8F98BA]">Subtle asymmetric rim light in official Solana Mint (#14F195) and Electric Purple (#9945FF).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-5 h-5 rounded bg-[#10B981]/20 text-[#10B981] flex items-center justify-center font-mono font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <span className="font-semibold text-[#E4E7F5] block">Pump.fun Alignment</span>
                    <span className="text-[#8F98BA]">The icon scales down to 16px for Solana DEX token lists, phantom wallet icons, and Telegram bot badges.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Color Palette Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#E4E7F5]">Canonical Solana Color Palette</h3>
            <span className="text-xs font-mono text-[#8F98BA]">Click any color hex to copy</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COLOR_PALETTE.map((swatch) => (
              <div
                key={swatch.hex}
                onClick={() => handleCopy(swatch.hex)}
                className="bg-[#0B0E1C] border border-[#1E2542] hover:border-[#2A345C] rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all group"
              >
                <div
                  className="w-14 h-14 rounded-lg shadow-md shrink-0 border border-[#232B4C] flex items-center justify-center text-xs font-mono"
                  style={{ backgroundColor: swatch.hex }}
                >
                  {copiedHex === swatch.hex && (
                    <Check className="w-5 h-5 text-black drop-shadow" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#E4E7F5] truncate">{swatch.name}</span>
                    <span className="text-xs font-mono text-[#14F195] font-semibold">
                      {copiedHex === swatch.hex ? 'Copied!' : swatch.hex}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#6C7699] block mt-0.5">{swatch.pantoneRef}</span>
                  <p className="text-[11px] text-[#8F98BA] mt-1 line-clamp-1">{swatch.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solana SPL Tokenomics Matrix */}
        <div className="bg-[#0B0E1C] border border-[#1E2542] rounded-xl p-6 lg:p-8">
          <div className="flex items-center justify-between border-b border-[#1E2542] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <SolanaLogo size={18} />
              <h3 className="text-lg font-bold text-[#E4E7F5]">Solana SPL Token Architecture</h3>
            </div>
            <a
              href={SOLANA_CONFIG.pumpFunCoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-semibold text-[#10B981] hover:underline flex items-center gap-1"
            >
              <PumpFunLogo size={14} />
              <span>Verify on Pump.fun</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            <div className="p-3 bg-[#07080E] rounded-lg border border-[#1E2542]">
              <span className="text-[#6C7699] font-mono block mb-1">TOTAL SUPPLY</span>
              <span className="text-base font-bold text-[#E4E7F5] font-mono">1,000,000,000</span>
              <span className="text-[11px] text-[#14F195] block mt-0.5">$TRACE Fixed Supply</span>
            </div>

            <div className="p-3 bg-[#07080E] rounded-lg border border-[#1E2542]">
              <span className="text-[#6C7699] font-mono block mb-1">TRANSACTION TAX</span>
              <span className="text-base font-bold text-[#14F195] font-mono">0% / 0%</span>
              <span className="text-[11px] text-[#8F98BA] block mt-0.5">Zero Buy / Sell Tax</span>
            </div>

            <div className="p-3 bg-[#07080E] rounded-lg border border-[#1E2542]">
              <span className="text-[#6C7699] font-mono block mb-1">LAUNCHPAD</span>
              <span className="text-base font-bold text-[#10B981] font-mono">Pump.fun</span>
              <span className="text-[11px] text-[#8F98BA] block mt-0.5">Fair Launch Mechanism</span>
            </div>

            <div className="p-3 bg-[#07080E] rounded-lg border border-[#1E2542]">
              <span className="text-[#6C7699] font-mono block mb-1">SECURITY MINT</span>
              <span className="text-base font-bold text-[#9945FF] font-mono">Revoked</span>
              <span className="text-[11px] text-[#8F98BA] block mt-0.5">Freeze Authority Revoked</span>
            </div>
          </div>
        </div>

        {/* Tactical Textile Specifications */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-[#14F195]" />
            <h3 className="text-lg font-bold text-[#E4E7F5]">Tactile Textile Specifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {materials.map((mat) => (
              <div
                key={mat.name}
                className="bg-[#0B0E1C] border border-[#1E2542] rounded-xl p-5 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#E4E7F5]">{mat.name}</span>
                  <span className="text-[10px] font-mono text-[#14F195] bg-[#07080E] px-2 py-0.5 rounded border border-[#1E2542]">
                    SPECIFIED
                  </span>
                </div>
                <div className="text-xs font-mono text-[#8F98BA]">{mat.spec}</div>
                <p className="text-xs text-[#6C7699]">{mat.texture}</p>
                <div className="pt-2 border-t border-[#1E2542] text-[11px] font-mono text-[#8F98BA]">
                  <strong className="text-[#E4E7F5]">Application:</strong> {mat.application}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
