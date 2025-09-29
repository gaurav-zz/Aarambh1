import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [missionStatus, setMissionStatus] = useState('active');

  const heroSlides = [
    {
      id: 1,
      title: "Next Generation Aerospace Innovation",
      subtitle: "Where Engineering Theory Becomes Reality",
      description: "Pushing the boundaries of student rocketry through cutting-edge design, rigorous testing, and competitive excellence.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=800&fit=crop",
      cta: "View Current Mission",
      ctaLink: "/rocket-arsenal"
    },
    {
      id: 2,
      title: "Competition Champions",
      subtitle: "Proven Excellence in Aerospace Engineering",
      description: "Multiple championship titles and technical innovation awards demonstrate our commitment to engineering excellence.",
      image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?w=1200&h=800&fit=crop",
      cta: "See Achievements",
      ctaLink: "/rocket-arsenal"
    },
    {
      id: 3,
      title: "Building Tomorrow\'s Aerospace Leaders",
      subtitle: "Student Innovation Meets Industry Standards",
      description: "Our team members go on to lead at SpaceX, NASA, Blue Origin, and other aerospace industry pioneers.",
      image: "https://images.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg?w=1200&h=800&fit=crop",
      cta: "Meet Our Team",
      ctaLink: "/team-command-center"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [heroSlides?.length]);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      const statuses = ['active', 'standby', 'critical'];
      setMissionStatus(statuses?.[Math.floor(Math.random() * statuses?.length)]);
    }, 8000);

    return () => clearInterval(statusInterval);
  }, []);

  const getMissionStatusColor = () => {
    switch (missionStatus) {
      case 'active': return 'text-green-400';
      case 'standby': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-green-400';
    }
  };

  const getMissionStatusBg = () => {
    switch (missionStatus) {
      case 'active': return 'bg-green-500/20 border-green-500/30';
      case 'standby': return 'bg-yellow-500/20 border-yellow-500/30';
      case 'critical': return 'bg-red-500/20 border-red-500/30';
      default: return 'bg-green-500/20 border-green-500/30';
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length);
  };

  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroSlides?.[currentSlide]?.image}
          alt={heroSlides?.[currentSlide]?.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-transparent"></div>
      </div>
      {/* Mission Grid Overlay */}
      <div className="absolute inset-0 mission-grid opacity-20"></div>
      {/* Mission Status Bar */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between p-6">
          <div className={`flex items-center space-x-3 px-4 py-2 rounded-lg border backdrop-blur-sm ${getMissionStatusBg()}`}>
            <div className={`w-3 h-3 rounded-full ${getMissionStatusColor()} animate-pulse`}></div>
            <span className="text-white font-mono text-sm uppercase tracking-wide">
              Mission Status: <span className={getMissionStatusColor()}>{missionStatus}</span>
            </span>
          </div>
          
          <div className="text-white font-mono text-sm">
            <span className="opacity-70">Current Time:</span> {new Date()?.toLocaleTimeString()}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Icon name="Rocket" size={24} color="white" className="transform rotate-45" />
                  </div>
                  <div>
                    <h3 className="text-orange-400 font-semibold text-lg">RocketryXyz</h3>
                    <p className="text-slate-300 text-sm">Student Aerospace Excellence</p>
                  </div>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {heroSlides?.[currentSlide]?.title}
                </h1>
                
                <h2 className="text-2xl lg:text-3xl font-semibold text-blue-300">
                  {heroSlides?.[currentSlide]?.subtitle}
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  {heroSlides?.[currentSlide]?.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={heroSlides?.[currentSlide]?.ctaLink}>
                  <Button 
                    variant="default" 
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold"
                  >
                    {heroSlides?.[currentSlide]?.cta}
                  </Button>
                </Link>
                
                <Link to="/partnership-launchpad">
                  <Button 
                    variant="outline" 
                    size="lg"
                    iconName="Handshake"
                    iconPosition="left"
                    className="border-blue-400 text-blue-300 hover:bg-blue-400/10 px-8 py-4 text-lg font-semibold"
                  >
                    Partner With Us
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">15+</div>
                  <div className="text-slate-400 text-sm">Successful Launches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">3</div>
                  <div className="text-slate-400 text-sm">Championship Titles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">25</div>
                  <div className="text-slate-400 text-sm">Team Members</div>
                </div>
              </div>
            </div>

            {/* Right Content - Mission Control Panel */}
            <div className="hidden lg:block">
              <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Mission Control</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-green-400 text-2xl font-mono">98.7%</div>
                      <div className="text-slate-300 text-sm">Mission Success Rate</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-blue-400 text-2xl font-mono">2.1km</div>
                      <div className="text-slate-300 text-sm">Max Altitude</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-orange-400 text-2xl font-mono">Mach 1.2</div>
                      <div className="text-slate-300 text-sm">Peak Velocity</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-purple-400 text-2xl font-mono">Active</div>
                      <div className="text-slate-300 text-sm">Current Status</div>
                    </div>
                  </div>

                  <div className="border-t border-slate-600 pt-4">
                    <div className="text-slate-300 text-sm mb-2">System Health</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Propulsion</span>
                        <div className="w-24 h-2 bg-slate-600 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-green-400"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Navigation</span>
                        <div className="w-24 h-2 bg-slate-600 rounded-full overflow-hidden">
                          <div className="w-5/6 h-full bg-yellow-400"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Recovery</span>
                        <div className="w-24 h-2 bg-slate-600 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-green-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-slate-700/50 transition-colors duration-200"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <div className="flex space-x-2">
            {heroSlides?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-slate-700/50 transition-colors duration-200"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-mono">Scroll</span>
          <div className="w-px h-8 bg-white/30"></div>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;