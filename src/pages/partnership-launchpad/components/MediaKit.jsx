import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const MediaKit = () => {
  const [downloadStatus, setDownloadStatus] = useState({});

  const mediaKitSections = [
    {
      id: 'brand_assets',
      title: 'Brand Assets & Logos',
      description: 'High-resolution logos, brand guidelines, and visual identity elements',
      icon: 'Palette',
      files: [
        { name: 'RocketryXyz Logo Package', format: 'ZIP', size: '15.2 MB', type: 'logos' },
        { name: 'Brand Guidelines', format: 'PDF', size: '8.5 MB', type: 'guidelines' },
        { name: 'Color Palette & Typography', format: 'PDF', size: '2.1 MB', type: 'colors' },
        { name: 'Mission Patches Collection', format: 'ZIP', size: '25.8 MB', type: 'patches' }
      ]
    },
    {
      id: 'photography',
      title: 'Photography & Visuals',
      description: 'Professional photos from competitions, launches, and team activities',
      icon: 'Camera',
      files: [
        { name: 'Competition Photography 2024', format: 'ZIP', size: '145.6 MB', type: 'photos' },
        { name: 'Launch Sequence Photos', format: 'ZIP', size: '89.3 MB', type: 'launches' },
        { name: 'Team & Facility Photos', format: 'ZIP', size: '67.2 MB', type: 'team' },
        { name: 'Rocket Detail Shots', format: 'ZIP', size: '112.4 MB', type: 'rockets' }
      ]
    },
    {
      id: 'video_content',
      title: 'Video Content',
      description: 'Launch videos, documentaries, and promotional content',
      icon: 'Video',
      files: [
        { name: 'Launch Compilation 2024', format: 'MP4', size: '2.1 GB', type: 'video' },
        { name: 'Team Documentary', format: 'MP4', size: '1.8 GB', type: 'documentary' },
        { name: 'Behind the Scenes', format: 'ZIP', size: '856 MB', type: 'bts' },
        { name: 'Promotional Videos', format: 'ZIP', size: '445 MB', type: 'promo' }
      ]
    },
    {
      id: 'press_materials',
      title: 'Press Materials',
      description: 'Press releases, fact sheets, and media coverage documentation',
      icon: 'FileText',
      files: [
        { name: 'Press Release Archive', format: 'ZIP', size: '12.8 MB', type: 'press' },
        { name: 'Team Fact Sheet 2024', format: 'PDF', size: '3.2 MB', type: 'facts' },
        { name: 'Competition Results Summary', format: 'PDF', size: '5.7 MB', type: 'results' },
        { name: 'Media Coverage Compilation', format: 'PDF', size: '18.9 MB', type: 'coverage' }
      ]
    },
    {
      id: 'technical_docs',
      title: 'Technical Documentation',
      description: 'Specifications, performance data, and technical achievements',
      icon: 'FileCode',
      files: [
        { name: 'Rocket Specifications', format: 'PDF', size: '24.6 MB', type: 'specs' },
        { name: 'Performance Data 2024', format: 'XLSX', size: '8.1 MB', type: 'data' },
        { name: 'Safety Protocols', format: 'PDF', size: '6.4 MB', type: 'safety' },
        { name: 'Innovation Highlights', format: 'PDF', size: '11.3 MB', type: 'innovation' }
      ]
    },
    {
      id: 'partnership_info',
      title: 'Partnership Information',
      description: 'Sponsorship packages, benefits overview, and partnership success stories',
      icon: 'Handshake',
      files: [
        { name: 'Sponsorship Prospectus 2024', format: 'PDF', size: '16.7 MB', type: 'prospectus' },
        { name: 'Partnership Benefits Guide', format: 'PDF', size: '9.2 MB', type: 'benefits' },
        { name: 'Success Stories & Testimonials', format: 'PDF', size: '7.8 MB', type: 'testimonials' },
        { name: 'ROI Analysis Report', format: 'PDF', size: '12.4 MB', type: 'roi' }
      ]
    }
  ];

  const quickStats = [
    { label: 'Media Assets', value: '500+', icon: 'Image' },
    { label: 'Video Hours', value: '25+', icon: 'Play' },
    { label: 'Press Articles', value: '45+', icon: 'Newspaper' },
    { label: 'Download Size', value: '3.2 GB', icon: 'Download' }
  ];

  const handleDownload = async (sectionId, fileType) => {
    setDownloadStatus(prev => ({ ...prev, [`${sectionId}_${fileType}`]: 'downloading' }));
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setDownloadStatus(prev => ({ ...prev, [`${sectionId}_${fileType}`]: 'completed' }));
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setDownloadStatus(prev => ({ ...prev, [`${sectionId}_${fileType}`]: null }));
    }, 3000);
  };

  const handleDownloadAll = async () => {
    setDownloadStatus(prev => ({ ...prev, 'all': 'downloading' }));
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setDownloadStatus(prev => ({ ...prev, 'all': 'completed' }));
    
    setTimeout(() => {
      setDownloadStatus(prev => ({ ...prev, 'all': null }));
    }, 3000);
  };

  const getDownloadButtonProps = (sectionId, fileType) => {
    const key = `${sectionId}_${fileType}`;
    const status = downloadStatus?.[key];
    
    switch (status) {
      case 'downloading':
        return { loading: true, children: 'Downloading...' };
      case 'completed':
        return { variant: 'success', iconName: 'Check', children: 'Downloaded' };
      default:
        return { iconName: 'Download', children: 'Download' };
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <Icon name="FolderOpen" size={20} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Media Resources</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            RocketryXyz Media Kit
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Access our comprehensive media kit featuring high-quality assets, technical documentation, 
            and partnership materials. Everything you need to showcase our collaboration.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickStats?.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
              <Icon name={stat?.icon} size={32} className="text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-primary">{stat?.value}</div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Download All Section */}
        <div className="dashboard-card p-8 mb-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Complete Media Kit</h3>
              <p className="text-text-secondary">Download the entire media kit package (3.2 GB) with all assets and documentation</p>
            </div>
            <Button
              variant="default"
              size="lg"
              onClick={handleDownloadAll}
              className="bg-accent hover:bg-accent/90"
              {...getDownloadButtonProps('all', 'complete')}
            >
              {downloadStatus?.all === 'downloading' ? 'Preparing Download...' : 
               downloadStatus?.all === 'completed' ? 'Download Complete!' : 
               'Download Complete Kit'}
            </Button>
          </div>
        </div>

        {/* Media Kit Sections */}
        <div className="space-y-8">
          {mediaKitSections?.map((section) => (
            <div key={section?.id} className="dashboard-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={section?.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{section?.title}</h3>
                  <p className="text-text-secondary">{section?.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section?.files?.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                        <Icon 
                          name={file?.format === 'ZIP' ? 'Archive' : 
                                file?.format === 'PDF' ? 'FileText' : 
                                file?.format === 'MP4' ? 'Video' : 
                                file?.format === 'XLSX' ? 'FileSpreadsheet' : 'File'} 
                          size={20} 
                          className="text-text-secondary" 
                        />
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{file?.name}</p>
                        <p className="text-sm text-text-secondary">{file?.format} • {file?.size}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(section?.id, file?.type)}
                      {...getDownloadButtonProps(section?.id, file?.type)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Guidelines */}
        <div className="mt-12 dashboard-card p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
            <Icon name="Info" size={24} className="mr-2 text-primary" />
            Usage Guidelines & Licensing
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-text-primary mb-3">Permitted Uses</h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Partnership marketing and promotional materials</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Press releases and media coverage</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Social media posts and campaigns</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Internal presentations and reports</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Educational and recruitment purposes</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-primary mb-3">Requirements</h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <Icon name="AlertCircle" size={16} className="mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Attribution required for all media usage</span>
                </li>
                <li className="flex items-start">
                  <Icon name="AlertCircle" size={16} className="mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>No modification of logos without approval</span>
                </li>
                <li className="flex items-start">
                  <Icon name="AlertCircle" size={16} className="mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Commercial use requires partnership agreement</span>
                </li>
                <li className="flex items-start">
                  <Icon name="AlertCircle" size={16} className="mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>High-resolution files for print applications</span>
                </li>
                <li className="flex items-start">
                  <Icon name="AlertCircle" size={16} className="mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Credit "RocketryXyz Team" for photography</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-3">
              <Icon name="Mail" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-blue-800 font-medium">Questions about usage rights?</p>
                <p className="text-blue-700 text-sm">
                  Contact our media relations team at media@rocketryxyz.edu for clarification on usage guidelines 
                  or to request custom assets for your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 bg-muted/30 px-8 py-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} className="text-primary" />
              <span className="text-sm text-text-secondary">media@rocketryxyz.edu</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-primary" />
              <span className="text-sm text-text-secondary">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span className="text-sm text-text-secondary">Updated: September 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;