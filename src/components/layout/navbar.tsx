
"use client";

import Link from 'next/link';
import { Film, Mail, Users, Home, Video, Menu as MenuIcon } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'; 
import { useState } from 'react';
import { ThemeToggleButton } from '@/components/theme-toggle-button';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/gallery", label: "Gallery", icon: Video },
    { href: "/about", label: "About", icon: Users },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="bg-card/70 backdrop-blur-lg border-b border-border/30 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
          <Film className="w-7 h-7 text-accent" />
          Multiple Creators
        </Link>

        {/* Desktop Navigation & Theme Toggle */}
        <nav className="hidden md:flex items-center gap-1 md:gap-2">
          {navLinks.map(link => (
            <Button variant="ghost" asChild key={link.href}>
              <Link href={link.href} className="text-foreground hover:text-accent transition-colors flex items-center gap-1 md:gap-2 px-2 sm:px-3">
                <link.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{link.label}</span>
              </Link>
            </Button>
          ))}
          <ThemeToggleButton />
        </nav>

        {/* Mobile Navigation Trigger & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetTitle className="sr-only">Main Menu</SheetTitle> 
              <div className="p-4">
                <Link
                  href="/"
                  className="text-lg font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2 mb-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Film className="w-6 h-6 text-accent" />
                  Multiple Creators
                </Link>
                <nav className="flex flex-col gap-2">
                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-base"
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
