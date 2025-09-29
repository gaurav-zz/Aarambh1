import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Mission Control', path: '/mission-control-hub', icon: 'Gauge' },
    { name: 'Team Center', path: '/team-command-center', icon: 'Users' },
    { name: 'Rocket Arsenal', path: '/rocket-arsenal', icon: 'Rocket' },
    { name: 'Engineering', path: '/engineering-vault', icon: 'FileText' },
    { name: 'Partnerships', path: '/partnership-launchpad', icon: 'Handshake' }
  ];

  const secondaryItems = [
    { name: 'Communications', path: '/communication-hub', icon: 'MessageSquare' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-header transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-mission border-b border-border shadow-card' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-mission mx-auto">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-mission">
                <Icon name="Rocket" size={24} color="white" className="transform rotate-45" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-mission-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary tracking-tight">RocketryXyz</span>
              <span className="text-xs text-text-secondary font-medium tracking-technical">Portfolio</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 aerospace-transition ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-mission'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted transition-all duration-200">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-modal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm hover:bg-muted transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                      isActivePath(item?.path)
                        ? 'text-primary bg-muted' :'text-text-secondary'
                    }`}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              iconName="Users"
              iconPosition="left"
              className="btn-mission-control"
            >
              Join Mission
            </Button>
            <Button 
              variant="default" 
              size="sm"
              iconName="Handshake"
              iconPosition="left"
              className="btn-mission-control bg-accent hover:bg-accent/90"
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 border-t border-border bg-background/95 backdrop-blur-mission">
            <nav className="space-y-2">
              {[...navigationItems, ...secondaryItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-mission'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </nav>
            
            {/* Mobile CTA Buttons */}
            <div className="mt-6 space-y-3">
              <Button 
                variant="outline" 
                fullWidth
                iconName="Users"
                iconPosition="left"
                className="btn-mission-control"
                onClick={closeMenu}
              >
                Join Mission
              </Button>
              <Button 
                variant="default" 
                fullWidth
                iconName="Handshake"
                iconPosition="left"
                className="btn-mission-control bg-accent hover:bg-accent/90"
                onClick={closeMenu}
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Mission Status Bar */}
      <div className="bg-gradient-to-r from-primary via-secondary to-primary h-1">
        <div className="h-full bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse"></div>
      </div>
    </header>
  );
};

export default Header;