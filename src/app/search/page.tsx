"use client";

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import YachtCard from '@/components/yacht-card';
import { yachts } from '@/lib/yachts';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredYachts = useMemo(() => {
    return yachts.filter(yacht =>
      yacht.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      yacht.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      yacht.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold mb-2">Explore Our Fleet</h1>
        <p className="text-lg text-muted-foreground">Find the perfect vessel for your next adventure.</p>
      </div>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search by name, location, or type (e.g., 'Serenity', 'Monaco', 'Superyacht')"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-lg mx-auto"
        />
      </div>
      
      {filteredYachts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredYachts.map(yacht => (
            <YachtCard key={yacht.id} yacht={yacht} />
          ))}
        </div>
      ) : (
         <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-2">No Yachts Found</h2>
            <p className="text-muted-foreground">
                Try adjusting your search terms or explore our full fleet.
            </p>
         </div>
      )}
    </div>
  );
}
