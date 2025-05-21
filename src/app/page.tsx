import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "Multiple Creators - Crafting Cinematic Music Videos",
  description:
    "Welcome to Multiple Creators, the home of passionate music video directors. Discover unique visual stories and creative filmmaking.",
};

const featuredStills = [
  {
    src: "/IMG_2505.JPG",
    alt: "Featured still 1",
    hint: "music video still",
  },
  {
    src: "/IMG_2506.JPG",
    alt: "Featured still 2",
    hint: "cinematic shot",
  },
  {
    src: "/IMG_3666.JPG",
    alt: "Featured still 3",
    hint: "artistic visual",
  },
  {
    src: "/IMG_3678.JPG",
    alt: "Featured still 4",
    hint: "director vision",
  },
  {
    src: "/IMG_3688.JPG",
    alt: "Featured still 5",
    hint: "creative lighting",
  },{
    src: "/IMG_9043.JPG",
    alt: "Featured still 8",
    hint: "creative lighting",
  },
  {
    src: "/IMG_6810.JPG",
    alt: "Featured still 6",
    hint: "creative lighting",
  },
  {
    src: "/IMG_8925.JPG",
    alt: "Featured still 7",
    hint: "creative lighting",
  },
  
];

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-12 py-8 md:py-16">
      <section className="w-full max-w-5xl">
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/IMG_3666.JPG"
            alt="Abstract background representing creative vision"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="abstract creative"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight !text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)] animate-in fade-in slide-in-from-top-8 duration-1000">
              Multiple Creators
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl !text-white/90 [text-shadow:_0_1px_3px_rgb(0_0_0_/_30%)] animate-in fade-in slide-in-from-top-10 duration-1000 delay-200">
              Crafting Cinematic Experiences, One Frame at a Time.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl space-y-6 px-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary tracking-tight">
          Where Music Meets Visual Storytelling
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Welcome to the portfolio of music video creators dedicated to
          transforming sound into unforgettable visual narratives. Explore a
          collection of works that push creative boundaries and captivate
          audiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Button
            asChild
            size="lg"
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link href="/gallery">
              <PlayCircle className="mr-2" /> Explore Video Gallery
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link href="/about">
              Learn About The Creators <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="w-full max-w-3xl pt-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-primary">
          Featured Stills
        </h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredStills.map((still, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  {" "}
                  {/* Increased padding */}
                  <div className="aspect-video relative rounded-lg p-32 overflow-hidden shadow-md">
                    <Image 
                      src={still.src}
                      alt={still.alt}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={still.hint}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
