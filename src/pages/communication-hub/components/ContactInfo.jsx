import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      type: 'General Inquiries',
      icon: 'Mail',
      primary: 'info@rocketryxyz.edu',
      secondary: '+1 (555) 123-TEAM',
      description: 'For general questions and information requests',
      responseTime: 'Within 24 hours',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      type: 'Sponsorship & Partnerships',
      icon: 'Handshake',
      primary: 'partnerships@rocketryxyz.edu',
      secondary: '+1 (555) 234-BUSI',
      description: 'Corporate partnerships and sponsorship opportunities',
      responseTime: 'Within 8 hours',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      type: 'Media & Press',
      icon: 'Camera',
      primary: 'media@rocketryxyz.edu',
      secondary: '+1 (555) 345-NEWS',
      description: 'Press inquiries, interviews, and media resources',
      responseTime: 'Within 4 hours',
      availability: 'Mon-Sun 8AM-10PM EST'
    },
    {
      type: 'Technical Collaboration',
      icon: 'Wrench',
      primary: 'technical@rocketryxyz.edu',
      secondary: '+1 (555) 456-TECH',
      description: 'Engineering partnerships and technical discussions',
      responseTime: 'Within 12 hours',
      availability: 'Mon-Fri 10AM-8PM EST'
    },
    {
      type: 'Team Recruitment',
      icon: 'Users',
      primary: 'recruitment@rocketryxyz.edu',
      secondary: '+1 (555) 567-JOIN',
      description: 'Join our team or volunteer opportunities',
      responseTime: 'Within 6 hours',
      availability: 'Mon-Fri 12PM-8PM EST'
    }
  ];

  const physicalLocations = [
    {
      name: 'Main Laboratory',
      address: '123 Engineering Drive, Building A, Room 201',
      city: 'University City, State 12345',
      hours: 'Mon-Fri: 8AM-10PM, Sat-Sun: 10AM-6PM',
      access: 'Student ID required, visitors must be accompanied',
      coordinates: '40.7128,-74.0060'
    },
    {
      name: 'Propulsion Test Facility',
      address: '456 Research Park Boulevard, Building C',
      city: 'University City, State 12345',
      hours: 'By appointment only',
      access: 'Restricted access - safety training required',
      coordinates: '40.7589,-73.9851'
    },
    {
      name: 'Administrative Office',
      address: '789 Student Union, Suite 150',
      city: 'University City, State 12345',
      hours: 'Mon-Fri: 9AM-5PM',
      access: 'Open to public during business hours',
      coordinates: '40.7831,-73.9712'
    }
  ];

  const universityContacts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Faculty Advisor',
      department: 'Aerospace Engineering Department',
      email: 's.chen@university.edu',
      phone: '+1 (555) 123-4567',
      office: 'Engineering Building, Room 301'
    },
    {
      name: 'Prof. Michael Johnson',
      role: 'Department Head',
      department: 'Aerospace Engineering Department',
      email: 'm.johnson@university.edu',
      phone: '+1 (555) 234-5678',
      office: 'Engineering Building, Room 401'
    },
    {
      name: 'Lisa Martinez',
      role: 'Student Activities Coordinator',
      department: 'Student Life Office',
      email: 'l.martinez@university.edu',
      phone: '+1 (555) 345-6789',
      office: 'Student Union, Room 250'
    }
  ];

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleMapClick = (coordinates, name) => {
    const [lat, lng] = coordinates?.split(',');
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Contact Methods</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {contactMethods?.map((method, index) => (
            <div key={index} className="bg-muted border border-border rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name={method?.icon} size={20} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-primary mb-1">{method?.type}</h4>
                  <p className="text-sm text-text-secondary mb-3">{method?.description}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="Mail" size={14} className="text-text-secondary" />
                      <button
                        onClick={() => handleEmailClick(method?.primary)}
                        className="text-sm text-primary hover:underline"
                      >
                        {method?.primary}
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Phone" size={14} className="text-text-secondary" />
                      <button
                        onClick={() => handlePhoneClick(method?.secondary)}
                        className="text-sm text-primary hover:underline"
                      >
                        {method?.secondary}
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-xs text-text-secondary">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={12} />
                      <span>Response: {method?.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={12} />
                      <span>{method?.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Physical Locations */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Visit Us</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {physicalLocations?.map((location, index) => (
            <div key={index} className="bg-muted border border-border rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-2">{location?.name}</h4>
              
              <div className="space-y-2 mb-4 text-sm text-text-secondary">
                <div className="flex items-start space-x-2">
                  <Icon name="MapPin" size={14} className="mt-0.5" />
                  <div>
                    <p>{location?.address}</p>
                    <p>{location?.city}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} />
                  <span>{location?.hours}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Shield" size={14} className="mt-0.5" />
                  <span>{location?.access}</span>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => handleMapClick(location?.coordinates, location?.name)}
                iconName="ExternalLink"
                iconPosition="left"
              >
                View on Map
              </Button>
            </div>
          ))}
        </div>

        {/* Embedded Map */}
        <div className="mt-6">
          <h4 className="font-semibold text-primary mb-3">Campus Location</h4>
          <div className="w-full h-64 rounded-lg overflow-hidden border border-border">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="RocketryXyz Campus Location"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=40.7128,-74.0060&z=14&output=embed"
              className="border-0"
            />
          </div>
        </div>
      </div>
      {/* University Contacts */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">University Contacts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {universityContacts?.map((contact, index) => (
            <div key={index} className="bg-muted border border-border rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-1">{contact?.name}</h4>
              <p className="text-sm text-text-secondary mb-1">{contact?.role}</p>
              <p className="text-xs text-text-secondary mb-3">{contact?.department}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} className="text-text-secondary" />
                  <button
                    onClick={() => handleEmailClick(contact?.email)}
                    className="text-primary hover:underline truncate"
                  >
                    {contact?.email}
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} className="text-text-secondary" />
                  <button
                    onClick={() => handlePhoneClick(contact?.phone)}
                    className="text-primary hover:underline"
                  >
                    {contact?.phone}
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} className="text-text-secondary" />
                  <span className="text-text-secondary text-xs">{contact?.office}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={24} className="text-red-600 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Contact</h3>
            <p className="text-red-700 mb-4">
              For urgent safety concerns, time-sensitive media inquiries during competitions, or critical issues requiring immediate attention.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={() => handlePhoneClick('+1 (555) 911-TEAM')}
                iconName="Phone"
                iconPosition="left"
                className="border-red-300 text-red-700 hover:bg-red-100"
              >
                Emergency: +1 (555) 911-TEAM
              </Button>
              <Button
                variant="outline"
                onClick={() => handleEmailClick('emergency@rocketryxyz.edu')}
                iconName="Mail"
                iconPosition="left"
                className="border-red-300 text-red-700 hover:bg-red-100"
              >
                emergency@rocketryxyz.edu
              </Button>
            </div>
            
            <p className="text-xs text-red-600 mt-3">
              Available 24/7 during competition periods and test operations. Response within 30 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;