import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: '',
    subject: '',
    message: '',
    urgency: 'normal',
    newsletter: false,
    attachments: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const inquiryTypes = [
    { value: 'sponsorship', label: 'Sponsorship & Partnership', description: 'Business partnerships and sponsorship opportunities' },
    { value: 'media', label: 'Media & Press', description: 'Interview requests and media inquiries' },
    { value: 'recruitment', label: 'Team Recruitment', description: 'Join our team or volunteer opportunities' },
    { value: 'technical', label: 'Technical Collaboration', description: 'Engineering partnerships and technical discussions' },
    { value: 'educational', label: 'Educational Programs', description: 'Workshops, mentorship, and outreach' },
    { value: 'general', label: 'General Information', description: 'Questions and general inquiries' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low Priority', description: 'Response within 5-7 business days' },
    { value: 'normal', label: 'Normal Priority', description: 'Response within 2-3 business days' },
    { value: 'high', label: 'High Priority', description: 'Response within 24 hours' },
    { value: 'urgent', label: 'Urgent', description: 'Response within 4 hours' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const files = e?.target?.files;
    setFormData(prev => ({ ...prev, attachments: files }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Email is invalid';
    if (!formData?.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData?.subject?.trim()) newErrors.subject = 'Subject is required';
    if (!formData?.message?.trim()) newErrors.message = 'Message is required';
    else if (formData?.message?.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        inquiryType: '',
        subject: '',
        message: '',
        urgency: 'normal',
        newsletter: false,
        attachments: null
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} color="#22c55e" />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">Message Sent Successfully!</h3>
        <p className="text-text-secondary mb-6">
          Thank you for contacting RocketryXyz. We've received your {formData?.inquiryType} inquiry and will respond within the expected timeframe.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitSuccess(false)}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-primary mb-2">Send us a Message</h3>
        <p className="text-text-secondary">
          Get in touch with our team. We'll route your inquiry to the right person and respond promptly.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={handleInputChange}
            error={errors?.name}
            required
          />
          
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={handleInputChange}
            error={errors?.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData?.phone}
            onChange={handleInputChange}
            description="Optional - for urgent inquiries"
          />
          
          <Input
            label="Organization"
            name="organization"
            type="text"
            placeholder="Company, University, or Organization"
            value={formData?.organization}
            onChange={handleInputChange}
            description="Optional"
          />
        </div>

        <Select
          label="Inquiry Type"
          placeholder="Select the type of inquiry"
          options={inquiryTypes}
          value={formData?.inquiryType}
          onChange={(value) => handleSelectChange('inquiryType', value)}
          error={errors?.inquiryType}
          required
          searchable
        />

        <Select
          label="Priority Level"
          placeholder="Select urgency level"
          options={urgencyLevels}
          value={formData?.urgency}
          onChange={(value) => handleSelectChange('urgency', value)}
          description="This helps us prioritize your inquiry appropriately"
        />

        <Input
          label="Subject"
          name="subject"
          type="text"
          placeholder="Brief subject line for your inquiry"
          value={formData?.subject}
          onChange={handleInputChange}
          error={errors?.subject}
          required
        />

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Please provide details about your inquiry..."
            value={formData?.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
          />
          {errors?.message && (
            <p className="mt-1 text-sm text-red-600">{errors?.message}</p>
          )}
          <p className="mt-1 text-xs text-text-secondary">
            Minimum 10 characters. Be specific to help us assist you better.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Attachments
          </label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Icon name="Upload" size={32} className="mx-auto mb-2 text-text-secondary" />
              <p className="text-sm text-text-secondary">
                Click to upload files or drag and drop
              </p>
              <p className="text-xs text-text-secondary mt-1">
                PDF, DOC, images, ZIP files up to 10MB each
              </p>
            </label>
            {formData?.attachments && formData?.attachments?.length > 0 && (
              <div className="mt-3 text-sm text-primary">
                {formData?.attachments?.length} file(s) selected
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            name="newsletter"
            checked={formData?.newsletter}
            onChange={handleInputChange}
            label="Subscribe to Mission Updates"
            description="Receive our monthly newsletter with launch updates, team news, and competition results"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="left"
            className="flex-1"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                phone: '',
                organization: '',
                inquiryType: '',
                subject: '',
                message: '',
                urgency: 'normal',
                newsletter: false,
                attachments: null
              });
              setErrors({});
            }}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Clear Form
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;