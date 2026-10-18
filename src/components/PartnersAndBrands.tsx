import React from 'react';
import {
  Globe,
  Building,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Handshake,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface PartnersAndBrandsProps {
  onOpenInquiry: (solutionName?: string, partnerType?: 'retailer' | 'tech_vendor') => void;
}

export const PartnersAndBrands: React.FC<PartnersAndBrandsProps> = ({ onOpenInquiry }) => {
  return (
    <div className="space-y-0">
      {/* 1. Technology Partners Portal */}
      <section id="partners" className="py-24 bg-[#091524] border-t border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase font-bold tracking-widest text-cyan-400">
                For Global Retail Tech Partners
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
                Scale Your AI Tech into 240M+ High-Growth Retail Consumers
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed text-balance">
                You’ve built groundbreaking Smart Mirrors, AR fitting rooms, or retail computer vision in Europe. We provide the operational bridge to launch in Pakistan and emerging markets without establishing a local subsidiary.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Zero local corporate registration or legal entity overhead',
                  'Turnkey bonded importation, customs clearance, and 220V hardware compliance',
                  'Direct procurement contracts with top fashion conglomerates',
                  'In-country L1/L2 engineering and customer success teams',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenInquiry('Global Tech Vendor Distribution', 'tech_vendor')}
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#008DDA] to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-950/50"
                >
                  <span>Become a Technology Partner</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#0D213A] border border-cyan-500/30 p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20">
                  <span className="text-xs font-mono text-cyan-400">EUROPEAN EXPANSION MATRIX</span>
                  <span className="text-xs text-emerald-400 font-mono">100% Turnkey</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="text-2xl font-bold font-mono text-cyan-400">14 Days</div>
                    <div className="text-xs text-slate-300 mt-1">Average Pilot Onboarding Time</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="text-2xl font-bold font-mono text-white">Zero</div>
                    <div className="text-xs text-slate-300 mt-1">Local Tax / Entity Overhead</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="text-2xl font-bold font-mono text-cyan-400">220V</div>
                    <div className="text-xs text-slate-300 mt-1">Certified Power Calibration</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="text-2xl font-bold font-mono text-emerald-400">Tier-1</div>
                    <div className="text-xs text-slate-300 mt-1">Direct Access to Fashion C-Suite</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 flex items-center gap-3">
                  <Handshake className="w-6 h-6 text-cyan-400 shrink-0" />
                  <span>
                    Trusted by retail software pioneers from the UK, Germany, France, and the Netherlands.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. For Brands Portal */}
      <section id="brands" className="py-24 bg-[#0B192C] border-t border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl bg-[#0D213A] border border-cyan-500/30 p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="text-xs font-mono text-cyan-400 uppercase">
                  Targeted Emerging Market Retailers
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { name: 'Khaadi', tag: 'Fast-Fashion Pret & Luxury Lawn' },
                    { name: 'Outfitters', tag: 'Contemporary Youth Casual' },
                    { name: 'Sapphire', tag: 'Ready-to-Wear & Western Wear' },
                    { name: 'Nishat Linen', tag: 'Textile Mega-Chain' },
                    { name: 'Gul Ahmed', tag: 'Ideas Department Network' },
                    { name: 'J. Junaid Jamshed', tag: 'Traditional & Formal Pret' },
                  ].map((brand) => (
                    <div
                      key={brand.name}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between"
                    >
                      <span className="font-bold text-white text-sm">{brand.name}</span>
                      <span className="text-[11px] text-slate-400 mt-1">{brand.tag}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Customized for Pakistani fashion: handles unstitched fabric draping, 3-piece silhouettes, and Eid rush footfalls.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="text-xs uppercase font-bold tracking-widest text-cyan-400">
                For Retail Giants & Fashion Conglomerates
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
                Elevate In-Store Trials into Seamless Conversions
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed text-balance">
                Bring European flagship store innovation directly into your mall locations in Lahore, Karachi, and Islamabad. Provide your shoppers with magical smart mirror styling and virtual fitting rooms.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Cut fitting room waiting queues by up to 40% during peak seasons',
                  'Lower omnichannel return rates from 28% to under 14%',
                  'Boost average order values via intelligent cross-sell recommendation overlays',
                  'Fully localized on-ground hardware support with 4-hour SLA response',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenInquiry('Retail Flagship Pilot', 'retailer')}
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-[#008DDA] hover:from-cyan-300 hover:to-sky-400 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-950/50"
                >
                  <span>Request In-Store Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
