import Hero from '@/components/Hero';
import OwnerStorySakuma from '@/components/OwnerStorySakuma';
import WomensEmpowermentSakuma from '@/components/WomensEmpowermentSakuma';
import PricingPlansSakuma from '@/components/PricingPlansSakuma';
import CustomerVoicesSakuma from '@/components/CustomerVoicesSakuma';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FixedFooterButtons from '@/components/FixedFooterButtons';

/**
 * Home Page - FLATUPGYM
 * 
 * Design Philosophy: Empathetic Dynamism
 * - Overwhelming visual impact
 * - Emotional storytelling
 * - Trust-building through social proof
 * - Clear, accessible CTAs throughout
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Fixed Footer Buttons */}
      <FixedFooterButtons />

      {/* Main Content */}
      <main>
        <Hero />
        <OwnerStorySakuma />
        <WomensEmpowermentSakuma />
        <PricingPlansSakuma />
        <CustomerVoicesSakuma />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
