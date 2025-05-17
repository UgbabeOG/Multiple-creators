
import { Copyright, Instagram } from 'lucide-react';

// Simple X/Twitter SVG icon
const TwitterIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    className="w-5 h-5"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.602.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
  </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card/70 backdrop-blur-lg border-t border-border/30 mt-auto py-6 shadow-inner">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Copyright className="w-4 h-4" />
          <p>{currentYear} Multiple Creators. All rights reserved.</p>
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent transition-colors">
            <TwitterIcon />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
