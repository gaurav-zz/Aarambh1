import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('technical');

  const skillsData = {
    technical: {
      title: "Technical Expertise",
      icon: "Wrench",
      skills: [
        { name: "Propulsion Systems", level: 95, members: 8, color: "bg-red-500" },
        { name: "Structural Design", level: 90, members: 6, color: "bg-blue-500" },
        { name: "Avionics & Control", level: 88, members: 5, color: "bg-green-500" },
        { name: "Recovery Systems", level: 92, members: 4, color: "bg-yellow-500" },
        { name: "Materials Science", level: 85, members: 7, color: "bg-purple-500" },
        { name: "Aerodynamics", level: 87, members: 6, color: "bg-indigo-500" },
        { name: "Manufacturing", level: 83, members: 9, color: "bg-pink-500" },
        { name: "Testing & Validation", level: 91, members: 8, color: "bg-orange-500" }
      ]
    },
    software: {
      title: "Software & Analytics",
      icon: "Code",
      skills: [
        { name: "Flight Software", level: 89, members: 4, color: "bg-cyan-500" },
        { name: "Data Analysis", level: 92, members: 5, color: "bg-teal-500" },
        { name: "Simulation & Modeling", level: 86, members: 6, color: "bg-emerald-500" },
        { name: "Machine Learning", level: 78, members: 3, color: "bg-lime-500" },
        { name: "Embedded Systems", level: 84, members: 4, color: "bg-amber-500" },
        { name: "CAD/CAE Software", level: 94, members: 12, color: "bg-rose-500" },
        { name: "Version Control", level: 88, members: 15, color: "bg-violet-500" },
        { name: "Database Management", level: 81, members: 3, color: "bg-fuchsia-500" }
      ]
    },
    leadership: {
      title: "Leadership & Management",
      icon: "Users",
      skills: [
        { name: "Project Management", level: 93, members: 6, color: "bg-slate-500" },
        { name: "Team Leadership", level: 90, members: 8, color: "bg-gray-500" },
        { name: "Risk Management", level: 87, members: 5, color: "bg-zinc-500" },
        { name: "Strategic Planning", level: 85, members: 4, color: "bg-neutral-500" },
        { name: "Communication", level: 91, members: 12, color: "bg-stone-500" },
        { name: "Mentoring", level: 88, members: 7, color: "bg-red-600" },
        { name: "Stakeholder Management", level: 82, members: 3, color: "bg-blue-600" },
        { name: "Budget Management", level: 79, members: 4, color: "bg-green-600" }
      ]
    },
    specialized: {
      title: "Specialized Skills",
      icon: "Star",
      skills: [
        { name: "Safety Protocols", level: 98, members: 6, color: "bg-yellow-600" },
        { name: "Regulatory Compliance", level: 89, members: 4, color: "bg-purple-600" },
        { name: "Technical Writing", level: 86, members: 8, color: "bg-indigo-600" },
        { name: "Public Speaking", level: 84, members: 5, color: "bg-pink-600" },
        { name: "Grant Writing", level: 81, members: 3, color: "bg-orange-600" },
        { name: "Media Relations", level: 83, members: 4, color: "bg-cyan-600" },
        { name: "Event Management", level: 87, members: 6, color: "bg-teal-600" },
        { name: "Partnership Development", level: 85, members: 3, color: "bg-emerald-600" }
      ]
    }
  };

  const categories = Object.keys(skillsData);

  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Developing";
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return "text-green-600";
    if (level >= 80) return "text-blue-600";
    if (level >= 70) return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Icon name="BarChart3" size={16} />
            <span className="text-sm font-medium uppercase tracking-technical">Skills Analysis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Expertise Matrix
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our comprehensive skill assessment demonstrates the depth and breadth of expertise 
            across all mission-critical areas
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 aerospace-transition ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-mission'
                  : 'bg-card text-text-secondary hover:text-primary hover:bg-muted border border-border'
              }`}
            >
              <Icon name={skillsData?.[category]?.icon} size={18} />
              <span>{skillsData?.[category]?.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData?.[selectedCategory]?.skills?.map((skill, index) => (
            <div key={index} className="dashboard-card p-6 hover:shadow-elevation transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${skill?.color}`}></div>
                  <h3 className="text-lg font-semibold text-text-primary">{skill?.name}</h3>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${getSkillLevelColor(skill?.level)}`}>
                    {getSkillLevelText(skill?.level)}
                  </div>
                  <div className="text-xs text-text-secondary">{skill?.level}%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${skill?.color}`}
                    style={{ width: `${skill?.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Team Members */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="Users" size={14} />
                  <span>{skill?.members} team members</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(Math.min(skill?.members, 5))]?.map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-muted rounded-full border-2 border-background -ml-1"></div>
                  ))}
                  {skill?.members > 5 && (
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full border-2 border-background -ml-1 flex items-center justify-center text-xs font-medium">
                      +{skill?.members - 5}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="dashboard-card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">24</div>
            <div className="text-sm text-text-secondary uppercase tracking-technical">Total Members</div>
          </div>
          <div className="dashboard-card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">32</div>
            <div className="text-sm text-text-secondary uppercase tracking-technical">Core Skills</div>
          </div>
          <div className="dashboard-card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">87%</div>
            <div className="text-sm text-text-secondary uppercase tracking-technical">Avg Proficiency</div>
          </div>
          <div className="dashboard-card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">15</div>
            <div className="text-sm text-text-secondary uppercase tracking-technical">Expert Level</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;