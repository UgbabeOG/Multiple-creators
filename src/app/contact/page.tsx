import ContactForm from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Multiple Creators",
  description:
    "Get in touch for collaborations, inquiries, or to discuss your next project with Multiple Creators.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
          Get In Touch
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Reach out through the
          form below or contact us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>{" "}
            {/* Font size handled by CardTitle component */}
            <CardDescription>
              Send us a message, and we'll get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-card/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Direct Contact</CardTitle>{" "}
            {/* Font size handled by CardTitle component */}
            <CardDescription>
              You can also reach us through these channels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:contact@multiplecreators.com"
                  className="hover:text-accent transition-colors"
                >
                  contact@multiplecreators.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="hover:text-accent transition-colors"
                >
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

      {/* Social Media Section */}
      <Card className="shadow-xl  border border-accent/50 mt-8">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-extrabold text-primary tracking-tight">
            Follow Us on Social Media
          </CardTitle>
          <CardDescription className="text-base ">
            Stay connected for our latest work, behind-the-scenes, and updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-8 py-4">
            <a
              href="https://instagram.com/multiplecreators"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group hover:text-accent transition-colors"
            >
              <span className="bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="6" y="6" rx="5" />
                  <path d="M22 15.37A4 4 0 1 1 18.63 12 4 4 0 0 1 22 15.37z" />
                  <line x1="23.5" x2="23.51" y1="10.5" y2="10.5" />
                </svg>
              </span>
              <span className="font-semibold text-sm mt-1 text-muted-foreground">Instagram</span>
            </a>
            <a
              href="https://twitter.com/multicreators"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group hover:text-accent transition-colors"
            >
              <span className="bg-blue-500/90 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M29 9a13.1 13.1 0 0 1-3.77 1.64A5.37 5.37 0 0 0 28.4 5.36a11.09 11.09 0 0 1-3.44 1.32A5.37 5.37 0 0 0 20.11 4c-3 0-5.5 2.41-5.5 5.5 0 .43.05.85.14 1.25C9.69 11.4 5.07 8.7 2.14 4.15c-.46.78-.72 1.68-.72 2.64 0 1.82.93 3.42 2.36 4.36A5.37 5.37 0 0 1 2 10.06v.07c0 2.55 1.82 4.67 4.29 5.15-.44.12-.91.18-1.39.18-.34 0-.67-.03-.99-.09.68 2.13 2.66 3.68 5.01 3.72A10.74 10.74 0 0 1 2 25.54a15.2 15.2 0 0 0 8.2 2.41c9.8 0 15.18-8.1 15.18-15.13 0-.23 0-.46-.02-.68A10.92 10.92 0 0 0 29 9z" />
                </svg>
              </span>
              <span className="font-semibold text-sm mt-1 text-muted-foreground">Twitter</span>
            </a>
            {/* <a
              href="https://facebook.com/multiplecreators"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group hover:text-accent transition-colors"
            >
              <span className="bg-blue-700/90 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M24 6h-4a6 6 0 0 0-6 6v4H8v5h6v10h6V21h5l1-5h-6v-4a2 2 0 0 1 2-2h4z" />
                </svg>
              </span>
              <span className="font-semibold text-sm mt-1">Facebook</span>
            </a> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
