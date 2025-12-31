import Hero from '@/components/Hero';
import OwnerStory from '@/components/OwnerStory';
import WomensEmpowerment from '@/components/WomensEmpowerment';
import PricingPlans from '@/components/PricingPlans';
import CustomerVoices from '@/components/CustomerVoices';
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
        <OwnerStory />
        <WomensEmpowerment />
        <PricingPlans />
        <CustomerVoices />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
