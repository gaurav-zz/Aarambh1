import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialMediaHub = () => {
  const [activeTab, setActiveTab] = useState('feeds');
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    setShareUrl(window.location?.origin);
  }, []);

  const socialPlatforms = [
    {
      name: 'Instagram',
      handle: '@rocketryxyz',
      url: 'https://instagram.com/rocketryxyz',
      icon: 'Instagram',
      followers: '12.5K',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      description: 'Behind-the-scenes content, launch photos, and team moments'
    },
    {
      name: 'Twitter',
      handle: '@RocketryXyz',
      url: 'https://twitter.com/rocketryxyz',
      icon: 'Twitter',
      followers: '8.2K',
      color: 'bg-blue-500',
      description: 'Real-time updates, competition results, and technical insights'
    },
    {
      name: 'YouTube',
      handle: 'RocketryXyz Team',
      url: 'https://youtube.com/@rocketryxyz',
      icon: 'Youtube',
      followers: '15.8K',
      color: 'bg-red-600',
      description: 'Launch videos, tutorials, and documentary content'
    },
    {
      name: 'LinkedIn',
      handle: 'RocketryXyz University Team',
      url: 'https://linkedin.com/company/rocketryxyz',
      icon: 'Linkedin',
      followers: '3.4K',
      color: 'bg-blue-700',
      description: 'Professional updates, career opportunities, and industry connections'
    },
    {
      name: 'TikTok',
      handle: '@rocketryxyz',
      url: 'https://tiktok.com/@rocketryxyz',
      icon: 'Music',
      followers: '25.1K',
      color: 'bg-black',
      description: 'Quick experiments, fun content, and viral rocket moments'
    },
    {
      name: 'Discord',
      handle: 'RocketryXyz Community',
      url: 'https://discord.gg/rocketryxyz',
      icon: 'MessageSquare',
      followers: '2.8K',
      color: 'bg-indigo-600',
      description: 'Community discussions, live Q&A, and team collaboration'
    }
  ];

  const recentPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: "🚀 T-minus 3 days until our next test launch! The team has been working around the clock to perfect our new recovery system. Can\'t wait to see it in action! #RocketryXyz #StudentRocketry #STEM",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
      timestamp: "2 hours ago",
      likes: 342,
      comments: 28,
      shares: 15
    },
    {
      id: 2,
      platform: 'Twitter',
      content: "Breaking: Our team just achieved a new altitude record of 15,847 feet at the Regional Competition! 🎯 Huge thanks to our sponsors and the incredible engineering team. Full results coming soon! #Victory",
      timestamp: "5 hours ago",
      likes: 156,
      comments: 42,
      shares: 89
    },
    {
      id: 3,
      platform: 'YouTube',
      content: "New video is live! \'Building a Rocket Engine from Scratch - Part 3: Testing & Validation\' featuring our propulsion team\'s latest innovations. Link in bio!",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      timestamp: "1 day ago",
      likes: 892,
      comments: 67,
      shares: 234
    },
    {
      id: 4,
      platform: 'LinkedIn',
      content: "Proud to announce our partnership with AeroTech Industries! This collaboration will provide our team with advanced materials and mentorship opportunities. Together, we're pushing the boundaries of student rocketry.",
      timestamp: "2 days ago",
      likes: 78,
      comments: 12,
      shares: 34
    }
  ];

  const shareOptions = [
    { name: 'Twitter', icon: 'Twitter', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=Check out RocketryXyz - an amazing student rocketry team!` },
    { name: 'Facebook', icon: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { name: 'LinkedIn', icon: 'Linkedin', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    { name: 'WhatsApp', icon: 'MessageCircle', url: `https://wa.me/?text=Check out RocketryXyz: ${encodeURIComponent(shareUrl)}` },
    { name: 'Email', icon: 'Mail', url: `mailto:?subject=Check out RocketryXyz&body=I thought you might be interested in this amazing student rocketry team: ${shareUrl}` }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShare = (shareUrl) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard?.writeText(shareUrl);
      // You could add a toast notification here
      console.log('URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-primary mb-2">Social Media Hub</h3>
        <p className="text-text-secondary">
          Stay connected with our community across all platforms and share our mission.
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('feeds')}
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
            activeTab === 'feeds' ?'bg-background text-primary shadow-sm' :'text-text-secondary hover:text-primary'
          }`}
        >
          Live Feeds
        </button>
        <button
          onClick={() => setActiveTab('platforms')}
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
            activeTab === 'platforms'
              ? 'bg-background text-primary shadow-sm' :'text-text-secondary hover:text-primary'
          }`}
        >
          Platforms
        </button>
        <button
          onClick={() => setActiveTab('share')}
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
            activeTab === 'share' ?'bg-background text-primary shadow-sm' :'text-text-secondary hover:text-primary'
          }`}
        >
          Share
        </button>
      </div>
      {/* Live Feeds Tab */}
      {activeTab === 'feeds' && (
        <div className="space-y-6">
          {recentPosts?.map((post) => (
            <div key={post?.id} className="bg-muted border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Rocket" size={16} color="white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-primary">RocketryXyz</span>
                    <span className="text-sm text-text-secondary">•</span>
                    <span className="text-sm text-text-secondary">{post?.platform}</span>
                  </div>
                  <span className="text-xs text-text-secondary">{post?.timestamp}</span>
                </div>
              </div>
              
              <p className="text-text-primary mb-3">{post?.content}</p>
              
              {post?.image && (
                <div className="mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={post?.image}
                    alt="Social media post"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              
              <div className="flex items-center space-x-6 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Heart" size={16} />
                  <span>{post?.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageCircle" size={16} />
                  <span>{post?.comments}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Share" size={16} />
                  <span>{post?.shares}</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center">
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="left"
              onClick={() => handleSocialClick('https://linktr.ee/rocketryxyz')}
            >
              View All Social Media
            </Button>
          </div>
        </div>
      )}
      {/* Platforms Tab */}
      {activeTab === 'platforms' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialPlatforms?.map((platform) => (
            <div key={platform?.name} className="bg-muted border border-border rounded-lg p-4 hover:shadow-card transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${platform?.color} rounded-lg flex items-center justify-center text-white`}>
                  <Icon name={platform?.icon} size={24} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-primary">{platform?.name}</h4>
                    <span className="text-sm text-text-secondary">{platform?.followers}</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-2">{platform?.handle}</p>
                  <p className="text-xs text-text-secondary mb-3">{platform?.description}</p>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSocialClick(platform?.url)}
                    iconName="ExternalLink"
                    iconPosition="left"
                    className="w-full"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Share Tab */}
      {activeTab === 'share' && (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-primary mb-3">Share RocketryXyz</h4>
            <p className="text-text-secondary mb-4">
              Help us spread the word about our mission and inspire others to join the aerospace community.
            </p>
          </div>

          {/* Share URL */}
          <div className="bg-muted border border-border rounded-lg p-4">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Share URL
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                iconName="Copy"
                iconPosition="left"
              >
                Copy
              </Button>
            </div>
          </div>

          {/* Share Options */}
          <div>
            <h5 className="text-sm font-medium text-text-primary mb-3">Share on Social Media</h5>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {shareOptions?.map((option) => (
                <Button
                  key={option?.name}
                  variant="outline"
                  onClick={() => handleShare(option?.url)}
                  iconName={option?.icon}
                  iconPosition="left"
                  className="justify-center"
                >
                  {option?.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Hashtags */}
          <div className="bg-muted border border-border rounded-lg p-4">
            <h5 className="text-sm font-medium text-text-primary mb-3">Recommended Hashtags</h5>
            <div className="flex flex-wrap gap-2">
              {[
                '#RocketryXyz', '#StudentRocketry', '#STEM', '#Aerospace', '#Engineering',
                '#Innovation', '#Competition', '#University', '#Rockets', '#Space'
              ]?.map((hashtag) => (
                <span
                  key={hashtag}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full cursor-pointer hover:bg-primary/20 transition-colors duration-200"
                  onClick={() => navigator.clipboard?.writeText(hashtag)}
                >
                  {hashtag}
                </span>
              ))}
            </div>
            <p className="text-xs text-text-secondary mt-2">
              Click any hashtag to copy it to your clipboard
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Mail" size={24} color="white" />
              </div>
              <div className="flex-1">
                <h5 className="text-lg font-semibold text-primary mb-2">Stay Updated</h5>
                <p className="text-text-secondary mb-4">
                  Subscribe to our newsletter for exclusive updates, behind-the-scenes content, and early access to launch announcements.
                </p>
                <Button
                  variant="default"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-primary hover:bg-primary/90"
                >
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaHub;