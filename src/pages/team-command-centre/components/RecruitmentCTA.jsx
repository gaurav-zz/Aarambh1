import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const RecruitmentCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    year: '',
    interests: '',
    experience: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openPositions = [
    {
      title: "Propulsion Engineer",
      department: "Engineering",
      type: "Technical",
      icon: "Zap",
      requirements: ["Mechanical/Aerospace Engineering", "Thermodynamics knowledge", "CAD experience"],
      description: "Design and test rocket propulsion systems"
    },
    {
      title: "Avionics Specialist",
      department: "Engineering",
      type: "Technical",
      icon: "Cpu",
      requirements: ["Electrical/Computer Engineering", "Embedded systems", "Programming skills"],
      description: "Develop flight control and data acquisition systems"
    },
    {
      title: "Structures Designer",
      department: "Engineering",
      type: "Technical",
      icon: "Wrench",
      requirements: ["Mechanical Engineering", "Materials science", "FEA analysis"],
      description: "Design rocket airframes and structural components"
    },
    {
      title: "Safety Officer",
      department: "Operations",
      type: "Leadership",
      icon: "Shield",
      requirements: ["Any engineering major", "Attention to detail", "Leadership skills"],
      description: "Ensure all operations meet safety standards"
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      type: "Technical",
      icon: "BarChart3",
      requirements: ["Computer Science/Math", "Python/R", "Statistics knowledge"],
      description: "Analyze flight data and performance metrics"
    },
    {
      title: "Outreach Coordinator",
      department: "Operations",
      type: "Leadership",
      icon: "Megaphone",
      requirements: ["Any major", "Communication skills", "Event planning"],
      description: "Manage community engagement and educational programs"
    }
  ];

  const benefits = [
    {
      title: "Hands-on Experience",
      description: "Work on real aerospace projects from design to launch",
      icon: "Wrench"
    },
    {
      title: "Industry Connections",
      description: "Network with aerospace professionals and alumni",
      icon: "Users"
    },
    {
      title: "Leadership Development",
      description: "Lead teams and manage complex technical projects",
      icon: "Crown"
    },
    {
      title: "Competition Experience",
      description: "Compete at national and international levels",
      icon: "Trophy"
    },
    {
      title: "Research Opportunities",
      description: "Contribute to cutting-edge aerospace research",
      icon: "BookOpen"
    },
    {
      title: "Career Preparation",
      description: "Build skills for aerospace industry careers",
      icon: "Briefcase"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Mock form submission
    console.log('Application submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        major: '',
        year: '',
        interests: '',
        experience: ''
      });
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary/80 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 mission-grid opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Icon name="UserPlus" size={16} />
            <span className="text-sm font-medium uppercase tracking-technical">Join Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Launch Your
            <span className="block text-accent countdown-glow">Aerospace Career</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join a team of passionate engineers and innovators building the future of aerospace technology. 
            No experience required - just curiosity and determination.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Open Positions */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center space-x-2">
              <Icon name="Briefcase" size={24} />
              <span>Open Positions</span>
            </h3>
            
            <div className="space-y-4">
              {openPositions?.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Icon name={position?.icon} size={20} color="white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-lg font-bold">{position?.title}</h4>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">{position?.type}</span>
                      </div>
                      <p className="text-white/80 text-sm mb-3">{position?.description}</p>
                      <div className="space-y-1">
                        <p className="text-xs text-white/60 uppercase tracking-technical">Requirements:</p>
                        <ul className="text-sm text-white/80 space-y-1">
                          {position?.requirements?.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-accent rounded-full"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6">Why Join RocketryXyz?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon name={benefit?.icon} size={16} className="text-accent" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">{benefit?.title}</h5>
                      <p className="text-xs text-white/70">{benefit?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <Icon name="FileText" size={24} />
              <span>Apply Now</span>
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-white/50"
                />

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="your.email@university.edu"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-white/50"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Major"
                    type="text"
                    name="major"
                    value={formData?.major}
                    onChange={handleInputChange}
                    placeholder="e.g., Aerospace Engineering"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />

                  <Input
                    label="Academic Year"
                    type="text"
                    name="year"
                    value={formData?.year}
                    onChange={handleInputChange}
                    placeholder="e.g., Sophomore"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Areas of Interest
                  </label>
                  <textarea
                    name="interests"
                    value={formData?.interests}
                    onChange={handleInputChange}
                    placeholder="Which positions or areas interest you most?"
                    rows={3}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Relevant Experience
                  </label>
                  <textarea
                    name="experience"
                    value={formData?.experience}
                    onChange={handleInputChange}
                    placeholder="Tell us about any relevant projects, coursework, or experience"
                    rows={3}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Send"
                  iconPosition="right"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  Submit Application
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} color="white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Application Submitted!</h4>
                <p className="text-white/80">
                  Thank you for your interest. We'll review your application and get back to you soon.
                </p>
              </div>
            )}

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <h4 className="font-semibold mb-4">Questions? Get in Touch</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>recruitment@rocketryxyz.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MessageSquare" size={16} />
                  <span>Join our Discord community</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} />
                  <span>Info sessions every Friday at 6 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default RecruitmentCTA;