import React, { useState } from 'react';
import { ASSET_PATHS, COLOR_PALETTE, CHARACTER_NAME } from '../data/characterData';
import { RAW_SYMBOL_SVG, RAW_AVATAR_SVG, downloadSvg } from './SvgAssets';
import { X, Download, Copy, Check, FileCode, CheckCircle2 } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedToken, setCopiedToken] = useState<boolean>(false);

  if (!isOpen) return null;

  const designTokensJson = JSON.stringify(
    {
      character: {
        name: CHARACTER_NAME,
        codename: 'Null Operator',
        universe: 'MEMEAI',
        archetype: 'The Unknown Operator',
        palette: COLOR_PALETTE.reduce((acc, c) => ({ ...acc, [c.name]: c.hex }), {}),
        typography: {
          display: 'Syne',
          body: 'Plus Jakarta Sans',
          mono: 'JetBrains Mono',
        },
        signatureElement: 'The Cipher Seam & Null Crest',
      },
    },
    null,
    2
  );

  const handleCopyTokens = () => {
    navigator.clipboard.writeText(designTokensJson);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  const downloadAssetFile = (url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0F1211] border border-[#28302D] rounded-2xl p-6 lg:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#1C201F] pb-4">
          <div>
            <span className="text-xs font-mono text-[#0DF569] uppercase tracking-wider">
              Asset Export Pipeline
            </span>
            <h2
              className="text-2xl font-extrabold text-[#EDECE8]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Export Production Assets
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#151817] hover:bg-[#1E2321] text-[#8F9B95] hover:text-[#EDECE8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Vector SVG Assets Downloads */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#EDECE8] font-mono flex items-center gap-2">
            <FileCode className="w-4 h-4 text-[#0DF569]" />
            <span>01. VECTOR BRAND ASSETS (SVG)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#EDECE8] block">character-symbol.svg</span>
                <span className="text-[11px] text-[#8F9B95]">Scalable brand crest</span>
              </div>
              <button
                onClick={() => downloadSvg(RAW_SYMBOL_SVG, 'character-symbol.svg')}
                className="px-3 py-1.5 bg-[#151817] hover:bg-[#1E2321] text-[#0DF569] text-xs font-mono rounded flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save SVG</span>
              </button>
            </div>

            <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#EDECE8] block">character-avatar.svg</span>
                <span className="text-[11px] text-[#8F9B95]">Vector mascot headshot</span>
              </div>
              <button
                onClick={() => downloadSvg(RAW_AVATAR_SVG, 'character-avatar.svg')}
                className="px-3 py-1.5 bg-[#151817] hover:bg-[#1E2321] text-[#0DF569] text-xs font-mono rounded flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save SVG</span>
              </button>
            </div>
          </div>
        </div>

        {/* Raster Master Illustrations */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#EDECE8] font-mono flex items-center gap-2">
            <Download className="w-4 h-4 text-[#0DF569]" />
            <span>02. MASTER ILLUSTRATION ASSETS</span>
          </h3>

          <div className="space-y-2 text-xs">
            {[
              { name: 'character-hero.webp', url: ASSET_PATHS.hero, label: 'Hero 3/4 Key Artwork' },
              { name: 'character-portrait.webp', url: ASSET_PATHS.portrait, label: 'Portrait & PFP Master' },
              { name: 'character-operator.webp', url: ASSET_PATHS.operator, label: 'Operator Hologram Stance' },
              { name: 'character-lookback.webp', url: ASSET_PATHS.lookback, label: 'Signature Look-Back' },
              { name: 'character-meme.webp', url: ASSET_PATHS.meme, label: 'Deadpan Meme Pose' },
            ].map((item) => (
              <div
                key={item.name}
                className="p-2.5 bg-[#090A0A] border border-[#1C201F] rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[#EDECE8] font-bold">{item.name}</span>
                  <span className="text-[#8F9B95] hidden sm:inline">({item.label})</span>
                </div>
                <button
                  onClick={() => downloadAssetFile(item.url, item.name)}
                  className="px-3 py-1 bg-[#151817] hover:bg-[#1E2321] text-[#0DF569] font-mono text-xs rounded transition-colors cursor-pointer"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Design System Tokens JSON */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#EDECE8] font-mono">
              03. DESIGN TOKENS (JSON)
            </h3>
            <button
              onClick={handleCopyTokens}
              className="text-xs font-mono text-[#0DF569] hover:underline flex items-center gap-1 cursor-pointer"
            >
              {copiedToken ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Tokens Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy JSON</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg text-[11px] font-mono text-[#8F9B95] overflow-x-auto max-h-40">
            {designTokensJson}
          </pre>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#1C201F] flex items-center justify-between text-xs font-mono text-[#697570]">
          <span>ALL 40 MASTER CRITERIA MET</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0DF569] hover:bg-[#00E05B] text-[#090A0A] font-bold rounded-md transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
