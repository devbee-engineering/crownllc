"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSubmitStatus('success');
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-light mb-8 text-[#0B0B0B]">Get In Touch</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-900">
              First Name *
            </Label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required
              className="mt-1 bg-white text-gray-900 border-gray-300 placeholder:text-gray-500 focus:ring-0 focus:border-gray-400"
              placeholder="Your first name"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-900">
              Last Name *
            </Label>
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              required
              className="mt-1 bg-white text-gray-900 border-gray-300 placeholder:text-gray-500 focus:ring-0 focus:border-gray-400"
              placeholder="Your last name"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-900">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="mt-1 bg-white text-gray-900 border-gray-300 placeholder:text-gray-500 focus:ring-0 focus:border-gray-400"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-900">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="mt-1 bg-white text-gray-900 border-gray-300 placeholder:text-gray-500 focus:ring-0 focus:border-gray-400"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message" className="text-sm font-medium text-gray-900">
            Message *
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            required
            className="mt-1 min-h-[120px] bg-white text-gray-900 border-gray-300 placeholder:text-gray-500 focus:ring-0 focus:border-gray-400"
            placeholder="Please provide details about your inquiry..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0B0B0B] text-white hover:bg-[#0B0B0B]/90 py-3"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-green-600 text-sm text-center">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-600 text-sm text-center">
              There was an error sending your message. Please try again or contact us directly.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
