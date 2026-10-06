import React from 'react';
import { CHARACTER_NAME } from '../data/characterData';
import { NullCrestSymbol } from './SvgAssets';

interface FooterProps {
  onOpenDossier: () => void;
  onOpenExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDossier, onOpenExport }) => {
  return (
    <footer className="bg-[#090A0A] border-t border-[#1C201F] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <NullCrestSymbol size={28} glow={false} />
            <div className="text-left">
              <span
                className="font-extrabold text-sm text-[#EDECE8] tracking-wider block"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {CHARACTER_NAME}
              </span>
              <span className="text-[11px] text-[#697570] font-mono">
                MEMEAI Universe · Stealth Mascot Design System
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#8F9B95] font-medium">
            <button
              onClick={onOpenDossier}
              className="hover:text-[#EDECE8] transition-colors cursor-pointer"
            >
              Master Dossier
            </button>
            <button
              onClick={onOpenExport}
              className="hover:text-[#EDECE8] transition-colors cursor-pointer"
            >
              Export Assets
            </button>
          </div>

          <div className="text-xs font-mono text-[#697570]">
            © {new Date().getFullYear()} MEMEAI. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};
