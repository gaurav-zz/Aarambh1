import React from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SponsorShowcase from './components/SponsorShowcase';
import SponsorshipPackages from './components/SponsorshipPackages';
import PartnershipInquiry from './components/PartnershipInquiry';
import ROIShowcase from './components/ROIShowcase';
import MediaKit from './components/MediaKit';

const PartnershipLaunchpad = () => {
  const heroStats = [
    { label: 'Active Partners', value: '25+', icon: 'Handshake' },
    { label: 'Partnership Value', value: '$150K+', icon: 'DollarSign' },
    { label: 'Alumni Hired', value: '50+', icon: 'Users' },
    { label: 'Media Reach', value: '2M+', icon: 'Eye' }
  ];

  const partnershipBenefits = [
    {
      icon: 'TrendingUp',
      title: 'Brand Visibility',
      description: 'Gain exposure through competition appearances, social media, and press coverage reaching aerospace industry professionals and students.',
      metrics: '2M+ annual impressions'
    },
    {
      icon: 'Users',
      title: 'Talent Pipeline',
      description: 'Access to top-tier engineering talent through direct recruitment, internship programs, and alumni network connections.',
      metrics: '95% hire success rate'
    },
    {
      icon: 'Award',
      title: 'Industry Recognition',
      description: 'Associate your brand with excellence through our competition wins and technical achievements in the aerospace community.',
      metrics: '15 competition wins'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation Access',
      description: 'Collaborate on cutting-edge projects and gain insights into emerging aerospace technologies and methodologies.',
      metrics: '12 technical innovations'
    },
    {
      icon: 'Network',
      title: 'Industry Networking',
      description: 'Connect with other industry leaders, academic institutions, and aerospace professionals through our extensive network.',
      metrics: '100+ industry connections'
    },
    {
      icon: 'Target',
      title: 'Measurable ROI',
      description: 'Track your investment impact through comprehensive analytics and reporting on all partnership benefits.',
      metrics: '280% average ROI'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Partnership Launchpad - RocketryXyz Portfolio</title>
        <meta name="description" content="Partner with RocketryXyz for brand visibility, talent recruitment, and industry recognition. Explore sponsorship packages and join industry leaders supporting student aerospace innovation." />
        <meta name="keywords" content="aerospace sponsorship, student rocketry partnership, engineering talent recruitment, brand visibility, industry collaboration" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
          <div className="absolute inset-0 mission-grid opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Icon name="Rocket" size={20} className="text-white" />
                <span className="text-sm font-medium text-white">Partnership Opportunities</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Partnership
                <span className="block text-accent countdown-glow">Launchpad</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
                Join industry leaders in supporting the next generation of aerospace engineers. 
                Partner with RocketryXyz for measurable ROI through brand visibility, talent access, and innovation collaboration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  variant="default" 
                  size="lg"
                  onClick={() => scrollToSection('partnership-inquiry')}
                  iconName="Send"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90 text-white border-0"
                >
                  Start Partnership Discussion
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('media-kit')}
                  iconName="Download"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Download Media Kit
                </Button>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats?.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <Icon name={stat?.icon} size={32} className="text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat?.value}</div>
                  <div className="text-sm text-white/80">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Icon name="Star" size={20} className="text-primary" />
                <span className="text-sm font-medium text-primary">Partnership Benefits</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary mb-4">
                Why Partner with RocketryXyz?
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Our partnerships deliver tangible value through strategic brand positioning, 
                direct talent access, and measurable return on investment in the aerospace sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits?.map((benefit, index) => (
                <div key={index} className="dashboard-card p-6 hover:shadow-elevation transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={benefit?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{benefit?.title}</h3>
                  <p className="text-text-secondary mb-4">{benefit?.description}</p>
                  <div className="flex items-center space-x-2 text-accent font-medium">
                    <Icon name="BarChart3" size={16} />
                    <span className="text-sm">{benefit?.metrics}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Sponsors Showcase */}
        <SponsorShowcase />

        {/* Sponsorship Packages */}
        <SponsorshipPackages />

        {/* ROI Analytics */}
        <ROIShowcase />

        {/* Media Kit Section */}
        <div id="media-kit">
          <MediaKit />
        </div>

        {/* Partnership Inquiry Form */}
        <div id="partnership-inquiry">
          <PartnershipInquiry />
        </div>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Icon name="Rocket" size={64} className="text-white mx-auto mb-6 transform rotate-45" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Launch Your Partnership?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the companies already benefiting from partnership with RocketryXyz. 
              Let's discuss how we can create value for your organization while supporting aerospace education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                onClick={() => scrollToSection('partnership-inquiry')}
                iconName="MessageSquare"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-white border-0"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Call Partnership Team
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>24-48 hour response time</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>Confidential discussions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Target" size={16} />
                <span>Custom partnership solutions</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnershipLaunchpad;