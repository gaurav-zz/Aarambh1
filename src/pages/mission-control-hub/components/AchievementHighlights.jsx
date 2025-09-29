import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AchievementHighlights = () => {
  const [activeCategory, setActiveCategory] = useState('competitions');

  const achievements = {
    competitions: [
      {
        id: 1,
        title: "IREC 2023 Champions",
        subtitle: "International Rocketry Engineering Competition",
        description: "First place overall in the 10,000ft COTS category with perfect flight performance and innovative recovery system design.",
        date: "June 2023",
        location: "Spaceport America, New Mexico",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
        metrics: {
          "Altitude Achieved": "3,048m",
          "Accuracy": "±2.1m",
          "Recovery Success": "100%",
          "Team Ranking": "#1/127"
        },
        icon: "Trophy",
        color: "text-yellow-400"
      },
      {
        id: 2,
        title: "NASA USLI Finalists",
        subtitle: "University Student Launch Initiative",
        description: "Selected as one of 44 teams nationwide for the prestigious NASA University Student Launch Initiative program.",
        date: "April 2023",
        location: "Huntsville, Alabama",
        image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?w=600&h=400&fit=crop",
        metrics: {
          "Flight Score": "98.7/100",
          "Technical Report": "95/100",
          "Presentation": "97/100",
          "Overall Rank": "#8/44"
        },
        icon: "Rocket",
        color: "text-blue-400"
      }
    ],
    technical: [
      {
        id: 3,
        title: "Custom Avionics Development",
        subtitle: "In-House Flight Computer Design",
        description: "Developed proprietary dual-redundant flight computer with advanced sensor fusion and real-time telemetry capabilities.",
        date: "Ongoing",
        location: "University Lab",
        image: "https://images.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg?w=600&h=400&fit=crop",
        metrics: {
          "Processing Power": "ARM Cortex-M7",
          "Sensor Count": "12 sensors",
          "Data Rate": "100Hz",
          "Reliability": "99.8%"
        },
        icon: "Cpu",
        color: "text-green-400"
      },
      {
        id: 4,
        title: "Advanced Materials Research",
        subtitle: "Carbon Fiber Composite Innovation",
        description: "Pioneered new carbon fiber layup techniques resulting in 30% weight reduction while maintaining structural integrity.",
        date: "February 2023",
        location: "Materials Lab",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        metrics: {
          "Weight Reduction": "30%",
          "Strength Increase": "15%",
          "Cost Savings": "25%",
          "Manufacturing Time": "-40%"
        },
        icon: "Layers",
        color: "text-purple-400"
      }
    ],
    outreach: [
      {
        id: 5,
        title: "STEM Education Impact",
        subtitle: "Community Outreach Program",
        description: "Reached over 2,000 students through rocket demonstrations, workshops, and mentorship programs across 15 schools.",
        date: "2023 Academic Year",
        location: "Regional Schools",
        image: "https://images.pexels.com/photos/8500/food-dinner-lunch-unhealthy.jpg?w=600&h=400&fit=crop",
        metrics: {
          "Students Reached": "2,000+",
          "Schools Visited": "15",
          "Workshops Conducted": "32",
          "Mentees": "45"
        },
        icon: "Users",
        color: "text-orange-400"
      },
      {
        id: 6,
        title: "Open Source Contributions",
        subtitle: "Knowledge Sharing Initiative",
        description: "Published comprehensive design documentation and software tools, contributing to the global student rocketry community.",
        date: "Ongoing",
        location: "GitHub Repository",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        metrics: {
          "GitHub Stars": "1,200+",
          "Downloads": "5,000+",
          "Contributors": "25",
          "Documentation Pages": "150+"
        },
        icon: "Code",
        color: "text-cyan-400"
      }
    ]
  };

  const categories = [
    { key: 'competitions', label: 'Competition Victories', icon: 'Trophy' },
    { key: 'technical', label: 'Technical Innovation', icon: 'Cog' },
    { key: 'outreach', label: 'Community Impact', icon: 'Heart' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Icon name="Award" size={20} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Achievement Highlights</h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Celebrating excellence in competition, innovation, and community impact
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.key}
              onClick={() => setActiveCategory(category?.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeCategory === category?.key
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.label}</span>
            </button>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements?.[activeCategory]?.map((achievement) => (
            <div
              key={achievement?.id}
              className="bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={achievement?.image}
                  alt={achievement?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-slate-900/50 backdrop-blur-sm ${achievement?.color}`}>
                    <Icon name={achievement?.icon} size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-slate-900/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                    {achievement?.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievement?.title}
                  </h3>
                  <p className="text-orange-400 font-semibold mb-3">
                    {achievement?.subtitle}
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    {achievement?.description}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 text-slate-400">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">{achievement?.location}</span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(achievement?.metrics)?.map(([key, value]) => (
                    <div key={key} className="bg-slate-700/30 rounded-lg p-3 text-center">
                      <div className="text-white font-bold text-lg font-mono">
                        {value}
                      </div>
                      <div className="text-slate-400 text-xs uppercase tracking-wide">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg border border-slate-600 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Team Excellence by the Numbers</h3>
            <p className="text-slate-300">Quantifying our impact across all mission areas</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Competition Wins', value: '12', icon: 'Trophy', color: 'text-yellow-400' },
              { label: 'Successful Launches', value: '47', icon: 'Rocket', color: 'text-blue-400' },
              { label: 'Students Mentored', value: '200+', icon: 'Users', color: 'text-green-400' },
              { label: 'Technical Papers', value: '8', icon: 'FileText', color: 'text-purple-400' }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-slate-700/50 ${stat?.color}`}>
                  <Icon name={stat?.icon} size={28} />
                </div>
                <div className={`text-4xl font-bold font-mono mb-2 ${stat?.color}`}>
                  {stat?.value}
                </div>
                <div className="text-slate-400 text-sm font-semibold">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Ready to Join Our Mission?</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Be part of the next generation of aerospace innovators. Explore partnership opportunities or join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/team-command-center">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                  className="bg-orange-600 hover:bg-orange-700 px-8 py-4 text-lg font-semibold"
                >
                  Join Our Team
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementHighlights;