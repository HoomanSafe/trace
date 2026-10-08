import React, { useState, useRef, useEffect } from 'react';
import { ASSET_PATHS, CHARACTER_POSES, SOLANA_CONFIG } from '../data/characterData';
import { NullCrestSymbol, SolanaLogo, PumpFunLogo } from './SvgAssets';
import { TraceImage } from './TraceImage';
import { Download, Sparkles, RefreshCw, Type, Stamp, Check, Eye } from 'lucide-react';

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
    'SENT IT ON PUMP.FUN.',
    'BONDING CURVE AT 100%.',
    'KING OF THE HILL.',
    'DEV DIDN\'T SELL.',
    'RAYDIUM POOL INCOMING.',
    'I ALREADY KNOW.',
    'SUB-SECOND FRONTRUN.',
    '400MS STEALTH.',
    'JUST SWEPT THE FLOOR.',
    'NOT MY PROBLEM.',
    'INTERESTING.',
  ];

  // Draw on canvas whenever state changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderOverlayAndText = () => {
      // Add subtle dark gradient scrim at top and bottom for text readability
      const topGrad = ctx.createLinearGradient(0, 0, 0, 180);
      topGrad.addColorStop(0, 'rgba(7, 8, 14, 0.75)');
      topGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, 800, 180);

      const botGrad = ctx.createLinearGradient(0, 620, 0, 800);
      botGrad.addColorStop(0, 'transparent');
      botGrad.addColorStop(1, 'rgba(7, 8, 14, 0.88)');
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
        ctx.fillStyle = '#14F195';
        ctx.textAlign = 'right';
        ctx.fillText('$TRACE // SOLANA · PUMP.FUN', 770, 780);
      }
    };

    const drawVectorFallback = () => {
      canvas.width = 800;
      canvas.height = 800;
      // Background
      ctx.fillStyle = '#07080E';
      ctx.fillRect(0, 0, 800, 800);

      // Dark hood silhouette
      ctx.fillStyle = '#0F1222';
      ctx.beginPath();
      ctx.moveTo(400, 160);
      ctx.lineTo(600, 320);
      ctx.lineTo(580, 560);
      ctx.lineTo(400, 640);
      ctx.lineTo(220, 560);
      ctx.lineTo(200, 320);
      ctx.closePath();
      ctx.fill();

      // Inner shadow cavity
      ctx.fillStyle = '#030408';
      ctx.beginPath();
      ctx.moveTo(400, 280);
      ctx.lineTo(520, 360);
      ctx.lineTo(480, 520);
      ctx.lineTo(400, 560);
      ctx.lineTo(320, 520);
      ctx.lineTo(280, 360);
      ctx.closePath();
      ctx.fill();

      // Sharp glowing emerald slit eyes in Solana Mint
      ctx.fillStyle = '#14F195';
      ctx.shadowColor = '#14F195';
      ctx.shadowBlur = 20;
      // Left eye
      ctx.beginPath();
      ctx.moveTo(310, 420);
      ctx.lineTo(370, 400);
      ctx.lineTo(375, 412);
      ctx.lineTo(315, 432);
      ctx.closePath();
      ctx.fill();
      // Right eye
      ctx.beginPath();
      ctx.moveTo(425, 400);
      ctx.lineTo(485, 420);
      ctx.lineTo(480, 432);
      ctx.lineTo(420, 412);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;

      // Specular pinpricks
      ctx.fillStyle = '#EDECE8';
      ctx.beginPath();
      ctx.arc(355, 407, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(440, 407, 3, 0, Math.PI * 2);
      ctx.fill();

      renderOverlayAndText();
    };

    // Attempt to load image with candidate fallbacks
    const candidates = [
      selectedImage,
      selectedImage.replace('/src/assets/', '/assets/'),
      selectedImage.replace('/assets/', '/src/assets/'),
    ];

    let currentAttempt = 0;

    const tryLoadImage = (index: number) => {
      if (index >= candidates.length) {
        drawVectorFallback();
        return;
      }

      const img = new Image();
      if (candidates[index].startsWith('http')) {
        img.crossOrigin = 'anonymous';
      }
      img.src = candidates[index];

      img.onload = () => {
        canvas.width = 800;
        canvas.height = 800;
        ctx.drawImage(img, 0, 0, 800, 800);
        renderOverlayAndText();
      };

      img.onerror = () => {
        tryLoadImage(index + 1);
      };
    };

    tryLoadImage(currentAttempt);

  }, [selectedImage, topText, bottomText, fontFamily, fontSize, showWatermark]);

  const handleDownloadMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsExporting(true);

    try {
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `TRACE-meme-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      // Fallback
    } finally {
      setTimeout(() => setIsExporting(false), 1200);
    }
  };

  return (
    <section className="py-12 border-b border-[#1A1E30] bg-[#07080E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F98BA] tracking-wider uppercase mb-1">
            <SolanaLogo size={14} />
            <span>Solana Viral Engine</span>
            <span aria-hidden="true" className="text-[#9945FF]">·</span>
            <span className="text-[#10B981]">Pump.fun Community Reaction Generator</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#E4E7F5] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Meme Studio & Reaction Engine
          </h2>
          <p className="text-[#8F98BA] text-sm mt-1 max-w-2xl">
            Create high-contrast reaction memes using TRACE's signature poses. Instant 1-click PNG export with custom top/bottom captions and Solana watermark.
          </p>
        </div>

        {/* Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6 bg-[#0B0E1C] border border-[#1E2542] rounded-xl p-6 shadow-xl">
            
            {/* 1. Character Pose Selector */}
            <div>
              <label className="block text-xs font-mono text-[#8F98BA] mb-2 uppercase tracking-wider">
                1. Select Master Pose
              </label>
              <div className="grid grid-cols-5 gap-2">
                {CHARACTER_POSES.map((pose) => {
                  const isSelected = selectedImage === pose.imageSrc;
                  return (
                    <button
                      key={pose.id}
                      onClick={() => setSelectedImage(pose.imageSrc)}
                      className={`relative aspect-square rounded-lg overflow-hidden border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#14F195] ring-2 ring-[#14F195]/40 scale-105'
                          : 'border-[#1E2542] opacity-70 hover:opacity-100 hover:border-[#2A345C]'
                      }`}
                      title={pose.name}
                    >
                      <TraceImage
                        src={pose.imageSrc}
                        alt={pose.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Text Input Controls */}
            <div className="space-y-3">
              <label className="block text-xs font-mono text-[#8F98BA] uppercase tracking-wider">
                2. Caption Controls
              </label>

              <div>
                <span className="text-[11px] font-mono text-[#6C7699] block mb-1">TOP TEXT (OPTIONAL)</span>
                <input
                  type="text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  placeholder="WHEN SOLANA TPS HITS 65,000..."
                  className="w-full bg-[#07080E] border border-[#1E2542] focus:border-[#14F195] rounded-lg px-3 py-2 text-xs font-mono text-[#E4E7F5] outline-none transition-colors"
                />
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#6C7699] block mb-1">BOTTOM TEXT (PUNCHLINE)</span>
                <input
                  type="text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  placeholder="PROBABLY NOTHING."
                  className="w-full bg-[#07080E] border border-[#1E2542] focus:border-[#14F195] rounded-lg px-3 py-2 text-xs font-mono text-[#E4E7F5] outline-none transition-colors"
                />
              </div>
            </div>

            {/* 3. Preset Solana & Pump.fun One-Click Reaction Templates */}
            <div>
              <label className="block text-xs font-mono text-[#8F98BA] mb-2 uppercase tracking-wider flex items-center justify-between">
                <span>3. Instant Solana / Pump.fun Presets</span>
                <span className="text-[10px] text-[#14F195]">Click to apply</span>
              </label>
              <div className="flex flex-wrap gap-1.5">
                {presetCaptions.map((caption) => (
                  <button
                    key={caption}
                    onClick={() => setBottomText(caption)}
                    className="px-2.5 py-1 text-[11px] font-mono bg-[#121629] hover:bg-[#1A1F36] text-[#8F98BA] hover:text-[#14F195] border border-[#1E2542] rounded transition-colors cursor-pointer"
                  >
                    {caption}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Font & Formatting Controls */}
            <div className="pt-2 border-t border-[#1E2542] grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-[#6C7699] mb-1.5">
                  TYPOGRAPHY
                </label>
                <div className="flex rounded border border-[#1E2542] overflow-hidden text-xs">
                  <button
                    onClick={() => setFontFamily('syne')}
                    className={`flex-1 py-1 text-center font-bold transition-colors cursor-pointer ${
                      fontFamily === 'syne' ? 'bg-[#151A30] text-[#14F195]' : 'bg-[#07080E] text-[#8F98BA]'
                    }`}
                  >
                    Syne
                  </button>
                  <button
                    onClick={() => setFontFamily('impact')}
                    className={`flex-1 py-1 text-center font-black transition-colors cursor-pointer ${
                      fontFamily === 'impact' ? 'bg-[#151A30] text-[#14F195]' : 'bg-[#07080E] text-[#8F98BA]'
                    }`}
                  >
                    Impact
                  </button>
                  <button
                    onClick={() => setFontFamily('mono')}
                    className={`flex-1 py-1 text-center font-mono transition-colors cursor-pointer ${
                      fontFamily === 'mono' ? 'bg-[#151A30] text-[#14F195]' : 'bg-[#07080E] text-[#8F98BA]'
                    }`}
                  >
                    Mono
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#6C7699] mb-1.5">
                  FONT SIZE ({fontSize}px)
                </label>
                <input
                  type="range"
                  min="24"
                  max="60"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full accent-[#14F195] cursor-pointer mt-1"
                />
              </div>
            </div>

            {/* Watermark Toggle */}
            <div className="flex items-center justify-between text-xs pt-1 font-mono text-[#8F98BA]">
              <span>Include Solana / Pump.fun Stamp</span>
              <button
                onClick={() => setShowWatermark(!showWatermark)}
                className={`w-9 h-5 rounded-full transition-colors relative cursor-pointer ${
                  showWatermark ? 'bg-[#14F195]' : 'bg-[#1E2542]'
                }`}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-[#07080E] transition-transform ${
                    showWatermark ? 'left-4.5' : 'left-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Download Button with Pump.fun Styling */}
            <div className="pt-2">
              <button
                onClick={handleDownloadMeme}
                className="w-full py-3 bg-gradient-to-r from-[#10B981] via-[#14F195] to-[#86EFAC] hover:opacity-95 text-[#06281E] font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(20,241,149,0.3)] active:scale-[0.98]"
              >
                {isExporting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#06281E]" />
                    <span>Rendering PNG...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#06281E]" />
                    <span>Export High-Res PNG Meme</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Live Canvas Column */}
          <div className="lg:col-span-7 bg-[#0B0E1C] border border-[#1E2542] rounded-xl p-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 px-1 border-b border-[#1E2542]">
              <div className="flex items-center gap-2">
                <NullCrestSymbol size={18} glow={false} />
                <span className="text-xs font-mono text-[#8F98BA]">CANVAS PREVIEW · 800×800PX</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#10B981] flex items-center gap-1">
                  <PumpFunLogo size={12} />
                  <span>Pump.fun Ready</span>
                </span>
              </div>
            </div>

            <div className="mt-4 relative aspect-square max-w-lg mx-auto bg-[#07080E] rounded-lg overflow-hidden border border-[#1E2542] shadow-inner flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#6C7699] px-2">
              <span>FORMAT: 800×800 PNG · 300 DPI</span>
              <span>CALM CHAOS ENGINE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
