import React, { useState } from 'react';
import {
  Sparkles,
  Cpu,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Building,
  ArrowRight,
  BrainCircuit,
  Loader2
} from 'lucide-react';

interface AssessmentData {
  readinessScore: number;
  readinessTier: string;
  recommendedStack: Array<{
    solution: string;
    priority: string;
    rationale: string;
  }>;
  projectedMetrics: {
    returnReductionPercent: string;
    fittingRoomDwellReduction: string;
    basketSizeIncrease: string;
    estimatedAnnualImpactUSD: string;
  };
  deploymentRoadmap: Array<{
    stage: string;
    duration: string;
    keyMilestones: string[];
  }>;
  localizedConsiderations: {
    hardwareLogistics: string;
    storeStaffTraining: string;
    posIntegration: string;
  };
  executiveSummary: string;
}

interface AiStrategicAdvisorProps {
  onOpenInquiry: (solutionName: string) => void;
}

export const AiStrategicAdvisor: React.FC<AiStrategicAdvisorProps> = ({ onOpenInquiry }) => {
  const [brandName, setBrandName] = useState('Khaadi');
  const [storeCount, setStoreCount] = useState('12 Flagship Outlets');
  const [category, setCategory] = useState('Ethnic Ready-to-Wear & Luxury Lawn');
  const [currentReturnRate, setCurrentReturnRate] = useState('24% Omnichannel Returns');
  const [primaryGoal, setPrimaryGoal] = useState('Reduce fitting room lines & elevate trial basket size');
  const [specificNotes, setSpecificNotes] = useState('Dolmen Mall Clifton and Packages Mall Lahore pilot locations');

  const [loading, setLoading] = useState(false);
  const [assessment, setAssessment] = useState<AssessmentData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runAssessment = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/advisor/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brandName,
          storeCount,
          category,
          currentReturnRate,
          primaryGoal,
          specificNotes,
        }),
      });

      const resData = await response.json();
      if (resData.success && resData.data) {
        setAssessment(resData.data);
      } else {
        throw new Error(resData.error || 'Failed to generate assessment');
      }
    } catch (err: any) {
      setError(err?.message || 'Server connection error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="advisor" className="py-24 bg-[#091524] relative overflow-hidden border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs uppercase font-bold tracking-widest text-cyan-400">
            <BrainCircuit className="w-4 h-4 text-cyan-400" />
            <span>AI Strategic Advisory Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Retail AI Feasibility & ROI Assessment
          </h2>
          <p className="text-sm sm:text-base text-slate-300 text-balance">
            Model your brand’s retail footprint against European Smart Mirror and Virtual Fitting benchmarks. Generates tailored capex, timeline, and return-reduction forecasts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Controls Column */}
          <div className="lg:col-span-5 bg-[#0D1F35] border border-cyan-500/30 rounded-2xl p-6 sm:p-7 shadow-xl shadow-cyan-950/40 space-y-5">
            <div className="pb-3 border-b border-cyan-500/20">
              <span className="text-xs uppercase font-semibold text-white">Retailer Profile Input</span>
            </div>

            {/* Brand Presets */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Brand Name
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {['Khaadi', 'Outfitters', 'Sapphire', 'Nishat Linen', 'Gul Ahmed'].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBrandName(b)}
                    className={`px-2.5 py-1 text-xs rounded-md border transition-all cursor-pointer ${
                      brandName === b
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                        : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Or enter brand name..."
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Store Footprint */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Target Store Footprint
              </label>
              <select
                value={storeCount}
                onChange={(e) => setStoreCount(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="3 Flagship Pilot Stores">3 Flagship Pilot Stores (Dolmen / Emporium / Centaurus)</option>
                <option value="12 Flagship Outlets">12 Flagship Outlets (Major Tier-1 Metros)</option>
                <option value="35+ Nationwide Chain Stores">35+ Nationwide Chain Stores</option>
                <option value="Online First + 2 Experience Stores">Online First + 2 Experience Stores</option>
              </select>
            </div>

            {/* Primary Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Primary Merchandise Focus
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="Ethnic Ready-to-Wear & Luxury Lawn">Ethnic Ready-to-Wear & Luxury Lawn (Pret)</option>
                <option value="Contemporary Western Fashion & Denim">Contemporary Western Fashion & Denim</option>
                <option value="Formal Bridal & Luxury Haute Couture">Formal Bridal & Luxury Haute Couture</option>
                <option value="Footwear & Leather Accessories">Footwear & Leather Accessories</option>
                <option value="Multi-Category Department Store">Multi-Category Department Store</option>
              </select>
            </div>

            {/* Current Fitting / Return Bottleneck */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Current Trial Friction / Return Rate
              </label>
              <select
                value={currentReturnRate}
                onChange={(e) => setCurrentReturnRate(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="15-20% Return Rate · Long Weekend Queues">15-20% Return Rate · Long Weekend Queues</option>
                <option value="25-35% High Online Return Rate (Sizing Mismatch)">25-35% High Online Return Rate (Sizing Mismatch)</option>
                <option value="Under 12% Return · Looking to Boost Basket Value">Under 12% Return · Looking to Boost Basket Value</option>
                <option value="No Digital Data on In-Store Dwell or Drop-off">No Digital Data on In-Store Dwell or Drop-off</option>
              </select>
            </div>

            <button
              onClick={runAssessment}
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-[#008DDA] hover:from-cyan-300 hover:to-sky-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-950/50 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Synthesizing Deep Strategic Blueprint...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Generate Enterprise Strategic Assessment</span>
                </>
              )}
            </button>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-7">
            {error && (
              <div className="p-4 bg-rose-950/50 border border-rose-500/40 rounded-xl text-rose-300 text-xs mb-4 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {!assessment && !loading && (
              <div className="rounded-2xl border border-dashed border-cyan-500/30 p-10 text-center space-y-4 bg-slate-950/40">
                <Cpu className="w-10 h-10 text-cyan-400/60 mx-auto" />
                <h3 className="text-base font-bold text-white">
                  Strategic Feasibility Engine Ready
                </h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Click the button to simulate a high-reasoning rollout strategy tailored specifically for {brandName || 'your brand'}’s retail footprint.
                </p>
                <button
                  onClick={runAssessment}
                  className="px-5 py-2.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/40 rounded-lg transition-colors cursor-pointer"
                >
                  Run Baseline Simulation
                </button>
              </div>
            )}

            {loading && (
              <div className="rounded-2xl border border-cyan-500/30 p-12 text-center space-y-4 bg-slate-950/60">
                <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mx-auto" />
                <div className="text-sm font-semibold text-white">
                  Activating Gemini 4 Argon High-Thinking Architecture...
                </div>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Cross-referencing Pakistani apparel sizing specs, European hardware import tariffs, and in-store conversion lift vectors.
                </p>
              </div>
            )}

            {assessment && !loading && (
              <div className="rounded-2xl bg-[#0C1B30] border border-cyan-400/40 p-6 sm:p-8 space-y-6 shadow-2xl">
                {/* Header Strip with Readiness Score */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-cyan-500/20">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-cyan-400">
                      STRATEGIC READINESS BRIEFING
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {brandName} Feasibility Assessment
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-2xl font-black font-mono text-cyan-300 tabular-nums">
                        {assessment.readinessScore}/100
                      </div>
                      <div className="text-[10px] text-emerald-400 font-semibold uppercase">
                        {assessment.readinessTier}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Executive Summary */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200 leading-relaxed">
                  <strong className="text-cyan-400 block mb-1">Executive Recommendation:</strong>
                  {assessment.executiveSummary}
                </div>

                {/* Projected Impact Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Return Reduction</div>
                    <div className="text-sm font-bold font-mono text-emerald-400 mt-0.5">
                      {assessment.projectedMetrics.returnReductionPercent}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Dwell Efficiency</div>
                    <div className="text-sm font-bold font-mono text-cyan-400 mt-0.5">
                      {assessment.projectedMetrics.fittingRoomDwellReduction}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Basket Upsell</div>
                    <div className="text-sm font-bold font-mono text-white mt-0.5">
                      {assessment.projectedMetrics.basketSizeIncrease}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Projected Impact</div>
                    <div className="text-xs font-bold font-mono text-amber-300 mt-0.5 truncate">
                      {assessment.projectedMetrics.estimatedAnnualImpactUSD}
                    </div>
                  </div>
                </div>

                {/* Recommended Technology Stack */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Recommended Architecture Stack
                  </div>
                  <div className="space-y-2">
                    {assessment.recommendedStack.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/80 text-xs">
                        <div className="flex items-center justify-between font-semibold text-white mb-1">
                          <span>{item.solution}</span>
                          <span className="text-[11px] font-mono text-cyan-400">{item.priority}</span>
                        </div>
                        <p className="text-slate-300 text-[11px]">{item.rationale}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Localized Considerations for Pakistan / Emerging Markets */}
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    Emerging Market Turnkey Localization Protocol
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-slate-300">
                    <div>
                      <strong className="text-white block">Hardware Logistics:</strong>
                      {assessment.localizedConsiderations.hardwareLogistics}
                    </div>
                    <div>
                      <strong className="text-white block">Staff Concierge Training:</strong>
                      {assessment.localizedConsiderations.storeStaffTraining}
                    </div>
                    <div>
                      <strong className="text-white block">ERP / POS Integration:</strong>
                      {assessment.localizedConsiderations.posIntegration}
                    </div>
                  </div>
                </div>

                {/* Next Steps CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    Ready to schedule pilot hardware delivery for {brandName}?
                  </span>
                  <button
                    onClick={() => onOpenInquiry(`Executive Pilot for ${brandName}`)}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors cursor-pointer shrink-0"
                  >
                    Schedule Executive Pilot Briefing
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
