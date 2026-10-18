import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Sun,
  Moon,
  Laptop,
  CheckCircle2,
  TrendingUp,
  Activity,
  Layers,
  ShoppingBag,
  RotateCcw,
  Maximize2,
  ShieldCheck,
  ChevronRight,
  X
} from 'lucide-react';

interface SimulatorModalProps {
  solutionType: 'smart_mirror' | 'virtual_fitting' | 'retail_analytics';
  onClose: () => void;
  onInquire: (solutionName: string) => void;
}

export const SolutionSimulators: React.FC<SimulatorModalProps> = ({
  solutionType,
  onClose,
  onInquire,
}) => {
  // Smart Mirror State
  const [lighting, setLighting] = useState<'daylight' | 'evening' | 'office'>('daylight');
  const [outfit, setOutfit] = useState<'ethnic_pret' | 'silk_suit' | 'urban_denim'>('ethnic_pret');
  const [mirrorGestureActive, setMirrorGestureActive] = useState(false);

  // Virtual Fitting Room State
  const [selectedSize, setSelectedSize] = useState<'XS' | 'S' | 'M' | 'L' | 'XL'>('M');
  const [fabricType, setFabricType] = useState<'lawn' | 'denim' | 'silk'>('lawn');
  const [fitHeatmapVisible, setFitHeatmapVisible] = useState(true);

  // Retail Analytics State
  const [analyticsView, setAnalyticsView] = useState<'heatmap' | 'pathways'>('heatmap');
  const [activeZone, setActiveZone] = useState<'fitting_rooms' | 'lawn_racks' | 'cash_counter'>('fitting_rooms');
  const [trafficCounter, setTrafficCounter] = useState(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficCounter((prev) => prev + Math.floor(Math.random() * 3));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B192C]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0B192C] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col my-auto">
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Live Interactive Technology Sandbox
              </div>
              <h2 className="text-lg font-bold text-white">
                {solutionType === 'smart_mirror' && 'European AI Smart Mirror In-Store Experience'}
                {solutionType === 'virtual_fitting' && 'AR 3D Virtual Fitting & Sizing Engine'}
                {solutionType === 'retail_analytics' && 'Computer Vision Retail Footfall & Dwell Console'}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sandbox Content */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          {/* 1. SMART MIRROR SIMULATION */}
          {solutionType === 'smart_mirror' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Interactive Mirror Glass Frame */}
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 bg-gradient-to-b from-slate-950 to-[#0F223D] p-5 shadow-inner">
                {/* Simulated Mirror Top Status Header */}
                <div className="flex items-center justify-between text-xs text-cyan-300 pb-3 border-b border-cyan-500/20 mb-4">
                  <span className="font-mono">FLYWY MIRROR OS v3.2</span>
                  <span className="text-slate-400">TOUCHLESS GESTURE READY</span>
                  <span className="font-mono text-cyan-400">60 FPS · 4K UHD</span>
                </div>

                {/* Mirror Glass Surface with Ambient Lighting Effect */}
                <div
                  className={`relative rounded-xl p-6 transition-all duration-500 flex flex-col items-center justify-center min-h-[340px] border ${
                    lighting === 'daylight'
                      ? 'bg-slate-900/90 border-amber-400/30 shadow-[0_0_40px_rgba(251,191,36,0.15)]'
                      : lighting === 'evening'
                      ? 'bg-[#09111e]/95 border-purple-400/30 shadow-[0_0_40px_rgba(168,85,247,0.15)]'
                      : 'bg-slate-900/90 border-cyan-400/30 shadow-[0_0_40px_rgba(0,141,218,0.2)]'
                  }`}
                >
                  {/* Silhouette and Garment Rendering */}
                  <div className="relative w-48 h-64 flex items-center justify-center">
                    <svg viewBox="0 0 200 320" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,141,218,0.4)]">
                      {/* Mannequin Body Mesh */}
                      <circle cx="100" cy="40" r="24" fill="#1E293B" stroke="#008DDA" strokeWidth="2" />
                      <path
                        d="M60 80 Q100 65 140 80 L155 170 Q100 185 45 170 Z"
                        fill={
                          outfit === 'ethnic_pret'
                            ? '#0284c7'
                            : outfit === 'silk_suit'
                            ? '#7c3aed'
                            : '#0f766e'
                        }
                        stroke="#00E5FF"
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M70 170 L55 300 Q100 310 145 300 L130 170 Z"
                        fill="#0F172A"
                        stroke="#008DDA"
                        strokeWidth="1.5"
                      />
                      {/* AR Measurement Tracking Nodes */}
                      <circle cx="65" cy="85" r="4" fill="#00E5FF" className="animate-ping opacity-60" />
                      <circle cx="135" cy="85" r="4" fill="#00E5FF" className="animate-ping opacity-60" />
                      <circle cx="100" cy="130" r="3" fill="#00E5FF" />
                      <line x1="65" y1="85" x2="135" y2="85" stroke="#00E5FF" strokeDasharray="3,3" strokeWidth="1" />
                    </svg>

                    {/* On-Glass Floating AI Recommendation HUD */}
                    <div className="absolute -right-2 top-4 bg-slate-900/90 border border-cyan-400/40 rounded-lg p-2.5 text-[11px] shadow-lg max-w-[150px] backdrop-blur-sm">
                      <div className="text-cyan-400 font-semibold mb-0.5 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        AI Styling
                      </div>
                      <div className="text-slate-200">
                        {outfit === 'ethnic_pret' && 'Pairs with Chiffon Dupatta #12 & Gold Mojaris'}
                        {outfit === 'silk_suit' && 'Pairs with Formal Pearl Choker & Emerald Clutch'}
                        {outfit === 'urban_denim' && 'Pairs with Minimalist Leather Loafers'}
                      </div>
                    </div>
                  </div>

                  {/* Mirror Bottom Floating Controls */}
                  <div className="mt-4 flex items-center justify-between w-full px-2 text-xs">
                    <span className="text-slate-400">
                      Fitting: <strong className="text-cyan-400">99.2% Silhouette Match</strong>
                    </span>
                    <button
                      onClick={() => setMirrorGestureActive(!mirrorGestureActive)}
                      className="px-2.5 py-1 text-[11px] bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 rounded hover:bg-cyan-900/50 cursor-pointer"
                    >
                      {mirrorGestureActive ? 'Wave Detected: Swiping Look' : 'Simulate Hand Wave'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Controls & Value Pitch */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">Simulate In-Store Lighting</h3>
                  <p className="text-xs text-slate-300 mb-3">
                    Shoppers can test garments under daylight, formal evening banquet lighting, or office ambient luminaires directly inside the mirror.
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setLighting('daylight')}
                      className={`p-2.5 text-xs font-medium rounded-lg border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        lighting === 'daylight'
                          ? 'border-amber-400 bg-amber-400/10 text-amber-300'
                          : 'border-slate-700 bg-slate-800/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Sun className="w-4 h-4" />
                      Daylight
                    </button>
                    <button
                      onClick={() => setLighting('evening')}
                      className={`p-2.5 text-xs font-medium rounded-lg border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        lighting === 'evening'
                          ? 'border-purple-400 bg-purple-400/10 text-purple-300'
                          : 'border-slate-700 bg-slate-800/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Moon className="w-4 h-4" />
                      Banquet Gala
                    </button>
                    <button
                      onClick={() => setLighting('office')}
                      className={`p-2.5 text-xs font-medium rounded-lg border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        lighting === 'office'
                          ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300'
                          : 'border-slate-700 bg-slate-800/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Laptop className="w-4 h-4" />
                      Office LED
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-2">Switch Garment Look</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'ethnic_pret', name: 'Festive Pret Kurta', sub: 'Khaadi / Sapphire Line' },
                      { id: 'silk_suit', name: 'Raw Silk Evening Ensemble', sub: 'Luxury Pret Line' },
                      { id: 'urban_denim', name: 'Contemporary Tailored Blazer', sub: 'Outfitters Line' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setOutfit(item.id as any)}
                        className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                          outfit === item.id
                            ? 'border-cyan-400 bg-cyan-950/40 text-white'
                            : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:bg-slate-800/50'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold">{item.name}</div>
                          <div className="text-[11px] text-slate-400">{item.sub}</div>
                        </div>
                        {outfit === item.id && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <button
                    onClick={() => onInquire('AI Smart Mirrors')}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#008DDA] to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg cursor-pointer"
                  >
                    <span>Request AI Smart Mirror Demo for Your Stores</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. VIRTUAL FITTING ROOM SIMULATION */}
          {solutionType === 'virtual_fitting' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 bg-slate-950 border border-cyan-500/30 rounded-2xl p-6 relative">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs">
                  <span className="text-cyan-400 font-mono">AR DRAPE SIMULATOR</span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Pakistani Size Normalization Active</span>
                  </div>
                </div>

                <div className="relative min-h-[300px] flex flex-col items-center justify-center bg-radial from-slate-900 to-slate-950 rounded-xl p-4 border border-slate-800">
                  {/* Sizing Visualization */}
                  <div className="text-center mb-2">
                    <span className="text-xs text-slate-400">Active Size Profile: </span>
                    <span className="text-sm font-bold text-cyan-400">Pakistani Standard {selectedSize}</span>
                    <span className="text-xs text-slate-400"> · Fabric: {fabricType.toUpperCase()}</span>
                  </div>

                  <div className="relative w-40 h-56 flex items-center justify-center">
                    <svg viewBox="0 0 160 220" className="w-full h-full">
                      {/* Body base */}
                      <path
                        d="M50 40 Q80 30 110 40 L125 120 Q80 135 35 120 Z"
                        fill={fitHeatmapVisible ? '#008DDA' : '#334155'}
                        fillOpacity={fitHeatmapVisible ? '0.75' : '0.9'}
                        stroke="#00E5FF"
                        strokeWidth="2"
                      />
                      {/* Heatmap tension contour lines */}
                      {fitHeatmapVisible && (
                        <>
                          <path
                            d="M60 65 Q80 60 100 65"
                            stroke="#10b981"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="4,2"
                          />
                          <path
                            d="M48 95 Q80 88 112 95"
                            stroke="#10b981"
                            strokeWidth="3"
                            fill="none"
                          />
                          <circle cx="80" cy="92" r="4" fill="#34d399" />
                        </>
                      )}
                      <path
                        d="M55 120 L40 210 Q80 215 120 210 L105 120 Z"
                        fill="#1E293B"
                        stroke="#008DDA"
                        strokeWidth="1.5"
                      />
                    </svg>

                    {/* Sizing accuracy callout */}
                    <div className="absolute -bottom-2 bg-slate-900/90 border border-emerald-500/40 rounded-md px-2.5 py-1 text-[11px] text-emerald-300 font-mono flex items-center gap-1 shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      98.4% Fit Match
                    </div>
                  </div>

                  {/* Sizing Specs */}
                  <div className="grid grid-cols-3 gap-3 w-full mt-6 text-center text-xs">
                    <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                      <div className="text-slate-400 text-[10px]">Shoulder Span</div>
                      <div className="font-mono text-white font-semibold">14.8 in</div>
                    </div>
                    <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                      <div className="text-slate-400 text-[10px]">Chest Contour</div>
                      <div className="font-mono text-emerald-400 font-semibold">Optimal</div>
                    </div>
                    <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                      <div className="text-slate-400 text-[10px]">Return Probability</div>
                      <div className="font-mono text-cyan-400 font-semibold">&lt; 3.2%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Configuration panel */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">Select Shopper Size</h3>
                  <div className="flex gap-2">
                    {(['XS', 'S', 'M', 'L', 'XL'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          selectedSize === size
                            ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                            : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-2">Fabric Weight Physics</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {(
                      [
                        { id: 'lawn', label: 'Cotton Lawn', desc: 'Summer Breathable' },
                        { id: 'denim', label: 'Stretch Denim', desc: 'Heavy Fit' },
                        { id: 'silk', label: 'Pure Raw Silk', desc: 'Flowing Drape' },
                      ] as const
                    ).map((fab) => (
                      <button
                        key={fab.id}
                        onClick={() => setFabricType(fab.id)}
                        className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                          fabricType === fab.id
                            ? 'border-cyan-400 bg-cyan-950/40 text-white'
                            : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="text-xs font-semibold">{fab.label}</div>
                        <div className="text-[10px] text-slate-400">{fab.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs text-slate-300">
                  <span>Show Tension Heatmap Mesh</span>
                  <input
                    type="checkbox"
                    checked={fitHeatmapVisible}
                    onChange={(e) => setFitHeatmapVisible(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={() => onInquire('Virtual Fitting Rooms')}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#008DDA] to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg cursor-pointer"
                  >
                    <span>Deploy Virtual Fitting Rooms for Your Brand</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. AUTOMATED RETAIL ANALYTICS SIMULATION */}
          {solutionType === 'retail_analytics' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 bg-slate-950 border border-cyan-500/30 rounded-2xl p-5 relative">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-xs">
                  <span className="text-cyan-400 font-mono flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    STORE CV TELEMETRY: DOLMEN MALL FLAGSHIP
                  </span>
                  <span className="text-slate-400 font-mono">ANONYMIZED (ZERO PII)</span>
                </div>

                {/* Simulated Store Floor Grid */}
                <div className="relative min-h-[290px] bg-slate-900/90 rounded-xl border border-slate-800 p-4 overflow-hidden">
                  {/* Store Departments Map */}
                  <div className="grid grid-cols-3 gap-3 h-full min-h-[220px]">
                    <div
                      onClick={() => setActiveZone('lawn_racks')}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                        activeZone === 'lawn_racks'
                          ? 'border-amber-400 bg-amber-500/10'
                          : 'border-slate-800 bg-slate-950/60'
                      }`}
                    >
                      <div className="text-xs font-semibold text-slate-200">Zone A: Festive Pret Racks</div>
                      <div className="text-[11px] text-amber-400 font-mono">Dwell: 8.4m · High Density</div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                        <div className="bg-amber-400 h-full w-[82%]" />
                      </div>
                    </div>

                    <div
                      onClick={() => setActiveZone('fitting_rooms')}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                        activeZone === 'fitting_rooms'
                          ? 'border-cyan-400 bg-cyan-500/10'
                          : 'border-slate-800 bg-slate-950/60'
                      }`}
                    >
                      <div className="text-xs font-semibold text-slate-200">Zone B: Smart Mirror Cabins</div>
                      <div className="text-[11px] text-cyan-400 font-mono">Dwell: 4.2m · 78% Conversion</div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                        <div className="bg-cyan-400 h-full w-[94%]" />
                      </div>
                    </div>

                    <div
                      onClick={() => setActiveZone('cash_counter')}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                        activeZone === 'cash_counter'
                          ? 'border-emerald-400 bg-emerald-500/10'
                          : 'border-slate-800 bg-slate-950/60'
                      }`}
                    >
                      <div className="text-xs font-semibold text-slate-200">Zone C: POS Checkout</div>
                      <div className="text-[11px] text-emerald-400 font-mono">Queue: 1.1m · Speed +35%</div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                        <div className="bg-emerald-400 h-full w-[65%]" />
                      </div>
                    </div>
                  </div>

                  {/* Realtime KPI Strip */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <div>
                      Live Footfall Today: <strong className="font-mono text-cyan-400">{trafficCounter}</strong> visitors
                    </div>
                    <div>
                      Fitting Trial Rate: <strong className="font-mono text-emerald-400">44.8%</strong> (+16% vs standard)
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Insights */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">Automated Retail Intelligence</h3>
                  <p className="text-xs text-slate-300">
                    European IoT vision sensors connect directly to your store network. Track customer paths, optimize merchandise placement, and eliminate fitting room friction in real time.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-xs font-semibold text-cyan-400 mb-0.5">Fitting Room Funnel Acceleration</div>
                    <p className="text-[11px] text-slate-300">
                      Smart mirrors pre-qualify size & drape, shortening physical cabin queues by 40% while doubling apparel trials per hour.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-xs font-semibold text-emerald-400 mb-0.5">Anonymized Compliance</div>
                    <p className="text-[11px] text-slate-300">
                      No facial recognition or biometric storage. Fully compliant with European GDPR and Pakistani corporate privacy standards.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={() => onInquire('Automated Retail Analytics')}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#008DDA] to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg cursor-pointer"
                  >
                    <span>Request Analytics Pilot Deployment</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
