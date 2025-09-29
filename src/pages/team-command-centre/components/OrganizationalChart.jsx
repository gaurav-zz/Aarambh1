import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const OrganizationalChart = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const organizationData = {
    leadership: {
      title: "Mission Leadership",
      members: [
        {
          id: 1,
          name: "Sarah Chen",
          role: "Mission Commander",
          department: "Aerospace Engineering",
          year: "Senior",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
          specialization: "Systems Integration & Leadership",
          experience: "3 years rocketry, NASA internship",
          achievements: ["Led 5 successful launches", "AIAA Student Leader Award"]
        },
        {
          id: 2,
          name: "Marcus Rodriguez",
          role: "Technical Director",
          department: "Mechanical Engineering",
          year: "Senior",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
          specialization: "Propulsion & Structural Design",
          experience: "4 years rocketry, SpaceX internship",
          achievements: ["Designed award-winning engine", "Published research paper"]
        }
      ]
    },
    engineering: {
      title: "Engineering Teams",
      teams: [
        {
          name: "Propulsion Systems",
          lead: "Alex Thompson",
          members: 6,
          icon: "Zap",
          color: "bg-red-100 text-red-800 border-red-200"
        },
        {
          name: "Structures & Materials",
          lead: "Emma Wilson",
          members: 5,
          icon: "Wrench",
          color: "bg-blue-100 text-blue-800 border-blue-200"
        },
        {
          name: "Avionics & Control",
          lead: "David Kim",
          members: 4,
          icon: "Cpu",
          color: "bg-green-100 text-green-800 border-green-200"
        },
        {
          name: "Recovery Systems",
          lead: "Lisa Park",
          members: 3,
          icon: "Parachute",
          color: "bg-purple-100 text-purple-800 border-purple-200"
        }
      ]
    },
    operations: {
      title: "Mission Operations",
      teams: [
        {
          name: "Safety & Testing",
          lead: "Ryan Foster",
          members: 4,
          icon: "Shield",
          color: "bg-yellow-100 text-yellow-800 border-yellow-200"
        },
        {
          name: "Data & Analytics",
          lead: "Priya Patel",
          members: 3,
          icon: "BarChart3",
          color: "bg-indigo-100 text-indigo-800 border-indigo-200"
        },
        {
          name: "Outreach & Media",
          lead: "Jordan Lee",
          members: 4,
          icon: "Megaphone",
          color: "bg-pink-100 text-pink-800 border-pink-200"
        }
      ]
    }
  };

  const handleRoleClick = (role) => {
    setSelectedRole(selectedRole === role ? null : role);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Icon name="Sitemap" size={16} />
            <span className="text-sm font-medium uppercase tracking-technical">Organization</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Command Structure
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our mission-critical organization ensures every launch is executed with precision, 
            safety, and technical excellence
          </p>
        </div>

        {/* Leadership Level */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            {organizationData?.leadership?.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {organizationData?.leadership?.members?.map((member) => (
              <div key={member?.id} className="dashboard-card p-6 hover:shadow-elevation transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Image
                      src={member?.image}
                      alt={member?.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Star" size={12} color="white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-text-primary">{member?.name}</h4>
                    <p className="text-primary font-semibold">{member?.role}</p>
                    <p className="text-sm text-text-secondary">{member?.department} • {member?.year}</p>
                    <p className="text-sm text-text-secondary mt-2">{member?.specialization}</p>
                    <div className="mt-3">
                      <p className="text-xs text-text-secondary">{member?.experience}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {member?.achievements?.map((achievement, index) => (
                          <span key={index} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Teams */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            {organizationData?.engineering?.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationData?.engineering?.teams?.map((team, index) => (
              <div 
                key={index} 
                className="dashboard-card p-6 cursor-pointer hover:shadow-elevation transition-all duration-300 aerospace-transition"
                onClick={() => handleRoleClick(`engineering-${index}`)}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${team?.color} mb-4`}>
                    <Icon name={team?.icon} size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-2">{team?.name}</h4>
                  <p className="text-sm text-text-secondary mb-2">Lead: {team?.lead}</p>
                  <div className="flex items-center justify-center space-x-1 text-sm text-text-secondary">
                    <Icon name="Users" size={14} />
                    <span>{team?.members} members</span>
                  </div>
                </div>
                
                {selectedRole === `engineering-${index}` && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-text-secondary">
                      Specialized team focused on {team?.name?.toLowerCase()} development and optimization.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Operations Teams */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            {organizationData?.operations?.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {organizationData?.operations?.teams?.map((team, index) => (
              <div 
                key={index} 
                className="dashboard-card p-6 cursor-pointer hover:shadow-elevation transition-all duration-300 aerospace-transition"
                onClick={() => handleRoleClick(`operations-${index}`)}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${team?.color} mb-4`}>
                    <Icon name={team?.icon} size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-2">{team?.name}</h4>
                  <p className="text-sm text-text-secondary mb-2">Lead: {team?.lead}</p>
                  <div className="flex items-center justify-center space-x-1 text-sm text-text-secondary">
                    <Icon name="Users" size={14} />
                    <span>{team?.members} members</span>
                  </div>
                </div>
                
                {selectedRole === `operations-${index}` && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-text-secondary">
                      Critical operations team ensuring mission success through {team?.name?.toLowerCase()}.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalChart;