import React, { useState } from 'react';
import { SOLANA_CONFIG } from '../data/characterData';
import { SolanaLogo, PumpFunLogo } from './SvgAssets';
import { Copy, Check, ExternalLink, Flame, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export const PumpFunBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(SOLANA_CONFIG.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0B0D14] border-y border-[#1E2235] relative overflow-hidden">
      {/* Solana gradient top hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#10B981]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Left: Solana & Pump.fun Launch Lockup */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-2 p-1.5 bg-[#121624] border border-[#23293F] rounded-lg">
              <SolanaLogo size={22} />
              <span className="text-xs font-mono font-bold text-[#E4E7F5]">SOLANA</span>
              <span className="text-[#9945FF]">×</span>
              <PumpFunLogo size={20} />
              <span className="text-xs font-mono font-bold text-[#10B981]">PUMP.FUN</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14F195] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14F195]" />
              </span>
              <span className="text-[#14F195] font-semibold">FAIR LAUNCH LIVE</span>
              <span className="text-[#4E5674]">·</span>
              <span className="text-[#98A2C8]">Bonding Curve {SOLANA_CONFIG.bondingCurveProgress}%</span>
            </div>
          </div>

          {/* Center: Interactive Contract Address Bar */}
          <div className="flex items-center gap-2 bg-[#06080F] border border-[#1E243A] hover:border-[#9945FF]/40 rounded-lg px-3 py-1.5 w-full lg:w-auto max-w-xl transition-all">
            <span className="text-[11px] font-mono text-[#9945FF] font-semibold shrink-0">
              CA:
            </span>
            <input
              type="text"
              readOnly
              value={SOLANA_CONFIG.contractAddress}
              className="bg-transparent text-xs font-mono text-[#E4E7F5] w-full focus:outline-none select-all truncate"
            />
            <button
              onClick={handleCopyCA}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-[#121626] hover:bg-[#1E233B] text-xs font-mono rounded text-[#14F195] transition-colors shrink-0 cursor-pointer"
              title="Copy Solana Contract Address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#14F195]" />
                  <span className="text-[#14F195] font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy CA</span>
                </>
              )}
            </button>
          </div>

          {/* Right: Primary Pump.fun Action Button with Official Logo */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto justify-end">
            <a
              href={SOLANA_CONFIG.pumpFunCoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-initial px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#34D399] hover:to-[#10B981] text-[#06281E] font-bold text-xs rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(20,241,149,0.45)] flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <PumpFunLogo size={18} />
              <span className="tracking-wide">Buy on Pump.fun</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#06281E]" />
            </a>

            <a
              href={SOLANA_CONFIG.dexScreenerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#121626] hover:bg-[#1A1F36] border border-[#23293F] text-[#98A2C8] hover:text-[#E4E7F5] text-xs font-mono rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#9945FF]" />
              <span className="hidden sm:inline">DexScreener</span>
            </a>
          </div>

        </div>

        {/* Bonding Curve Progress Bar Strip */}
        <div className="mt-3 pt-2.5 border-t border-[#15192A] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#8B95B8]">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Flame className="w-3.5 h-3.5 text-[#10B981]" />
            <span className="text-[#E4E7F5] font-semibold">Bonding Curve Progress:</span>
            <div className="w-32 bg-[#121626] rounded-full h-2 overflow-hidden border border-[#1E243A]">
              <div
                className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#10B981] h-full rounded-full transition-all duration-500"
                style={{ width: `${SOLANA_CONFIG.bondingCurveProgress}%` }}
              />
            </div>
            <span className="text-[#14F195] font-bold">{SOLANA_CONFIG.bondingCurveProgress}%</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#98A2C8]">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#14F195]" />
              <span>400ms Slot Finality</span>
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#9945FF]" />
              <span>Mint & Freeze Revoked</span>
            </span>
            <span className="text-[#10B981] font-semibold">
              Raydium Pool at 100%
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
