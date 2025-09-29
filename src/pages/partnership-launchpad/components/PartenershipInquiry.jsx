import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const PartnershipInquiry = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    position: '',
    company_size: '',
    industry: '',
    partnership_type: '',
    budget_range: '',
    timeline: '',
    objectives: [],
    message: '',
    media_kit: false,
    follow_up: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const companySizeOptions = [
    { value: 'startup', label: 'Startup (1-50 employees)' },
    { value: 'small', label: 'Small Business (51-200 employees)' },
    { value: 'medium', label: 'Medium Enterprise (201-1000 employees)' },
    { value: 'large', label: 'Large Corporation (1000+ employees)' },
    { value: 'government', label: 'Government/Public Sector' },
    { value: 'nonprofit', label: 'Non-profit Organization' }
  ];

  const industryOptions = [
    { value: 'aerospace', label: 'Aerospace & Defense' },
    { value: 'manufacturing', label: 'Manufacturing & Engineering' },
    { value: 'technology', label: 'Technology & Software' },
    { value: 'automotive', label: 'Automotive & Transportation' },
    { value: 'energy', label: 'Energy & Utilities' },
    { value: 'consulting', label: 'Consulting & Professional Services' },
    { value: 'education', label: 'Education & Research' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'other', label: 'Other Industry' }
  ];

  const partnershipTypeOptions = [
    { value: 'financial', label: 'Financial Sponsorship' },
    { value: 'equipment', label: 'Equipment & Materials' },
    { value: 'technical', label: 'Technical Expertise' },
    { value: 'venue', label: 'Venue & Facilities' },
    { value: 'recruitment', label: 'Talent Recruitment' },
    { value: 'research', label: 'Research Collaboration' },
    { value: 'event', label: 'Event Partnership' },
    { value: 'custom', label: 'Custom Partnership' }
  ];

  const budgetRangeOptions = [
    { value: 'under_5k', label: 'Under $5,000' },
    { value: '5k_15k', label: '$5,000 - $15,000' },
    { value: '15k_30k', label: '$15,000 - $30,000' },
    { value: '30k_50k', label: '$30,000 - $50,000' },
    { value: 'over_50k', label: 'Over $50,000' },
    { value: 'flexible', label: 'Flexible/To Be Discussed' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: 'quarter', label: 'This Quarter (1-3 months)' },
    { value: 'semester', label: 'This Semester (3-6 months)' },
    { value: 'academic_year', label: 'Next Academic Year' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const objectiveOptions = [
    { id: 'brand_visibility', label: 'Brand Visibility & Marketing' },
    { id: 'talent_recruitment', label: 'Talent Recruitment & Hiring' },
    { id: 'technical_collaboration', label: 'Technical Collaboration' },
    { id: 'research_development', label: 'Research & Development' },
    { id: 'community_engagement', label: 'Community Engagement' },
    { id: 'educational_support', label: 'Educational Support' },
    { id: 'industry_networking', label: 'Industry Networking' },
    { id: 'csr_initiatives', label: 'Corporate Social Responsibility' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleObjectiveChange = (objectiveId, checked) => {
    setFormData(prev => ({
      ...prev,
      objectives: checked 
        ? [...prev?.objectives, objectiveId]
        : prev?.objectives?.filter(id => id !== objectiveId)
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          company_name: '',
          contact_name: '',
          email: '',
          phone: '',
          position: '',
          company_size: '',
          industry: '',
          partnership_type: '',
          budget_range: '',
          timeline: '',
          objectives: [],
          message: '',
          media_kit: false,
          follow_up: true
        });
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center dashboard-card p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={48} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Partnership Inquiry Submitted Successfully!
            </h2>
            <p className="text-xl text-text-secondary mb-6">
              Thank you for your interest in partnering with RocketryXyz. Our partnership development team will review your inquiry and respond within 2 business days.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-text-secondary">
                <Icon name="Clock" size={20} />
                <span>Expected response time: 24-48 hours</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-text-secondary">
                <Icon name="Mail" size={20} />
                <span>Confirmation email sent to {formData?.email}</span>
              </div>
            </div>
            <div className="mt-8">
              <Button 
                variant="outline" 
                onClick={() => setSubmitStatus(null)}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Submit Another Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Send" size={20} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Partnership Inquiry</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Start Your Partnership Journey
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Ready to partner with RocketryXyz? Complete this form to begin the conversation. 
            Our partnership development team will create a custom proposal tailored to your objectives.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="dashboard-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="Building" size={20} className="mr-2 text-primary" />
                Company Information
              </h3>
            </div>

            <Input
              label="Company Name"
              type="text"
              placeholder="Enter your company name"
              value={formData?.company_name}
              onChange={(e) => handleInputChange('company_name', e?.target?.value)}
              required
            />

            <Select
              label="Company Size"
              placeholder="Select company size"
              options={companySizeOptions}
              value={formData?.company_size}
              onChange={(value) => handleInputChange('company_size', value)}
              required
            />

            <Select
              label="Industry"
              placeholder="Select your industry"
              options={industryOptions}
              value={formData?.industry}
              onChange={(value) => handleInputChange('industry', value)}
              required
            />

            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-text-primary mb-4 mt-8 flex items-center">
                <Icon name="User" size={20} className="mr-2 text-primary" />
                Contact Information
              </h3>
            </div>

            <Input
              label="Contact Name"
              type="text"
              placeholder="Enter your full name"
              value={formData?.contact_name}
              onChange={(e) => handleInputChange('contact_name', e?.target?.value)}
              required
            />

            <Input
              label="Position/Title"
              type="text"
              placeholder="Enter your job title"
              value={formData?.position}
              onChange={(e) => handleInputChange('position', e?.target?.value)}
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your business email"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
            />

            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-text-primary mb-4 mt-8 flex items-center">
                <Icon name="Handshake" size={20} className="mr-2 text-primary" />
                Partnership Details
              </h3>
            </div>

            <Select
              label="Partnership Type"
              placeholder="Select partnership type"
              options={partnershipTypeOptions}
              value={formData?.partnership_type}
              onChange={(value) => handleInputChange('partnership_type', value)}
              required
            />

            <Select
              label="Budget Range"
              placeholder="Select budget range"
              options={budgetRangeOptions}
              value={formData?.budget_range}
              onChange={(value) => handleInputChange('budget_range', value)}
            />

            <Select
              label="Timeline"
              placeholder="Select preferred timeline"
              options={timelineOptions}
              value={formData?.timeline}
              onChange={(value) => handleInputChange('timeline', value)}
              required
            />

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-primary mb-3">
                Partnership Objectives (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {objectiveOptions?.map((objective) => (
                  <Checkbox
                    key={objective?.id}
                    label={objective?.label}
                    checked={formData?.objectives?.includes(objective?.id)}
                    onChange={(e) => handleObjectiveChange(objective?.id, e?.target?.checked)}
                  />
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-primary mb-2">
                Additional Message
              </label>
              <textarea
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows={4}
                placeholder="Tell us more about your partnership goals, specific requirements, or any questions you have..."
                value={formData?.message}
                onChange={(e) => handleInputChange('message', e?.target?.value)}
              />
            </div>

            <div className="md:col-span-2 space-y-4">
              <Checkbox
                label="Send me the RocketryXyz media kit and partnership prospectus"
                checked={formData?.media_kit}
                onChange={(e) => handleInputChange('media_kit', e?.target?.checked)}
              />
              
              <Checkbox
                label="I would like to schedule a follow-up call to discuss partnership opportunities"
                checked={formData?.follow_up}
                onChange={(e) => handleInputChange('follow_up', e?.target?.checked)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-sm text-text-secondary">
                <Icon name="Shield" size={16} className="inline mr-1" />
                Your information is secure and will only be used for partnership discussions.
              </div>
              
              <div className="flex gap-3">
                <Button 
                  type="button"
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Media Kit
                </Button>
                
                <Button 
                  type="submit"
                  variant="default"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
                </Button>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-text-primary mb-2">Quick Response</h4>
            <p className="text-sm text-text-secondary">We respond to all partnership inquiries within 24-48 hours</p>
          </div>
          
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <Icon name="Users" size={32} className="text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-text-primary mb-2">Dedicated Team</h4>
            <p className="text-sm text-text-secondary">Our partnership development team will work directly with you</p>
          </div>
          
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <Icon name="Target" size={32} className="text-secondary mx-auto mb-3" />
            <h4 className="font-semibold text-text-primary mb-2">Custom Solutions</h4>
            <p className="text-sm text-text-secondary">Every partnership is tailored to meet your specific objectives</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipInquiry;