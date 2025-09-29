import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ rockets }) => {
  // Calculate statistics from rockets data
  const totalRockets = rockets?.length;
  const activeRockets = rockets?.filter(r => r?.status === 'active')?.length;
  const avgPerformance = Math.round(
    rockets?.reduce((sum, r) => sum + r?.performanceScore, 0) / totalRockets
  );
  const totalFlights = rockets?.reduce((sum, r) => sum + (r?.flightCount || 0), 0);
  const maxAltitude = Math.max(...rockets?.map(r => 
    parseInt(r?.specifications?.maxAltitude?.replace(/[^\d]/g, ''))
  ));
  const competitions = [...new Set(rockets.map(r => r.competition))]?.length;

  const stats = [
    {
      label: 'Total Rockets',
      value: totalRockets,
      icon: 'Rocket',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      description: 'Built & Tested'
    },
    {
      label: 'Active Fleet',
      value: activeRockets,
      icon: 'Zap',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Ready for Launch'
    },
    {
      label: 'Avg Performance',
      value: `${avgPerformance}%`,
      icon: 'TrendingUp',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Success Rate'
    },
    {
      label: 'Total Flights',
      value: totalFlights,
      icon: 'Target',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Missions Completed'
    },
    {
      label: 'Max Altitude',
      value: `${maxAltitude?.toLocaleString()}ft`,
      icon: 'ArrowUp',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Record Achievement'
    },
    {
      label: 'Competitions',
      value: competitions,
      icon: 'Trophy',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      description: 'Events Participated'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl shadow-card p-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
          <Icon name="BarChart3" size={20} color="white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-text-primary">Arsenal Statistics</h3>
          <p className="text-sm text-text-secondary">Performance overview and key metrics</p>
        </div>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats?.map((stat, index) => (
          <div 
            key={index}
            className="group relative p-4 bg-muted rounded-lg hover:shadow-card transition-all duration-200 aerospace-transition"
          >
            {/* Icon */}
            <div className={`w-10 h-10 ${stat?.bgColor} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
              <Icon name={stat?.icon} size={20} className={stat?.color} />
            </div>

            {/* Value */}
            <div className="mb-1">
              <p className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                {stat?.value}
              </p>
            </div>

            {/* Label */}
            <div>
              <p className="text-sm font-medium text-text-secondary mb-1">{stat?.label}</p>
              <p className="text-xs text-text-secondary opacity-75">{stat?.description}</p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
          </div>
        ))}
      </div>
      {/* Additional Insights */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Success Rate Indicator */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={16} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">Mission Success</p>
              <p className="text-xs text-text-secondary">
                {Math.round((rockets?.filter(r => r?.performanceScore >= 80)?.length / totalRockets) * 100)}% success rate
              </p>
            </div>
          </div>

          {/* Innovation Index */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Icon name="Lightbulb" size={16} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">Innovation Index</p>
              <p className="text-xs text-text-secondary">
                {rockets?.filter(r => r?.technologies?.length >= 5)?.length} advanced projects
              </p>
            </div>
          </div>

          {/* Team Growth */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <Icon name="TrendingUp" size={16} className="text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">Team Growth</p>
              <p className="text-xs text-text-secondary">
                {new Date()?.getFullYear() - Math.min(...rockets?.map(r => parseInt(r?.year)))} years of experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;