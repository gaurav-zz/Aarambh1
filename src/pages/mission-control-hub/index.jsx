import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import FeaturedRockets from './components/FeaturedRockets';
import AchievementHighlights from './components/AchievementHighlights';
import QuickNavigation from './components/QuickNavigation';
import SocialProof from './components/SocialProof';

const MissionControlHub = () => {
  useEffect(() => {
    document.title = 'Mission Control Hub - RocketryXyz Portfolio';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Mission Status */}
      <HeroSection />
      
      {/* Live Countdown Timer */}
      <CountdownTimer />
      
      {/* Featured Rockets Showcase */}
      <FeaturedRockets />
      
      {/* Achievement Highlights */}
      <AchievementHighlights />
      
      {/* Quick Navigation Hub */}
      <QuickNavigation />
      
      {/* Social Proof & Industry Recognition */}
      <SocialProof />
    </div>
  );
};

export default MissionControlHub;