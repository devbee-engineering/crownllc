
'use client';
import { useState, useMemo, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RefreshCw } from 'lucide-react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const captchaQuestions = [
  { question: 'What is 2 + 7?', answer: '9' },
  { question: 'What is 3 + 4?', answer: '7' },
  { question: 'What is 5 + 2?', answer: '7' },
  { question: 'What is 6 + 1?', answer: '7' },
];

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  inquiryType: z.string().min(1, { message: 'Please select an inquiry type.' }),
  mobile: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: 'Please enter a valid mobile number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(1500),
  captcha: z.string(),
  consent: z.literal<boolean>(true, {
    errorMap: () => ({ message: 'You must agree to the privacy policy.' }),
  }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [captchaIndex, setCaptchaIndex] = useState(0);
  const { toast } = useToast();
  const firestore = useFirestore();

  const currentCaptcha = useMemo(() => captchaQuestions[captchaIndex], [captchaIndex]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema.extend({
      captcha: z.string().refine(val => val === currentCaptcha.answer, {
        message: 'Incorrect captcha answer.',
      }),
    })),
    mode: 'onChange',
  });

  const rotateCaptcha = useCallback(() => {
    setCaptchaIndex((prev) => (prev + 1) % captchaQuestions.length);
  }, []);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const submissionData = {
        fullName: data.fullName,
        inquiryType: data.inquiryType,
        mobile: data.mobile,
        email: data.email,
        message: data.message,
        captchaOK: true,
        consent: data.consent,
        createdAt: serverTimestamp(),
      };
      const submissionsCol = collection(firestore, 'contactSubmissions');
      
      addDoc(submissionsCol, submissionData)
        .catch(error => {
            const contextualError = new FirestorePermissionError({
                path: submissionsCol.path,
                operation: 'create',
                requestResourceData: submissionData,
            });
            errorEmitter.emit('permission-error', contextualError);
        });

      toast({
        title: 'Thanks!',
        description: "We'll get back to you shortly.",
      });
      reset();
      rotateCaptcha();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: 'Something went wrong. Please try again.',
      });
    }
  };
  
  const firstError = Object.values(errors)[0]?.message;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <h2 className="text-3xl lg:text-4xl font-display">Connect With Us</h2>
      <p className="mt-2 text-muted-foreground">Fill in your details and we’ll get back to you.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        {firstError && (
          <Alert variant="destructive" role="alert">
            <AlertDescription>{String(firstError)}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" {...register('fullName')} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="inquiryType">Inquiry Type</Label>
             <Select name="inquiryType" onValueChange={(value) => control.setValue('inquiryType', value, { shouldValidate: true })}>
                <SelectTrigger id="inquiryType" className="mt-1">
                    <SelectValue placeholder="Please choose an option" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Sourcing">Sourcing</SelectItem>
                    <SelectItem value="Partnership">Partnership</SelectItem>
                    <SelectItem value="Careers">Careers</SelectItem>
                    <SelectItem value="General">General</SelectItem>
                </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile" type="tel" {...register('mobile')} placeholder="+971 52 000 0000" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" {...register('email')} className="mt-1" />
          </div>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" rows={6} {...register('message')} className="mt-1" />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Label htmlFor="captcha" className="whitespace-nowrap">{currentCaptcha.question}</Label>
          <div className="flex items-center gap-2">
            <Input id="captcha" {...register('captcha')} className="w-24" />
            <Button type="button" variant="ghost" size="icon" onClick={rotateCaptcha} aria-label="New captcha question">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="consent" {...register('consent')} className="mt-1" />
          <Label htmlFor="consent" className="text-sm text-muted-foreground">
            I agree to be contacted and accept the <a href="/privacy-policy" className="underline hover:text-brand">Privacy Policy</a>.
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-brand hover:bg-brand-600 text-white"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'SUBMIT'}
        </Button>
      </form>
    </div>
  );
}
