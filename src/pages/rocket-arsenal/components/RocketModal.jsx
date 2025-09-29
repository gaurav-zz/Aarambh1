import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RocketModal = ({ rocket, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [is3DViewActive, setIs3DViewActive] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e?.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !rocket) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'specifications', label: 'Specifications', icon: 'Settings' },
    { id: 'performance', label: 'Performance', icon: 'TrendingUp' },
    { id: 'gallery', label: 'Gallery', icon: 'Image' },
    { id: 'documentation', label: 'Documentation', icon: 'FileText' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === rocket?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? rocket?.gallery?.length - 1 : prev - 1
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'retired': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'development': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'testing': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Mission Overview */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Mission Overview</h3>
              <p className="text-text-secondary leading-relaxed">{rocket?.fullDescription}</p>
            </div>
            {/* Key Achievements */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rocket?.achievements?.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                    <Icon name="Award" size={20} className="text-accent mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-text-primary">{achievement?.title}</h4>
                      <p className="text-sm text-text-secondary">{achievement?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Technologies Used */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Technologies & Innovations</h3>
              <div className="flex flex-wrap gap-2">
                {rocket?.technologies?.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'specifications':
        return (
          <div className="space-y-6">
            {/* Technical Specifications Table */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">Technical Specifications</h3>
              <div className="bg-muted rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    {Object.entries(rocket?.detailedSpecs)?.map(([key, value], index) => (
                      <tr key={index} className="hover:bg-background/50">
                        <td className="px-4 py-3 text-sm font-medium text-text-secondary capitalize">
                          {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                        </td>
                        <td className="px-4 py-3 text-sm font-bold text-text-primary">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* 3D Model Viewer */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">3D Model Viewer</h3>
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg h-80 flex items-center justify-center border border-border">
                {is3DViewActive ? (
                  <div className="text-center">
                    <Icon name="Box" size={48} className="text-primary mx-auto mb-4" />
                    <p className="text-text-primary font-medium">3D Model Loading...</p>
                    <p className="text-sm text-text-secondary">Interactive 3D viewer would be integrated here</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Icon name="Play" size={48} className="text-primary mx-auto mb-4" />
                    <Button
                      variant="default"
                      iconName="Box"
                      iconPosition="left"
                      onClick={() => setIs3DViewActive(true)}
                    >
                      Launch 3D Viewer
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="space-y-6">
            {/* Performance Metrics */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">Flight Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rocket?.performanceMetrics?.map((metric, index) => (
                  <div key={index} className="bg-muted rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name={metric?.icon} size={20} className="text-primary" />
                      <span className="text-sm font-medium text-text-secondary">{metric?.label}</span>
                    </div>
                    <p className="text-2xl font-bold text-text-primary">{metric?.value}</p>
                    <p className="text-xs text-text-secondary">{metric?.unit}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Flight Data Chart */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">Flight Data Visualization</h3>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="BarChart3" size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-text-primary font-medium">Flight Data Chart</p>
                  <p className="text-sm text-text-secondary">Altitude vs Time visualization would be displayed here</p>
                </div>
              </div>
            </div>
            {/* Lessons Learned */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">Lessons Learned</h3>
              <div className="space-y-4">
                {rocket?.lessonsLearned?.map((lesson, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-text-primary mb-1">{lesson?.title}</h4>
                    <p className="text-text-secondary text-sm">{lesson?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-6">
            {/* Image Gallery */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">Photo Gallery</h3>
              <div className="relative">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={rocket?.gallery?.[currentImageIndex]}
                    alt={`${rocket?.name} Gallery Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Gallery Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {rocket?.gallery?.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                {rocket?.gallery?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Mission Patch */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">Mission Patch</h3>
              <div className="flex items-start space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                  <Image
                    src={rocket?.missionPatch}
                    alt={`${rocket?.name} Mission Patch`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-2">Design Story</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {rocket?.patchStory}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'documentation':
        return (
          <div className="space-y-6">
            {/* Technical Reports */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">Technical Documentation</h3>
              <div className="space-y-3">
                {rocket?.documentation?.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Icon name={doc?.type === 'pdf' ? 'FileText' : 'File'} size={20} className="text-primary" />
                      <div>
                        <h4 className="font-medium text-text-primary">{doc?.title}</h4>
                        <p className="text-sm text-text-secondary">{doc?.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-text-secondary">{doc?.size}</span>
                      <Button variant="outline" size="sm" iconName="Download">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* CAD Files */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">CAD Files & Models</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rocket?.cadFiles?.map((file, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon name="Box" size={20} className="text-primary" />
                      <h4 className="font-medium text-text-primary">{file?.name}</h4>
                    </div>
                    <p className="text-sm text-text-secondary mb-3">{file?.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-secondary">{file?.format} • {file?.size}</span>
                      <Button variant="outline" size="sm" iconName="Download">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        ref={modalRef}
        className="bg-card border border-border rounded-2xl shadow-modal max-w-6xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src={rocket?.missionPatch}
                alt={`${rocket?.name} Mission Patch`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">{rocket?.name}</h2>
              <div className="flex items-center space-x-3 mt-1">
                <span className="text-sm text-text-secondary">{rocket?.competition} • {rocket?.year}</span>
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(rocket?.status)}`}>
                  {rocket?.status?.charAt(0)?.toUpperCase() + rocket?.status?.slice(1)}
                </div>
              </div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            iconName="X"
            onClick={onClose}
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-border">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-primary hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {renderTabContent()}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/30">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon name="Trophy" size={16} className="text-accent" />
              <span className="text-sm font-medium text-text-secondary">
                Ranking: #{rocket?.ranking}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Target" size={16} className="text-primary" />
              <span className="text-sm font-medium text-text-secondary">
                Max Altitude: {rocket?.specifications?.maxAltitude}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              iconName="Share2"
              iconPosition="left"
            >
              Share
            </Button>
            <Button
              variant="default"
              iconName="Download"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90"
            >
              Download All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketModal;