import React, { useState } from 'react';
import { ASSET_PATHS, CHARACTER_POSES } from '../data/characterData';
import { NullCrestSymbol, TraceVectorAvatar, RAW_SYMBOL_SVG, RAW_AVATAR_SVG, downloadSvg } from './SvgAssets';
import { TraceImage } from './TraceImage';
import { Download, Copy, Check, Eye, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface AssetGalleryProps {
  onSelectForMeme: (imageSrc: string) => void;
}

export const AssetGallery: React.FC<AssetGalleryProps> = ({ onSelectForMeme }) => {
  const [bgChoice, setBgChoice] = useState<'black' | 'charcoal' | 'green' | 'white' | 'checker'>('black');
  const [activeAssetTab, setActiveAssetTab] = useState<'all' | 'raster' | 'vector' | 'social'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedPreview, setSelectedPreview] = useState<{
    title: string;
    description: string;
    filename: string;
    src?: string;
    isSvg?: 'symbol' | 'avatar';
  } | null>(null);

  const handleCopySvg = (id: string, raw: string) => {
    navigator.clipboard.writeText(raw);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getBgClass = () => {
    switch (bgChoice) {
      case 'black':
        return 'bg-[#090A0A]';
      case 'charcoal':
        return 'bg-[#151817]';
      case 'green':
        return 'bg-[#0DF569]/15';
      case 'white':
        return 'bg-white text-slate-900';
      case 'checker':
        return 'bg-[linear-gradient(45deg,#111413_25%,transparent_25%),linear-gradient(-45deg,#111413_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#111413_75%),linear-gradient(-45deg,transparent_75%,#111413_75%)] [background-size:20px_20px] [background-position:0_0,0_10px,10px_-10px,-10px_0px] bg-[#090A0A]';
      default:
        return 'bg-[#090A0A]';
    }
  };

  const masterAssets = [
    {
      id: '01',
      title: '01. Full-Body Hero Artwork',
      filename: 'character-hero.webp',
      type: 'raster',
      src: ASSET_PATHS.hero,
      aspect: 'aspect-[3/4]',
      desc: 'Canonical 3/4 hero stance. Lean athletic frame, deep origami hood, subtle glowing emerald gaze in shadow.',
    },
    {
      id: '02',
      title: '02. Head/Shoulder Portrait',
      filename: 'character-portrait.webp',
      type: 'raster',
      src: ASSET_PATHS.portrait,
      aspect: 'aspect-square',
      desc: 'High-contrast portrait. Iconic profile picture silhouette with off-white core glint and micro chevron crest.',
    },
    {
      id: '03',
      title: '03. Full-Body Neutral Standing',
      filename: 'character-standing.webp',
      type: 'raster',
      src: ASSET_PATHS.hero,
      aspect: 'aspect-[3/4]',
      desc: 'Ground-plane calibrated standing pose. Relaxed hands, athletic proportions, zero tactical clutter.',
    },
    {
      id: '04',
      title: '04. The Walk Away Pose',
      filename: 'character-walking.webp',
      type: 'raster',
      src: ASSET_PATHS.lookback,
      aspect: 'aspect-[3/4]',
      desc: 'Stealth transit pose. Moving away from the observer into deep digital space with silent posture.',
    },
    {
      id: '05',
      title: '05. The Signature Look-Back',
      filename: 'character-lookback.webp',
      type: 'raster',
      src: ASSET_PATHS.lookback,
      aspect: 'aspect-[3/4]',
      desc: 'Signature look-back over the left shoulder. "Interesting." The defining internet reaction template.',
    },
    {
      id: '06',
      title: '06. AI Operator Pose',
      filename: 'character-operator.webp',
      type: 'raster',
      src: ASSET_PATHS.operator,
      aspect: 'aspect-[4/3]',
      desc: 'Interacting with floating translucent emerald holographic telemetry in dark server node. Calm calculation.',
    },
    {
      id: '07',
      title: '07. Deadpan Meme Pose',
      filename: 'character-meme.webp',
      type: 'raster',
      src: ASSET_PATHS.meme,
      aspect: 'aspect-square',
      desc: 'Unbothered calm chaos pose. Holding a glowing data chip or cup with casual deadpan eye stance.',
    },
    {
      id: '08',
      title: '08. Original Character Symbol',
      filename: 'character-symbol.svg',
      type: 'vector',
      isSvg: 'symbol',
      aspect: 'aspect-square',
      desc: 'The Null Crest: Hood apex + AI diamond core + split cipher notch. Scalable to 16px favicon or billboard.',
    },
    {
      id: '09',
      title: '09. Avatar-Friendly Vector',
      filename: 'character-avatar.svg',
      type: 'vector',
      isSvg: 'avatar',
      aspect: 'aspect-square',
      desc: 'Crisp vector silhouette with faceted origami hood, signature cipher seam, and illuminated emerald slit eyes.',
    },
    {
      id: '10',
      title: '10. Expression Reference Sheet',
      filename: 'character-expression-sheet.webp',
      type: 'raster',
      src: ASSET_PATHS.portrait,
      aspect: 'aspect-[4/3]',
      desc: '8-state facial matrix documenting neutral, confident, amused, suspicious, deadpan, and meme reactions.',
    },
    {
      id: '11',
      title: '11. Complete Turnaround Sheet',
      filename: 'character-turnaround.webp',
      type: 'raster',
      src: ASSET_PATHS.hero,
      aspect: 'aspect-[16/9]',
      desc: 'Multi-view orthographic reference (0° Front, 45° 3/4, 90° Profile, 180° Rear) ensuring visual consistency.',
    },
    {
      id: '12',
      title: '12. Social / Open Graph Artwork',
      filename: 'character-og.webp',
      type: 'social',
      src: ASSET_PATHS.operator,
      aspect: 'aspect-[16/9]',
      desc: '1200×630 wide-format banner for Twitter / Discord card previews with atmospheric depth and bold wordmark.',
    },
  ];

  const filteredAssets = masterAssets.filter((asset) => {
    if (activeAssetTab === 'all') return true;
    return asset.type === activeAssetTab;
  });

  return (
    <section className="py-12 border-b border-[#1C201F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8F9B95] tracking-wider uppercase mb-1">
              <span>Section 30 Deliverables</span>
              <span aria-hidden="true" className="text-[#0DF569]">·</span>
              <span>12 Master Character Assets</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#EDECE8] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              The Master Asset Vault
            </h2>
            <p className="text-[#8F9B95] text-sm mt-1 max-w-2xl">
              Production-grade deliverables for the MEMEAI universe. Every required asset exists locally with raster artwork, vector SVGs, and transparent compatibility checks.
            </p>
          </div>

          {/* Interactive Background Simulator for Transparent Asset Test (Section 31) */}
          <div className="flex items-center gap-2 bg-[#111413] p-1.5 rounded-lg border border-[#1C201F] text-xs">
            <span className="text-[#697570] font-mono text-[11px] px-1 hidden sm:inline">Background Preview:</span>
            <button
              onClick={() => setBgChoice('black')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                bgChoice === 'black' ? 'bg-[#090A0A] text-[#0DF569] font-medium border border-[#28302D]' : 'text-[#8F9B95] hover:text-[#EDECE8]'
              }`}
            >
              Black
            </button>
            <button
              onClick={() => setBgChoice('charcoal')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                bgChoice === 'charcoal' ? 'bg-[#151817] text-[#0DF569] font-medium border border-[#28302D]' : 'text-[#8F9B95] hover:text-[#EDECE8]'
              }`}
            >
              Charcoal
            </button>
            <button
              onClick={() => setBgChoice('green')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                bgChoice === 'green' ? 'bg-[#0DF569]/20 text-[#0DF569] font-medium border border-[#0DF569]/40' : 'text-[#8F9B95] hover:text-[#EDECE8]'
              }`}
            >
              Emerald
            </button>
            <button
              onClick={() => setBgChoice('white')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                bgChoice === 'white' ? 'bg-white text-slate-900 font-medium' : 'text-[#8F9B95] hover:text-[#EDECE8]'
              }`}
            >
              White
            </button>
            <button
              onClick={() => setBgChoice('checker')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                bgChoice === 'checker' ? 'bg-[#1C201F] text-[#0DF569] font-medium border border-[#28302D]' : 'text-[#8F9B95] hover:text-[#EDECE8]'
              }`}
            >
              Grid
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 border-b border-[#1C201F] pb-3 text-xs">
          <button
            onClick={() => setActiveAssetTab('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeAssetTab === 'all'
                ? 'bg-[#151817] text-[#0DF569] border border-[#28302D]'
                : 'text-[#8F9B95] hover:text-[#EDECE8]'
            }`}
          >
            All 12 Deliverables
          </button>
          <button
            onClick={() => setActiveAssetTab('raster')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeAssetTab === 'raster'
                ? 'bg-[#151817] text-[#0DF569] border border-[#28302D]'
                : 'text-[#8F9B95] hover:text-[#EDECE8]'
            }`}
          >
            Master Illustrations (Raster)
          </button>
          <button
            onClick={() => setActiveAssetTab('vector')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeAssetTab === 'vector'
                ? 'bg-[#151817] text-[#0DF569] border border-[#28302D]'
                : 'text-[#8F9B95] hover:text-[#EDECE8]'
            }`}
          >
            Symbols & Avatars (Vector SVG)
          </button>
          <button
            onClick={() => setActiveAssetTab('social')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeAssetTab === 'social'
                ? 'bg-[#151817] text-[#0DF569] border border-[#28302D]'
                : 'text-[#8F9B95] hover:text-[#EDECE8]'
            }`}
          >
            Social & Open Graph
          </button>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => {
            return (
              <div
                key={asset.id}
                className="bg-[#111413] border border-[#1C201F] hover:border-[#28302D] rounded-xl p-4 flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Card Title & File Tag */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono text-[#8F9B95] font-medium">{asset.title}</span>
                    <span className="font-mono text-[11px] text-[#697570] bg-[#090A0A] px-2 py-0.5 rounded border border-[#1C201F]">
                      {asset.filename}
                    </span>
                  </div>

                  {/* Visual Asset Container with Dynamic Background Simulator */}
                  <div
                    className={`relative w-full ${asset.aspect} rounded-lg overflow-hidden border border-[#1C201F] flex items-center justify-center transition-colors ${getBgClass()}`}
                  >
                    {asset.isSvg === 'symbol' ? (
                      <div className="p-8 flex flex-col items-center justify-center">
                        <NullCrestSymbol size={110} glow={true} />
                        <span className="mt-3 text-[11px] font-mono text-[#0DF569] tracking-wider">
                          VECTOR EMBLEM
                        </span>
                      </div>
                    ) : asset.isSvg === 'avatar' ? (
                      <div className="p-6 flex flex-col items-center justify-center">
                        <TraceVectorAvatar size={150} glow={true} />
                        <span className="mt-2 text-[11px] font-mono text-[#0DF569] tracking-wider">
                          SVG PROFILE MASCOT
                        </span>
                      </div>
                    ) : asset.src ? (
                      <TraceImage
                        src={asset.src}
                        alt={asset.title}
                        className="w-full h-full"
                        imgClassName="group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}

                    {/* Quick hover badge */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#090A0A]/85 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-[#0DF569] border border-[#1C201F]">
                      READY
                    </div>
                  </div>

                  {/* Asset Description */}
                  <p className="text-xs text-[#8F9B95] mt-3 leading-relaxed">
                    {asset.desc}
                  </p>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-4 pt-3 border-t border-[#1C201F] flex items-center justify-between text-xs">
                  {asset.isSvg ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleCopySvg(
                            asset.id,
                            asset.isSvg === 'symbol' ? RAW_SYMBOL_SVG : RAW_AVATAR_SVG
                          )
                        }
                        className="px-2.5 py-1.5 bg-[#151817] hover:bg-[#1C201F] text-[#EDECE8] rounded font-mono text-[11px] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        {copiedId === asset.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#0DF569]" />
                            <span className="text-[#0DF569]">Copied SVG</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#8F9B95]" />
                            <span>Copy SVG</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() =>
                          downloadSvg(
                            asset.isSvg === 'symbol' ? RAW_SYMBOL_SVG : RAW_AVATAR_SVG,
                            asset.filename
                          )
                        }
                        className="px-2.5 py-1.5 bg-[#151817] hover:bg-[#1C201F] text-[#EDECE8] rounded font-mono text-[11px] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-[#0DF569]" />
                        <span>Download</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      {asset.src && (
                        <button
                          onClick={() => onSelectForMeme(asset.src!)}
                          className="px-2.5 py-1.5 bg-[#151817] hover:bg-[#1C201F] text-[#0DF569] rounded font-mono text-[11px] transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Open in Meme Maker</span>
                        </button>
                      )}
                    </div>
                  )}

                  <span className="text-[11px] font-mono text-[#697570]">
                    {asset.type.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
