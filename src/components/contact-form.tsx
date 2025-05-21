"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

// Your email address where you want to receive messages
const YOUR_RECEIVING_EMAIL = "your_email_address@example.com"; // <<<< IMPORTANT: Change this

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoLink = `mailto:${YOUR_RECEIVING_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Optionally, provide feedback to the user and reset form
    setSubmitted(true);
    // setName('');
    // setEmail('');
    // setMessage('');
    // You might want to show a small message like "Your email client should open..."
    // For simplicity, we'll just rely on the email client opening.
  };

  if (submitted) {
    return (
      <div className="text-center p-4 border border-dashed rounded-md">
        <p className="text-lg font-medium">Thank you!</p>
        <p className="text-muted-foreground">
          Your email client should have opened with your message.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="link"
          className="mt-2"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="mb-1 block">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="email" className="mb-1 block">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="message" className="mb-1 block">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full hover:bg-purple-900 shadow-lg hover:shadow-xl transition-shadow" size="lg">
        <Send className="mr-2 h-4 w-4 " />
        Send Message
      </Button>
    </form>
  );
}
