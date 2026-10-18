import React from 'react';
import {
  Globe2,
  Cpu,
  ShieldCheck,
  Building2,
  Workflow,
  Check,
  X,
  ArrowRight
} from 'lucide-react';

interface BridgingModelSectionProps {
  onOpenInquiry: (defaultSolution?: string, defaultPartnerType?: 'retailer' | 'tech_vendor') => void;
}

export const BridgingModelSection: React.FC<BridgingModelSectionProps> = ({ onOpenInquiry }) => {
  const steps = [
    {
      number: '01',
      title: 'European Tech Curation & Due Diligence',
      description:
        'We scout and vet premier AI retail hardware and software providers across Germany, the UK, France, and Italy, verifying commercial stability, edge compute capabilities, and latency resilience.',
      tag: 'Rigorous Technical Vetting',
    },
    {
      number: '02',
      title: 'Emerging Market Adaptation & Compliance',
      description:
        'FlyWy Bridge handles all cross-border import clearance, 220V power calibration, shock-proof store casing, and localized garment sizing models (such as Pakistani Lawn and Pret dimensions).',
      tag: 'Turnkey Hardware Logistics',
    },
    {
      number: '03',
      title: 'Direct Access to Tier-1 Retail Giants',
      description:
        'We eliminate cold outreach for global innovators. We maintain direct board-level relationships with Pakistan’s leading apparel empires (Khaadi, Outfitters, Sapphire, Nishat, Gul Ahmed).',
      tag: 'Zero Local Entity Setup',
    },
    {
      number: '04',
      title: '24/7 On-Ground Support & Enterprise SLAs',
      description:
        'Local L1/L2 engineering teams in Lahore and Karachi guarantee rapid replacement parts, store staff concierge training, and 99.8% in-store hardware uptime.',
      tag: 'Local Mission-Critical SLAs',
    },
  ];

  return (
    <section id="bridge" className="py-24 bg-gradient-to-b from-[#0B192C] via-[#0E223D] to-[#0B192C] relative overflow-hidden border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase font-bold tracking-widest text-cyan-400">
            Value Proposition & Bridging Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Connecting International Software Pioneers with Pakistan’s Top Retail Giants
          </h2>
          <p className="text-sm sm:text-base text-slate-300 text-balance">
            Emerging markets boast 240M+ consumers and booming fashion conglomerates, but international tech pioneers often struggle with local entity registration, customs logistics, and retailer access. FlyWy Bridge solves this friction entirely.
          </p>
        </div>

        {/* Comparison Matrix: Direct Entry vs FlyWy Bridge Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Traditional Entry (The Pain Points) */}
          <div className="rounded-2xl bg-slate-900/60 border border-rose-500/20 p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-rose-500/20">
              <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold font-mono">
                Traditional Direct Market Entry
              </span>
              <span className="text-xs text-rose-400 font-mono">High Risk · 9-14 Months</span>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Complex Entity Registration:</strong> 6+ months navigating local company law, tax authorities, and legal representations in South Asia.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Hardware Customs Bottlenecks:</strong> Unpredictable port clearance delays and tariff classifications on smart mirror displays and sensors.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Unfamiliarity with Local Fashion:</strong> Software trained on European sizing fails on Pakistani 3-piece unstitched lawn and draped festive silhouettes.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>No Local Technical Support:</strong> If a smart mirror glitches in Emporium Mall Lahore, overseas tech vendors have no on-ground engineers to fix it.
                </span>
              </li>
            </ul>
          </div>

          {/* The FlyWy Bridge Advantage */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0F284B] to-[#0A1B33] border-2 border-cyan-400/40 p-6 sm:p-8 space-y-5 shadow-xl shadow-cyan-950/40 relative">
            <div className="flex items-center justify-between pb-4 border-b border-cyan-400/30">
              <span className="text-xs uppercase tracking-wider text-cyan-300 font-semibold font-mono flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-cyan-400" />
                The FlyWy Bridge Solution
              </span>
              <span className="text-xs text-emerald-400 font-mono font-bold">2-Week Rapid Pilot</span>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero Local Setup Overhead:</strong> European tech firms partner as authorized technology providers without incorporating a local Pakistani subsidiary.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Bonded Hardware Warehousing:</strong> Pre-cleared smart mirror units and sensor nodes stored locally in Lahore and Karachi ready for 48-hour store install.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Immediate Access to Fashion Giants:</strong> Direct vendor onboarding pipelines with Khaadi, Outfitters, Sapphire, Nishat, and premier retail groups.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Bilingual On-Site Support:</strong> Trained Pakistani tech concierge teams handle store staff onboarding, maintenance, and 24/7 SLAs.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4-Step Bridging Process */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              The 4-Step Bridging Workflow
            </h3>
            <span className="text-xs text-cyan-400 font-mono">END-TO-END EXECUTION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl bg-[#0C1B30] border border-cyan-500/20 p-5 space-y-3 tech-card-glow"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-cyan-400">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    {step.tag}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900/80 to-cyan-950/60 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Are you a European Retail Tech Provider or Local Fashion Brand?
            </h4>
            <p className="text-xs text-slate-300">
              Let's schedule an executive briefing to evaluate pilot availability for upcoming seasonal collections.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('Bridging Partnership', 'tech_vendor')}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shrink-0 shadow-lg cursor-pointer"
          >
            Initiate Partnership
          </button>
        </div>
      </div>
    </section>
  );
};
