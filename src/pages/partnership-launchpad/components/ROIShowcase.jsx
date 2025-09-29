import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const ROIShowcase = () => {
  const [activeMetric, setActiveMetric] = useState('visibility');

  const visibilityData = [
    { month: 'Jan', impressions: 120000, engagement: 8500, reach: 95000 },
    { month: 'Feb', impressions: 145000, engagement: 10200, reach: 110000 },
    { month: 'Mar', impressions: 180000, engagement: 12800, reach: 135000 },
    { month: 'Apr', impressions: 220000, engagement: 15600, reach: 165000 },
    { month: 'May', impressions: 280000, engagement: 19200, reach: 210000 },
    { month: 'Jun', impressions: 320000, engagement: 22400, reach: 240000 }
  ];

  const recruitmentData = [
    { category: 'Internship Applications', value: 45, color: '#1a365d' },
    { category: 'Full-time Hires', value: 12, color: '#2d5a87' },
    { category: 'Co-op Placements', value: 18, color: '#f56500' },
    { category: 'Alumni Referrals', value: 8, color: '#38a169' }
  ];

  const competitionData = [
    { event: 'IREC 2024', placement: 3, teams: 120, media_value: 45000 },
    { event: 'Spaceport Cup', placement: 1, teams: 85, media_value: 65000 },
    { event: 'NASA USLI', placement: 2, teams: 95, media_value: 55000 },
    { event: 'ESRA Challenge', placement: 1, teams: 60, media_value: 40000 },
    { event: 'Battle of Rockets', placement: 2, teams: 75, media_value: 35000 },
    { event: 'Aerospace Summit', placement: 1, teams: 45, media_value: 30000 }
  ];

  const partnerROIMetrics = [
    {
      partner: 'AeroTech Industries',
      investment: 25000,
      brand_impressions: 2100000,
      hires_made: 4,
      media_value: 85000,
      roi_percentage: 340
    },
    {
      partner: 'Stellar Dynamics',
      investment: 15000,
      brand_impressions: 1200000,
      hires_made: 2,
      media_value: 50000,
      roi_percentage: 280
    },
    {
      partner: 'Propulsion Systems',
      investment: 8000,
      brand_impressions: 600000,
      hires_made: 1,
      media_value: 25000,
      roi_percentage: 220
    }
  ];

  const mediaMetrics = {
    total_articles: 45,
    press_releases: 12,
    video_features: 8,
    social_mentions: 1250,
    estimated_value: 275000
  };

  const metrics = [
    {
      id: 'visibility',
      name: 'Brand Visibility',
      icon: 'Eye',
      description: 'Track brand exposure and audience engagement across all channels',
      color: 'text-blue-600'
    },
    {
      id: 'recruitment',
      name: 'Talent Pipeline',
      icon: 'Users',
      description: 'Monitor recruitment success and talent acquisition metrics',
      color: 'text-green-600'
    },
    {
      id: 'competition',
      name: 'Competition Performance',
      icon: 'Trophy',
      description: 'Analyze competition results and associated media value',
      color: 'text-yellow-600'
    },
    {
      id: 'media',
      name: 'Media Coverage',
      icon: 'Newspaper',
      description: 'Measure earned media value and press coverage impact',
      color: 'text-purple-600'
    }
  ];

  const renderVisibilityChart = () => (
    <div className="space-y-6">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={visibilityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Line type="monotone" dataKey="impressions" stroke="#1a365d" strokeWidth={3} />
            <Line type="monotone" dataKey="reach" stroke="#f56500" strokeWidth={2} />
            <Line type="monotone" dataKey="engagement" stroke="#38a169" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">2.1M+</div>
          <div className="text-sm text-blue-800">Total Impressions</div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">1.6M+</div>
          <div className="text-sm text-orange-800">Unique Reach</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">88K+</div>
          <div className="text-sm text-green-800">Engagements</div>
        </div>
      </div>
    </div>
  );

  const renderRecruitmentChart = () => (
    <div className="space-y-6">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={recruitmentData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {recruitmentData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry?.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-primary/10 rounded-lg">
          <div className="text-2xl font-bold text-primary">83</div>
          <div className="text-sm text-text-secondary">Total Candidates</div>
        </div>
        <div className="text-center p-4 bg-accent/10 rounded-lg">
          <div className="text-2xl font-bold text-accent">95%</div>
          <div className="text-sm text-text-secondary">Hire Success Rate</div>
        </div>
      </div>
    </div>
  );

  const renderCompetitionChart = () => (
    <div className="space-y-6">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={competitionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="event" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="media_value" fill="#f56500" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">6</div>
          <div className="text-sm text-yellow-800">Competitions</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">3</div>
          <div className="text-sm text-green-800">First Place Wins</div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">$270K</div>
          <div className="text-sm text-orange-800">Media Value</div>
        </div>
      </div>
    </div>
  );

  const renderMediaChart = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Icon name="FileText" size={32} className="text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">{mediaMetrics?.total_articles}</div>
          <div className="text-sm text-purple-800">Articles</div>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Icon name="Send" size={32} className="text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{mediaMetrics?.press_releases}</div>
          <div className="text-sm text-blue-800">Press Releases</div>
        </div>
        <div className="text-center p-4 bg-red-50 rounded-lg">
          <Icon name="Video" size={32} className="text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-red-600">{mediaMetrics?.video_features}</div>
          <div className="text-sm text-red-800">Video Features</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <Icon name="MessageSquare" size={32} className="text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">{mediaMetrics?.social_mentions}</div>
          <div className="text-sm text-green-800">Social Mentions</div>
        </div>
      </div>
      
      <div className="text-center p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
        <div className="text-3xl font-bold text-purple-600 mb-2">
          ${mediaMetrics?.estimated_value?.toLocaleString()}
        </div>
        <div className="text-purple-800">Estimated Earned Media Value</div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <Icon name="TrendingUp" size={20} className="text-green-600" />
            <span className="text-sm font-medium text-green-600">ROI Analytics</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Measurable Partnership Returns
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our partnerships deliver quantifiable results. Track your investment impact through comprehensive 
            analytics covering brand visibility, talent acquisition, and media value generation.
          </p>
        </div>

        {/* Metric Selection */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {metrics?.map((metric) => (
            <button
              key={metric?.id}
              onClick={() => setActiveMetric(metric?.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                activeMetric === metric?.id
                  ? 'border-primary bg-primary/5 shadow-mission'
                  : 'border-border bg-background hover:border-primary/50'
              }`}
            >
              <Icon name={metric?.icon} size={24} className={`mb-2 ${metric?.color}`} />
              <h3 className="font-semibold text-text-primary mb-1">{metric?.name}</h3>
              <p className="text-sm text-text-secondary">{metric?.description}</p>
            </button>
          ))}
        </div>

        {/* Chart Display */}
        <div className="dashboard-card p-8 mb-8">
          <h3 className="text-2xl font-bold text-text-primary mb-6">
            {metrics?.find(m => m?.id === activeMetric)?.name} Analytics
          </h3>
          
          {activeMetric === 'visibility' && renderVisibilityChart()}
          {activeMetric === 'recruitment' && renderRecruitmentChart()}
          {activeMetric === 'competition' && renderCompetitionChart()}
          {activeMetric === 'media' && renderMediaChart()}
        </div>

        {/* Partner ROI Table */}
        <div className="dashboard-card p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
            <Icon name="BarChart3" size={24} className="mr-2 text-primary" />
            Partner ROI Performance
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-text-primary">Partner</th>
                  <th className="text-left py-3 px-4 font-semibold text-text-primary">Investment</th>
                  <th className="text-left py-3 px-4 font-semibold text-text-primary">Brand Impressions</th>
                  <th className="text-left py-3 px-4 font-semibold text-text-primary">Hires Made</th>
                  <th className="text-left py-3 px-4 font-semibold text-text-primary">Media Value</th>
                  <th className="text-left py-3 px-4 font-semibold text-text-primary">ROI</th>
                </tr>
              </thead>
              <tbody>
                {partnerROIMetrics?.map((partner, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30">
                    <td className="py-4 px-4 font-medium text-text-primary">{partner?.partner}</td>
                    <td className="py-4 px-4 text-text-secondary">${partner?.investment?.toLocaleString()}</td>
                    <td className="py-4 px-4 text-text-secondary">{(partner?.brand_impressions / 1000000)?.toFixed(1)}M</td>
                    <td className="py-4 px-4 text-text-secondary">{partner?.hires_made}</td>
                    <td className="py-4 px-4 text-text-secondary">${partner?.media_value?.toLocaleString()}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <Icon name="TrendingUp" size={14} className="mr-1" />
                        {partner?.roi_percentage}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="dashboard-card p-6 text-center">
            <Icon name="Target" size={48} className="text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-text-primary mb-2">Average ROI</h4>
            <div className="text-3xl font-bold text-primary mb-2">280%</div>
            <p className="text-text-secondary">Partners see nearly 3x return on investment through our comprehensive partnership benefits</p>
          </div>
          
          <div className="dashboard-card p-6 text-center">
            <Icon name="Clock" size={48} className="text-accent mx-auto mb-4" />
            <h4 className="text-xl font-bold text-text-primary mb-2">Time to Value</h4>
            <div className="text-3xl font-bold text-accent mb-2">30 Days</div>
            <p className="text-text-secondary">Partners begin seeing measurable returns within the first month of partnership activation</p>
          </div>
          
          <div className="dashboard-card p-6 text-center">
            <Icon name="Repeat" size={48} className="text-secondary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-text-primary mb-2">Renewal Rate</h4>
            <div className="text-3xl font-bold text-secondary mb-2">95%</div>
            <p className="text-text-secondary">Nearly all partners renew their sponsorship, demonstrating consistent value delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIShowcase;