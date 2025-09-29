import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, onSortChange, sortBy, viewMode, onViewModeChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e?.target?.value);
    if (e?.target?.value === '') {
      onSearch('');
    }
  };

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'date-desc', label: 'Newest First' },
    { value: 'date-asc', label: 'Oldest First' },
    { value: 'title-asc', label: 'Title A-Z' },
    { value: 'title-desc', label: 'Title Z-A' },
    { value: 'downloads', label: 'Most Downloaded' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  return (
    <div className="bg-card border-b border-border p-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center space-x-4 mb-4">
          <div className="flex-1 relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search technical documents, simulations, code repositories..."
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-input text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  onSearch('');
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary"
              >
                <Icon name="X" size={16} />
              </button>
            )}
          </div>
          
          <Button
            type="submit"
            variant="default"
            iconName="Search"
            iconPosition="left"
          >
            Search
          </Button>
          
          <Button
            variant="outline"
            iconName="SlidersHorizontal"
            iconPosition="left"
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          >
            Advanced
          </Button>
        </form>

        {/* Advanced Search Options */}
        {isAdvancedOpen && (
          <div className="bg-muted/30 rounded-lg p-4 mb-4 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Author
                </label>
                <input
                  type="text"
                  placeholder="Search by author name"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Date Range
                </label>
                <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Any time</option>
                  <option value="last-week">Last week</option>
                  <option value="last-month">Last month</option>
                  <option value="last-quarter">Last quarter</option>
                  <option value="last-year">Last year</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  File Size
                </label>
                <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Any size</option>
                  <option value="small">Small (&lt; 1MB)</option>
                  <option value="medium">Medium (1-10MB)</option>
                  <option value="large">Large (&gt; 10MB)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Controls Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-text-secondary">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e?.target?.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {sortOptions?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="h-6 w-px bg-border"></div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-text-secondary">View:</span>
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => onViewModeChange('grid')}
                  className={`p-2 transition-colors duration-150 ${
                    viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name="Grid3X3" size={16} />
                </button>
                <button
                  onClick={() => onViewModeChange('list')}
                  className={`p-2 transition-colors duration-150 ${
                    viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name="List" size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <span>Showing 1-20 of 77 documents</span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                iconName="ChevronLeft"
                disabled
              />
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded">1</span>
              <span className="px-3 py-1 hover:bg-muted rounded cursor-pointer">2</span>
              <span className="px-3 py-1 hover:bg-muted rounded cursor-pointer">3</span>
              <Button
                variant="outline"
                size="sm"
                iconName="ChevronRight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;