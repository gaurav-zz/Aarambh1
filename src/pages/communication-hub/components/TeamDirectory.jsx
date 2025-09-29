import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamDirectory = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Faculty Advisor",
      department: "leadership",
      email: "s.chen@university.edu",
      phone: "+1 (555) 123-4567",
      office: "Engineering Building, Room 301",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      specialties: ["Propulsion Systems", "Team Oversight", "Academic Liaison"],
      availability: "Mon-Fri 9AM-5PM",
      responseTime: "Within 24 hours"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Team Captain",
      department: "leadership",
      email: "m.rodriguez@student.university.edu",
      phone: "+1 (555) 234-5678",
      office: "Student Lab, Building B",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      specialties: ["Team Leadership", "Project Management", "Competition Strategy"],
      availability: "Mon-Fri 10AM-8PM",
      responseTime: "Within 12 hours"
    },
    {
      id: 3,
      name: "Emily Zhang",
      role: "Propulsion Lead",
      department: "technical",
      email: "e.zhang@student.university.edu",
      phone: "+1 (555) 345-6789",
      office: "Propulsion Lab, Building C",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      specialties: ["Rocket Engines", "Fuel Systems", "Performance Analysis"],
      availability: "Tue-Sat 12PM-10PM",
      responseTime: "Within 24 hours"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Avionics Engineer",
      department: "technical",
      email: "j.thompson@student.university.edu",
      phone: "+1 (555) 456-7890",
      office: "Electronics Lab, Building A",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      specialties: ["Flight Computers", "Telemetry", "Recovery Systems"],
      availability: "Mon-Thu 2PM-9PM",
      responseTime: "Within 18 hours"
    },
    {
      id: 5,
      name: "Aisha Patel",
      role: "Sponsorship Coordinator",
      department: "business",
      email: "a.patel@student.university.edu",
      phone: "+1 (555) 567-8901",
      office: "Business Development Office",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      specialties: ["Corporate Relations", "Fundraising", "Partnership Development"],
      availability: "Mon-Fri 9AM-6PM",
      responseTime: "Within 8 hours"
    },
    {
      id: 6,
      name: "David Kim",
      role: "Media Relations",
      department: "outreach",
      email: "d.kim@student.university.edu",
      phone: "+1 (555) 678-9012",
      office: "Media Center, Building D",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      specialties: ["Press Relations", "Social Media", "Content Creation"],
      availability: "Mon-Fri 11AM-7PM",
      responseTime: "Within 6 hours"
    }
  ];

  const departments = [
    { value: 'all', label: 'All Departments', icon: 'Users' },
    { value: 'leadership', label: 'Leadership', icon: 'Crown' },
    { value: 'technical', label: 'Technical', icon: 'Wrench' },
    { value: 'business', label: 'Business', icon: 'Briefcase' },
    { value: 'outreach', label: 'Outreach', icon: 'Megaphone' }
  ];

  const filteredMembers = selectedDepartment === 'all' 
    ? teamMembers 
    : teamMembers?.filter(member => member?.department === selectedDepartment);

  const handleEmailContact = (email, name) => {
    window.location.href = `mailto:${email}?subject=Inquiry from RocketryXyz Website&body=Hello ${name},%0D%0A%0D%0AI am reaching out regarding...`;
  };

  const handlePhoneContact = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-primary mb-2">Team Directory</h3>
        <p className="text-text-secondary">
          Connect directly with our team members based on your inquiry type.
        </p>
      </div>
      {/* Department Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {departments?.map((dept) => (
            <button
              key={dept?.value}
              onClick={() => setSelectedDepartment(dept?.value)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedDepartment === dept?.value
                  ? 'bg-primary text-primary-foreground shadow-mission'
                  : 'bg-muted text-text-secondary hover:text-primary hover:bg-muted/80'
              }`}
            >
              <Icon name={dept?.icon} size={16} />
              <span>{dept?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers?.map((member) => (
          <div key={member?.id} className="bg-muted border border-border rounded-lg p-6 hover:shadow-card transition-shadow duration-200">
            <div className="flex items-start space-x-4 mb-4">
              <div className="relative">
                <Image
                  src={member?.avatar}
                  alt={member?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-primary truncate">{member?.name}</h4>
                <p className="text-sm text-text-secondary">{member?.role}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Icon name="Clock" size={12} className="text-text-secondary" />
                  <span className="text-xs text-text-secondary">{member?.responseTime}</span>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-4">
              <h5 className="text-sm font-medium text-text-primary mb-2">Specialties</h5>
              <div className="flex flex-wrap gap-1">
                {member?.specialties?.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Mail" size={14} />
                <span className="truncate">{member?.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Phone" size={14} />
                <span>{member?.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="MapPin" size={14} />
                <span className="truncate">{member?.office}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Calendar" size={14} />
                <span className="truncate">{member?.availability}</span>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="flex space-x-2">
              <Button
                variant="default"
                size="sm"
                onClick={() => handleEmailContact(member?.email, member?.name)}
                iconName="Mail"
                iconPosition="left"
                className="flex-1"
              >
                Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePhoneContact(member?.phone)}
                iconName="Phone"
                iconPosition="left"
                className="flex-1"
              >
                Call
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Emergency Contact */}
      <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} className="text-red-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-red-800">Emergency Contact</h4>
            <p className="text-sm text-red-700 mb-2">
              For urgent safety concerns or time-sensitive media inquiries during competitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePhoneContact('+1 (555) 911-TEAM')}
                iconName="Phone"
                iconPosition="left"
                className="border-red-300 text-red-700 hover:bg-red-100"
              >
                Emergency: +1 (555) 911-TEAM
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEmailContact('emergency@rocketryxyz.edu', 'Emergency Team')}
                iconName="Mail"
                iconPosition="left"
                className="border-red-300 text-red-700 hover:bg-red-100"
              >
                emergency@rocketryxyz.edu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDirectory;