import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const sponsors = [
    {
      name: "SpaceX",
      logo: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=200&h=100&fit=crop",
      tier: "Platinum Partner"
    },
    {
      name: "NASA",
      logo: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?w=200&h=100&fit=crop",
      tier: "Government Partner"
    },
    {
      name: "Blue Origin",
      logo: "https://images.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg?w=200&h=100&fit=crop",
      tier: "Gold Partner"
    },
    {
      name: "Lockheed Martin",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop",
      tier: "Industry Partner"
    },
    {
      name: "Boeing",
      logo: "https://images.pexels.com/photos/8500/food-dinner-lunch-unhealthy.jpg?w=200&h=100&fit=crop",
      tier: "Strategic Partner"
    },
    {
      name: "Northrop Grumman",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop",
      tier: "Technology Partner"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Senior Propulsion Engineer",
      company: "SpaceX",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      quote: "The technical excellence and innovative approach demonstrated by RocketryXyz consistently impresses our engineering teams. Their students are among the most prepared candidates we\'ve encountered.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Aerospace Program Manager",
      company: "NASA Goddard",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      quote: "RocketryXyz represents the future of aerospace engineering education. Their commitment to safety, innovation, and community impact aligns perfectly with NASA's mission values.",
      rating: 5
    },
    {
      id: 3,
      name: "Jennifer Park",
      title: "Chief Technology Officer",
      company: "Blue Origin",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      quote: "We've hired multiple RocketryXyz alumni who have made immediate and significant contributions to our programs. The hands-on experience they gain is invaluable.",
      rating: 5
    }
  ];

  const competitionRankings = [
    {
      competition: "IREC 2023",
      rank: "1st Place",
      participants: "127 teams",
      category: "10,000ft COTS",
      score: "98.7/100"
    },
    {
      competition: "NASA USLI 2023",
      rank: "8th Place",
      participants: "44 teams",
      category: "University Division",
      score: "95.2/100"
    },
    {
      competition: "ESRA Challenge",
      rank: "2nd Place",
      participants: "89 teams",
      category: "European Division",
      score: "96.8/100"
    }
  ];

  const mediaFeatures = [
    {
      outlet: "Aerospace Engineering Magazine",
      title: "Student Innovation Spotlight",
      date: "December 2023",
      type: "Feature Article"
    },
    {
      outlet: "Space News",
      title: "Rising Stars in Rocketry",
      date: "November 2023",
      type: "Industry Profile"
    },
    {
      outlet: "IEEE Spectrum",
      title: "Next-Gen Avionics Design",
      date: "October 2023",
      type: "Technical Feature"
    }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(testimonialInterval);
  }, [testimonials?.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-slate-600"}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={20} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Industry Recognition</h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Trusted by aerospace leaders and recognized by industry professionals worldwide
          </p>
        </div>

        {/* Sponsor Logos */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white text-center mb-8">Proud Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {sponsors?.map((sponsor, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white/10 backdrop-blur-sm border border-slate-600 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={sponsor?.logo}
                    alt={sponsor?.name}
                    className="w-full h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="mt-2">
                  <div className="text-white text-sm font-semibold">{sponsor?.name}</div>
                  <div className="text-slate-400 text-xs">{sponsor?.tier}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white text-center mb-8">What Industry Leaders Say</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-2xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <Icon name="Quote" size={128} className="text-orange-500" />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Testimonial Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(testimonials?.[currentTestimonial]?.rating)}
                    </div>
                    <blockquote className="text-lg text-slate-200 leading-relaxed italic">
                      "{testimonials?.[currentTestimonial]?.quote}"
                    </blockquote>
                    <div className="pt-4 border-t border-slate-600">
                      <div className="text-white font-semibold">
                        {testimonials?.[currentTestimonial]?.name}
                      </div>
                      <div className="text-orange-400 font-medium">
                        {testimonials?.[currentTestimonial]?.title}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {testimonials?.[currentTestimonial]?.company}
                      </div>
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-500/30">
                      <Image
                        src={testimonials?.[currentTestimonial]?.image}
                        alt={testimonials?.[currentTestimonial]?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentTestimonial ? 'bg-orange-500' : 'bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competition Rankings */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white text-center mb-8">Competition Excellence</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {competitionRankings?.map((ranking, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-xl p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <Icon name="Trophy" size={28} color="white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{ranking?.competition}</h4>
                    <p className="text-orange-400 font-semibold text-xl">{ranking?.rank}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Participants:</span>
                      <span className="text-white">{ranking?.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Category:</span>
                      <span className="text-white">{ranking?.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Score:</span>
                      <span className="text-green-400 font-mono">{ranking?.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white text-center mb-8">Media Coverage</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaFeatures?.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-slate-500 transition-colors duration-200">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Newspaper" size={20} className="text-blue-400" />
                    <span className="text-blue-400 font-semibold text-sm">{feature?.type}</span>
                  </div>
                  <h4 className="text-white font-semibold">{feature?.title}</h4>
                  <div className="text-slate-400 text-sm">
                    <div>{feature?.outlet}</div>
                    <div>{feature?.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg border border-slate-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Success Story</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Partner with us to shape the future of aerospace engineering and support the next generation of space pioneers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partnership-launchpad">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Handshake"
                  iconPosition="left"
                  className="bg-orange-600 hover:bg-orange-700 px-8 py-4 text-lg font-semibold"
                >
                  Become a Partner
                </Button>
              </Link>
              <Link to="/communication-hub">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="MessageSquare"
                  iconPosition="left"
                  className="border-blue-400 text-blue-300 hover:bg-blue-400/10 px-8 py-4 text-lg font-semibold"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;