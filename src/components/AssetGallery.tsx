import React, { useState } from 'react';
import { ASSET_PATHS, CHARACTER_POSES, SOLANA_CONFIG } from '../data/characterData';
import { NullCrestSymbol, TraceVectorAvatar, SolanaLogo, PumpFunLogo, RAW_SYMBOL_SVG, RAW_AVATAR_SVG, downloadSvg } from './SvgAssets';
import { TraceImage } from './TraceImage';
import { Download, Copy, Check, Eye, ExternalLink, Image as ImageIcon, Sparkles } from 'lucide-react';

interface AssetGalleryProps {
  onSelectForMeme: (imageSrc: string) => void;
}

export const AssetGallery: React.FC<AssetGalleryProps> = ({ onSelectForMeme }) => {
  const [bgChoice, setBgChoice] = useState<'black' | 'slate' | 'solana' | 'white' | 'checker'>('black');
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
        return 'bg-[#07080E]';
      case 'slate':
        return 'bg-[#121629]';
      case 'solana':
        return 'bg-gradient-to-br from-[#9945FF]/20 to-[#14F195]/20 bg-[#0A0D1F]';
      case 'white':
        return 'bg-white text-slate-900';
      case 'checker':
        return 'bg-[linear-gradient(45deg,#121629_25%,transparent_25%),linear-gradient(-45deg,#121629_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#121629_75%),linear-gradient(-45deg,transparent_75%,#121629_75%)] [background-size:20px_20px] [background-position:0_0,0_10px,10px_-10px,-10px_0px] bg-[#07080E]';
      default:
        return 'bg-[#07080E]';
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
      desc: 'Canonical 3/4 hero stance. Lean athletic frame, deep origami hood, subtle glowing Solana mint gaze in carbon shadow.',
    },
    {
      id: '02',
      title: '02. Head/Shoulder Portrait & PFP',
      filename: 'character-portrait.webp',
      type: 'raster',
      src: ASSET_PATHS.portrait,
      aspect: 'aspect-square',
      desc: 'High-contrast portrait. Iconic profile picture silhouette for Solana Telegram, Discord, and Pump.fun.',
    },
    {
      id: '03',
      title: '03. Full-Body Standing Operator',
      filename: 'character-standing.webp',
      type: 'raster',
      src: ASSET_PATHS.hero,
      aspect: 'aspect-[3/4]',
      desc: 'Ground-plane calibrated standing pose. Relaxed hands, athletic proportions, zero generic ninja clutter.',
    },
    {
      id: '04',
      title: '04. The Walk Away Pose',
      filename: 'character-walking.webp',
      type: 'raster',
      src: ASSET_PATHS.lookback,
      aspect: 'aspect-[3/4]',
      desc: 'Stealth transit pose. Moving away from the observer into deep digital space with silent 400ms speed.',
    },
    {
      id: '05',
      title: '05. The Signature Look-Back',
      filename: 'character-lookback.webp',
      type: 'raster',
      src: ASSET_PATHS.lookback,
      aspect: 'aspect-[3/4]',
      desc: 'Signature look-back over the left shoulder. "Interesting." The defining reaction template on Crypto Twitter.',
    },
    {
      id: '06',
      title: '06. Solana Operator Pose',
      filename: 'character-operator.webp',
      type: 'raster',
      src: ASSET_PATHS.operator,
      aspect: 'aspect-[4/3]',
      desc: 'Interacting with floating translucent holographic Solana DEX telemetry in dark server node. Calm calculation.',
    },
    {
      id: '07',
      title: '07. Deadpan Meme Pose',
      filename: 'character-meme.webp',
      type: 'raster',
      src: ASSET_PATHS.meme,
      aspect: 'aspect-square',
      desc: '"Probably nothing." Completely unbothered stance while pump.fun bonding curve accelerates to 100%.',
    },
    {
      id: '08',
      title: '08. Master Symbol (Vector)',
      filename: 'character-symbol.svg',
      type: 'vector',
      isSvg: 'symbol' as const,
      aspect: 'aspect-square',
      desc: 'The original character emblem: Stealth Hood Apex × Solana Pulse × Asymmetric Cipher Notch. Infinite SVG scalability.',
    },
    {
      id: '09',
      title: '09. Vector Avatar Mascot',
      filename: 'character-avatar.svg',
      type: 'vector',
      isSvg: 'avatar' as const,
      aspect: 'aspect-square',
      desc: 'Crisp scalable vector profile avatar with Solana gradient threads, faceted hood geometry, and illuminated ocular aperture.',
    },
    {
      id: '10',
      title: '10. Transparent Cutout Asset',
      filename: 'character-transparent.png',
      type: 'raster',
      src: ASSET_PATHS.hero,
      aspect: 'aspect-[3/4]',
      desc: 'Isolated background silhouette for website hero placement, YouTube thumbnails, and animated meme overlays.',
    },
    {
      id: '11',
      title: '11. Pump.fun Banner / Social Header',
      filename: 'character-social-header.jpg',
      type: 'social',
      src: ASSET_PATHS.operator,
      aspect: 'aspect-[16/9]',
      desc: '1500×500 cinematic Twitter/X and Pump.fun hero banner depicting TRACE guarding the Solana liquidity gates.',
    },
    {
      id: '12',
      title: '12. Mobile Sticker Pack Sheet',
      filename: 'character-stickers.png',
      type: 'social',
      src: ASSET_PATHS.portrait,
      aspect: 'aspect-square',
      desc: 'High-DPI format 512×512 sticker asset formatted for Telegram sticker packs, Discord custom emojis, and WhatsApp.',
    },
  ];

  const filteredAssets = masterAssets.filter((asset) => {
    if (activeAssetTab === 'all') return true;
    return asset.type === activeAssetTab;
  });

  return (
    <section className="py-12 border-b border-[#1A1E30] bg-[#07080E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header & Section Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8F98BA] tracking-wider uppercase mb-1">
              <SolanaLogo size={14} />
              <span>Solana Asset Vault</span>
              <span aria-hidden="true" className="text-[#9945FF]">·</span>
              <span className="text-[#10B981]">Pump.fun Ready</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#E4E7F5] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Master Deliverables Suite
            </h2>
            <p className="text-[#8F98BA] text-sm mt-1 max-w-2xl">
              12 production-ready assets engineered for Solana high-speed marketing, token launchpads, Telegram stickers, and community meme culture.
            </p>
          </div>

          {/* Dynamic Background Simulator for Transparency Verification */}
          <div className="flex items-center gap-2 bg-[#0B0E1C] p-1.5 rounded-lg border border-[#1E2542] text-xs font-mono">
            <span className="text-[#8F98BA] text-[11px] px-1 hidden sm:inline">Background:</span>
            <button
              onClick={() => setBgChoice('black')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                bgChoice === 'black' ? 'bg-[#151A30] text-[#14F195] font-semibold border border-[#14F195]/30' : 'text-[#8F98BA] hover:text-[#E4E7F5]'
              }`}
            >
              Void
            </button>
            <button
              onClick={() => setBgChoice('slate')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                bgChoice === 'slate' ? 'bg-[#151A30] text-[#14F195] font-semibold border border-[#14F195]/30' : 'text-[#8F98BA] hover:text-[#E4E7F5]'
              }`}
            >
              Slate
            </button>
            <button
              onClick={() => setBgChoice('solana')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                bgChoice === 'solana' ? 'bg-[#151A30] text-[#14F195] font-semibold border border-[#14F195]/30' : 'text-[#8F98BA] hover:text-[#E4E7F5]'
              }`}
            >
              Solana Tint
            </button>
            <button
              onClick={() => setBgChoice('white')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                bgChoice === 'white' ? 'bg-white text-slate-900 font-semibold' : 'text-[#8F98BA] hover:text-[#E4E7F5]'
              }`}
            >
              White
            </button>
            <button
              onClick={() => setBgChoice('checker')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                bgChoice === 'checker' ? 'bg-[#151A30] text-[#14F195] font-semibold border border-[#14F195]/30' : 'text-[#8F98BA] hover:text-[#E4E7F5]'
              }`}
            >
              Grid
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 border-b border-[#1E2542] pb-3 text-xs">
          <button
            onClick={() => setActiveAssetTab('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeAssetTab === 'all'
                ? 'bg-[#121629] text-[#14F195] border border-[#2A345C]'
                : 'text-[#8F98BA] hover:text-[#E4E7F5]'
            }`}
          >
            All 12 Deliverables
          </button>
          <button
            onClick={() => setActiveAssetTab('raster')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeAssetTab === 'raster'
                ? 'bg-[#121629] text-[#14F195] border border-[#2A345C]'
                : 'text-[#8F98BA] hover:text-[#E4E7F5]'
            }`}
          >
            Master Illustrations (Raster)
          </button>
          <button
            onClick={() => setActiveAssetTab('vector')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeAssetTab === 'vector'
                ? 'bg-[#121629] text-[#14F195] border border-[#2A345C]'
                : 'text-[#8F98BA] hover:text-[#E4E7F5]'
            }`}
          >
            Symbols & Avatars (Vector SVG)
          </button>
          <button
            onClick={() => setActiveAssetTab('social')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeAssetTab === 'social'
                ? 'bg-[#121629] text-[#14F195] border border-[#2A345C]'
                : 'text-[#8F98BA] hover:text-[#E4E7F5]'
            }`}
          >
            Pump.fun & Social Headers
          </button>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => {
            return (
              <div
                key={asset.id}
                className="bg-[#0B0E1C] border border-[#1E2542] hover:border-[#2A345C] rounded-xl p-4 flex flex-col justify-between transition-all group shadow-lg"
              >
                <div>
                  {/* Card Title & File Tag */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono text-[#E4E7F5] font-medium">{asset.title}</span>
                    <span className="font-mono text-[11px] text-[#8F98BA] bg-[#07080E] px-2 py-0.5 rounded border border-[#1E2542]">
                      {asset.filename}
                    </span>
                  </div>

                  {/* Visual Asset Container */}
                  <div
                    className={`relative w-full ${asset.aspect} rounded-lg overflow-hidden border border-[#1E2542] flex items-center justify-center transition-colors ${getBgClass()}`}
                  >
                    {asset.isSvg === 'symbol' ? (
                      <div className="p-8 flex flex-col items-center justify-center">
                        <NullCrestSymbol size={120} glow={true} />
                        <span className="mt-3 text-[11px] font-mono text-[#14F195] tracking-wider">
                          SOLANA EMBLEM
                        </span>
                      </div>
                    ) : asset.isSvg === 'avatar' ? (
                      <div className="p-6 flex flex-col items-center justify-center">
                        <TraceVectorAvatar size={150} glow={true} />
                        <span className="mt-2 text-[11px] font-mono text-[#14F195] tracking-wider">
                          SOLANA PFP MASCOT
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
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#07080E]/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-[#14F195] border border-[#1E2542] flex items-center gap-1">
                      <SolanaLogo size={10} />
                      <span>SOLANA READY</span>
                    </div>
                  </div>

                  {/* Asset Description */}
                  <p className="text-xs text-[#8F98BA] mt-3 leading-relaxed">
                    {asset.desc}
                  </p>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-4 pt-3 border-t border-[#1E2542] flex items-center justify-between text-xs">
                  {asset.isSvg ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleCopySvg(
                            asset.id,
                            asset.isSvg === 'symbol' ? RAW_SYMBOL_SVG : RAW_AVATAR_SVG
                          )
                        }
                        className="px-2.5 py-1.5 bg-[#121629] hover:bg-[#1A1F36] text-[#E4E7F5] rounded font-mono text-[11px] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        {copiedId === asset.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#14F195]" />
                            <span className="text-[#14F195]">Copied SVG</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#8F98BA]" />
                            <span>Copy SVG Code</span>
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
                        className="p-1.5 bg-[#121629] hover:bg-[#1A1F36] text-[#14F195] rounded transition-colors cursor-pointer"
                        title="Download SVG"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      {asset.src && (
                        <button
                          onClick={() => onSelectForMeme(asset.src!)}
                          className="px-2.5 py-1.5 bg-[#121629] hover:bg-[#1A1F36] text-[#14F195] rounded font-mono text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Sparkles className="w-3 h-3 text-[#9945FF]" />
                          <span>Use in Meme Studio</span>
                        </button>
                      )}
                      <a
                        href={asset.src}
                        download={asset.filename}
                        className="p-1.5 bg-[#121629] hover:bg-[#1A1F36] text-[#E4E7F5] hover:text-[#14F195] rounded transition-colors cursor-pointer"
                        title="Download Asset"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  <button
                    onClick={() =>
                      setSelectedPreview({
                        title: asset.title,
                        description: asset.desc,
                        filename: asset.filename,
                        src: asset.src,
                        isSvg: asset.isSvg,
                      })
                    }
                    className="p-1.5 hover:bg-[#121629] text-[#8F98BA] hover:text-[#E4E7F5] rounded transition-colors cursor-pointer"
                    title="Inspect Full Resolution"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Inspector Modal */}
      {selectedPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0B0E1C] border border-[#232B4C] rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E2542] pb-3">
              <div>
                <h3 className="font-bold text-lg text-[#E4E7F5]">{selectedPreview.title}</h3>
                <span className="font-mono text-xs text-[#14F195]">{selectedPreview.filename}</span>
              </div>
              <button
                onClick={() => setSelectedPreview(null)}
                className="p-1.5 rounded-lg bg-[#121629] hover:bg-[#1A1F36] text-[#8F98BA] hover:text-[#E4E7F5] transition-colors cursor-pointer text-xs font-mono"
              >
                Close ✕
              </button>
            </div>

            <div className="w-full max-h-[60vh] overflow-hidden rounded-xl bg-[#07080E] flex items-center justify-center p-4 border border-[#1E2542]">
              {selectedPreview.isSvg === 'symbol' ? (
                <NullCrestSymbol size={260} glow={true} />
              ) : selectedPreview.isSvg === 'avatar' ? (
                <TraceVectorAvatar size={260} glow={true} />
              ) : selectedPreview.src ? (
                <TraceImage
                  src={selectedPreview.src}
                  alt={selectedPreview.title}
                  className="max-h-[55vh] object-contain"
                />
              ) : null}
            </div>

            <p className="text-xs text-[#8F98BA]">{selectedPreview.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};
