import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedRockets = () => {
  const [activeRocket, setActiveRocket] = useState(0);

  const rockets = [
    {
      id: 1,
      name: "Phoenix-VII",
      status: "Active Development",
      category: "High-Power Competition",
      description: "Our flagship competition rocket featuring advanced dual-deploy recovery system and custom avionics package for precision altitude targeting.",
      specifications: {
        height: "3.2m",
        diameter: "15.2cm",
        weight: "18.5kg",
        motor: "L1395-T",
        altitude: "2,100m"
      },
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
      achievements: [
        "1st Place - Regional Championship 2023",
        "Technical Innovation Award",
        "Highest Altitude Record"
      ],
      nextMission: "March 15, 2024"
    },
    {
      id: 2,
      name: "Falcon-III",
      status: "Flight Ready",
      category: "Research & Development",
      description: "Experimental platform for testing new propulsion concepts and advanced materials in high-stress aerospace environments.",
      specifications: {
        height: "2.8m",
        diameter: "12.7cm",
        weight: "14.2kg",
        motor: "K550W",
        altitude: "1,650m"
      },
      image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?w=800&h=600&fit=crop",
      achievements: [
        "Perfect Recovery Rate",
        "Materials Testing Success",
        "Telemetry Innovation"
      ],
      nextMission: "April 8, 2024"
    },
    {
      id: 3,
      name: "Eagle-V",
      status: "Mission Complete",
      category: "Educational Outreach",
      description: "Student-built demonstration rocket designed for educational programs and community outreach initiatives.",
      specifications: {
        height: "1.9m",
        diameter: "10.2cm",
        weight: "8.7kg",
        motor: "H128W",
        altitude: "850m"
      },
      image: "https://images.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg?w=800&h=600&fit=crop",
      achievements: [
        "50+ Educational Demonstrations",
        "Community Impact Award",
        "STEM Inspiration Recognition"
      ],
      nextMission: "Retired - Museum Display"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active Development': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'Flight Ready': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Mission Complete': return 'text-slate-400 bg-slate-500/20 border-slate-500/30';
      default: return 'text-slate-400 bg-slate-500/20 border-slate-500/30';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Icon name="Rocket" size={20} color="white" className="transform rotate-45" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Rocket Arsenal</h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Engineering excellence through innovative design, rigorous testing, and competitive performance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rocket Cards */}
          <div className="lg:col-span-2 space-y-6">
            {rockets?.map((rocket, index) => (
              <div
                key={rocket?.id}
                className={`bg-slate-800/50 backdrop-blur-lg border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  activeRocket === index 
                    ? 'border-orange-500/50 shadow-2xl shadow-orange-500/10' 
                    : 'border-slate-600 hover:border-slate-500'
                }`}
                onClick={() => setActiveRocket(index)}
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  {/* Rocket Image */}
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden bg-slate-700">
                      <Image
                        src={rocket?.image}
                        alt={rocket?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(rocket?.status)}`}>
                      {rocket?.status}
                    </div>
                  </div>

                  {/* Rocket Info */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{rocket?.name}</h3>
                        <span className="text-orange-400 text-sm font-semibold px-2 py-1 bg-orange-500/20 rounded">
                          {rocket?.category}
                        </span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {rocket?.description}
                      </p>
                    </div>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-blue-400 font-mono text-lg font-bold">{rocket?.specifications?.height}</div>
                        <div className="text-slate-400 text-sm">Height</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-mono text-lg font-bold">{rocket?.specifications?.weight}</div>
                        <div className="text-slate-400 text-sm">Weight</div>
                      </div>
                      <div className="text-center">
                        <div className="text-orange-400 font-mono text-lg font-bold">{rocket?.specifications?.altitude}</div>
                        <div className="text-slate-400 text-sm">Max Altitude</div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2">
                      {rocket?.achievements?.slice(0, 2)?.map((achievement, idx) => (
                        <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full">
                          {achievement}
                        </span>
                      ))}
                      {rocket?.achievements?.length > 2 && (
                        <span className="text-xs bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full">
                          +{rocket?.achievements?.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed View */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-2xl p-6 sticky top-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {rockets?.[activeRocket]?.name} Details
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Complete technical specifications and mission data
                  </p>
                </div>

                {/* Detailed Specifications */}
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-white">Specifications</h5>
                  <div className="space-y-3">
                    {Object.entries(rockets?.[activeRocket]?.specifications)?.map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-slate-400 capitalize">{key?.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-white font-mono">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* All Achievements */}
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-white">Achievements</h5>
                  <div className="space-y-2">
                    {rockets?.[activeRocket]?.achievements?.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Award" size={16} className="text-orange-400" />
                        <span className="text-slate-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Mission */}
                <div className="pt-4 border-t border-slate-600">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={16} className="text-blue-400" />
                    <span className="text-white font-semibold">Next Mission</span>
                  </div>
                  <p className="text-slate-300">{rockets?.[activeRocket]?.nextMission}</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t border-slate-600">
                  <Link to="/rocket-arsenal">
                    <Button 
                      variant="default" 
                      fullWidth
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      View Full Details
                    </Button>
                  </Link>
                  <Link to="/engineering-vault">
                    <Button 
                      variant="outline" 
                      fullWidth
                      iconName="FileText"
                      iconPosition="left"
                      className="border-slate-500 text-slate-300 hover:bg-slate-700/50"
                    >
                      Technical Docs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/rocket-arsenal">
            <Button 
              variant="default" 
              size="lg"
              iconName="Rocket"
              iconPosition="left"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-4 text-lg font-semibold"
            >
              Explore Complete Arsenal
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRockets;