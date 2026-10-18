import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  MapPin,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  Clock
} from 'lucide-react';

interface ContactFooterProps {
  onOpenInquiry: (defaultSolution?: string, defaultPartnerType?: 'retailer' | 'tech_vendor') => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenInquiry }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [solutionInterest, setSolutionInterest] = useState('AI Smart Mirrors');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    setSuccessMsg(null);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          organization,
          solutionInterest,
          message,
          partnerType: 'retailer',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg(`Inquiry received (${data.inquiryId}). Our team will email you within 24 hours.`);
        setName('');
        setEmail('');
        setOrganization('');
        setMessage('');
      }
    } catch (err) {
      setSuccessMsg('Thank you. We have logged your request and will reach out shortly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#081220] border-t border-cyan-500/20 pt-20 pb-12 relative overflow-hidden">
      {/* Background tech glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Direct Corporate Reachout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase font-bold tracking-widest text-cyan-400">
              Direct Contact & Enterprise Desk
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Let’s Connect Your Stores to the Future
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you are a European retail tech pioneer expanding into South Asia or a Pakistani retail conglomerate seeking in-store smart mirrors, FlyWy Bridge is your operational gateway.
            </p>

            {/* Direct contact cards */}
            <div className="space-y-4 pt-2">
              {/* Official Email */}
              <a
                href="mailto:flywybridge@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 transition-colors group cursor-pointer"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Official Business Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    flywybridge@gmail.com
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/flywybridge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 transition-colors group cursor-pointer"
              >
                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">LinkedIn Corporate Network</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    linkedin.com/company/flywybridge
                  </div>
                </div>
              </a>

              {/* Locations */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Regional & Global Presence</div>
                  <div className="text-xs font-semibold text-white">
                    Pakistan (Lahore · Karachi) · Global (London · Berlin · Amsterdam)
                  </div>
                </div>
              </div>

              {/* SLA Response */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Executive Response SLA: within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0C1B30] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-1">
              Direct Solution Inquiry
            </h3>
            <p className="text-xs text-slate-300 mb-5">
              Submit your inquiry to receive a detailed pilot proposal and equipment availability timeline.
            </p>

            {successMsg ? (
              <div className="p-5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <div className="font-bold text-white mb-0.5">Inquiry Dispatched Successfully</div>
                  <p>{successMsg}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rafay Mahar"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Retailer / Firm Name
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Khaadi, Outfitters, or Tech Provider"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Solution Focus
                    </label>
                    <select
                      value={solutionInterest}
                      onChange={(e) => setSolutionInterest(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="AI Smart Mirrors">AI Smart Mirrors</option>
                      <option value="Virtual Fitting Rooms">Virtual Fitting Rooms</option>
                      <option value="Automated Retail Analytics">Automated Retail Analytics</option>
                      <option value="Comprehensive Retail AI Suite">Comprehensive Retail AI Suite</option>
                      <option value="European Vendor Distribution">European Vendor Distribution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message / Pilot Scope
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your store count, merchandise lines, or target deployment timeline..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-[#008DDA] hover:from-cyan-300 hover:to-sky-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Direct Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Quiet Corporate Footer Bottom Bar */}
        <div className="pt-8 border-t border-cyan-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">FlyWy Bridge</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Connecting Global Retail Tech to Emerging Markets</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-cyan-400 transition-colors whitespace-nowrap">Home</a>
            <a href="#solutions" className="hover:text-cyan-400 transition-colors whitespace-nowrap">Solutions</a>
            <a href="#partners" className="hover:text-cyan-400 transition-colors whitespace-nowrap">Technology Partners</a>
            <a href="#brands" className="hover:text-cyan-400 transition-colors whitespace-nowrap">For Brands</a>
          </div>

          <div className="text-slate-500 text-[11px] font-mono">
            &copy; {new Date().getFullYear()} FlyWy Bridge. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
