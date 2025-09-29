import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const DocumentViewer = ({ document, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);

  if (!document) return null;

  const mockPages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1581092795442-6d4b3b8c6b8b?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd4789?w=800&h=1000&fit=crop"
  ];

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, mockPages?.length));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="bg-background w-full h-full max-w-6xl max-h-[90vh] rounded-lg shadow-modal flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="FileText" size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-text-primary">{document?.title}</h2>
              <p className="text-sm text-text-secondary">{document?.project}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
            >
              Download
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={onClose}
            />
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                iconName="ChevronLeft"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              />
              <span className="text-sm text-text-secondary px-3">
                {currentPage} of {mockPages?.length}
              </span>
              <Button
                variant="outline"
                size="sm"
                iconName="ChevronRight"
                onClick={handleNextPage}
                disabled={currentPage === mockPages?.length}
              />
            </div>
            
            <div className="h-6 w-px bg-border"></div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                iconName="ZoomOut"
                onClick={handleZoomOut}
                disabled={zoomLevel === 50}
              />
              <span className="text-sm text-text-secondary px-3 min-w-[60px] text-center">
                {zoomLevel}%
              </span>
              <Button
                variant="outline"
                size="sm"
                iconName="ZoomIn"
                onClick={handleZoomIn}
                disabled={zoomLevel === 200}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="RotateCcw"
            />
            <Button
              variant="outline"
              size="sm"
              iconName="Maximize2"
            />
            <Button
              variant="outline"
              size="sm"
              iconName="Printer"
            />
          </div>
        </div>

        {/* Document Content */}
        <div className="flex-1 overflow-auto bg-gray-100 p-8">
          <div className="flex justify-center">
            <div 
              className="bg-white shadow-card rounded-lg overflow-hidden"
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
            >
              <Image
                src={mockPages?.[currentPage - 1]}
                alt={`Page ${currentPage} of ${document?.title}`}
                className="w-full h-auto max-w-2xl"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-border bg-muted/30">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <span>Author: {document?.author}</span>
            <span>•</span>
            <span>Date: {document?.date}</span>
            <span>•</span>
            <span>Version: {document?.version || '1.0'}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Share"
              iconPosition="left"
            >
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="BookmarkPlus"
              iconPosition="left"
            >
              Bookmark
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;