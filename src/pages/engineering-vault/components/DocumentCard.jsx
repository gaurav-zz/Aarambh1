import React from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const DocumentCard = ({ document, onView, onDownload }) => {
  const getDocumentIcon = (type) => {
    switch (type) {
      case 'design-report': return 'FileText';
      case 'simulation': return 'BarChart3';
      case 'code': return 'Code';
      case 'tutorial': return 'BookOpen';
      case 'research': return 'Microscope';
      default: return 'File';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'design-report': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'simulation': return 'bg-green-100 text-green-800 border-green-200';
      case 'code': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'tutorial': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'research': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-elevation transition-all duration-300 aerospace-transition">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={getDocumentIcon(document?.type)} size={24} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-text-primary truncate">{document?.title}</h3>
            <p className="text-sm text-text-secondary">{document?.project}</p>
          </div>
        </div>
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(document?.type)}`}>
          {document?.type?.replace('-', ' ')?.toUpperCase()}
        </span>
      </div>
      <p className="text-text-secondary text-sm mb-4 line-clamp-3">{document?.description}</p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-xs text-text-secondary">
          <span className="flex items-center space-x-1">
            <Icon name="Calendar" size={14} />
            <span>{document?.date}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="User" size={14} />
            <span>{document?.author}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="HardDrive" size={14} />
            <span>{formatFileSize(document?.size)}</span>
          </span>
        </div>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 })?.map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={i < document?.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      {document?.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {document?.tags?.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-2 text-xs text-text-secondary">
          <Icon name="Download" size={14} />
          <span>{document?.downloads} downloads</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Eye"
            iconPosition="left"
            onClick={() => onView(document)}
          >
            View
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Download"
            iconPosition="left"
            onClick={() => onDownload(document)}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;