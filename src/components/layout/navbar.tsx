
import Link from 'next/link';
import { Film, Mail, User, Home, Video, Users } from 'lucide-react'; // Added Users icon
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
          <Film className="w-7 h-7 text-accent" />
          Multiple Creators
        </Link>
        <nav className="flex items-center gap-1 md:gap-2">
          <Button variant="ghost" asChild>
            <Link href="/" className="text-foreground hover:text-accent transition-colors flex items-center gap-1 md:gap-2">
              <Home className="w-4 h-4" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/gallery" className="text-foreground hover:text-accent transition-colors flex items-center gap-1 md:gap-2">
               <Video className="w-4 h-4" />
              Gallery
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors flex items-center gap-1 md:gap-2">
              <Users className="w-4 h-4" /> {/* Changed icon to Users */}
              About
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors flex items-center gap-1 md:gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
