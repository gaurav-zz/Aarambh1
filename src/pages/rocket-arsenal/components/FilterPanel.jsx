import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterPanel = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  totalResults,
  isCollapsed,
  onToggleCollapse 
}) => {
  const competitionOptions = [
    { value: 'all', label: 'All Competitions' },
    { value: 'spaceport-america-cup', label: 'Spaceport America Cup' },
    { value: 'nasa-usli', label: 'NASA USLI' },
    { value: 'irec', label: 'IREC' },
    { value: 'battle-of-rockets', label: 'Battle of the Rockets' }
  ];

  const yearOptions = [
    { value: 'all', label: 'All Years' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'retired', label: 'Retired' },
    { value: 'development', label: 'In Development' },
    { value: 'testing', label: 'Testing Phase' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'high-power', label: 'High Power' },
    { value: 'mid-power', label: 'Mid Power' },
    { value: 'low-power', label: 'Low Power' },
    { value: 'experimental', label: 'Experimental' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'performance', label: 'Best Performance' },
    { value: 'altitude', label: 'Highest Altitude' },
    { value: 'name', label: 'Name A-Z' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl shadow-card">
      {/* Filter Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon name="Filter" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary">Filter Arsenal</h3>
            <p className="text-sm text-text-secondary">
              {totalResults} rocket{totalResults !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="RotateCcw"
            iconPosition="left"
            onClick={onClearFilters}
          >
            Clear All
          </Button>
          <Button
            variant="ghost"
            size="icon"
            iconName={isCollapsed ? "ChevronDown" : "ChevronUp"}
            onClick={onToggleCollapse}
          />
        </div>
      </div>
      {/* Filter Content */}
      <div className={`transition-all duration-300 overflow-hidden ${
        isCollapsed ? 'max-h-0' : 'max-h-screen'
      }`}>
        <div className="p-6 space-y-6">
          {/* Primary Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select
              label="Competition"
              options={competitionOptions}
              value={filters?.competition}
              onChange={(value) => onFilterChange('competition', value)}
              className="w-full"
            />
            
            <Select
              label="Year"
              options={yearOptions}
              value={filters?.year}
              onChange={(value) => onFilterChange('year', value)}
              className="w-full"
            />
            
            <Select
              label="Status"
              options={statusOptions}
              value={filters?.status}
              onChange={(value) => onFilterChange('status', value)}
              className="w-full"
            />
            
            <Select
              label="Category"
              options={categoryOptions}
              value={filters?.category}
              onChange={(value) => onFilterChange('category', value)}
              className="w-full"
            />
          </div>

          {/* Secondary Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="Sort By"
              options={sortOptions}
              value={filters?.sortBy}
              onChange={(value) => onFilterChange('sortBy', value)}
              className="w-full"
            />
            
            {/* Performance Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">
                Min Performance Score
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters?.minPerformance}
                  onChange={(e) => onFilterChange('minPerformance', e?.target?.value)}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-text-secondary mt-1">
                  <span>0%</span>
                  <span className="font-medium text-primary">{filters?.minPerformance}%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">
                Quick Filters
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onFilterChange('hasVideo', !filters?.hasVideo)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors duration-200 ${
                    filters?.hasVideo
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-text-secondary hover:bg-primary/10'
                  }`}
                >
                  <Icon name="Video" size={12} className="inline mr-1" />
                  Has Video
                </button>
                <button
                  onClick={() => onFilterChange('has3DModel', !filters?.has3DModel)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors duration-200 ${
                    filters?.has3DModel
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-text-secondary hover:bg-primary/10'
                  }`}
                >
                  <Icon name="Box" size={12} className="inline mr-1" />
                  3D Model
                </button>
                <button
                  onClick={() => onFilterChange('hasCAD', !filters?.hasCAD)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors duration-200 ${
                    filters?.hasCAD
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-text-secondary hover:bg-primary/10'
                  }`}
                >
                  <Icon name="FileText" size={12} className="inline mr-1" />
                  CAD Files
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(filters?.competition !== 'all' || filters?.year !== 'all' || filters?.status !== 'all' || 
            filters?.category !== 'all' || filters?.minPerformance > 0 || filters?.hasVideo || 
            filters?.has3DModel || filters?.hasCAD) && (
            <div className="pt-4 border-t border-border">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Tag" size={16} className="text-primary" />
                <span className="text-sm font-medium text-text-primary">Active Filters:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters?.competition !== 'all' && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full flex items-center space-x-1">
                    <span>Competition: {competitionOptions?.find(opt => opt?.value === filters?.competition)?.label}</span>
                    <button onClick={() => onFilterChange('competition', 'all')}>
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
                {filters?.year !== 'all' && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full flex items-center space-x-1">
                    <span>Year: {filters?.year}</span>
                    <button onClick={() => onFilterChange('year', 'all')}>
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
                {filters?.status !== 'all' && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full flex items-center space-x-1">
                    <span>Status: {statusOptions?.find(opt => opt?.value === filters?.status)?.label}</span>
                    <button onClick={() => onFilterChange('status', 'all')}>
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
                {filters?.minPerformance > 0 && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full flex items-center space-x-1">
                    <span>Min Performance: {filters?.minPerformance}%</span>
                    <button onClick={() => onFilterChange('minPerformance', 0)}>
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;