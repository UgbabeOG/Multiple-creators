"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

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
  },
  {
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
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slideCount = featuredStills.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const AUTOPLAY_INTERVAL = 3500; // milliseconds

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  }, [slideCount]);

  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Conditions to not start autoplay
    if (isHovering || slideCount <= 1) {
      return;
    }

    // Start new interval
    // The 'current' dependency ensures this effect re-runs (and thus resets the timer)
    // after a manual navigation, as 'current' would have changed.
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    // Cleanup function to clear interval on component unmount or when dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [current, slideCount, isHovering, nextSlide]);
  
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-12 py-8 md:py-16">
      <section className="w-full max-w-5xl">
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/IMG_3688.JPG"
            alt="Abstract background representing creative vision"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="abstract creative"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / slideCount)}%)`,
              width: `${slideCount * 100}%`,
            }}
          >
            {featuredStills.map((still, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center p-2"
                style={{ width: `${100 / slideCount}%` }}
              >
                <div className="relative aspect-[4/3] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-gradient-to-br from-[#211A2E] via-[#673AB7]/30 to-[#E91E63]/20 border-2 border-accent rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                  <Image
                    src={still.src}
                    alt={still.alt}
                    fill
                    objectFit="cover" // Use prop instead of style
                    className="rounded-2xl p-1"
                    data-ai-hint={still.hint}
                    priority={index === 0} // Load first image first
                    sizes="(max-width: 639px) 320px, (max-width: 767px) 384px, (max-width: 1023px) 448px, (max-width: 1279px) 512px, 576px"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Buttons by the side */}
          {slideCount > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-accent hover:text-accent-foreground text-foreground rounded-full shadow-md transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-accent hover:text-accent-foreground text-foreground rounded-full shadow-md transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
