import Link from 'next/link';
import { Ship } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Ship className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">
              Azure Yacht Navigator
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Azure Yacht Navigator. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/search" className="text-sm hover:text-primary transition-colors">
              Search
            </Link>
            <Link href="/concierge" className="text-sm hover:text-primary transition-colors">
              Concierge
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
