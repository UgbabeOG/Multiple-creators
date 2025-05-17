// src/app/contact/actions.ts
"use server";

import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export interface ContactFormState {
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: boolean;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
      success: false,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Contact form submitted with data:", validatedFields.data);
  // In a real app, you would integrate with an email service (e.g., SendGrid, Resend)
  // or save the data to your database.

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { 
    message: "Thank you for your message! We'll be in touch soon.",
    success: true,
  };
}
