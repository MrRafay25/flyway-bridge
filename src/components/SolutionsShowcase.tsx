import React from 'react';
import {
  Sparkles,
  Maximize2,
  Scan,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Eye,
  Zap,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface SolutionsShowcaseProps {
  onOpenSimulator: (type: 'smart_mirror' | 'virtual_fitting' | 'retail_analytics') => void;
  onOpenInquiry: (solutionName: string) => void;
}

export const SolutionsShowcase: React.FC<SolutionsShowcaseProps> = ({
  onOpenSimulator,
  onOpenInquiry,
}) => {
  const solutions = [
    {
      id: 'smart_mirror' as const,
      name: 'AI Smart Mirrors',
      badge: 'Interactive In-Store Display',
      headline: 'Full-Length Intelligent Styling & Recommendation Glass',
      description:
        'Interactive full-length in-store mirrors that detect shopper silhouettes and enable touchless gesture styling, ambient lighting adaptation (sunlight vs evening), and real-time personalized apparel recommendations.',
      benefits: [
        '+34% increase in accessories and cross-sell basket sizes',
        'Touchless wave & gesture navigation for hygienic in-store shopping',
        'Multi-scenario lighting simulations (Daylight, Evening Banquet, Office)',
        'Direct connection to in-store POS and inventory catalogs',
      ],
      specs: '4K Ultra-HD · 60 FPS Camera · Anti-glare Glass · 220V Localized',
      accentColor: 'from-cyan-500/20 to-sky-500/5',
      borderColor: 'group-hover:border-cyan-400',
      icon: Sparkles,
      iconColor: 'text-cyan-400',
      svgVisual: (
        <svg viewBox="0 0 160 120" className="w-full h-24 mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
          <rect x="45" y="10" width="70" height="100" rx="6" fill="#0F172A" stroke="#008DDA" strokeWidth="1.5" />
          <line x1="55" y1="25" x2="105" y2="25" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2,2" />
          <circle cx="80" cy="50" r="14" fill="#1E293B" stroke="#00E5FF" strokeWidth="1" />
          <path d="M65 72 Q80 65 95 72 L100 100 L60 100 Z" fill="#0284c7" fillOpacity="0.7" />
          <circle cx="95" cy="40" r="3" fill="#38bdf8" className="animate-ping" />
        </svg>
      ),
    },
    {
      id: 'virtual_fitting' as const,
      name: 'Virtual Fitting Rooms',
      badge: 'Augmented Reality Sizing',
      headline: 'Next-Gen 3D Silhouette Fit & Garment Drape Simulation',
      description:
        'Augmented reality virtual fitting kiosks and omnichannel SDKs that elevate the customer journey, providing pinpoint Pakistani size mapping (lawn, pret, luxury couture, and Western fits) to eliminate return rates.',
      benefits: [
        '38% drop in e-commerce and omnichannel apparel return rates',
        'Accurate drape and tension physics across lawn, silk, and denim fabrics',
        'Eliminates long fitting room queues during peak Eid and festive seasons',
        'Seamless integration with Candela, SAP, and Shopify Plus backends',
      ],
      specs: 'Sub-millimeter AR Mapping · Cloud Edge Rendering · Zero Lag',
      accentColor: 'from-sky-500/20 to-indigo-500/5',
      borderColor: 'group-hover:border-sky-400',
      icon: Scan,
      iconColor: 'text-sky-400',
      svgVisual: (
        <svg viewBox="0 0 160 120" className="w-full h-24 mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
          <circle cx="80" cy="30" r="15" fill="#1E293B" stroke="#008DDA" strokeWidth="1.5" />
          <path d="M50 55 Q80 45 110 55 L120 110 Q80 120 40 110 Z" fill="#0369a1" fillOpacity="0.75" stroke="#00E5FF" strokeWidth="1.5" />
          <path d="M56 75 Q80 70 104 75" stroke="#10b981" strokeWidth="2.5" fill="none" strokeDasharray="3,2" />
          <circle cx="50" cy="55" r="4" fill="#00E5FF" />
          <circle cx="110" cy="55" r="4" fill="#00E5FF" />
          <line x1="25" y1="80" x2="135" y2="80" stroke="#00E5FF" strokeWidth="0.8" strokeDasharray="4,4" />
        </svg>
      ),
    },
    {
      id: 'retail_analytics' as const,
      name: 'Automated Retail Analytics',
      badge: 'Computer Vision & IoT',
      headline: 'Footfall Heatmapping, Dwell Tracking & In-Store Funnels',
      description:
        'Enterprise computer vision intelligence tracking customer traffic flow, high-engagement racks, fitting room trial bottlenecks, and checkout speeds with 100% anonymized, zero-PII data architectures.',
      benefits: [
        'Live store 3D heatmaps and merchandise interaction analytics',
        'Queue detection that alerts store managers before lines swell',
        'Real-time conversion attribution from rack dwell to cash counter',
        'Full GDPR & corporate privacy compliance (zero facial capture)',
      ],
      specs: 'Overhead IoT Vision Nodes · Edge Processing · Offline Resilient',
      accentColor: 'from-cyan-500/20 to-teal-500/5',
      borderColor: 'group-hover:border-cyan-400',
      icon: BarChart3,
      iconColor: 'text-cyan-400',
      svgVisual: (
        <svg viewBox="0 0 160 120" className="w-full h-24 mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
          <rect x="25" y="20" width="110" height="80" rx="4" fill="#0A192F" stroke="#008DDA" strokeWidth="1.2" />
          {/* Heat spots */}
          <circle cx="50" cy="45" r="18" fill="#f59e0b" fillOpacity="0.35" />
          <circle cx="50" cy="45" r="8" fill="#f59e0b" fillOpacity="0.8" />
          <circle cx="95" cy="70" r="24" fill="#00E5FF" fillOpacity="0.3" />
          <circle cx="95" cy="70" r="10" fill="#00E5FF" fillOpacity="0.75" />
          <path d="M40 90 L65 55 L90 75 L120 40" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-[#0B192C] relative overflow-hidden border-t border-cyan-500/20">
      {/* Background tech grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs uppercase font-bold tracking-widest text-cyan-400">
            Featured Solutions Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Next-Generation European Hardware & AI Software
          </h2>
          <p className="text-sm sm:text-base text-slate-300 text-balance">
            Curated and stress-tested specifically for emerging market retail environments. Turnkey implementation with on-ground hardware calibration and continuous enterprise SLAs.
          </p>
        </div>

        {/* 3 Interactive Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-[#0E2038] border border-cyan-500/20 p-6 flex flex-col justify-between transition-all duration-300 tech-card-glow"
              >
                {/* Visual Top Preview */}
                <div className="rounded-xl bg-slate-950/80 border border-cyan-500/20 p-4 mb-6 relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      {item.badge}
                    </span>
                    <button
                      onClick={() => onOpenSimulator(item.id)}
                      className="text-xs text-white hover:text-cyan-300 flex items-center gap-1 underline underline-offset-2 decoration-cyan-500/40 cursor-pointer"
                    >
                      <Eye className="w-3 h-3 text-cyan-400" />
                      <span>Live Sandbox</span>
                    </button>
                  </div>

                  {/* High-tech SVG visualization */}
                  {item.svgVisual}

                  {/* Floating Action Trigger Inside Media Box */}
                  <div className="mt-3 text-center">
                    <button
                      onClick={() => onOpenSimulator(item.id)}
                      className="w-full py-2 px-3 text-xs font-semibold text-cyan-300 bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-500/30 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Launch Interactive Simulator</span>
                    </button>
                  </div>
                </div>

                {/* Content Body */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400/90 mt-1">
                      {item.headline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Key Business Advantages
                    </div>
                    {item.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                  <div className="text-[10px] font-mono text-slate-400 text-center">
                    {item.specs}
                  </div>
                  <button
                    onClick={() => onOpenInquiry(item.name)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#008DDA] to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 transition-all duration-200 shadow-md shadow-cyan-950/50 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Request Demo / Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
