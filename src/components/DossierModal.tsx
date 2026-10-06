import React from 'react';
import { LORE_DOSSIER, CHARACTER_NAME, CHARACTER_CODENAME, SIGNATURE_ELEMENT, ASSET_PATHS } from '../data/characterData';
import { NullCrestSymbol } from './SvgAssets';
import { X, ShieldAlert, Terminal, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#0F1211] border border-[#28302D] rounded-2xl p-6 lg:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#1C201F] pb-4">
          <div className="flex items-center gap-3">
            <NullCrestSymbol size={36} glow={true} />
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#0DF569]">
                <span>MEMEAI INTEL DIVISION</span>
                <span>·</span>
                <span>CLEARANCE LEVEL 0</span>
              </div>
              <h2
                className="text-2xl font-extrabold text-[#EDECE8]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                CONFIDENTIAL DOSSIER: {CHARACTER_NAME}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#151817] hover:bg-[#1E2321] text-[#8F9B95] hover:text-[#EDECE8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview Profile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg">
            <span className="text-[#697570] block mb-1">CODENAME</span>
            <span className="text-[#EDECE8] font-bold text-sm">{LORE_DOSSIER.codename}</span>
          </div>
          <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg">
            <span className="text-[#697570] block mb-1">ARCHETYPE</span>
            <span className="text-[#0DF569] font-bold text-sm">The Unknown Operator</span>
          </div>
          <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg">
            <span className="text-[#697570] block mb-1">STATUS</span>
            <span className="text-[#EDECE8] font-bold text-sm">Active & Omnipresent</span>
          </div>
        </div>

        {/* Narrative Dossier Body */}
        <div className="space-y-4 text-sm text-[#9BA7A1] leading-relaxed">
          <div className="p-4 bg-[#090A0A] border border-[#1C201F] rounded-xl space-y-2">
            <span className="text-xs font-mono text-[#0DF569] block font-bold">
              OPERATIONAL ORIGIN & ESSENCE
            </span>
            <p>
              TRACE is not a superhero fighting crime, nor an assassin looking for targets.
              He is someone who exists on the internet, but nobody knows who he really is.
              He appears quietly in obscure server nodes, monitors decentralized order books, observes memetic cultural shifts, executes a transaction or a meme, and vanishes.
            </p>
            <p>
              When people see him, their immediate reaction is: <em>"Who is that?"</em>
              Followed shortly by: <em>"He knows something."</em>
            </p>
          </div>

          {/* Calm Chaos Breakdown */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#EDECE8] font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#0DF569]" />
              <span>BEHAVIORAL DIRECTIVE: CALM CHAOS</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {LORE_DOSSIER.personalityTraits.map((trait, idx) => {
                const [title, desc] = trait.split(': ');
                return (
                  <div key={idx} className="p-3 bg-[#151817] border border-[#28302D] rounded-lg">
                    <span className="text-[#0DF569] font-bold block mb-1">{title}</span>
                    <span className="text-[#8F9B95]">{desc}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Known Verbal Records */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#EDECE8] font-mono flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#0DF569]" />
              <span>LOGGED COMMUNICATIONS ARCHIVE</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {LORE_DOSSIER.quoteArchive.map((quote, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#090A0A] border border-[#1C201F] rounded-md text-[#EDECE8]"
                >
                  {quote}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1C201F] text-xs font-mono text-[#697570]">
          <span>RECORD ID: #0xTRACE_MASTER</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#151817] hover:bg-[#1E2321] text-[#EDECE8] rounded-md transition-colors cursor-pointer"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
