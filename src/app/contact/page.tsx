import ContactForm from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Multiple Creators',
  description: 'Get in touch for collaborations, inquiries, or to discuss your next project with Multiple Creators.',
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">Get In Touch</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Reach out through the form below or contact us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle> {/* Font size handled by CardTitle component */}
            <CardDescription>Send us a message, and we'll get back to you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-card/50">
          <CardHeader>
            <CardTitle>Direct Contact</CardTitle> {/* Font size handled by CardTitle component */}
            <CardDescription>You can also reach us through these channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:contact@multiplecreators.com" className="hover:text-accent transition-colors">
                  contact@multiplecreators.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-semibold">Studio (By Appointment)</h3>
                <p>123 Creators Lane, Creative City, CA 90210</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
