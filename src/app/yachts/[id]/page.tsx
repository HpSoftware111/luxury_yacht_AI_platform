import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Anchor,
  CalendarDays,
  Ship,
  Users,
  BedDouble,
  CheckCircle,
  Wind,
} from 'lucide-react';

import { getYachtById } from '@/lib/yachts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import BookingForm from './booking-form';

export default function YachtDetailPage({ params }: { params: { id: string } }) {
  const yacht = getYachtById(Number(params.id));

  if (!yacht) {
    notFound();
  }

  const specs = [
    { icon: Ship, label: "Type", value: yacht.type },
    { icon: Anchor, label: "Length", value: `${yacht.length}m` },
    { icon: Users, label: "Guests", value: yacht.guests },
    { icon: BedDouble, label: "Cabins", value: yacht.cabins },
    { icon: Wind, label: "Built", value: yacht.year },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <Carousel className="w-full rounded-lg overflow-hidden shadow-lg">
            <CarouselContent>
              {[yacht.mainImage, ...yacht.images].map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative">
                    <Image
                      src={img}
                      alt={`${yacht.name} view ${index + 1}`}
                      data-ai-hint="yacht lifestyle"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          
          <Card className="mt-8">
            <CardHeader>
                <CardTitle className="font-headline text-3xl">About {yacht.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{yacht.description}</p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <h1 className="font-headline text-4xl font-bold">{yacht.name}</h1>
                    <p className="text-lg text-muted-foreground">{yacht.location}</p>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 text-center mb-6">
                        {specs.map(spec => (
                            <div key={spec.label} className="p-2 rounded-lg bg-secondary/50">
                                <spec.icon className="w-6 h-6 mx-auto text-primary mb-1"/>
                                <p className="text-sm font-semibold">{spec.label}</p>
                                <p className="text-xs text-muted-foreground">{spec.value}</p>
                            </div>
                        ))}
                    </div>

                    <Separator className="my-6" />

                    <div>
                        <h3 className="font-headline text-xl mb-4">Amenities</h3>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {yacht.amenities.map(amenity => (
                                <li key={amenity} className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary"/>
                                    <span className="text-muted-foreground">{amenity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Separator className="my-6" />
                    
                     <div>
                        <h3 className="font-headline text-xl mb-4">Request Booking</h3>
                        <div className="flex items-end gap-4 mb-4">
                            <p className="text-3xl font-bold text-primary">${yacht.pricePerDay.toLocaleString()}</p>
                            <p className="text-muted-foreground">/ day</p>
                        </div>
                        <BookingForm yacht={yacht} />
                    </div>

                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
