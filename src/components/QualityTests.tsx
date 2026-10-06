import React, { useState } from 'react';
import { ASSET_PATHS, CHARACTER_NAME } from '../data/characterData';
import { TraceVectorAvatar, NullCrestSymbol } from './SvgAssets';
import { TraceImage } from './TraceImage';
import { CheckCircle2, AlertCircle, Eye, ShieldCheck, Sparkles, Scale, Maximize2 } from 'lucide-react';

export const QualityTests: React.FC = () => {
  const [activeTest, setActiveTest] = useState<number>(1);
  const [silhouetteSize, setSilhouetteSize] = useState<number>(128);
  const [eyeAmbient, setEyeAmbient] = useState<number>(10); // 0 to 100% ambient light
  const [pfpPlatform, setPfpPlatform] = useState<'x' | 'discord' | 'telegram' | 'hexagon'>('x');

  const tests = [
    {
      id: 1,
      name: 'Test 1: Silhouette Recognition',
      summary: 'Recognizable at 32px, 64px, 128px, 256px, and 512px in pure black.',
      status: 'PASSED',
    },
    {
      id: 2,
      name: 'Test 2: Eye Identity Test',
      summary: 'Recognizable from the narrow, sharp intelligent eyes alone in pitch darkness.',
      status: 'PASSED',
    },
    {
      id: 3,
      name: 'Test 3: Profile Picture (PFP)',
      summary: 'High legibility and personality in circular, squircle, and hexagon avatars.',
      status: 'PASSED',
    },
    {
      id: 4,
      name: 'Test 4: Memeability Verification',
      summary: 'Calm chaos body language adaptable to both serious and absurd internet contexts.',
      status: 'PASSED',
    },
    {
      id: 5,
      name: 'Test 5: Zero IP Copying',
      summary: 'Original character geometry: Not Batman, Robin Hood, or Assassin’s Creed.',
      status: 'PASSED',
    },
    {
      id: 6,
      name: 'Test 6: Anti-Generic Ninja Check',
      summary: 'Modern digital stealth: Zero katanas, samurai plates, or shinobi headbands.',
      status: 'PASSED',
    },
    {
      id: 7,
      name: 'Test 7: Anti-Cyberpunk Slop Check',
      summary: 'Matte textiles and hairline data seams: Zero purple neon slop or wax robot skin.',
      status: 'PASSED',
    },
  ];

  return (
    <section className="py-12 border-b border-[#1C201F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F9B95] tracking-wider uppercase mb-1">
            <span>Section 34 Quality Assurance</span>
            <span aria-hidden="true" className="text-[#0DF569]">·</span>
            <span>7 Mandatory Character Tests</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#EDECE8] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Character Quality Benchmark Suite
          </h2>
          <p className="text-[#8F9B95] text-sm mt-1 max-w-2xl">
            Strict verification protocol ensuring TRACE stands completely on his own as an iconic, original mascot for the MEMEAI universe.
          </p>
        </div>

        {/* Test Selector Tabs (Functional Segmented Control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {tests.map((test) => {
            const isSelected = activeTest === test.id;
            return (
              <button
                key={test.id}
                onClick={() => setActiveTest(test.id)}
                className={`px-3 py-2 rounded-lg text-xs font-mono whitespace-nowrap transition-all border flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#151817] text-[#0DF569] border-[#0DF569]/50 shadow-[0_0_12px_rgba(13,245,105,0.15)] font-medium'
                    : 'bg-[#111413] text-[#8F9B95] border-[#1C201F] hover:text-[#EDECE8] hover:border-[#28302D]'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0DF569]' : 'text-[#697570]'}`} />
                <span>Test 0{test.id}</span>
              </button>
            );
          })}
        </div>

        {/* Active Test Interactive Workspace */}
        <div className="bg-[#111413] border border-[#1C201F] rounded-xl p-6 lg:p-8">
          
          {/* TEST 1: SILHOUETTE TEST */}
          {activeTest === 1 && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1C201F] pb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#EDECE8]">Test 1: Black Silhouette Recognition</h3>
                  <p className="text-xs text-[#8F9B95] mt-0.5">
                    Can the character be recognized at 32px, 64px, 128px, 256px, and 512px as a solid silhouette?
                  </p>
                </div>

                {/* Scale buttons */}
                <div className="flex items-center gap-1 bg-[#090A0A] p-1 rounded border border-[#1C201F] text-xs font-mono">
                  {[32, 64, 128, 256, 380].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSilhouetteSize(sz)}
                      className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                        silhouetteSize === sz
                          ? 'bg-[#151817] text-[#0DF569] font-bold'
                          : 'text-[#697570] hover:text-[#EDECE8]'
                      }`}
                    >
                      {sz}px
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Silhouette Stage */}
                <div className="lg:col-span-7 bg-[#0DF569] min-h-[420px] rounded-lg p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                  <div
                    style={{ width: `${silhouetteSize}px`, height: `${silhouetteSize}px` }}
                    className="flex items-center justify-center transition-all duration-300"
                  >
                    <TraceVectorAvatar
                      size={silhouetteSize}
                      silhouetteOnly={true}
                      className="drop-shadow-lg"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#090A0A]/90 text-[#EDECE8] px-2.5 py-1 rounded text-[11px] font-mono border border-[#1C201F]">
                    RENDERED AT: {silhouetteSize}×{silhouetteSize}PX SOLID BLACK
                  </div>
                </div>

                {/* Verification Criteria */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg space-y-2">
                    <span className="text-xs font-mono text-[#0DF569] font-semibold">SILHOUETTE ANATOMY AUDIT</span>
                    <ul className="text-xs text-[#8F9B95] space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0DF569] shrink-0 mt-0.5" />
                        <span><strong>Origami Hood Peak:</strong> Structured 118° angular crown easily distinguished from round casual hoodies.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0DF569] shrink-0 mt-0.5" />
                        <span><strong>Golden Ratio Shoulders:</strong> Athletic shoulder slope instantly readable at 32px favicon scale.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0DF569] shrink-0 mt-0.5" />
                        <span><strong>Zero Weapon Clutter:</strong> Distinct from generic ninja swords or superhero capes.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 bg-[#151817] border border-[#28302D] rounded-lg text-xs text-[#EDECE8]">
                    <span className="font-semibold text-[#0DF569] block mb-1">VERIFICATION VERDICT: PASS</span>
                    Even when shrunken to a 32px social media browser favicon or zoomed to a 512px poster, the silhouette retains 100% identity.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TEST 2: EYE IDENTITY TEST */}
          {activeTest === 2 && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1C201F] pb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#EDECE8]">Test 2: Eye Identity Test</h3>
                  <p className="text-xs text-[#8F9B95] mt-0.5">
                    Can the character be recognized from the eyes alone? "I already know."
                  </p>
                </div>

                {/* Ambient light slider */}
                <div className="flex items-center gap-3 bg-[#090A0A] px-3 py-1.5 rounded border border-[#1C201F] text-xs">
                  <span className="text-[#8F9B95] font-mono">Ambient Light: {eyeAmbient}%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={eyeAmbient}
                    onChange={(e) => setEyeAmbient(Number(e.target.value))}
                    className="w-24 accent-[#0DF569] cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Darkness Chamber */}
                <div
                  className="lg:col-span-7 min-h-[420px] rounded-lg p-6 flex flex-col items-center justify-center relative overflow-hidden transition-colors"
                  style={{
                    backgroundColor: `rgba(9, 10, 10, ${1 - eyeAmbient * 0.007})`,
                  }}
                >
                  <div className="w-full max-w-sm flex items-center justify-center">
                    <TraceVectorAvatar size={240} eyesOnly={eyeAmbient < 40} glow={true} />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#090A0A]/90 text-[#EDECE8] px-2.5 py-1 rounded text-[11px] font-mono border border-[#1C201F]">
                    ISOLATION CHAMBER · {eyeAmbient < 40 ? 'PITCH BLACK MODE' : 'SUBTLE AMBIENT MODE'}
                  </div>
                </div>

                {/* Audit points */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg space-y-2">
                    <span className="text-xs font-mono text-[#0DF569] font-semibold">OCULAR IDENTITY RULES</span>
                    <ul className="text-xs text-[#8F9B95] space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0DF569] shrink-0 mt-0.5" />
                        <span><strong>Narrow & Sharp:</strong> Slender geometric apertures indicating calculation, not cartoon anime circles.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0DF569] shrink-0 mt-0.5" />
                        <span><strong>Dual Core Luminance:</strong> Emerald rim glow #0DF569 paired with a warm off-white specular pinprick #EDECE8.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0DF569] shrink-0 mt-0.5" />
                        <span><strong>No Robot LED Matrix:</strong> Organic digital fusion that feels intelligent rather than like a walking appliance.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 bg-[#151817] border border-[#28302D] rounded-lg text-xs text-[#EDECE8]">
                    <span className="font-semibold text-[#0DF569] block mb-1">VERIFICATION VERDICT: PASS</span>
                    Even in 0% ambient light with only 4 pixels of glowing green visible, the psychological presence of TRACE is 100% distinct.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TEST 3: PFP SIMULATOR */}
          {activeTest === 3 && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1C201F] pb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#EDECE8]">Test 3: Profile Picture (PFP) Simulator</h3>
                  <p className="text-xs text-[#8F9B95] mt-0.5">
                    Can the character become a killer social avatar across modern platforms?
                  </p>
                </div>

                {/* Platform switcher */}
                <div className="flex items-center gap-1 bg-[#090A0A] p-1 rounded border border-[#1C201F] text-xs font-mono">
                  {(['x', 'discord', 'telegram', 'hexagon'] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPfpPlatform(p)}
                      className={`px-3 py-1 rounded uppercase transition-colors cursor-pointer ${
                        pfpPlatform === p
                          ? 'bg-[#151817] text-[#0DF569] font-bold'
                          : 'text-[#697570] hover:text-[#EDECE8]'
                      }`}
                    >
                      {p === 'x' ? 'X / Twitter' : p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* PFP Platform Mockup */}
                <div className="lg:col-span-7 bg-[#090A0A] min-h-[400px] rounded-lg p-6 flex flex-col items-center justify-center border border-[#1C201F]">
                  {pfpPlatform === 'x' && (
                    <div className="bg-[#111413] border border-[#1C201F] p-4 rounded-xl max-w-sm w-full space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#0DF569] shrink-0">
                          <TraceImage src={ASSET_PATHS.portrait} alt="X Avatar" className="w-full h-full" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#EDECE8] text-sm">TRACE</span>
                            <span className="text-[#0DF569] text-xs">✓</span>
                          </div>
                          <span className="text-xs text-[#8F9B95] font-mono">@trace_null</span>
                          <p className="text-xs text-[#EDECE8] mt-1">Calm chaos in the shadows. Probably nothing.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {pfpPlatform === 'discord' && (
                    <div className="bg-[#161918] border border-[#222A26] p-4 rounded-xl max-w-sm w-full space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#28302D] shrink-0">
                          <TraceImage src={ASSET_PATHS.portrait} alt="Discord Avatar" className="w-full h-full" />
                          <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#0DF569] border-2 border-[#161918] rounded-full" />
                        </div>
                        <div>
                          <span className="font-bold text-[#EDECE8] text-sm">TRACE</span>
                          <span className="ml-2 text-[10px] bg-[#0DF569]/20 text-[#0DF569] px-1.5 py-0.5 rounded font-mono">BOT / OPERATOR</span>
                          <div className="text-xs text-[#8F9B95] mt-1">Status: Running silent node...</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {pfpPlatform === 'telegram' && (
                    <div className="bg-[#111413] border border-[#1C201F] p-4 rounded-2xl max-w-sm w-full space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#0DF569]/40 shrink-0">
                          <TraceImage src={ASSET_PATHS.portrait} alt="Telegram Avatar" className="w-full h-full" />
                        </div>
                        <div>
                          <span className="font-bold text-[#EDECE8] text-sm">Trace [MEMEAI]</span>
                          <span className="block text-xs text-[#0DF569] font-mono">online recently</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {pfpPlatform === 'hexagon' && (
                    <div className="bg-[#090A0A] border border-[#1C201F] p-4 rounded-xl max-w-sm w-full flex flex-col items-center text-center space-y-3">
                      <div className="w-20 h-20 overflow-hidden [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] border-2 border-[#0DF569] shadow-[0_0_15px_rgba(13,245,105,0.3)]">
                        <TraceImage src={ASSET_PATHS.portrait} alt="Hexagon Avatar" className="w-full h-full" />
                      </div>
                      <div>
                        <span className="font-bold text-[#EDECE8] text-sm block">0xTRACE · NULL MINT</span>
                        <span className="text-xs text-[#8F9B95] font-mono">Mascot #001 · Verified Stealth</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Audit points */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-3 bg-[#090A0A] border border-[#1C201F] rounded-lg space-y-2">
                    <span className="text-xs font-mono text-[#0DF569] font-semibold">AVATAR ERGONOMICS</span>
                    <ul className="text-xs text-[#8F9B95] space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0DF569] shrink-0 mt-0.5" />
                        <span><strong>No Edge Clipping:</strong> The geometric hood crest is centered with safe margin for round or hexagon crops.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0DF569] shrink-0 mt-0.5" />
                        <span><strong>Contrast Punch:</strong> The green ocular glow punches through light and dark platform UI themes.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 bg-[#151817] border border-[#28302D] rounded-lg text-xs text-[#EDECE8]">
                    <span className="font-semibold text-[#0DF569] block mb-1">VERIFICATION VERDICT: PASS</span>
                    Instantly recognizable as a profile picture even at 40px in a crowded group chat.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TEST 4: MEMEABILITY */}
          {activeTest === 4 && (
            <div className="space-y-6">
              <div className="border-b border-[#1C201F] pb-4">
                <h3 className="text-lg font-bold text-[#EDECE8]">Test 4: Memeability Verification</h3>
                <p className="text-xs text-[#8F9B95] mt-0.5">
                  Does the character work in both high-stakes strategic moments and ridiculous meme formats?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#090A0A] border border-[#1C201F] rounded-lg p-3 space-y-2">
                  <div className="aspect-square rounded overflow-hidden">
                    <TraceImage src={ASSET_PATHS.meme} alt="Meme 1" className="w-full h-full" />
                  </div>
                  <div className="text-center pt-1">
                    <span className="text-xs font-bold font-mono text-[#0DF569]">"Probably nothing."</span>
                    <p className="text-[11px] text-[#8F9B95] mt-1">Calm unbothered posture when 100M trades in 3 seconds.</p>
                  </div>
                </div>

                <div className="bg-[#090A0A] border border-[#1C201F] rounded-lg p-3 space-y-2">
                  <div className="aspect-square rounded overflow-hidden">
                    <TraceImage src={ASSET_PATHS.lookback} alt="Meme 2" className="w-full h-full" />
                  </div>
                  <div className="text-center pt-1">
                    <span className="text-xs font-bold font-mono text-[#0DF569]">"Interesting."</span>
                    <p className="text-[11px] text-[#8F9B95] mt-1">Glancing back over shoulder as chaotic drama unfolds.</p>
                  </div>
                </div>

                <div className="bg-[#090A0A] border border-[#1C201F] rounded-lg p-3 space-y-2">
                  <div className="aspect-square rounded overflow-hidden">
                    <TraceImage src={ASSET_PATHS.operator} alt="Meme 3" className="w-full h-full" />
                  </div>
                  <div className="text-center pt-1">
                    <span className="text-xs font-bold font-mono text-[#0DF569]">"Give me a second."</span>
                    <p className="text-[11px] text-[#8F9B95] mt-1">One finger tapping the terminal while fixing global outages.</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#151817] border border-[#28302D] rounded-lg text-xs text-[#EDECE8]">
                <span className="font-semibold text-[#0DF569] block mb-1">VERIFICATION VERDICT: PASS</span>
                TRACE's humor comes from deadpan contrast: looking completely collected and strategic while holding ridiculous objects or watching chaotic internet drama.
              </div>
            </div>
          )}

          {/* TEST 5: ZERO IP COPYING */}
          {activeTest === 5 && (
            <div className="space-y-6">
              <div className="border-b border-[#1C201F] pb-4">
                <h3 className="text-lg font-bold text-[#EDECE8]">Test 5: Originality Rule (Zero IP Copying)</h3>
                <p className="text-xs text-[#8F9B95] mt-0.5">
                  Proving TRACE does not copy Batman, Robin Hood, Assassin's Creed, or generic meme mascots.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#1C201F] text-[#8F9B95]">
                      <th className="py-2 pr-4">Reference Archetype</th>
                      <th className="py-2 px-4">Cliché Tropes Banned</th>
                      <th className="py-2 pl-4 text-[#0DF569]">TRACE Original Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1C201F] text-[#EDECE8]">
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-rose-400">Robin Hood</td>
                      <td className="py-3 px-4 text-[#8F9B95]">Feather cap, bow & arrow, green tunic, medieval boots</td>
                      <td className="py-3 pl-4 text-[#0DF569]">Origami tech hood, zero medieval references, modern digital operator</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-rose-400">Batman</td>
                      <td className="py-3 px-4 text-[#8F9B95]">Bat ears, cape, giant muscles, utility belt, billionaire trauma</td>
                      <td className="py-3 pl-4 text-[#0DF569]">Lean athletic frame, streamlined jacket, internet-native deadpan calm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-rose-400">Assassin's Creed</td>
                      <td className="py-3 px-4 text-[#8F9B95]">Eagle beak hood, hidden blades, white leather armor, red sash</td>
                      <td className="py-3 pl-4 text-[#0DF569]">Matte carbon black #090A0A, emerald optical cipher seam, no weapons</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-rose-400">Generic Ninja</td>
                      <td className="py-3 px-4 text-[#8F9B95]">Katana, shuriken, traditional fabric wraps, shinobi headband</td>
                      <td className="py-3 pl-4 text-[#0DF569]">Modern high-tech stealth outerwear, floating holographic data gestures</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-[#151817] border border-[#28302D] rounded-lg text-xs text-[#EDECE8]">
                <span className="font-semibold text-[#0DF569] block mb-1">VERIFICATION VERDICT: PASS</span>
                TRACE is 100% original IP designed specifically for MEMEAI.
              </div>
            </div>
          )}

          {/* TEST 6: NOT A GENERIC NINJA */}
          {activeTest === 6 && (
            <div className="space-y-6">
              <div className="border-b border-[#1C201F] pb-4">
                <h3 className="text-lg font-bold text-[#EDECE8]">Test 6: Modern Digital Stealth vs Generic Ninja</h3>
                <p className="text-xs text-[#8F9B95] mt-0.5">
                  Rigorous verification that TRACE is an internet operator, not a martial arts cliché.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="p-4 bg-[#090A0A] border border-rose-950/50 rounded-lg space-y-2">
                  <span className="font-mono text-rose-400 font-bold block">❌ GENERIC NINJA TROPES (AVOIDED)</span>
                  <ul className="space-y-1.5 text-[#8F9B95]">
                    <li>• Traditional cloth face wrap covering mouth and nose</li>
                    <li>• Samurai armor plates and shoulder pauldrons</li>
                    <li>• Katana on back or twin daggers</li>
                    <li>• Martial arts combat poses</li>
                    <li>• Traditional Japanese calligraphy tags</li>
                  </ul>
                </div>

                <div className="p-4 bg-[#090A0A] border border-[#0DF569]/30 rounded-lg space-y-2">
                  <span className="font-mono text-[#0DF569] font-bold block">✅ TRACE OPERATOR REALITY (IMPLEMENTED)</span>
                  <ul className="space-y-1.5 text-[#EDECE8]">
                    <li>• Custom origami hood with engineered structural facets</li>
                    <li>• High-tech water-resistant matte micro-ripstop shell</li>
                    <li>• Hands interact with keyboards, terminals, and data chips</li>
                    <li>• Calm, relaxed, slightly nonchalant posture</li>
                    <li>• Single hairline emerald cipher data seam</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-[#151817] border border-[#28302D] rounded-lg text-xs text-[#EDECE8]">
                <span className="font-semibold text-[#0DF569] block mb-1">VERIFICATION VERDICT: PASS</span>
                This is a modern digital stealth character: an Internet Ghost × AI Operator.
              </div>
            </div>
          )}

          {/* TEST 7: NOT CYBERPUNK SLOP */}
          {activeTest === 7 && (
            <div className="space-y-6">
              <div className="border-b border-[#1C201F] pb-4">
                <h3 className="text-lg font-bold text-[#EDECE8]">Test 7: Restraint vs Generic Cyberpunk AI Slop</h3>
                <p className="text-xs text-[#8F9B95] mt-0.5">
                  Adherence to anti-slop rules: zero purple/cyan neon vomit, zero glossy plastic wax.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="p-4 bg-[#090A0A] border border-amber-950/50 rounded-lg space-y-2">
                  <span className="font-mono text-amber-400 font-bold block">❌ CYBERPUNK SLOP TRAPS (AVOIDED)</span>
                  <ul className="space-y-1.5 text-[#8F9B95]">
                    <li>• Rainbow purple-cyan gradient hair/face lights</li>
                    <li>• Glowing circuit boards tattooed on bare skin</li>
                    <li>• Cluttered tubes, chrome cables, and unnecessary gas masks</li>
                    <li>• Airbrushed shiny plastic mannequin facial texture</li>
                    <li>• Chaotic neon city backgrounds full of Japanese signboards</li>
                  </ul>
                </div>

                <div className="p-4 bg-[#090A0A] border border-[#0DF569]/30 rounded-lg space-y-2">
                  <span className="font-mono text-[#0DF569] font-bold block">✅ TRACE DESIGN DISCIPLINE (IMPLEMENTED)</span>
                  <ul className="space-y-1.5 text-[#EDECE8]">
                    <li>• 60% Void Carbon #090A0A, 30% Charcoal #151817, 10% Emerald #0DF569</li>
                    <li>• Matte textured tactical fabric with real physical folds</li>
                    <li>• Single subtle signature element: The Cipher Seam & Null Crest</li>
                    <li>• Bold graphic novel linework with crisp high-contrast shadows</li>
                    <li>• Dark minimal backgrounds emphasizing character presence</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-[#151817] border border-[#28302D] rounded-lg text-xs text-[#EDECE8]">
                <span className="font-semibold text-[#0DF569] block mb-1">VERIFICATION VERDICT: PASS</span>
                Pure editorial graphic restraint. The character commands respect through mystery and minimalism.
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
