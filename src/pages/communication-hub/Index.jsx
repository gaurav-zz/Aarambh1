import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ContactForm from './components/ContactForm';
import TeamDirectory from './components/TeamDirectory';
import SocialMediaHub from './components/SocialMediaHub';
import LiveChat from './components/LiveChat';
import ContactInfo from './components/ContactInfo';

const CommunicationHub = () => {
  const [activeSection, setActiveSection] = useState('contact-form');

  const navigationSections = [
    {
      id: 'contact-form',
      name: 'Contact Form',
      icon: 'MessageSquare',
      description: 'Send us a message with intelligent routing'
    },
    {
      id: 'team-directory',
      name: 'Team Directory',
      icon: 'Users',
      description: 'Connect directly with team members'
    },
    {
      id: 'social-media',
      name: 'Social Media',
      icon: 'Share2',
      description: 'Follow us and share our mission'
    },
    {
      id: 'contact-info',
      name: 'Contact Info',
      icon: 'Info',
      description: 'All contact methods and locations'
    }
  ];

  const communicationStats = [
    {
      label: 'Average Response Time',
      value: '4.2 hours',
      icon: 'Clock',
      trend: 'down',
      trendValue: '15%'
    },
    {
      label: 'Team Members Online',
      value: '8/12',
      icon: 'Users',
      trend: 'up',
      trendValue: '2'
    },
    {
      label: 'Messages This Month',
      value: '342',
      icon: 'MessageCircle',
      trend: 'up',
      trendValue: '23%'
    },
    {
      label: 'Social Media Reach',
      value: '64.2K',
      icon: 'TrendingUp',
      trend: 'up',
      trendValue: '12%'
    }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'contact-form':
        return <ContactForm />;
      case 'team-directory':
        return <TeamDirectory />;
      case 'social-media':
        return <SocialMediaHub />;
      case 'contact-info':
        return <ContactInfo />;
      default:
        return <ContactForm />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Communication Hub - RocketryXyz Portfolio</title>
        <meta name="description" content="Connect with RocketryXyz through multiple channels. Contact our team, follow our social media, and stay updated with our mission." />
        <meta name="keywords" content="contact, communication, social media, team directory, rocketry, aerospace, student team" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary via-secondary to-primary py-20 overflow-hidden">
            <div className="absolute inset-0 mission-grid opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
            
            <div className="relative max-w-7xl mx-auto px-6">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Icon name="Radio" size={16} className="text-white" />
                  <span className="text-white text-sm font-medium">Mission Communications Active</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  Communication
                  <span className="block text-accent">Hub</span>
                </h1>
                
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Your mission control center for connecting with RocketryXyz. Multi-channel communication system with intelligent routing, real-time support, and comprehensive contact options.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => setActiveSection('contact-form')}
                    iconName="MessageSquare"
                    iconPosition="left"
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    Send Message
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setActiveSection('team-directory')}
                    iconName="Users"
                    iconPosition="left"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    View Team Directory
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Communication Stats */}
          <section className="py-16 bg-muted">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {communicationStats?.map((stat, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon name={stat?.icon} size={24} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat?.value}</div>
                    <div className="text-sm text-text-secondary mb-2">{stat?.label}</div>
                    <div className={`flex items-center justify-center space-x-1 text-xs ${
                      stat?.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <Icon name={stat?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={12} />
                      <span>{stat?.trendValue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Navigation Tabs */}
          <section className="py-8 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {navigationSections?.map((section) => (
                  <button
                    key={section?.id}
                    onClick={() => setActiveSection(section?.id)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 aerospace-transition ${
                      activeSection === section?.id
                        ? 'bg-primary text-primary-foreground shadow-mission'
                        : 'bg-muted text-text-secondary hover:text-primary hover:bg-muted/80'
                    }`}
                  >
                    <Icon name={section?.icon} size={18} />
                    <div className="text-left">
                      <div>{section?.name}</div>
                      <div className="text-xs opacity-75">{section?.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
              {renderActiveSection()}
            </div>
          </section>

          {/* Quick Contact Banner */}
          <section className="py-16 bg-gradient-to-r from-primary to-secondary">
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Our team is standing by to help with urgent inquiries, partnership opportunities, and technical collaboration.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => window.location.href = 'tel:+15551234567'}
                    iconName="Phone"
                    iconPosition="left"
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    Call Now: +1 (555) 123-4567
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = 'mailto:info@rocketryxyz.edu'}
                    iconName="Mail"
                    iconPosition="left"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    Email: info@rocketryxyz.edu
                  </Button>
                </div>
                
                <div className="mt-6 flex items-center justify-center space-x-2 text-white/80 text-sm">
                  <Icon name="Clock" size={16} />
                  <span>Response time: Within 4 hours during business hours</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Live Chat Component */}
        <LiveChat />

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Rocket" size={20} color="white" className="transform rotate-45" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">RocketryXyz</h3>
                    <p className="text-sm text-text-secondary">Communication Hub</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  Connecting the aerospace community through innovation, education, and collaboration. Your gateway to student rocketry excellence.
                </p>
                <div className="flex space-x-4">
                  {['Instagram', 'Twitter', 'Youtube', 'Linkedin']?.map((platform) => (
                    <button
                      key={platform}
                      className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Icon name={platform} size={18} />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-4">Quick Contact</h4>
                <div className="space-y-2 text-sm text-text-secondary">
                  <div>General: info@rocketryxyz.edu</div>
                  <div>Media: media@rocketryxyz.edu</div>
                  <div>Partnerships: partnerships@rocketryxyz.edu</div>
                  <div>Emergency: +1 (555) 911-TEAM</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-4">Visit Us</h4>
                <div className="space-y-2 text-sm text-text-secondary">
                  <div>123 Engineering Drive</div>
                  <div>Building A, Room 201</div>
                  <div>University City, State 12345</div>
                  <div>Mon-Fri: 8AM-10PM</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 text-center text-sm text-text-secondary">
              <p>&copy; {new Date()?.getFullYear()} RocketryXyz University Team. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CommunicationHub;