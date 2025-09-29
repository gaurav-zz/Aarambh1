import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SponsorshipPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const sponsorshipTiers = [
    {
      id: 'platinum',
      name: 'Platinum Partner',
      price: '$25,000+',
      duration: 'Annual',
      color: 'from-gray-300 to-gray-500',
      textColor: 'text-gray-800',
      popular: true,
      description: 'Maximum visibility and exclusive partnership benefits for industry leaders',
      benefits: [
        'Primary logo placement on all rockets and vehicles',
        'Exclusive naming rights for one competition season',
        'VIP hospitality package for 10 guests at competitions',
        'Priority access to recruit top-performing team members',
        'Quarterly technical collaboration meetings',
        'Custom content creation and case study development',
        'Social media spotlight campaigns (4 per year)',
        'Press release co-authoring opportunities',
        'Executive advisory board participation invitation',
        'Exclusive access to technical documentation and reports',
        'First-right-of-refusal on internship candidates',
        'Custom workshop hosting at your facilities'
      ],
      metrics: {
        reach: '2M+ annual impressions',
        recruitment: '15+ qualified candidates',
        events: '12+ competition appearances',
        content: '50+ social media mentions'
      }
    },
    {
      id: 'gold',
      name: 'Gold Partner',
      price: '$15,000',
      duration: 'Annual',
      color: 'from-yellow-300 to-yellow-500',
      textColor: 'text-yellow-900',
      popular: false,
      description: 'Comprehensive partnership with excellent visibility and recruitment access',
      benefits: [
        'Secondary logo placement on rockets and team materials',
        'Hospitality package for 6 guests at major competitions',
        'Access to recruit team members and alumni',
        'Bi-annual technical progress presentations',
        'Social media feature campaigns (2 per year)',
        'Newsletter spotlight and website feature',
        'Competition booth sharing opportunities',
        'Technical consultation on student projects',
        'Access to team technical presentations',
        'Priority invitation to team events and launches',
        'Resume database access for recruitment',
        'Co-branded educational content opportunities'
      ],
      metrics: {
        reach: '1.2M+ annual impressions',
        recruitment: '10+ qualified candidates',
        events: '8+ competition appearances',
        content: '30+ social media mentions'
      }
    },
    {
      id: 'silver',
      name: 'Silver Partner',
      price: '$8,000',
      duration: 'Annual',
      color: 'from-gray-200 to-gray-400',
      textColor: 'text-gray-700',
      popular: false,
      description: 'Strong brand visibility with solid recruitment and networking benefits',
      benefits: [
        'Logo placement on team website and materials',
        'Hospitality package for 4 guests at competitions',
        'Access to team member resumes and portfolios',
        'Annual technical achievement presentation',
        'Social media mentions and tags',
        'Newsletter inclusion and updates',
        'Networking opportunities at team events',
        'Access to competition results and data',
        'Team facility tour opportunities',
        'Educational workshop participation',
        'Alumni network introduction opportunities',
        'Technical report sharing (quarterly)'
      ],
      metrics: {
        reach: '600K+ annual impressions',
        recruitment: '6+ qualified candidates',
        events: '4+ competition appearances',
        content: '15+ social media mentions'
      }
    },
    {
      id: 'bronze',
      name: 'Bronze Partner',
      price: '$3,000',
      duration: 'Annual',
      color: 'from-orange-300 to-orange-500',
      textColor: 'text-orange-900',
      popular: false,
      description: 'Entry-level partnership perfect for growing companies and local businesses',
      benefits: [
        'Logo placement on team website',
        'Competition updates and results sharing',
        'Access to team newsletters and communications',
        'Social media acknowledgment and thanks',
        'Invitation to major team events',
        'Basic recruitment posting opportunities',
        'Team achievement celebration inclusion',
        'Educational outreach program participation',
        'Local media mention opportunities',
        'Community event collaboration possibilities',
        'Student mentorship program access',
        'Technical presentation attendance'
      ],
      metrics: {
        reach: '200K+ annual impressions',
        recruitment: '3+ networking opportunities',
        events: '2+ competition updates',
        content: '8+ social media mentions'
      }
    }
  ];

  const customPartnership = {
    title: 'Custom Partnership Solutions',
    description: 'Tailored partnership packages designed to meet your specific business objectives and budget requirements.',
    features: [
      'Equipment and material sponsorship opportunities',
      'Technical expertise and consulting partnerships',
      'Research collaboration and development projects',
      'Educational program development and funding',
      'Competition hosting and venue partnerships',
      'International competition travel sponsorship',
      'Scholarship and award program establishment',
      'Alumni mentorship program development'
    ]
  };

  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId === selectedPackage ? null : packageId);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Package" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Partnership Packages</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Investment Opportunities
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose the partnership level that aligns with your business objectives. 
            Each tier offers measurable ROI through brand exposure, talent access, and industry recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sponsorshipTiers?.map((tier) => (
            <div 
              key={tier?.id}
              className={`relative dashboard-card p-6 cursor-pointer transition-all duration-300 hover:shadow-elevation ${
                selectedPackage === tier?.id ? 'ring-2 ring-primary shadow-elevation' : ''
              } ${tier?.popular ? 'border-accent border-2' : ''}`}
              onClick={() => handlePackageSelect(tier?.id)}
            >
              {tier?.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${tier?.color} ${tier?.textColor} mb-4`}>
                  <Icon name="Star" size={16} />
                  <span>{tier?.name}</span>
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-text-primary">{tier?.price}</span>
                  <span className="text-text-secondary">/{tier?.duration}</span>
                </div>
                <p className="text-sm text-text-secondary">{tier?.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-text-primary text-sm">Key Benefits:</h4>
                <ul className="space-y-2">
                  {tier?.benefits?.slice(0, 4)?.map((benefit, index) => (
                    <li key={index} className="text-sm text-text-secondary flex items-start">
                      <Icon name="Check" size={14} className="mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                {tier?.benefits?.length > 4 && (
                  <button 
                    className="text-sm text-primary hover:text-primary/80 font-medium"
                    onClick={(e) => {
                      e?.stopPropagation();
                      handlePackageSelect(tier?.id);
                    }}
                  >
                    View all {tier?.benefits?.length} benefits →
                  </button>
                )}
              </div>

              <div className="border-t border-border pt-4">
                <h5 className="font-medium text-text-primary text-sm mb-2">Expected ROI:</h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center p-2 bg-muted rounded">
                    <div className="font-medium text-text-primary">{tier?.metrics?.reach}</div>
                    <div className="text-text-secondary">Reach</div>
                  </div>
                  <div className="text-center p-2 bg-muted rounded">
                    <div className="font-medium text-text-primary">{tier?.metrics?.recruitment}</div>
                    <div className="text-text-secondary">Talent</div>
                  </div>
                </div>
              </div>

              {selectedPackage === tier?.id && (
                <div className="mt-6 pt-4 border-t border-border">
                  <h5 className="font-medium text-text-primary mb-3">Complete Benefits Package:</h5>
                  <ul className="space-y-1 max-h-40 overflow-y-auto">
                    {tier?.benefits?.map((benefit, index) => (
                      <li key={index} className="text-xs text-text-secondary flex items-start">
                        <Icon name="Check" size={12} className="mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Custom Partnership Section */}
        <div className="dashboard-card p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
          <div className="text-center mb-8">
            <Icon name="Settings" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">{customPartnership?.title}</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">{customPartnership?.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {customPartnership?.features?.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg">
                <Icon name="Lightbulb" size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
              className="mr-4"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="default" 
              size="lg"
              iconName="FileText"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90"
            >
              Request Custom Proposal
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-green-600" />
                <span className="text-text-secondary">Tax-deductible educational support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} className="text-blue-600" />
                <span className="text-text-secondary">Measurable ROI tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-purple-600" />
                <span className="text-text-secondary">Direct talent pipeline access</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-orange-600" />
                <span className="text-text-secondary">Industry recognition benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipPackages;