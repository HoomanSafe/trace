import React, { useState } from 'react';
import { COLOR_PALETTE, CHARACTER_NAME, SIGNATURE_ELEMENT } from '../data/characterData';
import { NullCrestSymbol, TraceVectorAvatar, RAW_SYMBOL_SVG, RAW_AVATAR_SVG, downloadSvg } from './SvgAssets';
import { Copy, Check, Download, Layers, Shield, Sparkles } from 'lucide-react';

export const BrandSystem: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const materials = [
    {
      name: 'Matte Stealth Carbon',
      spec: '280 GSM Micro-Ripstop Nylon with DWR Matte Finish',
      texture: 'Zero-reflection woven textile absorbing 96% of ambient light',
      application: 'Structured outer hood panels, raglan sleeve drape, stealth trousers',
    },
    {
      name: 'Geometric Core Fleece',
      spec: 'Faceted Thermal Double-Knit Laminate',
      texture: 'Firm memory-retention origami fold seams',
      application: 'Inner hood cowl lining, high neck collar, ergonomic shoulder gussets',
    },
    {
      name: 'Cipher Optic Seam',
      spec: '0.8mm Flexible Low-Flux Polymer Fiber',
      texture: 'Subtle emerald illumination (#0DF569), steady 12-lumen output',
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
    <section className="py-12 border-b border-[#1C201F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F9B95] tracking-wider uppercase mb-1">
            <span>Section 15, 16 & 27</span>
            <span aria-hidden="true" className="text-[#0DF569]">·</span>
            <span>Design System & Brand Assets</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#EDECE8] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Brand Identity & Material Language
          </h2>
          <p className="text-[#8F9B95] text-sm mt-1 max-w-2xl">
            Exacting color distribution, tactile textile specifications, and scalable vector brand marks embodying the STEALTH + AI + MEME ethos.
          </p>
        </div>

        {/* Brand Symbol Deep Dive */}
        <div className="bg-[#111413] border border-[#1C201F] rounded-xl p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Symbol Stage */}
            <div className="lg:col-span-5 bg-[#090A0A] border border-[#1C201F] rounded-xl p-8 flex flex-col items-center justify-center relative min-h-[300px]">
              <div className="relative p-6 bg-[#111413] rounded-2xl border border-[#28302D] shadow-2xl">
                <NullCrestSymbol size={160} glow={true} />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => downloadSvg(RAW_SYMBOL_SVG, 'character-symbol.svg')}
                  className="px-3 py-1.5 bg-[#151817] hover:bg-[#1E2321] text-[#0DF569] rounded font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>character-symbol.svg</span>
                </button>
                <button
                  onClick={() => downloadSvg(RAW_AVATAR_SVG, 'character-avatar.svg')}
                  className="px-3 py-1.5 bg-[#151817] hover:bg-[#1E2321] text-[#EDECE8] rounded font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>character-avatar.svg</span>
                </button>
              </div>
            </div>

            {/* Symbol Anatomy */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-[#0DF569] tracking-wider uppercase">
                THE SIGNATURE BRAND MARK · NULL CREST
              </span>
              <h3 className="text-2xl font-bold text-[#EDECE8]">
                HOOD + AI + STEALTH Interlock
              </h3>
              <p className="text-sm text-[#8F9B95] leading-relaxed">
                Created to represent the character across all scales without copying existing brands. The upper chevron encodes the structured 118° origami hood apex; the interior diamond models the intelligent AI core; the horizontal aperture reflects TRACE's piercing slit eyes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg">
                  <span className="font-mono text-[#EDECE8] font-bold block mb-1">Favicon (16-32px)</span>
                  <span className="text-[#8F9B95] text-[11px]">Instant legibility in browser tabs and push notifications.</span>
                </div>
                <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg">
                  <span className="font-mono text-[#EDECE8] font-bold block mb-1">Sticker & Patch</span>
                  <span className="text-[#8F9B95] text-[11px]">Silicone chest badge or physical laptop decal.</span>
                </div>
                <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg">
                  <span className="font-mono text-[#EDECE8] font-bold block mb-1">Meme Watermark</span>
                  <span className="text-[#8F9B95] text-[11px]">Subtle corner mark establishing authorship.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Color Palette Section (Section 15) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#EDECE8]">
              Color Distribution (60-30-10 Rule)
            </h3>
            <span className="text-xs font-mono text-[#8F9B95]">Zero Neon Clutter · High Discipline</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COLOR_PALETTE.map((color) => {
              const isCopied = copiedHex === color.hex;
              return (
                <div
                  key={color.hex}
                  className="bg-[#111413] border border-[#1C201F] rounded-xl p-4 flex flex-col justify-between hover:border-[#28302D] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#EDECE8]">{color.name}</span>
                      <button
                        onClick={() => handleCopy(color.hex)}
                        className="text-[11px] font-mono text-[#8F9B95] hover:text-[#0DF569] flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-[#0DF569]" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{color.hex}</span>
                      </button>
                    </div>

                    {/* Color Swatch Bar */}
                    <div
                      className="w-full h-16 rounded-lg border border-[#28302D] mb-3 shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />

                    <span className="text-[11px] font-mono text-[#0DF569] block mb-1">
                      {color.role}
                    </span>
                    <p className="text-xs text-[#8F9B95] leading-relaxed">
                      {color.usage}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#1C201F] text-[10px] font-mono text-[#697570]">
                    REF: {color.pantoneRef}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Material Language (Section 16) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#EDECE8]">
              Material Language & Tactical Textiles
            </h3>
            <span className="text-xs font-mono text-[#8F9B95]">Tactile & Functional · Zero Plastic Wax</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {materials.map((mat, i) => (
              <div
                key={i}
                className="bg-[#111413] border border-[#1C201F] rounded-xl p-4 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#0DF569] block mb-1">0{i + 1} / MATERIAL</span>
                  <h4 className="text-sm font-bold text-[#EDECE8]">{mat.name}</h4>
                  <p className="text-xs text-[#8F9B95] mt-1.5 leading-relaxed">{mat.spec}</p>
                </div>
                <div className="pt-2 border-t border-[#1C201F] text-[11px] text-[#697570]">
                  <span className="text-[#8F9B95] block mb-0.5">Applied in:</span>
                  {mat.application}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
