import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = () => {
  const stats = [
    {
      title: "Total Documents",
      value: "247",
      change: "+12",
      changeType: "increase",
      icon: "FileText",
      description: "Technical documents available"
    },
    {
      title: "Active Projects",
      value: "8",
      change: "+2",
      changeType: "increase",
      icon: "Rocket",
      description: "Current development projects"
    },
    {
      title: "Code Repositories",
      value: "34",
      change: "+5",
      changeType: "increase",
      icon: "Code",
      description: "Open-source contributions"
    },
    {
      title: "Total Downloads",
      value: "15.2K",
      change: "+1.8K",
      changeType: "increase",
      icon: "Download",
      description: "Document downloads this month"
    },
    {
      title: "Peer Reviews",
      value: "156",
      change: "+23",
      changeType: "increase",
      icon: "Users",
      description: "Community peer reviews"
    },
    {
      title: "Citations",
      value: "89",
      change: "+7",
      changeType: "increase",
      icon: "BookOpen",
      description: "Academic citations received"
    }
  ];

  const recentActivity = [
    {
      type: "upload",
      title: "Phoenix Mk-III Propulsion Analysis",
      author: "Dr. Sarah Chen",
      time: "2 hours ago",
      icon: "Upload"
    },
    {
      type: "review",
      title: "Atlas V2 Recovery System Design",
      author: "Prof. Michael Rodriguez",
      time: "4 hours ago",
      icon: "MessageSquare"
    },
    {
      type: "download",
      title: "Aerodynamic Simulation Results",
      author: "External Researcher",
      time: "6 hours ago",
      icon: "Download"
    },
    {
      type: "citation",
      title: "Hybrid Propulsion Study",
      author: "MIT Aerospace Lab",
      time: "1 day ago",
      icon: "BookOpen"
    }
  ];

  return (
    <div className="bg-card border-b border-border p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Engineering Vault</h1>
            <p className="text-text-secondary mt-1">
              Technical documentation library and knowledge repository
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>System Status: Operational</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="text-sm text-text-secondary">
              Last Updated: {new Date()?.toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-4 hover:shadow-card transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  index % 3 === 0 ? 'bg-blue-100 text-blue-600' :
                  index % 3 === 1 ? 'bg-green-100 text-green-600': 'bg-purple-100 text-purple-600'
                }`}>
                  <Icon name={stat?.icon} size={16} />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat?.changeType === 'increase' ?'bg-green-100 text-green-700' :'bg-red-100 text-red-700'
                }`}>
                  {stat?.change}
                </span>
              </div>
              
              <div className="mb-1">
                <div className="text-2xl font-bold text-text-primary">{stat?.value}</div>
                <div className="text-sm font-medium text-text-primary">{stat?.title}</div>
              </div>
              
              <div className="text-xs text-text-secondary">{stat?.description}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 bg-background border border-border rounded-lg hover:shadow-card transition-all duration-200 text-left">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Upload" size={16} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-text-primary">Upload Document</div>
                  <div className="text-xs text-text-secondary">Add new technical documentation</div>
                </div>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 bg-background border border-border rounded-lg hover:shadow-card transition-all duration-200 text-left">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="GitBranch" size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-text-primary">Create Repository</div>
                  <div className="text-xs text-text-secondary">Start new code repository</div>
                </div>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 bg-background border border-border rounded-lg hover:shadow-card transition-all duration-200 text-left">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" size={16} className="text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-text-primary">Write Tutorial</div>
                  <div className="text-xs text-text-secondary">Share knowledge with community</div>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Activity</h3>
            <div className="bg-background border border-border rounded-lg">
              {recentActivity?.map((activity, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 ${
                    index !== recentActivity?.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activity?.type === 'upload' ? 'bg-blue-100 text-blue-600' :
                    activity?.type === 'review' ? 'bg-green-100 text-green-600' :
                    activity?.type === 'download'? 'bg-orange-100 text-orange-600' : 'bg-purple-100 text-purple-600'
                  }`}>
                    <Icon name={activity?.icon} size={16} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-text-primary truncate">
                      {activity?.title}
                    </div>
                    <div className="text-xs text-text-secondary">
                      by {activity?.author}
                    </div>
                  </div>
                  
                  <div className="text-xs text-text-secondary whitespace-nowrap">
                    {activity?.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;