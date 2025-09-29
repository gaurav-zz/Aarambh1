import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SponsorShowcase = () => {
  const currentSponsors = [
    {
      id: 1,
      name: "AeroTech Industries",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      tier: "Platinum",
      partnership_since: "2022",
      testimonial: "RocketryXyz consistently delivers innovative solutions and exceptional talent. Their technical excellence and professional approach make them an ideal partner for advancing aerospace education.",
      contact_person: "Dr. Sarah Mitchell",
      position: "VP of Engineering Relations",
      benefits_received: ["Brand visibility at 12 competitions", "Access to 15 engineering interns", "Technical collaboration on 3 projects"],
      investment: "$25,000"
    },
    {
      id: 2,
      name: "Stellar Dynamics Corp",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop",
      tier: "Gold",
      partnership_since: "2023",
      testimonial: "The team's dedication to safety and innovation aligns perfectly with our company values. We've seen tremendous ROI through talent acquisition and brand exposure.",
      contact_person: "Mark Rodriguez",
      position: "Director of University Relations",
      benefits_received: ["Logo placement on 2 rockets", "Recruitment access to 8 graduates", "Media coverage worth $50K"],
      investment: "$15,000"
    },
    {
      id: 3,
      name: "Propulsion Systems LLC",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
      tier: "Silver",
      partnership_since: "2023",
      testimonial: "RocketryXyz provides excellent exposure for our brand in the aerospace community. Their professional approach and technical competence make them a valuable partner.",
      contact_person: "Jennifer Chen",
      position: "Marketing Director",
      benefits_received: ["Social media mentions: 50K+ reach", "Event booth partnership", "Technical consultation"],
      investment: "$8,000"
    },
    {
      id: 4,
      name: "Orbital Manufacturing",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop",
      tier: "Bronze",
      partnership_since: "2024",
      testimonial: "Great team with impressive technical skills. We look forward to growing our partnership and supporting their mission.",
      contact_person: "David Park",
      position: "Business Development Manager",
      benefits_received: ["Website logo placement", "Newsletter mentions", "Networking opportunities"],
      investment: "$3,000"
    }
  ];

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Platinum': return 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800';
      case 'Gold': return 'bg-gradient-to-r from-yellow-300 to-yellow-500 text-yellow-900';
      case 'Silver': return 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700';
      case 'Bronze': return 'bg-gradient-to-r from-orange-300 to-orange-400 text-orange-900';
      default: return 'bg-muted text-text-secondary';
    }
  };

  const getTierIcon = (tier) => {
    switch (tier) {
      case 'Platinum': return 'Crown';
      case 'Gold': return 'Award';
      case 'Silver': return 'Medal';
      case 'Bronze': return 'Trophy';
      default: return 'Star';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Handshake" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Current Partners</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our partners invest in the future of aerospace through strategic collaboration with RocketryXyz. 
            Join these industry leaders in supporting student innovation and accessing emerging talent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentSponsors?.map((sponsor) => (
            <div key={sponsor?.id} className="dashboard-card p-8 hover:shadow-elevation transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                    <Image 
                      src={sponsor?.logo} 
                      alt={`${sponsor?.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{sponsor?.name}</h3>
                    <p className="text-sm text-text-secondary">Partner since {sponsor?.partnership_since}</p>
                  </div>
                </div>
                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getTierColor(sponsor?.tier)}`}>
                  <Icon name={getTierIcon(sponsor?.tier)} size={16} />
                  <span>{sponsor?.tier}</span>
                </div>
              </div>

              <blockquote className="text-text-secondary italic mb-6 border-l-4 border-primary pl-4">
                "{sponsor?.testimonial}"
              </blockquote>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">{sponsor?.contact_person}</p>
                  <p className="text-sm text-text-secondary">{sponsor?.position}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                    <Icon name="TrendingUp" size={16} className="mr-2 text-accent" />
                    Partnership Benefits Delivered
                  </h4>
                  <ul className="space-y-1">
                    {sponsor?.benefits_received?.map((benefit, index) => (
                      <li key={index} className="text-sm text-text-secondary flex items-center">
                        <Icon name="CheckCircle" size={14} className="mr-2 text-green-600 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="DollarSign" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-text-primary">Investment: {sponsor?.investment}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <Icon name="TrendingUp" size={16} />
                    <span className="text-sm font-medium">Active Partnership</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Join Our Partner Network
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              These success stories represent just the beginning. Partner with RocketryXyz to access emerging aerospace talent, 
              gain industry visibility, and support the next generation of engineers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg">
                <Icon name="Users" size={16} className="text-primary" />
                <span className="text-sm font-medium">50+ Alumni in Industry</span>
              </div>
              <div className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg">
                <Icon name="Award" size={16} className="text-accent" />
                <span className="text-sm font-medium">15 Competition Wins</span>
              </div>
              <div className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg">
                <Icon name="Eye" size={16} className="text-secondary" />
                <span className="text-sm font-medium">2M+ Media Impressions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorShowcase;