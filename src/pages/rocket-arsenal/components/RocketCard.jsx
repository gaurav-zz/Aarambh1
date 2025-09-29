import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RocketCard = ({ rocket, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'retired': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'development': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'testing': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPerformanceColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="group bg-card border border-border rounded-xl shadow-card hover:shadow-elevation transition-all duration-300 aerospace-transition overflow-hidden">
      {/* Rocket Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        <Image
          src={rocket?.image}
          alt={rocket?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(rocket?.status)}`}>
          {rocket?.status?.charAt(0)?.toUpperCase() + rocket?.status?.slice(1)}
        </div>

        {/* Mission Patch */}
        {rocket?.missionPatch && (
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src={rocket?.missionPatch}
              alt={`${rocket?.name} Mission Patch`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors duration-200">
              {rocket?.name}
            </h3>
            <p className="text-sm text-text-secondary font-medium">
              {rocket?.competition} • {rocket?.year}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Trophy" size={16} className="text-accent" />
            <span className="text-sm font-bold text-accent">#{rocket?.ranking}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {rocket?.description}
        </p>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Ruler" size={14} className="text-primary" />
              <span className="text-xs font-medium text-text-secondary">Height</span>
            </div>
            <p className="text-sm font-bold text-text-primary">{rocket?.specifications?.height}</p>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Weight" size={14} className="text-primary" />
              <span className="text-xs font-medium text-text-secondary">Mass</span>
            </div>
            <p className="text-sm font-bold text-text-primary">{rocket?.specifications?.mass}</p>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Zap" size={14} className="text-primary" />
              <span className="text-xs font-medium text-text-secondary">Motor</span>
            </div>
            <p className="text-sm font-bold text-text-primary">{rocket?.specifications?.motor}</p>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Target" size={14} className="text-primary" />
              <span className="text-xs font-medium text-text-secondary">Altitude</span>
            </div>
            <p className="text-sm font-bold text-text-primary">{rocket?.specifications?.maxAltitude}</p>
          </div>
        </div>

        {/* Performance Score */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-text-secondary">Performance Score</span>
          <div className="flex items-center space-x-2">
            <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full ${rocket?.performanceScore >= 90 ? 'bg-green-500' : rocket?.performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                style={{ width: `${rocket?.performanceScore}%` }}
              ></div>
            </div>
            <span className={`text-sm font-bold ${getPerformanceColor(rocket?.performanceScore)}`}>
              {rocket?.performanceScore}%
            </span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {rocket?.technologies?.slice(0, 3)?.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {rocket?.technologies?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs font-medium rounded-md">
              +{rocket?.technologies?.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="default"
            size="sm"
            iconName="Eye"
            iconPosition="left"
            onClick={() => onViewDetails(rocket)}
            className="flex-1"
          >
            View Details
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
            className="flex-1"
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RocketCard;