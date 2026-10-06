import React, { useState, useRef, useEffect } from 'react';
import { ASSET_PATHS, CHARACTER_POSES } from '../data/characterData';
import { NullCrestSymbol } from './SvgAssets';
import { Download, Sparkles, RefreshCw, Type, Stamp, Check } from 'lucide-react';

interface MemeStudioProps {
  initialImageSrc?: string;
}

export const MemeStudio: React.FC<MemeStudioProps> = ({ initialImageSrc }) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    initialImageSrc || ASSET_PATHS.meme
  );
  const [topText, setTopText] = useState<string>('');
  const [bottomText, setBottomText] = useState<string>('PROBABLY NOTHING.');
  const [fontFamily, setFontFamily] = useState<'impact' | 'syne' | 'mono'>('syne');
  const [fontSize, setFontSize] = useState<number>(36);
  const [showWatermark, setShowWatermark] = useState<boolean>(true);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const presetCaptions = [
    'PROBABLY NOTHING.',
    'I ALREADY KNOW.',
    'NOT MY PROBLEM.',
    'EXECUTE.',
    'NOBODY SAW THAT.',
    'INTERESTING.',
    'TRUST ME.',
    'GIVE ME A SECOND.',
    'PLAN SUCCEEDED.',
    'PLAN FAILED.',
  ];

  // Draw on canvas whenever state changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = selectedImage;

    img.onload = () => {
      // Set canvas dimension based on image
      canvas.width = 800;
      canvas.height = 800;

      // Draw image
      ctx.drawImage(img, 0, 0, 800, 800);

      // Add subtle dark gradient scrim at top and bottom for text readability
      const topGrad = ctx.createLinearGradient(0, 0, 0, 180);
      topGrad.addColorStop(0, 'rgba(9, 10, 10, 0.7)');
      topGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, 800, 180);

      const botGrad = ctx.createLinearGradient(0, 620, 0, 800);
      botGrad.addColorStop(0, 'transparent');
      botGrad.addColorStop(1, 'rgba(9, 10, 10, 0.85)');
      ctx.fillStyle = botGrad;
      ctx.fillRect(0, 620, 800, 180);

      // Configure font
      let fontStr = `${fontSize}px sans-serif`;
      if (fontFamily === 'syne') {
        fontStr = `900 ${fontSize}px 'Syne', sans-serif`;
      } else if (fontFamily === 'impact') {
        fontStr = `bold ${fontSize + 6}px Impact, sans-serif`;
      } else {
        fontStr = `bold ${fontSize - 4}px 'JetBrains Mono', monospace`;
      }

      ctx.font = fontStr;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 6;
      ctx.lineJoin = 'miter';

      // Draw Top Text
      if (topText.trim()) {
        const topY = 70;
        ctx.strokeText(topText.toUpperCase(), 400, topY);
        ctx.fillText(topText.toUpperCase(), 400, topY);
      }

      // Draw Bottom Text
      if (bottomText.trim()) {
        const botY = 730;
        ctx.strokeText(bottomText.toUpperCase(), 400, botY);
        ctx.fillText(bottomText.toUpperCase(), 400, botY);
      }

      // Draw Watermark if enabled
      if (showWatermark) {
        ctx.font = `600 14px 'JetBrains Mono', monospace`;
        ctx.fillStyle = '#0DF569';
        ctx.textAlign = 'right';
        ctx.fillText('MEMEAI // TRACE', 770, 780);
      }
    };
  }, [selectedImage, topText, bottomText, fontFamily, fontSize, showWatermark]);

  const handleDownloadMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsExporting(true);

    try {
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `trace-meme-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (e) {
      console.error('Download error:', e);
    } finally {
      setTimeout(() => setIsExporting(false), 800);
    }
  };

  return (
    <section className="py-12 border-b border-[#1C201F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F9B95] tracking-wider uppercase mb-1">
            <span>Section 18 & 20 Engine</span>
            <span aria-hidden="true" className="text-[#0DF569]">·</span>
            <span>Interactive Meme Studio</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#EDECE8] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Meme Generator & Reaction Studio
          </h2>
          <p className="text-[#8F9B95] text-sm mt-1 max-w-2xl">
            Create high-engagement reaction memes with TRACE’s signature calm chaos poses. Powered by instant canvas export.
          </p>
        </div>

        {/* Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-5 bg-[#111413] border border-[#1C201F] rounded-xl p-6 space-y-6">
            
            {/* Step 1: Choose Pose */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#0DF569] block">
                1. SELECT OPERATOR POSE:
              </label>
              <div className="grid grid-cols-5 gap-2">
                {CHARACTER_POSES.map((pose) => {
                  const isSelected = selectedImage === pose.imageSrc;
                  return (
                    <button
                      key={pose.id}
                      onClick={() => setSelectedImage(pose.imageSrc)}
                      className={`aspect-square rounded-lg overflow-hidden border transition-all cursor-pointer relative ${
                        isSelected
                          ? 'border-[#0DF569] ring-2 ring-[#0DF569] scale-105'
                          : 'border-[#1C201F] opacity-70 hover:opacity-100'
                      }`}
                      title={pose.name}
                    >
                      <img
                        src={pose.imageSrc}
                        alt={pose.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: One-Click Presets */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#8F9B95] block">
                2. QUICK PRESET CAPTIONS:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {presetCaptions.map((cap) => (
                  <button
                    key={cap}
                    onClick={() => {
                      setBottomText(cap);
                    }}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      bottomText === cap
                        ? 'bg-[#0DF569] text-[#090A0A] font-bold'
                        : 'bg-[#151817] text-[#8F9B95] hover:text-[#EDECE8] border border-[#1C201F]'
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Text Inputs */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-mono text-[#8F9B95] block mb-1">
                  TOP CAPTION (OPTIONAL):
                </label>
                <input
                  type="text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  placeholder="e.g. WHEN THE MARKET CRASHES AT 3 AM"
                  className="w-full bg-[#090A0A] border border-[#1C201F] focus:border-[#0DF569] rounded-lg px-3 py-2 text-xs text-[#EDECE8] font-mono outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-[#8F9B95] block mb-1">
                  BOTTOM CAPTION:
                </label>
                <input
                  type="text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  placeholder="e.g. PROBABLY NOTHING."
                  className="w-full bg-[#090A0A] border border-[#1C201F] focus:border-[#0DF569] rounded-lg px-3 py-2 text-xs text-[#EDECE8] font-mono outline-none"
                />
              </div>
            </div>

            {/* Step 4: Font & Watermark Toggles */}
            <div className="pt-2 border-t border-[#1C201F] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#8F9B95]">Typography:</span>
                <div className="flex items-center gap-1 bg-[#090A0A] p-0.5 rounded border border-[#1C201F] text-xs">
                  <button
                    onClick={() => setFontFamily('syne')}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      fontFamily === 'syne' ? 'bg-[#151817] text-[#0DF569]' : 'text-[#697570]'
                    }`}
                  >
                    Syne Heavy
                  </button>
                  <button
                    onClick={() => setFontFamily('impact')}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      fontFamily === 'impact' ? 'bg-[#151817] text-[#0DF569]' : 'text-[#697570]'
                    }`}
                  >
                    Impact
                  </button>
                  <button
                    onClick={() => setFontFamily('mono')}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      fontFamily === 'mono' ? 'bg-[#151817] text-[#0DF569]' : 'text-[#697570]'
                    }`}
                  >
                    Mono
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#8F9B95]">Watermark Stamp:</span>
                <button
                  onClick={() => setShowWatermark(!showWatermark)}
                  className={`px-2.5 py-1 rounded text-xs font-mono cursor-pointer transition-colors ${
                    showWatermark ? 'bg-[#151817] text-[#0DF569] border border-[#0DF569]/40' : 'bg-[#090A0A] text-[#697570]'
                  }`}
                >
                  {showWatermark ? '✓ ENABLED' : 'DISABLED'}
                </button>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownloadMeme}
              disabled={isExporting}
              className="w-full py-3 bg-[#0DF569] hover:bg-[#00E05B] text-[#090A0A] font-bold text-xs rounded-lg transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(13,245,105,0.25)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Generating PNG...' : 'Export Meme (High-Res PNG)'}</span>
            </button>

          </div>

          {/* Canvas Preview Stage (Right) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative bg-[#090A0A] border border-[#1C201F] rounded-xl p-3 shadow-2xl max-w-lg w-full overflow-hidden">
              <div className="flex items-center justify-between pb-2 px-1 text-xs font-mono text-[#697570] border-b border-[#1C201F] mb-3">
                <span>MEME_CANVAS_800X800</span>
                <span className="text-[#0DF569]">READY FOR VIRAL DISTRIBUTION</span>
              </div>

              {/* The Live HTML5 Canvas */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[#090A0A]">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full object-contain select-none"
                />
              </div>

              <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-[#8F9B95]">
                <span>MEME FORMAT: CALM CHAOS</span>
                <span>ORIGINAL IP · UNFORGETTABLE PRESENCE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
