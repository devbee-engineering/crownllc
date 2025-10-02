
"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

type FormData = {
  fullName: string;
  inquiryType: string;
  mobile: string;
  email: string;
  message: string;
  captcha: string;
  consent: boolean;
};

const captchaQuestions = [
  { question: "2 + 7", answer: "9" },
  { question: "3 + 4", answer: "7" },
  { question: "5 + 2", answer: "7" },
  { question: "6 + 1", answer: "7" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    inquiryType: "",
    mobile: "",
    email: "",
    message: "",
    captcha: "",
    consent: false,
  });

  const [currentCaptchaIndex, setCurrentCaptchaIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const captcha = useMemo(() => captchaQuestions[currentCaptchaIndex], [currentCaptchaIndex]);

  useEffect(() => {
    setCurrentCaptchaIndex(Math.floor(Math.random() * captchaQuestions.length));
  }, []);

  const handleInputChange = (field: keyof Omit<FormData, 'consent' | 'inquiryType'>, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
     if (errors.inquiryType) {
      setErrors(prev => ({ ...prev, inquiryType: undefined }));
    }
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
    if (errors.consent) {
      setErrors(prev => ({ ...prev, consent: undefined }));
    }
  };

  const regenerateCaptcha = () => {
    setCurrentCaptchaIndex((prevIndex) => (prevIndex + 1) % captchaQuestions.length);
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName || formData.fullName.length < 2) newErrors.fullName = "Full name must be at least 2 characters.";
    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.mobile || !/^\+?[0-9\s-]{10,}$/.test(formData.mobile)) newErrors.mobile = "Please enter a valid mobile number.";
    if (!formData.message || formData.message.length > 1500) newErrors.message = "Message cannot exceed 1500 characters.";
    if (formData.captcha !== captcha.answer) newErrors.captcha = "Incorrect captcha answer.";
    if (!formData.consent) newErrors.consent = "You must accept the privacy policy.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { captcha: userCaptcha, ...submissionData } = formData;
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSubmitStatus('success');
      setFormData({
        fullName: "", inquiryType: "", mobile: "", email: "", message: "", captcha: "", consent: false,
      });
      regenerateCaptcha();

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="fullName" className="text-sm font-medium text-gray-900 sr-only">Full Name *</Label>
            <Input id="fullName" type="text" value={formData.fullName} onChange={(e) => handleInputChange('fullName', e.target.value)} required placeholder="Full Name" className="bg-gray-50 border-gray-300" />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <Label htmlFor="inquiryType" className="text-sm font-medium text-gray-900 sr-only">Inquiry Type *</Label>
             <Select onValueChange={handleSelectChange} value={formData.inquiryType} required>
                <SelectTrigger className="bg-gray-50 border-gray-300 text-gray-500">
                    <SelectValue placeholder="—Please choose an option—" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="sourcing">Sourcing</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="careers">Careers</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                </SelectContent>
            </Select>
            {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>}
          </div>
          <div>
            <Label htmlFor="mobile" className="text-sm font-medium text-gray-900 sr-only">Mobile Number *</Label>
            <Input id="mobile" type="tel" value={formData.mobile} onChange={(e) => handleInputChange('mobile', e.target.value)} required placeholder="Mobile Number" className="bg-gray-50 border-gray-300" />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-900 sr-only">E-mail *</Label>
            <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required placeholder="E-mail" className="bg-gray-50 border-gray-300" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-medium text-gray-900 sr-only">Message *</Label>
          <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} required placeholder="Message" className="min-h-[120px] bg-gray-50 border-gray-300" rows={6} maxLength={1500} />
           {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="bg-gray-50 p-4 rounded-md">
                <Label htmlFor="captcha" className="text-sm text-gray-600">What is {captcha.question}?</Label>
                <div className="flex items-center gap-2 mt-1">
                    <Input id="captcha" type="text" value={formData.captcha} onChange={(e) => handleInputChange('captcha', e.target.value)} required placeholder="Type your answer" className="bg-white"/>
                    <Button type="button" variant="ghost" size="icon" onClick={regenerateCaptcha} aria-label="Regenerate captcha">
                        <RefreshCw className="w-5 h-5 text-gray-500"/>
                    </Button>
                </div>
                 {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}
            </div>
            <div className="flex items-center space-x-2 pt-4">
                <Checkbox id="consent" checked={formData.consent} onCheckedChange={handleConsentChange} />
                <Label htmlFor="consent" className="text-sm text-gray-600">I agree to be contacted and accept the Privacy Policy.</Label>
                 {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
            </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <Button type="submit" disabled={isSubmitting} className="w-1/2 bg-[#5C0A17] text-white hover:bg-[#7a1522] py-3 text-base font-bold">
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
          </Button>

          {submitStatus === 'success' && (
            <div className="text-green-600 text-sm text-center" aria-live="polite">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-600 text-sm text-center" aria-live="polite">
              There was an error sending your message. Please try again or contact us directly.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
