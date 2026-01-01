import Hero from '@/components/Hero';
import OwnerStorySakuma from '@/components/OwnerStorySakuma';
import WomensEmpowermentSakumaV2 from '@/components/WomensEmpowermentSakumaV2';
import GallerySakuma from '@/components/GallerySakuma';
import PricingPlansV2 from '@/components/PricingPlansV2';
import ClassScheduleSakuma from '@/components/ClassScheduleSakuma';
import TrialReservationFlow from '@/components/TrialReservationFlow';
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
        <WomensEmpowermentSakumaV2 />
        <GallerySakuma />
        <PricingPlansV2 />
        <ClassScheduleSakuma />
        <TrialReservationFlow />
        <CustomerVoicesSakuma />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
