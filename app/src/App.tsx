import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Sections
import HeroSection from './sections/HeroSection';
import IntegrationsSection from './sections/IntegrationsSection';
import AutomationSection from './sections/AutomationSection';
import AnalyticsSection from './sections/AnalyticsSection';
import CollaborationSection from './sections/CollaborationSection';
import SecuritySection from './sections/SecuritySection';
import CustomizationSection from './sections/CustomizationSection';
import PerformanceSection from './sections/PerformanceSection';
import SupportSection from './sections/SupportSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Cleanup all ScrollTriggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-space-900 min-h-screen">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Pinned Sections with z-index stacking */}
        <HeroSection />
        <IntegrationsSection />
        <AutomationSection />
        <AnalyticsSection />
        <CollaborationSection />
        <SecuritySection />
        <CustomizationSection />
        <PerformanceSection />
        <SupportSection />

        {/* Flowing Sections */}
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
