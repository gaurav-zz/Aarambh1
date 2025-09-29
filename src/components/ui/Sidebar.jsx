import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Sidebar = ({ isCollapsed = false, onToggle }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [missionStatus, setMissionStatus] = useState('active');
  const location = useLocation();

  useEffect(() => {
    // Simulate mission status updates
    const statusInterval = setInterval(() => {
      const statuses = ['active', 'standby', 'critical'];
      setMissionStatus(statuses?.[Math.floor(Math.random() * statuses?.length)]);
    }, 10000);

    return () => clearInterval(statusInterval);
  }, []);

  const navigationItems = [
    { 
      name: 'Mission Control Hub', 
      path: '/mission-control-hub', 
      icon: 'Gauge',
      description: 'Command Center'
    },
    { 
      name: 'Team Command Center', 
      path: '/team-command-center', 
      icon: 'Users',
      description: 'Crew Management'
    },
    { 
      name: 'Rocket Arsenal', 
      path: '/rocket-arsenal', 
      icon: 'Rocket',
      description: 'Vehicle Systems'
    },
    { 
      name: 'Engineering Vault', 
      path: '/engineering-vault', 
      icon: 'FileText',
      description: 'Technical Docs'
    },
    { 
      name: 'Partnership Launchpad', 
      path: '/partnership-launchpad', 
      icon: 'Handshake',
      description: 'Sponsor Relations'
    },
    { 
      name: 'Communication Hub', 
      path: '/communication-hub', 
      icon: 'MessageSquare',
      description: 'Mission Comms'
    }
  ];

  const quickActions = [
    { name: 'Launch Sequence', icon: 'Play', action: 'launch' },
    { name: 'System Check', icon: 'CheckCircle', action: 'check' },
    { name: 'Emergency Stop', icon: 'AlertTriangle', action: 'stop' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleQuickAction = (action) => {
    console.log(`Quick action: ${action}`);
    // Implement quick action logic here
  };

  const getMissionStatusColor = () => {
    switch (missionStatus) {
      case 'active': return 'text-mission-active';
      case 'standby': return 'text-mission-standby';
      case 'critical': return 'text-mission-critical';
      default: return 'text-mission-active';
    }
  };

  const getMissionStatusBg = () => {
    switch (missionStatus) {
      case 'active': return 'bg-green-100 border-green-200';
      case 'standby': return 'bg-yellow-100 border-yellow-200';
      case 'critical': return 'bg-red-100 border-red-200';
      default: return 'bg-green-100 border-green-200';
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:z-sidebar lg:flex-col transition-all duration-300 ${
        isCollapsed ? 'lg:w-20' : 'lg:w-80'
      }`}>
        <div className="flex flex-col h-full bg-card border-r border-border shadow-elevation">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            {!isCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Rocket" size={18} color="white" className="transform rotate-45" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-mission-pulse"></div>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-primary">Mission Control</h2>
                  <p className="text-xs text-text-secondary">RocketryXyz</p>
                </div>
              </div>
            )}
            
            <button
              onClick={onToggle}
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-colors duration-200"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <Icon name={isCollapsed ? "ChevronRight" : "ChevronLeft"} size={18} />
            </button>
          </div>

          {/* Mission Status */}
          <div className="p-6 border-b border-border">
            <div className={`flex items-center space-x-3 p-3 rounded-lg border ${getMissionStatusBg()}`}>
              <div className={`w-3 h-3 rounded-full ${getMissionStatusColor()} animate-mission-pulse`}></div>
              {!isCollapsed && (
                <div>
                  <p className="text-sm font-medium text-text-primary">Mission Status</p>
                  <p className={`text-xs font-mono uppercase tracking-technical ${getMissionStatusColor()}`}>
                    {missionStatus}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`group flex items-center space-x-3 p-3 rounded-lg text-sm font-medium transition-all duration-200 aerospace-transition ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-mission'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
                title={isCollapsed ? item?.name : ''}
              >
                <Icon name={item?.icon} size={20} />
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <p className="truncate">{item?.name}</p>
                    <p className="text-xs opacity-75 truncate">{item?.description}</p>
                  </div>
                )}
                {!isCollapsed && isActivePath(item?.path) && (
                  <div className="w-2 h-2 bg-accent rounded-full animate-mission-pulse"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="p-6 border-t border-border">
            {!isCollapsed && (
              <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-technical mb-3">
                Quick Actions
              </h3>
            )}
            <div className="space-y-2">
              {quickActions?.map((action) => (
                <button
                  key={action?.action}
                  onClick={() => handleQuickAction(action?.action)}
                  className={`w-full flex items-center space-x-3 p-2 rounded-lg text-sm text-text-secondary hover:text-primary hover:bg-muted transition-colors duration-200 ${
                    isCollapsed ? 'justify-center' : ''
                  }`}
                  title={isCollapsed ? action?.name : ''}
                >
                  <Icon name={action?.icon} size={16} />
                  {!isCollapsed && <span>{action?.name}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border">
            {!isCollapsed ? (
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  fullWidth
                  iconName="Settings"
                  iconPosition="left"
                >
                  Settings
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  fullWidth
                  iconName="HelpCircle"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90"
                >
                  Support
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <button className="w-full p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-colors duration-200">
                  <Icon name="Settings" size={18} />
                </button>
                <button className="w-full p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-colors duration-200">
                  <Icon name="HelpCircle" size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>
      {/* Mobile Sidebar Overlay */}
      <div className={`lg:hidden fixed inset-0 z-sidebar transition-opacity duration-300 ${
        isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileOpen(false)}></div>
        
        <aside className={`absolute left-0 top-0 h-full w-80 bg-card shadow-modal transform transition-transform duration-300 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Rocket" size={18} color="white" className="transform rotate-45" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-mission-pulse"></div>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-primary">Mission Control</h2>
                  <p className="text-xs text-text-secondary">RocketryXyz</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-colors duration-200"
              >
                <Icon name="X" size={18} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-mission'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <div className="flex-1 min-w-0">
                    <p className="truncate">{item?.name}</p>
                    <p className="text-xs opacity-75 truncate">{item?.description}</p>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      </div>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-elevation flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
        aria-label="Open sidebar"
      >
        <Icon name="Menu" size={24} />
      </button>
    </>
  );
};

export default Sidebar;