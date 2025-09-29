import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickNavigation = () => {
  const navigationItems = [
    {
      title: "Team Command Center",
      description: "Meet our aerospace engineers and mission specialists",
      path: "/team-command-center",
      icon: "Users",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      stats: "25 Members"
    },
    {
      title: "Rocket Arsenal",
      description: "Explore our fleet of competition and research vehicles",
      path: "/rocket-arsenal",
      icon: "Rocket",
      color: "from-orange-600 to-red-600",
      hoverColor: "hover:from-orange-700 hover:to-red-700",
      stats: "12 Rockets"
    },
    {
      title: "Engineering Vault",
      description: "Technical documentation and design specifications",
      path: "/engineering-vault",
      icon: "FileText",
      color: "from-green-600 to-emerald-600",
      hoverColor: "hover:from-green-700 hover:to-emerald-700",
      stats: "150+ Documents"
    },
    {
      title: "Partnership Launchpad",
      description: "Sponsor opportunities and industry collaborations",
      path: "/partnership-launchpad",
      icon: "Handshake",
      color: "from-purple-600 to-indigo-600",
      hoverColor: "hover:from-purple-700 hover:to-indigo-700",
      stats: "20+ Partners"
    },
    {
      title: "Communication Hub",
      description: "Connect with our team and stay updated on missions",
      path: "/communication-hub",
      icon: "MessageSquare",
      color: "from-cyan-600 to-teal-600",
      hoverColor: "hover:from-cyan-700 hover:to-teal-700",
      stats: "24/7 Support"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Icon name="Navigation" size={20} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Mission Navigation</h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Quick access to all mission-critical areas of our aerospace program
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationItems?.map((item, index) => (
            <Link
              key={index}
              to={item?.path}
              className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item?.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item?.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item?.icon} size={24} color="white" />
                  </div>
                  <div className="text-slate-400 text-sm font-mono">
                    {item?.stats}
                  </div>
                </div>

                {/* Title and Description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-200">
                    {item?.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item?.description}
                  </p>
                </div>

                {/* Action Indicator */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-slate-400 text-sm font-medium">
                    Explore Section
                  </span>
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="text-slate-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-200" 
                  />
                </div>
              </div>

              {/* Hover Effect Lines */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Mission Status Overview */}
        <div className="mt-16 bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Current Mission Status */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Icon name="CheckCircle" size={28} color="white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mission Status</h3>
              <p className="text-green-400 font-semibold mb-1">All Systems Go</p>
              <p className="text-slate-400 text-sm">Ready for next launch sequence</p>
            </div>

            {/* Team Readiness */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Icon name="Users" size={28} color="white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Team Readiness</h3>
              <p className="text-blue-400 font-semibold mb-1">100% Operational</p>
              <p className="text-slate-400 text-sm">All crew members mission-ready</p>
            </div>

            {/* Next Milestone */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Icon name="Target" size={28} color="white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Next Milestone</h3>
              <p className="text-orange-400 font-semibold mb-1">Competition Launch</p>
              <p className="text-slate-400 text-sm">March 15, 2024 - T-minus counting</p>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl px-6 py-3">
            <Icon name="AlertTriangle" size={20} className="text-yellow-400" />
            <span className="text-slate-300 text-sm">
              Mission Critical Support: 
              <Link to="/communication-hub" className="text-orange-400 hover:text-orange-300 ml-2 font-semibold">
                Contact Mission Control
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickNavigation;