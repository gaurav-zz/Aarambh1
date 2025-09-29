import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AlumniNetwork = () => {
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const alumniData = [
    {
      id: 1,
      name: "Dr. Jennifer Walsh",
      graduationYear: 2020,
      currentRole: "Propulsion Engineer",
      company: "SpaceX",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      teamRole: "Former Team Lead",
      achievements: ["Led 3 successful launches", "Developed hybrid engine design"],
      currentWork: "Leading Raptor engine optimization team",
      mentorship: "Active mentor for current propulsion team",
      linkedin: "https://linkedin.com/in/jenniferwalshrockets",
      location: "Hawthorne, CA",
      testimonial: `My time with RocketryXyz was transformative. The hands-on experience and collaborative 
      environment prepared me perfectly for my career at SpaceX. I'm proud to see how the team continues to innovate.`
    },
    {
      id: 2,
      name: "Michael Chen",
      graduationYear: 2019,
      currentRole: "Flight Software Engineer",
      company: "Blue Origin",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      teamRole: "Former Avionics Lead",
      achievements: ["Developed flight control system", "Won best avionics award"],
      currentWork: "New Shepard flight software development",
      mentorship: "Quarterly workshops on embedded systems",
      linkedin: "https://linkedin.com/in/michaelchenblueorigin",
      location: "Kent, WA",
      testimonial: `The technical challenges we solved together taught me problem-solving skills that I use 
      every day. RocketryXyz doesn't just build rockets - it builds aerospace leaders.`
    },
    {
      id: 3,
      name: "Sarah Martinez",
      graduationYear: 2021,
      currentRole: "Systems Engineer",
      company: "NASA JPL",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      teamRole: "Former Safety Officer",
      achievements: ["Zero incident safety record", "Developed safety protocols"],
      currentWork: "Mars Sample Return mission systems",
      mentorship: "Safety training and risk assessment guidance",
      linkedin: "https://linkedin.com/in/sarahmartinezjpl",
      location: "Pasadena, CA",
      testimonial: `The safety-first culture at RocketryXyz shaped my approach to engineering. Now working 
      on Mars missions, I apply those same rigorous standards to ensure mission success.`
    },
    {
      id: 4,
      name: "David Park",
      graduationYear: 2018,
      currentRole: "Aerospace Entrepreneur",
      company: "Stellar Dynamics (Founder)",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      teamRole: "Former Structures Lead",
      achievements: ["Innovative composite design", "Weight reduction breakthrough"],
      currentWork: "Developing next-gen satellite propulsion",
      mentorship: "Entrepreneurship and startup guidance",
      linkedin: "https://linkedin.com/in/davidparkstellar",
      location: "Austin, TX",
      testimonial: `RocketryXyz taught me that with the right team and determination, you can achieve anything. 
      That mindset led me to start my own aerospace company.`
    },
    {
      id: 5,
      name: "Dr. Amanda Foster",
      graduationYear: 2017,
      currentRole: "Research Scientist",
      company: "MIT Lincoln Laboratory",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face",
      teamRole: "Former Research Lead",
      achievements: ["Published 3 research papers", "Advanced materials research"],
      currentWork: "Hypersonic vehicle technology research",
      mentorship: "Research methodology and academic guidance",
      linkedin: "https://linkedin.com/in/amandafostermit",
      location: "Cambridge, MA",
      testimonial: `The research opportunities at RocketryXyz sparked my passion for advanced aerospace 
      technologies. It's incredible to see current members continuing that tradition of innovation.`
    },
    {
      id: 6,
      name: "James Liu",
      graduationYear: 2022,
      currentRole: "Mission Operations Engineer",
      company: "Virgin Galactic",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      teamRole: "Former Operations Manager",
      achievements: ["Streamlined launch operations", "Improved efficiency by 30%"],
      currentWork: "Commercial spaceflight operations",
      mentorship: "Operations planning and project management",
      linkedin: "https://linkedin.com/in/jamesliuvirgin",
      location: "Mojave, CA",
      testimonial: `Managing complex operations at RocketryXyz prepared me for the fast-paced world of 
      commercial spaceflight. The experience was invaluable.`
    }
  ];

  const companies = [...new Set(alumniData.map(alumni => alumni.company))];
  const graduationYears = [...new Set(alumniData.map(alumni => alumni.graduationYear))]?.sort((a, b) => b - a);

  const handleAlumniClick = (alumni) => {
    setSelectedAlumni(selectedAlumni?.id === alumni?.id ? null : alumni);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Icon name="GraduationCap" size={16} />
            <span className="text-sm font-medium uppercase tracking-technical">Alumni Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Aerospace Leaders
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our alumni are making their mark across the aerospace industry, from leading space companies 
            to groundbreaking research institutions
          </p>
        </div>

        {/* Alumni Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="dashboard-card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{alumniData?.length}</div>
            <div className="text-sm text-text-secondary uppercase tracking-technical">Alumni Network</div>
          </div>
          <div className="dashboard-card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{companies?.length}</div>
            <div className="text-sm text-text-secondary uppercase tracking-technical">Companies</div>
          </div>
          <div className="dashboard-card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-text-secondary uppercase tracking-technical">Industry Placement</div>
          </div>
          <div className="dashboard-card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">8</div>
            <div className="text-sm text-text-secondary uppercase tracking-technical">Years History</div>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniData?.map((alumni) => (
            <div key={alumni?.id} className="group">
              <div 
                className="dashboard-card p-6 cursor-pointer hover:shadow-elevation transition-all duration-300 aerospace-transition"
                onClick={() => handleAlumniClick(alumni)}
              >
                {/* Alumni Photo and Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <Image
                      src={alumni?.image}
                      alt={alumni?.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="GraduationCap" size={12} color="white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-text-primary truncate">{alumni?.name}</h3>
                    <p className="text-sm text-primary font-semibold">{alumni?.currentRole}</p>
                    <p className="text-sm text-text-secondary">{alumni?.company}</p>
                    <p className="text-xs text-text-secondary">Class of {alumni?.graduationYear}</p>
                  </div>
                </div>

                {/* Former Role */}
                <div className="mb-4">
                  <div className="inline-flex items-center space-x-2 bg-muted px-3 py-1 rounded-full">
                    <Icon name="Clock" size={12} />
                    <span className="text-xs text-text-secondary">{alumni?.teamRole}</span>
                  </div>
                </div>

                {/* Current Work Preview */}
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">{alumni?.currentWork}</p>

                {/* Location and LinkedIn */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-text-secondary">
                    <Icon name="MapPin" size={12} />
                    <span>{alumni?.location}</span>
                  </div>
                  <a 
                    href={alumni?.linkedin} 
                    className="text-primary hover:text-primary/80 transition-colors duration-200"
                    onClick={(e) => e?.stopPropagation()}
                  >
                    <Icon name="Linkedin" size={16} />
                  </a>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedAlumni?.id === alumni?.id && (
                <div className="dashboard-card p-6 mt-4 border-l-4 border-accent">
                  <div className="space-y-4">
                    {/* Testimonial */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2 flex items-center space-x-2">
                        <Icon name="Quote" size={16} className="text-accent" />
                        <span>Testimonial</span>
                      </h4>
                      <p className="text-sm text-text-secondary italic">{alumni?.testimonial}</p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Team Achievements</h4>
                      <ul className="space-y-1">
                        {alumni?.achievements?.map((achievement, index) => (
                          <li key={index} className="text-sm text-text-secondary flex items-center space-x-2">
                            <Icon name="Award" size={12} className="text-accent" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mentorship */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Current Mentorship</h4>
                      <p className="text-sm text-text-secondary">{alumni?.mentorship}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Company Showcase */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Alumni Work At Leading Companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies?.map((company, index) => (
              <div key={index} className="text-lg font-semibold text-text-secondary">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniNetwork;