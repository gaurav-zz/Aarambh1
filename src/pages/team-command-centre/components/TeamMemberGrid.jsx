import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamMemberGrid = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filterSpecialization, setFilterSpecialization] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Mission Commander",
      specialization: "Leadership",
      department: "Aerospace Engineering",
      year: "Senior",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      skills: ["Systems Integration", "Project Management", "Mission Planning"],
      experience: "3 years rocketry experience with NASA internship",
      achievements: ["Led 5 successful launches", "AIAA Student Leader Award", "Dean\'s List"],
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        github: "https://github.com/sarahchen"
      },
      bio: `Sarah leads our mission operations with exceptional technical expertise and leadership skills. 
      Her experience includes successful management of complex aerospace projects and team coordination.`
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Technical Director",
      specialization: "Propulsion",
      department: "Mechanical Engineering",
      year: "Senior",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["Engine Design", "Thermodynamics", "CFD Analysis"],
      experience: "4 years rocketry with SpaceX internship",
      achievements: ["Designed award-winning engine", "Published research paper", "Patent pending"],
      social: {
        linkedin: "https://linkedin.com/in/marcusrodriguez",
        github: "https://github.com/marcusrodriguez"
      },
      bio: `Marcus specializes in propulsion systems design and has contributed to breakthrough 
      innovations in student rocketry propulsion technology.`
    },
    {
      id: 3,
      name: "Alex Thompson",
      role: "Propulsion Lead",
      specialization: "Propulsion",
      department: "Aerospace Engineering",
      year: "Junior",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["Solid Propellants", "Combustion Analysis", "Safety Protocols"],
      experience: "2 years rocketry, Blue Origin internship",
      achievements: ["Safety Excellence Award", "Innovation Challenge Winner"],
      social: {
        linkedin: "https://linkedin.com/in/alexthompson",
        github: "https://github.com/alexthompson"
      },
      bio: `Alex leads our propulsion team with focus on safety and performance optimization. 
      His innovative approaches have improved our engine efficiency by 15%.`
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Structures Lead",
      specialization: "Structures",
      department: "Mechanical Engineering",
      year: "Junior",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      skills: ["CAD Design", "Materials Science", "Structural Analysis"],
      experience: "2 years rocketry, Boeing internship",
      achievements: ["Best Design Award", "Materials Innovation Prize"],
      social: {
        linkedin: "https://linkedin.com/in/emmawilson",
        github: "https://github.com/emmawilson"
      },
      bio: `Emma designs and analyzes our rocket structures using advanced materials and 
      cutting-edge simulation techniques for optimal performance.`
    },
    {
      id: 5,
      name: "David Kim",
      role: "Avionics Lead",
      specialization: "Electronics",
      department: "Electrical Engineering",
      year: "Senior",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      skills: ["Flight Control", "Embedded Systems", "Data Acquisition"],
      experience: "3 years rocketry, Tesla internship",
      achievements: ["Best Avionics System", "IEEE Student Award"],
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        github: "https://github.com/davidkim"
      },
      bio: `David develops sophisticated avionics systems that ensure precise flight control 
      and comprehensive data collection during missions.`
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Recovery Lead",
      specialization: "Recovery",
      department: "Aerospace Engineering",
      year: "Sophomore",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      skills: ["Parachute Design", "Recovery Systems", "Simulation"],
      experience: "1 year rocketry, rising star",
      achievements: ["Perfect Recovery Record", "Innovation Award"],
      social: {
        linkedin: "https://linkedin.com/in/lisapark",
        github: "https://github.com/lisapark"
      },
      bio: `Lisa ensures safe recovery of our rockets through innovative parachute systems 
      and recovery mechanisms with 100% success rate.`
    },
    {
      id: 7,
      name: "Ryan Foster",
      role: "Safety Officer",
      specialization: "Safety",
      department: "Industrial Engineering",
      year: "Junior",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      skills: ["Risk Assessment", "Safety Protocols", "Quality Assurance"],
      experience: "2 years rocketry, FAA certification",
      achievements: ["Zero Incident Record", "Safety Excellence Award"],
      social: {
        linkedin: "https://linkedin.com/in/ryanfoster",
        github: "https://github.com/ryanfoster"
      },
      bio: `Ryan maintains our impeccable safety record through rigorous protocols and 
      comprehensive risk management strategies.`
    },
    {
      id: 8,
      name: "Priya Patel",
      role: "Data Analyst",
      specialization: "Analytics",
      department: "Computer Science",
      year: "Sophomore",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      skills: ["Data Science", "Machine Learning", "Telemetry Analysis"],
      experience: "1 year rocketry, Google internship",
      achievements: ["Best Data Visualization", "AI Innovation Prize"],
      social: {
        linkedin: "https://linkedin.com/in/priyapatel",
        github: "https://github.com/priyapatel"
      },
      bio: `Priya transforms flight data into actionable insights using advanced analytics 
      and machine learning techniques for continuous improvement.`
    }
  ];

  const specializations = ['all', 'Leadership', 'Propulsion', 'Structures', 'Electronics', 'Recovery', 'Safety', 'Analytics'];

  const filteredMembers = filterSpecialization === 'all' 
    ? teamMembers 
    : teamMembers?.filter(member => member?.specialization === filterSpecialization);

  const handleMemberClick = (member) => {
    setSelectedMember(selectedMember?.id === member?.id ? null : member);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={16} />
            <span className="text-sm font-medium uppercase tracking-technical">Team Roster</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Aerospace Pioneers
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Meet the brilliant minds behind our mission success - each member brings unique expertise 
            and passion to push the boundaries of student rocketry
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {specializations?.map((spec) => (
            <button
              key={spec}
              onClick={() => setFilterSpecialization(spec)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filterSpecialization === spec
                  ? 'bg-primary text-primary-foreground shadow-mission'
                  : 'bg-background text-text-secondary hover:text-primary hover:bg-muted border border-border'
              }`}
            >
              {spec === 'all' ? 'All Members' : spec}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers?.map((member) => (
            <div key={member?.id} className="group">
              <div 
                className="dashboard-card p-6 cursor-pointer hover:shadow-elevation transition-all duration-300 aerospace-transition"
                onClick={() => handleMemberClick(member)}
              >
                {/* Member Photo */}
                <div className="relative mb-4">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg">{member?.name}</h3>
                    <p className="text-white/80 text-sm">{member?.role}</p>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute top-3 right-3 w-3 h-3 bg-mission-active rounded-full animate-mission-pulse"></div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-text-secondary">{member?.department}</p>
                    <p className="text-sm text-text-secondary">{member?.year}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      member?.specialization === 'Leadership' ? 'bg-purple-100 text-purple-800' :
                      member?.specialization === 'Propulsion' ? 'bg-red-100 text-red-800' :
                      member?.specialization === 'Structures' ? 'bg-blue-100 text-blue-800' :
                      member?.specialization === 'Electronics' ? 'bg-green-100 text-green-800' :
                      member?.specialization === 'Recovery' ? 'bg-yellow-100 text-yellow-800' :
                      member?.specialization === 'Safety'? 'bg-orange-100 text-orange-800' : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {member?.specialization}
                    </span>
                  </div>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-1">
                    {member?.skills?.slice(0, 2)?.map((skill, index) => (
                      <span key={index} className="text-xs bg-muted text-text-secondary px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {member?.skills?.length > 2 && (
                      <span className="text-xs text-text-secondary">+{member?.skills?.length - 2} more</span>
                    )}
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-2 pt-2">
                    <a 
                      href={member?.social?.linkedin} 
                      className="text-text-secondary hover:text-primary transition-colors duration-200"
                      onClick={(e) => e?.stopPropagation()}
                    >
                      <Icon name="Linkedin" size={16} />
                    </a>
                    <a 
                      href={member?.social?.github} 
                      className="text-text-secondary hover:text-primary transition-colors duration-200"
                      onClick={(e) => e?.stopPropagation()}
                    >
                      <Icon name="Github" size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedMember?.id === member?.id && (
                <div className="dashboard-card p-6 mt-4 border-l-4 border-accent">
                  <div className="space-y-4">
                    <p className="text-text-secondary">{member?.bio}</p>
                    
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Experience</h4>
                      <p className="text-sm text-text-secondary">{member?.experience}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {member?.skills?.map((skill, index) => (
                          <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Achievements</h4>
                      <ul className="space-y-1">
                        {member?.achievements?.map((achievement, index) => (
                          <li key={index} className="text-sm text-text-secondary flex items-center space-x-2">
                            <Icon name="Award" size={12} className="text-accent" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberGrid;