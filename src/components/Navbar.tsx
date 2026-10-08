import React, { useState } from 'react';
import { SolanaLogo, PumpFunLogo } from './SvgAssets';
import { SOLANA_CONFIG } from '../data/characterData';
import { ExternalLink, Copy, Check } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenExport }) => {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(SOLANA_CONFIG.contractAddress);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2000);
  };

  const navItems = [
    { id: 'hero', label: 'Master View' },
    { id: 'assets', label: 'Asset Vault' },
    { id: 'turnaround', label: 'Turnaround' },
    { id: 'expressions', label: 'Expressions' },
    { id: 'tests', label: 'Design Tests' },
    { id: 'meme-studio', label: 'Meme Studio' },
    { id: 'brand', label: 'Brand & SPL' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#07080E]/90 backdrop-blur-md border-b border-[#1A1E30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Wordmark & Solana Brand */}
        <button
          onClick={() => setActiveTab('hero')}
          className="text-xl font-extrabold tracking-wider text-[#E4E7F5] hover:text-[#14F195] transition-colors focus:outline-none flex items-center gap-2 cursor-pointer"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
              TRACE
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#121626] text-[#14F195] border border-[#23293F]">
              <SolanaLogo size={10} />
              <span>$TRACE</span>
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#8F98BA]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`transition-colors whitespace-nowrap py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-[#E4E7F5] font-semibold'
                    : 'hover:text-[#E4E7F5]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary actions & Pump.fun Button */}
        <div className="flex items-center gap-2">
          {/* Quick Copy CA */}
          <button
            onClick={handleCopyCA}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-2 text-xs font-mono text-[#8F98BA] hover:text-[#E4E7F5] bg-[#0E1220] hover:bg-[#151A30] border border-[#1E2542] rounded-md transition-all cursor-pointer"
            title="Copy Solana Contract Address"
          >
            {copiedCA ? <Check className="w-3.5 h-3.5 text-[#14F195]" /> : <Copy className="w-3.5 h-3.5 text-[#9945FF]" />}
            <span className="text-[11px]">{copiedCA ? 'CA Copied' : 'CA'}</span>
          </button>

          {/* Launch on Pump.fun button */}
          <a
            href={SOLANA_CONFIG.pumpFunCoinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 text-xs font-bold text-[#06281E] bg-gradient-to-r from-[#10B981] via-[#14F195] to-[#86EFAC] hover:opacity-95 active:scale-[0.98] transition-all rounded-md shadow-[0_0_15px_rgba(20,241,149,0.3)] whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
          >
            <PumpFunLogo size={16} />
            <span className="hidden sm:inline">Buy on</span>
            <span>Pump.fun</span>
          </a>

          <button
            onClick={onOpenExport}
            className="px-3 py-2 text-xs font-semibold text-[#E4E7F5] bg-[#121626] hover:bg-[#1A1F36] border border-[#23293F] active:scale-[0.98] transition-all rounded-md whitespace-nowrap cursor-pointer"
          >
            Export
          </button>
        </div>
      </div>

      {/* Mobile nav scrollbar */}
      <div className="flex md:hidden overflow-x-auto px-4 py-2 gap-3 border-t border-[#1A1E30] text-xs font-medium text-[#8F98BA] no-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === item.id
                ? 'text-[#14F195] bg-[#121626] font-semibold border border-[#14F195]/30'
                : 'hover:text-[#E4E7F5]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
