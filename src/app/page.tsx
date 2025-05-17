
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visionary Vault - Crafting Cinematic Music Videos',
  description: 'Welcome to Visionary Vault, the home of a passionate music video director. Discover unique visual stories and creative filmmaking.',
};

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-12 py-8 md:py-16">
      <section className="w-full max-w-5xl">
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="https://placehold.co/1200x525.png"
            alt="Abstract background representing creative vision"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="abstract creative"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight !text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">
              Visionary Vault
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl !text-white/90 [text-shadow:_0_1px_3px_rgb(0_0_0_/_30%)]">
              Crafting Cinematic Experiences, One Frame at a Time.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl space-y-6 px-4">
        <h2 className="text-3xl font-semibold text-primary tracking-tight">
          Where Music Meets Visual Storytelling
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Welcome to the portfolio of a music video director dedicated to transforming sound into unforgettable visual narratives. Explore a collection of works that push creative boundaries and captivate audiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/gallery">
              <PlayCircle className="mr-2" /> Explore Video Gallery
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/about">
              Learn About The Director <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="w-full max-w-5xl pt-8">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Featured Stills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image src="https://placehold.co/400x400.png?a=1" alt="Featured still 1" layout="fill" objectFit="cover" data-ai-hint="music video still"/>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image src="https://placehold.co/400x400.png?a=2" alt="Featured still 2" layout="fill" objectFit="cover" data-ai-hint="cinematic shot"/>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image src="https://placehold.co/400x400.png?a=3" alt="Featured still 3" layout="fill" objectFit="cover" data-ai-hint="artistic visual"/>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image src="https://placehold.co/400x400.png?a=4" alt="Featured still 4" layout="fill" objectFit="cover" data-ai-hint="director vision"/>
            </div>
          </div>
      </section>
    </div>
  );
}
