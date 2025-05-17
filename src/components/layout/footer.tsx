import { Copyright, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border mt-auto py-6 shadow-inner">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Copyright className="w-4 h-4" />
          <p>{currentYear} Multiple Creators. All rights reserved.</p>
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
