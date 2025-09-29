import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamEvolution = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const evolutionData = {
    2021: {
      title: "Foundation Year",
      members: 8,
      achievements: ["Team Formation", "First Rocket Design", "Safety Certification"],
      highlights: "Established core team structure and safety protocols",
      image: "https://images.pexels.com/photos/73873/rocket-launch-rocket-take-off-nasa-73873.jpeg?w=600&h=400&fit=crop",
      keyMilestones: [
        { event: "Team Founded", date: "September 2021", icon: "Rocket" },
        { event: "First Meeting", date: "October 2021", icon: "Users" },
        { event: "Safety Training", date: "November 2021", icon: "Shield" },
        { event: "Initial Design", date: "December 2021", icon: "FileText" }
      ]
    },
    2022: {
      title: "Growth Phase",
      members: 15,
      achievements: ["First Launch", "Competition Entry", "Sponsor Partnerships"],
      highlights: "Successful first launch and competition participation",
      image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?w=600&h=400&fit=crop",
      keyMilestones: [
        { event: "Team Expansion", date: "January 2022", icon: "UserPlus" },
        { event: "First Launch", date: "April 2022", icon: "Rocket" },
        { event: "Competition Debut", date: "June 2022", icon: "Trophy" },
        { event: "First Sponsors", date: "August 2022", icon: "Handshake" }
      ]
    },
    2023: {
      title: "Excellence Era",
      members: 20,
      achievements: ["Regional Champions", "Technical Innovation", "Media Recognition"],
      highlights: "Breakthrough year with championship victory and innovation awards",
      image: "https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?w=600&h=400&fit=crop",
      keyMilestones: [
        { event: "New Leadership", date: "January 2023", icon: "Crown" },
        { event: "Innovation Award", date: "March 2023", icon: "Award" },
        { event: "Regional Victory", date: "May 2023", icon: "Trophy" },
        { event: "Media Coverage", date: "July 2023", icon: "Camera" }
      ]
    },
    2024: {
      title: "Current Mission",
      members: 24,
      achievements: ["National Competition", "Industry Partnerships", "Research Publications"],
      highlights: "Leading student rocketry with cutting-edge research and industry collaboration",
      image: "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?w=600&h=400&fit=crop",
      keyMilestones: [
        { event: "National Qualification", date: "February 2024", icon: "Target" },
        { event: "Industry Partnership", date: "April 2024", icon: "Building" },
        { event: "Research Publication", date: "June 2024", icon: "BookOpen" },
        { event: "Current Season", date: "September 2024", icon: "Calendar" }
      ]
    }
  };

  const years = Object.keys(evolutionData)?.map(Number)?.sort();
  const currentData = evolutionData?.[selectedYear];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Icon name="TrendingUp" size={16} />
            <span className="text-sm font-medium uppercase tracking-technical">Evolution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Team Journey
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From humble beginnings to aerospace excellence - witness our transformation 
            into a leading student rocketry team
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-card rounded-lg p-2 border border-border">
            {years?.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedYear === year
                    ? 'bg-primary text-primary-foreground shadow-mission'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Year Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Year Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{selectedYear}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-text-primary">{currentData?.title}</h3>
                  <p className="text-text-secondary">{currentData?.members} Team Members</p>
                </div>
              </div>
              <p className="text-lg text-text-secondary">{currentData?.highlights}</p>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-xl font-bold text-text-primary mb-4">Key Achievements</h4>
              <div className="grid gap-3">
                {currentData?.achievements?.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-text-primary font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div>
              <h4 className="text-xl font-bold text-text-primary mb-4">Major Milestones</h4>
              <div className="space-y-4">
                {currentData?.keyMilestones?.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-200">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={milestone?.icon} size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-text-primary">{milestone?.event}</h5>
                      <p className="text-sm text-text-secondary">{milestone?.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Year Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevation">
              <Image
                src={currentData?.image}
                alt={`${selectedYear} - ${currentData?.title}`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="text-white font-bold text-lg mb-2">{currentData?.title}</h4>
                  <p className="text-white/80 text-sm">{currentData?.highlights}</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-accent text-white rounded-full w-20 h-20 flex items-center justify-center shadow-elevation">
              <div className="text-center">
                <div className="text-2xl font-bold">{currentData?.members}</div>
                <div className="text-xs">Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Timeline */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-border"></div>
            <div className="flex justify-between relative">
              {years?.map((year, index) => (
                <div key={year} className="flex flex-col items-center">
                  <button
                    onClick={() => setSelectedYear(year)}
                    className={`w-12 h-12 rounded-full border-4 transition-all duration-200 ${
                      selectedYear === year
                        ? 'bg-primary border-primary text-primary-foreground shadow-mission'
                        : year <= selectedYear
                        ? 'bg-accent border-accent text-white' :'bg-background border-border text-text-secondary'
                    }`}
                  >
                    <span className="font-bold text-sm">{year?.toString()?.slice(-2)}</span>
                  </button>
                  <div className="mt-3 text-center">
                    <div className="text-sm font-medium text-text-primary">{year}</div>
                    <div className="text-xs text-text-secondary">{evolutionData?.[year]?.members} members</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamEvolution;