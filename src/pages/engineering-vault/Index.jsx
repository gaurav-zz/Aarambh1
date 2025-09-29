import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import StatsOverview from './components/StatsOverview';
import SearchBar from './components/SearchBar';
import FilterSidebar from './components/FilterSidebar';
import DocumentCard from './components/DocumentCard';
import DocumentViewer from './components/DocumentViewer';

const EngineeringVault = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    types: [],
    projects: [],
    categories: [],
    dateRange: []
  });
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(true);

  // Mock documents data
  const mockDocuments = [
    {
      id: 1,
      title: "Phoenix Mk-III Propulsion System Analysis",
      project: "Phoenix Mk-III",
      type: "design-report",
      description: `Comprehensive analysis of the hybrid propulsion system design for Phoenix Mk-III rocket.\nIncludes detailed performance calculations, safety analysis, and optimization recommendations.\nThis report covers propellant selection, combustion chamber design, and nozzle optimization.`,
      author: "Dr. Sarah Chen",
      date: "2024-09-25",
      size: 2457600,
      downloads: 342,
      rating: 5,
      tags: ["propulsion", "hybrid", "analysis", "safety"],
      version: "2.1"
    },
    {
      id: 2,
      title: "Atlas V2 Aerodynamic Simulation Results",
      project: "Atlas V2",
      type: "simulation",
      description: `CFD simulation results for Atlas V2 rocket aerodynamic performance.\nIncludes drag coefficient analysis, pressure distribution maps, and flow visualization.\nSimulations conducted at various Mach numbers and angles of attack.`,
      author: "Prof. Michael Rodriguez",
      date: "2024-09-22",
      size: 5242880,
      downloads: 287,
      rating: 4,
      tags: ["aerodynamics", "CFD", "simulation", "performance"],
      version: "1.3"
    },
    {
      id: 3,
      title: "Recovery System Control Algorithm",
      project: "Mercury Prototype",
      type: "code",
      description: `Python implementation of the dual-deployment recovery system control algorithm.\nIncludes sensor data processing, deployment logic, and safety redundancy features.\nFully documented with unit tests and integration examples.`,
      author: "Alex Thompson",
      date: "2024-09-20",
      size: 1048576,
      downloads: 156,
      rating: 5,
      tags: ["recovery", "python", "control", "algorithm"],
      version: "3.0"
    },
    {
      id: 4,
      title: "Hybrid Propulsion Tutorial Series",
      project: "Educational Content",
      type: "tutorial",
      description: `Complete tutorial series on hybrid rocket propulsion fundamentals.\nCovers theory, design principles, safety considerations, and practical implementation.\nIncludes step-by-step calculations and design examples.`,
      author: "Dr. Emily Watson",
      date: "2024-09-18",
      size: 3145728,
      downloads: 523,
      rating: 5,
      tags: ["tutorial", "education", "propulsion", "fundamentals"],
      version: "1.0"
    },
    {
      id: 5,
      title: "Structural Analysis of Carbon Fiber Airframe",
      project: "Apollo Test Vehicle",
      type: "research",
      description: `Research paper on structural integrity analysis of carbon fiber composite airframes.\nIncludes finite element analysis, material testing results, and failure mode analysis.\nPublished in Journal of Aerospace Engineering.`,
      author: "Dr. James Liu",
      date: "2024-09-15",
      size: 4194304,
      downloads: 198,
      rating: 4,
      tags: ["structures", "carbon-fiber", "FEA", "research"],
      version: "1.2"
    },
    {
      id: 6,
      title: "Avionics System Architecture Documentation",
      project: "Phoenix Mk-III",
      type: "design-report",
      description: `Complete documentation of the Phoenix Mk-III avionics system architecture.\nIncludes circuit diagrams, component specifications, and integration protocols.\nCovers flight computer, sensors, telemetry, and recovery electronics.`,
      author: "Maria Gonzalez",
      date: "2024-09-12",
      size: 6291456,
      downloads: 234,
      rating: 5,
      tags: ["avionics", "electronics", "architecture", "documentation"],
      version: "2.0"
    }
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleFilterChange = (filterType, values) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: values
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      types: [],
      projects: [],
      categories: [],
      dateRange: []
    });
  };

  const handleViewDocument = (document) => {
    setSelectedDocument(document);
  };

  const handleDownloadDocument = (document) => {
    console.log('Downloading document:', document?.title);
    // Simulate download
    const link = document?.createElement('a');
    link.href = '#';
    link.download = `${document?.title}.pdf`;
    link?.click();
  };

  const handleCloseViewer = () => {
    setSelectedDocument(null);
  };

  // Filter and sort documents
  const filteredDocuments = mockDocuments?.filter(doc => {
    // Search filter
    if (searchQuery && !doc?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) &&
        !doc?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) &&
        !doc?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()))) {
      return false;
    }

    // Type filter
    if (filters?.types?.length > 0 && !filters?.types?.includes(doc?.type)) {
      return false;
    }

    // Project filter
    if (filters?.projects?.length > 0) {
      const projectId = doc?.project?.toLowerCase()?.replace(/\s+/g, '-');
      if (!filters?.projects?.includes(projectId)) {
        return false;
      }
    }

    return true;
  });

  // Sort documents
  const sortedDocuments = [...filteredDocuments]?.sort((a, b) => {
    switch (sortBy) {
      case 'date-desc':
        return new Date(b.date) - new Date(a.date);
      case 'date-asc':
        return new Date(a.date) - new Date(b.date);
      case 'title-asc':
        return a?.title?.localeCompare(b?.title);
      case 'title-desc':
        return b?.title?.localeCompare(a?.title);
      case 'downloads':
        return b?.downloads - a?.downloads;
      case 'rating':
        return b?.rating - a?.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Engineering Vault - RocketryXyz Portfolio</title>
        <meta name="description" content="Technical documentation library, design reports, simulation results, and open-source contributions from RocketryXyz team." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <StatsOverview />
        
        <SearchBar
          onSearch={handleSearch}
          onSortChange={handleSortChange}
          sortBy={sortBy}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
        />

        <div className="flex min-h-screen">
          {isFilterSidebarOpen && (
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          )}

          <div className={`flex-1 p-6 ${isFilterSidebarOpen ? 'ml-0' : 'ml-0'}`}>
            <div className="max-w-7xl mx-auto">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-text-primary">
                    {searchQuery ? `Search results for "${searchQuery}"` : 'All Documents'}
                  </h2>
                  <p className="text-text-secondary mt-1">
                    {sortedDocuments?.length} documents found
                  </p>
                </div>

                <button
                  onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
                  className="lg:hidden px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  {isFilterSidebarOpen ? 'Hide Filters' : 'Show Filters'}
                </button>
              </div>

              {/* Documents Grid/List */}
              <div className={
                viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' :'space-y-4'
              }>
                {sortedDocuments?.map((document) => (
                  <DocumentCard
                    key={document?.id}
                    document={document}
                    onView={handleViewDocument}
                    onDownload={handleDownloadDocument}
                  />
                ))}
              </div>

              {/* Empty State */}
              {sortedDocuments?.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">No documents found</h3>
                  <p className="text-text-secondary mb-4">
                    Try adjusting your search criteria or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* Document Viewer Modal */}
      {selectedDocument && (
        <DocumentViewer
          document={selectedDocument}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
};

export default EngineeringVault;