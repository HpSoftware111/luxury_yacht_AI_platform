import Image from 'next/image';
import Link from 'next/link';
import {
  Ship,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import YachtCard from '@/components/yacht-card';
import { yachts } from '@/lib/yachts';

export default function Home() {
  const featuredYachts = yachts.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="https://picsum.photos/1800/1000"
          alt="Luxury yacht on the ocean"
          data-ai-hint="yacht ocean"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Your Voyage, Reimagined
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Discover and book the world's most exclusive yachts with our AI-powered concierge service.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/search">Find Your Yacht</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/concierge">AI Concierge</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              The Azure Advantage
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We blend cutting-edge technology with unparalleled luxury to create unforgettable experiences at sea.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Ship className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">Exclusive Fleet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access a curated selection of the finest yachts, each verified for quality and luxury.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">AI Concierge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our smart assistant understands your desires, crafting personalized itineraries and recommendations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">Secure & Seamless</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Book with confidence through our secure payment system and transparent digital contracts.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Featured Yachts
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Explore some of our most sought-after vessels, ready to embark on a new adventure.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredYachts.map((yacht) => (
              <YachtCard key={yacht.id} yacht={yacht} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/search">Explore All Yachts</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">
            Let AI Be Your First Mate
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Tell our AI concierge your dream voyage in your own words. From a family trip in the
            Caribbean to a glamorous party in St. Tropez, we'll find the perfect match.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-bold">
            <Link href="/concierge">Chat Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
