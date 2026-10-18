import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { SolutionsShowcase } from './components/SolutionsShowcase.tsx';
import { SolutionSimulators } from './components/SolutionSimulators.tsx';
import { BridgingModelSection } from './components/BridgingModelSection.tsx';
import { AiStrategicAdvisor } from './components/AiStrategicAdvisor.tsx';
import { RoiCalculator } from './components/RoiCalculator.tsx';
import { PartnersAndBrands } from './components/PartnersAndBrands.tsx';
import { InquiryModal } from './components/InquiryModal.tsx';
import { ContactFooter } from './components/ContactFooter.tsx';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedSolutionForInquiry, setSelectedSolutionForInquiry] = useState<string | undefined>(undefined);
  const [selectedPartnerType, setSelectedPartnerType] = useState<'retailer' | 'tech_vendor'>('retailer');

  const [activeSimulator, setActiveSimulator] = useState<'smart_mirror' | 'virtual_fitting' | 'retail_analytics' | null>(null);

  const handleOpenInquiry = (solutionName?: string, partnerType: 'retailer' | 'tech_vendor' = 'retailer') => {
    setSelectedSolutionForInquiry(solutionName);
    setSelectedPartnerType(partnerType);
    setInquiryModalOpen(true);
  };

  const handleOpenSimulator = (type: 'smart_mirror' | 'virtual_fitting' | 'retail_analytics') => {
    setActiveSimulator(type);
  };

  const handleScrollToSolutions = () => {
    const el = document.getElementById('solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAdvisor = () => {
    const el = document.getElementById('advisor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#008DDA] selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onExploreSolutions={handleScrollToSolutions}
          onOpenInquiry={handleOpenInquiry}
          onOpenAdvisor={handleScrollToAdvisor}
        />

        {/* 3. Featured Solutions Showcase (Core Section) */}
        <SolutionsShowcase
          onOpenSimulator={handleOpenSimulator}
          onOpenInquiry={(sol) => handleOpenInquiry(sol, 'retailer')}
        />

        {/* 4. Value Proposition / How We Bridge */}
        <BridgingModelSection onOpenInquiry={handleOpenInquiry} />

        {/* 5. AI Retail Readiness & ROI Strategic Advisor (Gemini-4-argon Thinking Engine) */}
        <AiStrategicAdvisor onOpenInquiry={(sol) => handleOpenInquiry(sol, 'retailer')} />

        {/* 6. Interactive ROI Modeler */}
        <RoiCalculator onOpenInquiry={(sol) => handleOpenInquiry(sol, 'retailer')} />

        {/* 7. Technology Partners & For Brands Portals */}
        <PartnersAndBrands onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* 8. Contact & Footer Section */}
      <ContactFooter onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Simulator Modal */}
      {activeSimulator && (
        <SolutionSimulators
          solutionType={activeSimulator}
          onClose={() => setActiveSimulator(null)}
          onInquire={(sol) => {
            setActiveSimulator(null);
            handleOpenInquiry(sol, 'retailer');
          }}
        />
      )}

      {/* Direct Inquiry Registration Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultSolution={selectedSolutionForInquiry}
        defaultPartnerType={selectedPartnerType}
      />
    </div>
  );
}
