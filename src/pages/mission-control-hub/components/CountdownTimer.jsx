import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [nextLaunch, setNextLaunch] = useState({
    name: "Phoenix-VII Test Flight",
    date: "2024-03-15T14:30:00Z",
    location: "Desert Test Range, Nevada",
    mission: "High-altitude recovery system validation"
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(nextLaunch.date) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [nextLaunch?.date]);

  const timeUnits = [
    { label: 'Days', value: timeLeft?.days, color: 'text-orange-400' },
    { label: 'Hours', value: timeLeft?.hours, color: 'text-blue-400' },
    { label: 'Minutes', value: timeLeft?.minutes, color: 'text-green-400' },
    { label: 'Seconds', value: timeLeft?.seconds, color: 'text-red-400' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={20} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Next Launch Mission</h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Mission countdown to our next breakthrough in student aerospace engineering
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mission Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {nextLaunch?.name}
                </h3>
                <p className="text-lg text-slate-300 mb-4">
                  {nextLaunch?.mission}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-blue-400" />
                  <div>
                    <div className="text-white font-semibold">Launch Date</div>
                    <div className="text-slate-300">
                      {new Date(nextLaunch.date)?.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-green-400" />
                  <div>
                    <div className="text-white font-semibold">Launch Time</div>
                    <div className="text-slate-300">
                      {new Date(nextLaunch.date)?.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short'
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-orange-400" />
                  <div>
                    <div className="text-white font-semibold">Launch Site</div>
                    <div className="text-slate-300">{nextLaunch?.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-600">
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-mono text-sm uppercase tracking-wide">
                    Mission Status: Go for Launch
                  </span>
                </div>
              </div>
            </div>

            {/* Countdown Display */}
            <div className="space-y-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-6">T-Minus</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {timeUnits?.map((unit, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
                      <div className={`text-3xl lg:text-4xl font-bold font-mono ${unit?.color} countdown-glow`}>
                        {unit?.value?.toString()?.padStart(2, '0')}
                      </div>
                      <div className="text-slate-400 text-sm font-semibold uppercase tracking-wide mt-2">
                        {unit?.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission Readiness Indicators */}
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-white text-center">Mission Readiness</h5>
                <div className="space-y-3">
                  {[
                    { system: 'Propulsion Systems', status: 100, color: 'bg-green-400' },
                    { system: 'Navigation & Control', status: 95, color: 'bg-blue-400' },
                    { system: 'Recovery Systems', status: 100, color: 'bg-green-400' },
                    { system: 'Telemetry & Data', status: 88, color: 'bg-yellow-400' },
                    { system: 'Weather Conditions', status: 92, color: 'bg-green-400' }
                  ]?.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm font-medium">{item?.system}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 h-2 bg-slate-600 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${item?.color} transition-all duration-1000`}
                            style={{ width: `${item?.status}%` }}
                          ></div>
                        </div>
                        <span className="text-slate-400 text-sm font-mono w-10 text-right">
                          {item?.status}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Launch Sequence Steps */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              step: "T-24h",
              title: "Final Systems Check",
              description: "Complete pre-flight inspection and weather assessment",
              icon: "CheckCircle",
              status: "completed"
            },
            {
              step: "T-2h",
              title: "Launch Preparation",
              description: "Fuel loading and final countdown procedures",
              icon: "Fuel",
              status: "pending"
            },
            {
              step: "T-0",
              title: "Launch & Recovery",
              description: "Ignition, flight, and successful payload recovery",
              icon: "Rocket",
              status: "upcoming"
            }
          ]?.map((phase, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  phase?.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  phase?.status === 'pending'? 'bg-yellow-500/20 text-yellow-400' : 'bg-slate-500/20 text-slate-400'
                }`}>
                  <Icon name={phase?.icon} size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold">{phase?.step}</div>
                  <div className="text-slate-400 text-sm">{phase?.title}</div>
                </div>
              </div>
              <p className="text-slate-300 text-sm">{phase?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;