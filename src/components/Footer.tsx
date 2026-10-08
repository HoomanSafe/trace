import React from 'react';
import { CHARACTER_NAME, SOLANA_CONFIG } from '../data/characterData';
import { NullCrestSymbol, SolanaLogo, PumpFunLogo } from './SvgAssets';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenDossier: () => void;
  onOpenExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDossier, onOpenExport }) => {
  return (
    <footer className="bg-[#06080F] border-t border-[#1A1E30] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <NullCrestSymbol size={32} glow={false} />
            <div className="text-left">
              <span
                className="font-extrabold text-sm text-[#E4E7F5] tracking-wider block"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {CHARACTER_NAME} ($TRACE)
              </span>
              <span className="text-[11px] text-[#6C7699] font-mono flex items-center gap-1.5 mt-0.5">
                <SolanaLogo size={12} />
                <span>Solana Blockchain · Pump.fun Launch</span>
              </span>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-5 text-xs text-[#8F98BA] font-medium">
            <a
              href={SOLANA_CONFIG.pumpFunCoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10B981] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <PumpFunLogo size={14} />
              <span>Pump.fun</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={SOLANA_CONFIG.dexScreenerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9945FF] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>DexScreener</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onOpenDossier}
              className="hover:text-[#E4E7F5] transition-colors cursor-pointer"
            >
              Master Dossier
            </button>
            <button
              onClick={onOpenExport}
              className="hover:text-[#E4E7F5] transition-colors cursor-pointer"
            >
              Export Assets
            </button>
          </div>

          <div className="text-xs font-mono text-[#6C7699]">
            © {new Date().getFullYear()} MEMEAI on Solana ($TRACE).
          </div>

        </div>
      </div>
    </footer>
  );
};
