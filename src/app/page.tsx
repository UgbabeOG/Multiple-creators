"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  // Carousel auto-slide logic
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slideCount = featuredStills.length;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slideCount]);

  const goToSlide = (idx: number) => setCurrent(idx);

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
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / featuredStills.length)}%)`,
              width: `${featuredStills.length * 100}%`,
            }}
          >
            {featuredStills.map((still, index) => (
              <div
                key={index}
                // Removed md:basis-1/2, lg:basis-1/3, and w-full as they conflict with the single-item slide logic
                className="flex-shrink-0 flex items-center justify-center p-2"
                style={{ width: `${100 / featuredStills.length}%` }}
              >
                <div className="relative aspect-[4/3] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-gradient-to-br from-[#211A2E] via-[#673AB7]/30 to-[#E91E63]/20 border-2 border-accent rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                  <Image
                    src={still.src}
                    alt={still.alt}
                    fill
                    objectFit="cover" // Use prop instead of style
                    className="rounded-2xl max-h-min"
                    data-ai-hint={still.hint}
                    // Sizes based on the max-w-* classes of the parent div
                    // max-w-xs (320px), sm:max-w-sm (384px), md:max-w-md (448px), lg:max-w-lg (512px), xl:max-w-xl (576px)
                    sizes="(max-width: 639px) 320px, (max-width: 767px) 384px, (max-width: 1023px) 448px, (max-width: 1279px) 512px, 576px"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {featuredStills.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full border-2 transition-colors duration-200 ${
                  current === idx
                    ? "bg-accent border-accent"
                    : "bg-muted border-border"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
