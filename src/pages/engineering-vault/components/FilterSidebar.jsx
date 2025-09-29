import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters }) => {
  const documentTypes = [
    { id: 'design-report', label: 'Design Reports', count: 24 },
    { id: 'simulation', label: 'Simulation Results', count: 18 },
    { id: 'code', label: 'Source Code', count: 15 },
    { id: 'tutorial', label: 'Tutorials', count: 12 },
    { id: 'research', label: 'Research Papers', count: 8 }
  ];

  const projects = [
    { id: 'phoenix-mk3', label: 'Phoenix Mk-III', count: 32 },
    { id: 'atlas-v2', label: 'Atlas V2', count: 28 },
    { id: 'mercury-prototype', label: 'Mercury Prototype', count: 15 },
    { id: 'apollo-test', label: 'Apollo Test Vehicle', count: 12 }
  ];

  const categories = [
    { id: 'propulsion', label: 'Propulsion Systems', count: 25 },
    { id: 'aerodynamics', label: 'Aerodynamics', count: 20 },
    { id: 'recovery', label: 'Recovery Systems', count: 18 },
    { id: 'avionics', label: 'Avionics', count: 16 },
    { id: 'structures', label: 'Structures', count: 14 },
    { id: 'testing', label: 'Testing & Validation', count: 12 }
  ];

  const handleFilterToggle = (filterType, value) => {
    const currentValues = filters?.[filterType] || [];
    const newValues = currentValues?.includes(value)
      ? currentValues?.filter(v => v !== value)
      : [...currentValues, value];
    
    onFilterChange(filterType, newValues);
  };

  const isFilterActive = (filterType, value) => {
    return (filters?.[filterType] || [])?.includes(value);
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters)?.reduce((total, filterArray) => total + filterArray?.length, 0);
  };

  return (
    <div className="w-80 bg-card border-r border-border h-full overflow-y-auto">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-text-primary">Filters</h2>
          {getActiveFiltersCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={onClearFilters}
            >
              Clear All
            </Button>
          )}
        </div>
        
        {getActiveFiltersCount() > 0 && (
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Filter" size={16} />
            <span>{getActiveFiltersCount()} active filters</span>
          </div>
        )}
      </div>
      <div className="p-6 space-y-6">
        {/* Document Types */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center space-x-2">
            <Icon name="FileText" size={16} />
            <span>Document Type</span>
          </h3>
          <div className="space-y-2">
            {documentTypes?.map((type) => (
              <label
                key={type?.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors duration-150"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={isFilterActive('types', type?.id)}
                    onChange={() => handleFilterToggle('types', type?.id)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-text-secondary">{type?.label}</span>
                </div>
                <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">
                  {type?.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center space-x-2">
            <Icon name="Rocket" size={16} />
            <span>Projects</span>
          </h3>
          <div className="space-y-2">
            {projects?.map((project) => (
              <label
                key={project?.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors duration-150"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={isFilterActive('projects', project?.id)}
                    onChange={() => handleFilterToggle('projects', project?.id)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-text-secondary">{project?.label}</span>
                </div>
                <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">
                  {project?.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center space-x-2">
            <Icon name="Layers" size={16} />
            <span>Categories</span>
          </h3>
          <div className="space-y-2">
            {categories?.map((category) => (
              <label
                key={category?.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors duration-150"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={isFilterActive('categories', category?.id)}
                    onChange={() => handleFilterToggle('categories', category?.id)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-text-secondary">{category?.label}</span>
                </div>
                <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">
                  {category?.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Date Range */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center space-x-2">
            <Icon name="Calendar" size={16} />
            <span>Date Range</span>
          </h3>
          <div className="space-y-2">
            {[
              { id: 'last-week', label: 'Last Week' },
              { id: 'last-month', label: 'Last Month' },
              { id: 'last-quarter', label: 'Last Quarter' },
              { id: 'last-year', label: 'Last Year' }
            ]?.map((range) => (
              <label
                key={range?.id}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors duration-150"
              >
                <input
                  type="radio"
                  name="dateRange"
                  checked={isFilterActive('dateRange', range?.id)}
                  onChange={() => handleFilterToggle('dateRange', range?.id)}
                  className="w-4 h-4 text-primary border-border focus:ring-primary focus:ring-2"
                />
                <span className="text-sm text-text-secondary">{range?.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;