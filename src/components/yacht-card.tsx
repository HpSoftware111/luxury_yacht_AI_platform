import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Tag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { type Yacht } from '@/lib/yachts';

interface YachtCardProps {
  yacht: Yacht;
}

export default function YachtCard({ yacht }: YachtCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 group">
      <CardHeader className="p-0">
        <Link href={`/yachts/${yacht.id}`} className="block aspect-[4/3] relative overflow-hidden">
          <Image
            src={yacht.mainImage}
            alt={`The ${yacht.name} yacht`}
            data-ai-hint="yacht sea"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2">
           <Link href={`/yachts/${yacht.id}`} className="hover:text-primary transition-colors">{yacht.name}</Link>
        </CardTitle>
        <div className="text-muted-foreground text-sm space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{yacht.location}</span>
          </div>
           <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>{yacht.type}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center bg-secondary/30">
        <div>
            <p className="text-xl font-bold text-primary">
                ${yacht.pricePerDay.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">/ day</p>
        </div>
        <Button asChild>
          <Link href={`/yachts/${yacht.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
