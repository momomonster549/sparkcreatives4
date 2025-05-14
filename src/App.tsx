import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import MissionSection from './components/home/MissionSection';
import ImpactSection from './components/home/ImpactSection';
import DonationProcess from './components/home/DonationProcess';
import TestimonialsSection from './components/home/TestimonialsSection';
import CallToAction from './components/home/CallToAction';
import NewsletterSection from './components/home/NewsletterSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MissionSection />
        <ImpactSection />
        <DonationProcess />
        <TestimonialsSection />
        <CallToAction />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
