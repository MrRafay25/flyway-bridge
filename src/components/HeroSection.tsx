import React from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, RefreshCw, Layers } from 'lucide-react';
import { GlobalNetworkCanvas } from './GlobalNetworkCanvas.tsx';

interface HeroSectionProps {
  onExploreSolutions: () => void;
  onOpenInquiry: (defaultSolution?: string, defaultPartnerType?: 'retailer' | 'tech_vendor') => void;
  onOpenAdvisor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSolutions,
  onOpenInquiry,
  onOpenAdvisor,
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#0B192C] via-[#0D213A] to-[#0B192C]">
      {/* Interactive Global Network Tech Background */}
      <GlobalNetworkCanvas />

      {/* Ambient gradient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#008DDA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline kicker: clean unboxed metadata with typographic separators */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400">
              <span>Connecting Global Retail Tech</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Emerging Markets</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-300">Europe to Pakistan</span>
            </div>

            {/* Compelling Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              Bridging the Future of Retail with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#008DDA]">
                AI Technology.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed text-balance">
              Empowering Pakistani fashion and retail giants with next-gen European AI Smart Mirrors and Virtual Fitting Rooms. Seamless turnkey deployment with zero local entity overhead.
            </p>

            {/* Call-to-action buttons with smooth hover animations */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreSolutions}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-[#008DDA] hover:from-cyan-300 hover:to-sky-400 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenInquiry(undefined, 'retailer')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400/70 rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Partner With Us</span>
              </button>

              <button
                onClick={onOpenAdvisor}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-cyan-300 hover:text-white transition-colors cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span className="underline underline-offset-4 decoration-cyan-500/50 group-hover:decoration-cyan-400">
                  Assess Brand AI Readiness
                </span>
              </button>
            </div>

            {/* Adjacent Proof & Metrics Strip (Claim-to-Proof Adjacency) */}
            <div className="pt-6 border-t border-cyan-500/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-cyan-400 font-mono tabular-nums">38%</div>
                <div className="text-xs text-slate-400">Return Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">2.4x</div>
                <div className="text-xs text-slate-400">In-Store Dwell Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 font-mono tabular-nums">Zero</div>
                <div className="text-xs text-slate-400">Local Setup Friction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">99.8%</div>
                <div className="text-xs text-slate-400">Hardware Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Holographic Tech Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl p-1 bg-gradient-to-b from-cyan-500/40 via-cyan-900/20 to-transparent shadow-2xl shadow-cyan-950/60">
              <div className="relative rounded-2xl bg-[#091524] border border-cyan-500/30 p-6 overflow-hidden">
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 text-xs">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>FLYWY BRIDGING MATRIX</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">EU ⇄ PK ACTIVE</span>
                </div>

                {/* Central Futuristic Mirror Display Preview */}
                <div className="my-6 relative rounded-xl bg-gradient-to-b from-slate-900 to-[#0A192F] border border-cyan-500/30 p-4 text-center overflow-hidden">
                  {/* Subtle scanning light bar */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-pulse" />

                  <div className="py-6 flex flex-col items-center justify-center">
                    <div className="relative w-32 h-44 mb-3 flex items-center justify-center">
                      <svg viewBox="0 0 140 180" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,141,218,0.5)]">
                        <circle cx="70" cy="25" r="16" fill="#1E293B" stroke="#008DDA" strokeWidth="1.5" />
                        <path d="M40 55 Q70 45 100 55 L110 115 Q70 125 30 115 Z" fill="#008DDA" fillOpacity="0.8" stroke="#00E5FF" strokeWidth="1.5" />
                        <path d="M45 115 L35 170 Q70 175 105 170 L95 115 Z" fill="#0F172A" stroke="#008DDA" strokeWidth="1" />
                        <circle cx="45" cy="60" r="3" fill="#00E5FF" />
                        <circle cx="95" cy="60" r="3" fill="#00E5FF" />
                        <line x1="45" y1="60" x2="95" y2="60" stroke="#00E5FF" strokeDasharray="3,2" strokeWidth="1" />
                      </svg>
                      {/* Floating overlay tag */}
                      <div className="absolute -top-1 -right-2 bg-cyan-950/90 border border-cyan-400/50 rounded px-2 py-0.5 text-[10px] text-cyan-300 font-mono">
                        AR Silhouette
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-white">Next-Gen European AI Smart Mirror</div>
                    <p className="text-[11px] text-slate-300 mt-1 max-w-[240px]">
                      Tested for Pakistani luxury lawn, ready-to-wear pret, and Western outerwear.
                    </p>
                  </div>

                  {/* Connected Brands Ribbon */}
                  <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-center gap-2">
                    <span>Target Retailers:</span>
                    <strong className="text-slate-200">Khaadi · Outfitters · Sapphire · Nishat</strong>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Turnkey Hardware & Software SLAs</span>
                  </div>
                  <span className="font-mono text-cyan-400">220V Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
