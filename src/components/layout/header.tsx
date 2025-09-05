"use client";

import Link from 'next/link';
import { Ship, UserCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from 'react';

const navLinks = [
  { href: "/search", label: "Search Yachts" },
  { href: "/concierge", label: "AI Concierge" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Ship className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline text-lg">
            Azure Yacht Navigator
          </span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild variant="ghost">
            <Link href="/login">
              <UserCircle className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Link>
          </Button>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 p-4">
                  <Link href="/" className="mr-6 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Ship className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline text-lg">
                      Azure Yacht Navigator
                    </span>
                  </Link>
                  <nav className="flex flex-col gap-4 mt-4">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href} 
                        className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
