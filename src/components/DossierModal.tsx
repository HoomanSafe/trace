import React from 'react';
import { LORE_DOSSIER, CHARACTER_NAME, SIGNATURE_ELEMENT, ASSET_PATHS, SOLANA_CONFIG } from '../data/characterData';
import { NullCrestSymbol, SolanaLogo, PumpFunLogo } from './SvgAssets';
import { X, ShieldAlert, Terminal, Eye, FileText, CheckCircle2, ExternalLink } from 'lucide-react';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#0B0E1C] border border-[#232B4C] rounded-2xl p-6 lg:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#1E2542] pb-4">
          <div className="flex items-center gap-3">
            <NullCrestSymbol size={36} glow={true} />
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#14F195]">
                <SolanaLogo size={12} />
                <span>SOLANA BLOCKCHAIN INTEL DIVISION</span>
                <span>·</span>
                <span className="text-[#10B981]">PUMP.FUN CLEARANCE</span>
              </div>
              <h2
                className="text-2xl font-extrabold text-[#E4E7F5]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                CONFIDENTIAL DOSSIER: {CHARACTER_NAME} ($TRACE)
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#121629] hover:bg-[#1A1F36] text-[#8F98BA] hover:text-[#E4E7F5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview Profile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3 bg-[#07080E] border border-[#1E2542] rounded-lg">
            <span className="text-[#6C7699] block mb-1">CODENAME & TICKER</span>
            <span className="text-[#E4E7F5] font-bold text-sm">{LORE_DOSSIER.codename} ($TRACE)</span>
          </div>
          <div className="p-3 bg-[#07080E] border border-[#1E2542] rounded-lg">
            <span className="text-[#6C7699] block mb-1">NETWORK & LAUNCH</span>
            <span className="text-[#10B981] font-bold text-sm flex items-center gap-1">
              <PumpFunLogo size={12} />
              <span>Solana · Pump.fun</span>
            </span>
          </div>
          <div className="p-3 bg-[#07080E] border border-[#1E2542] rounded-lg">
            <span className="text-[#6C7699] block mb-1">BONDING CURVE STATUS</span>
            <span className="text-[#14F195] font-bold text-sm">Active · King of the Hill</span>
          </div>
        </div>

        {/* Narrative Dossier Body */}
        <div className="space-y-4 text-sm text-[#8F98BA] leading-relaxed">
          <div className="p-4 bg-[#07080E] border border-[#1E2542] rounded-xl space-y-2">
            <span className="text-xs font-mono text-[#14F195] block font-bold">
              SOLANA ORIGIN & ESSENCE
            </span>
            <p>
              TRACE is not a superhero nor an assassin. He was spawned in the 400-millisecond block slots of Solana, moving through liquidity pools and decentralized order books before MEV bots can even register his presence.
            </p>
            <p>
              Now launched fairly on <strong className="text-[#10B981]">pump.fun</strong>, he embodies the community's calm chaos: holding through turbulence, executing silently, and never explaining the obvious.
            </p>
          </div>

          {/* Calm Chaos Breakdown */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#E4E7F5] font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#14F195]" />
              <span>BEHAVIORAL DIRECTIVE: CALM CHAOS</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {LORE_DOSSIER.personalityTraits.map((trait, idx) => {
                const [title, desc] = trait.split(': ');
                return (
                  <div key={idx} className="p-3 bg-[#07080E] border border-[#1E2542] rounded-lg">
                    <span className="text-[#14F195] font-bold block mb-1">{title}</span>
                    <span className="text-[#8F98BA]">{desc}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Known Verbal Records */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#E4E7F5] font-mono flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#14F195]" />
              <span>LOGGED COMMUNICATIONS ARCHIVE</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {LORE_DOSSIER.quoteArchive.map((quote, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#07080E] border border-[#1E2542] rounded-md text-[#E4E7F5]"
                >
                  {quote}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1E2542] text-xs font-mono text-[#6C7699]">
          <span>RECORD ID: #0xTRACE_SOLANA</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#121629] hover:bg-[#1A1F36] text-[#E4E7F5] rounded-md transition-colors cursor-pointer"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
