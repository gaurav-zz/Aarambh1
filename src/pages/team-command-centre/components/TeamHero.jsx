import React from 'react';
import Icon from '../../../components/AppIcon';


const TeamHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary/80 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 mission-grid opacity-20"></div>
      
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center space-y-8">
          {/* Mission Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <Icon name="Users" size={20} className="text-accent" />
            <span className="text-sm font-medium tracking-technical">TEAM COMMAND CENTER</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Meet the
              <span className="block text-accent countdown-glow">Aerospace Pioneers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Building tomorrow's aerospace leaders today through collaborative excellence, 
              technical innovation, and real-world engineering challenges
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">24</div>
              <div className="text-sm text-white/70 uppercase tracking-technical">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">8</div>
              <div className="text-sm text-white/70 uppercase tracking-technical">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">15</div>
              <div className="text-sm text-white/70 uppercase tracking-technical">Alumni Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">4</div>
              <div className="text-sm text-white/70 uppercase tracking-technical">Years Active</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 aerospace-transition">
              <Icon name="UserPlus" size={20} />
              <span>Join Our Team</span>
            </button>
            <button className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              <Icon name="Download" size={20} />
              <span>Team Portfolio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default TeamHero;