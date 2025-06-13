import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
    </div>
  );
};

export default HomePage;
