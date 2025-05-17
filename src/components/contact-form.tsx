"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: ContactFormState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success && state.message) {
      toast({
        title: "Success!",
        description: state.message,
        variant: "default",
      });
      // Consider resetting the form here if needed, though useFormState doesn't directly support it.
      // A common pattern is to use a key prop on the form to force remount, or manage fields with useState.
      // For simplicity, we're not resetting fields automatically.
    } else if (!state.success && state.message && !state.errors) { // General error without field specifics
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className="space-y-6">
      <div>
        <Label htmlFor="name" className="mb-1 block">Full Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          aria-describedby="name-error"
          className={state.errors?.name ? 'border-destructive' : ''}
        />
        {state.errors?.name && (
          <p id="name-error" className="text-sm text-destructive mt-1">
            {state.errors.name.join(', ')}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="mb-1 block">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
          aria-describedby="email-error"
          className={state.errors?.email ? 'border-destructive' : ''}
        />
        {state.errors?.email && (
          <p id="email-error" className="text-sm text-destructive mt-1">
            {state.errors.email.join(', ')}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="mb-1 block">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={5}
          required
          aria-describedby="message-error"
          className={state.errors?.message ? 'border-destructive' : ''}
        />
        {state.errors?.message && (
          <p id="message-error" className="text-sm text-destructive mt-1">
            {state.errors.message.join(', ')}
          </p>
        )}
      </div>
      
      <SubmitButton />

      {state.message && !state.success && state.errors && Object.keys(state.errors).length > 0 && (
         <p className="text-sm text-destructive mt-2 text-center">{state.message}</p>
      )}
    </form>
  );
}
