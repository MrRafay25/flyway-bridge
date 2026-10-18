import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Loader2, Sparkles, Building, Mail, User, MessageSquare } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSolution?: string;
  defaultPartnerType?: 'retailer' | 'tech_vendor';
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultSolution,
  defaultPartnerType = 'retailer',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [partnerType, setPartnerType] = useState<'retailer' | 'tech_vendor' | 'investor'>(defaultPartnerType);
  const [solutionInterest, setSolutionInterest] = useState(defaultSolution || 'AI Smart Mirrors');
  const [storeCount, setStoreCount] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (defaultSolution) {
      setSolutionInterest(defaultSolution);
    }
    if (defaultPartnerType) {
      setPartnerType(defaultPartnerType);
    }
  }, [defaultSolution, defaultPartnerType]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please provide your name and work email.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          organization,
          partnerType,
          solutionInterest,
          storeCount,
          message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedId(data.inquiryId);
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B192C]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0C1B30] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/70 overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white">
              FlyWy Bridge Enterprise Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submittedId ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Inquiry Successfully Registered</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Reference ID: <strong className="font-mono text-cyan-400">{submittedId}</strong>. Our enterprise retail team will contact you at <strong className="text-white">{email}</strong> within 24 hours.
              </p>
              <div className="text-[11px] text-slate-400">
                Direct briefing contact: <strong className="text-cyan-400">flywybridge@gmail.com</strong>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg cursor-pointer transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs rounded-lg">
                  {error}
                </div>
              )}

              {/* Partner Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  I represent a:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPartnerType('retailer')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      partnerType === 'retailer'
                        ? 'border-cyan-400 bg-cyan-950/60 text-white font-semibold'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    Local Retailer / Fashion Brand
                  </button>
                  <button
                    type="button"
                    onClick={() => setPartnerType('tech_vendor')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      partnerType === 'tech_vendor'
                        ? 'border-cyan-400 bg-cyan-950/60 text-white font-semibold'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    European / Global Tech Vendor
                  </button>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Asad Farooq"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Organization & Store Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Organization / Brand Name
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Khaadi, Outfitters, or Tech firm"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Number of Outlets / Scale
                  </label>
                  <input
                    type="text"
                    value={storeCount}
                    onChange={(e) => setStoreCount(e.target.value)}
                    placeholder="e.g. 10 stores or 500 mirror units"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Solution Interest */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Primary Solution of Interest
                </label>
                <select
                  value={solutionInterest}
                  onChange={(e) => setSolutionInterest(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="AI Smart Mirrors">AI Smart Mirrors (In-Store Interactive Styling)</option>
                  <option value="Virtual Fitting Rooms">Virtual Fitting Rooms (AR Sizing & Drape)</option>
                  <option value="Automated Retail Analytics">Automated Retail Analytics (Heatmaps & Dwell)</option>
                  <option value="Complete Turnkey Suite">Complete Turnkey Suite (Mirrors + Fitting + Analytics)</option>
                  <option value="Emerging Market Tech Distribution">Emerging Market Distribution (for Tech Vendors)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Specific Requirements / Timeline
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detail your pilot location preferences or technology questions..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-[#008DDA] hover:from-cyan-300 hover:to-sky-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enterprise Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-400">
                Official Business Email: <strong className="text-cyan-400">flywybridge@gmail.com</strong>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
