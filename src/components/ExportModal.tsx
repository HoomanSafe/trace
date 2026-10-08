import React, { useState } from 'react';
import { ASSET_PATHS, COLOR_PALETTE, CHARACTER_NAME, SOLANA_CONFIG } from '../data/characterData';
import { RAW_SYMBOL_SVG, RAW_AVATAR_SVG, downloadSvg, SolanaLogo, PumpFunLogo } from './SvgAssets';
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
        universe: 'MEMEAI on Solana',
        blockchain: 'Solana',
        ticker: '$TRACE',
        launchpad: 'Pump.fun',
        contractAddress: SOLANA_CONFIG.contractAddress,
        pumpFunUrl: SOLANA_CONFIG.pumpFunCoinUrl,
        palette: COLOR_PALETTE.reduce((acc, c) => ({ ...acc, [c.name]: c.hex }), {}),
        typography: {
          display: 'Syne',
          body: 'Plus Jakarta Sans',
          mono: 'JetBrains Mono',
        },
        signatureElement: 'The Solana Cipher Seam & Null Crest',
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
      <div className="relative w-full max-w-2xl bg-[#0B0E1C] border border-[#232B4C] rounded-2xl p-6 lg:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#1E2542] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#14F195] mb-1">
              <SolanaLogo size={14} />
              <span>SOLANA ASSET EXPORT VAULT</span>
              <span>·</span>
              <span className="text-[#10B981]">PUMP.FUN COMPLIANT</span>
            </div>
            <h2
              className="text-2xl font-extrabold text-[#E4E7F5]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Export Production Deliverables
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#121629] hover:bg-[#1A1F36] text-[#8F98BA] hover:text-[#E4E7F5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Vector Deliverables */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-[#8F98BA] uppercase tracking-wider">
            1. Vector Master Deliverables (Infinite Scale SVG)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-[#07080E] border border-[#1E2542] rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#E4E7F5] block">character-symbol.svg</span>
                <span className="text-[11px] text-[#6C7699] font-mono">The Solana Null Crest Emblem</span>
              </div>
              <button
                onClick={() => downloadSvg(RAW_SYMBOL_SVG, 'character-symbol.svg')}
                className="p-2 bg-[#121629] hover:bg-[#1A1F36] text-[#14F195] rounded transition-colors cursor-pointer"
                title="Download SVG"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 bg-[#07080E] border border-[#1E2542] rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#E4E7F5] block">character-avatar.svg</span>
                <span className="text-[11px] text-[#6C7699] font-mono">Vector Profile Avatar</span>
              </div>
              <button
                onClick={() => downloadSvg(RAW_AVATAR_SVG, 'character-avatar.svg')}
                className="p-2 bg-[#121629] hover:bg-[#1A1F36] text-[#14F195] rounded transition-colors cursor-pointer"
                title="Download SVG"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Raster Master Artworks */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-[#8F98BA] uppercase tracking-wider">
            2. High-Resolution Illustrations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            {[
              { name: 'character-hero.webp', label: '01. Definitive Hero Pose', src: ASSET_PATHS.hero },
              { name: 'character-portrait.webp', label: '02. Close-Up Portrait & PFP', src: ASSET_PATHS.portrait },
              { name: 'character-operator.webp', label: '03. Solana Terminal Operator', src: ASSET_PATHS.operator },
              { name: 'character-lookback.webp', label: '04. The Signature Look-Back', src: ASSET_PATHS.lookback },
              { name: 'character-meme.webp', label: '05. Deadpan Meme Pose', src: ASSET_PATHS.meme },
            ].map((item) => (
              <div
                key={item.name}
                className="p-2.5 bg-[#07080E] border border-[#1E2542] rounded-lg flex items-center justify-between text-xs"
              >
                <div className="truncate pr-2">
                  <span className="text-[#E4E7F5] font-semibold block truncate">{item.label}</span>
                  <span className="text-[10px] text-[#6C7699]">{item.name}</span>
                </div>
                <button
                  onClick={() => downloadAssetFile(item.src, item.name)}
                  className="p-1.5 bg-[#121629] hover:bg-[#1A1F36] text-[#8F98BA] hover:text-[#14F195] rounded transition-colors shrink-0 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Solana Token Tokens */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono text-[#8F98BA] uppercase tracking-wider">
              3. Solana SPL & Token Brand Tokens (JSON)
            </h4>
            <button
              onClick={handleCopyTokens}
              className="text-xs font-mono text-[#14F195] hover:underline flex items-center gap-1 cursor-pointer"
            >
              {copiedToken ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied JSON</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Tokens</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 bg-[#07080E] border border-[#1E2542] rounded-xl text-[11px] font-mono text-[#8F98BA] overflow-x-auto max-h-40">
            {designTokensJson}
          </pre>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-[#1E2542] flex items-center justify-between text-xs font-mono text-[#6C7699]">
          <span className="flex items-center gap-1.5 text-[#10B981]">
            <PumpFunLogo size={12} />
            <span>Ready for Pump.fun token deployment</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#121629] hover:bg-[#1A1F36] text-[#E4E7F5] rounded-lg transition-colors cursor-pointer"
          >
            Close Vault
          </button>
        </div>

      </div>
    </div>
  );
};
