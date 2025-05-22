import Image from "next/image";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Behind the Scenes & Bloopers - Multiple Creators",
  description:
    "See exclusive behind-the-scenes photos, videos, and fun bloopers from our music video shoots.",
};

const behindTheScenes = [
  { src: "/IMG_2505.JPG", alt: "BTS 1" },
  { src: "/IMG_2506.JPG", alt: "BTS 2" },
  { src: "/IMG_3666.JPG", alt: "BTS 3" },
  { src: "/IMG_3678.JPG", alt: "BTS 4" },
  { src: "/IMG_3688.JPG", alt: "BTS 5" },
  { src: "/IMG_9043.JPG", alt: "BTS 6" },
  { src: "/IMG_6810.JPG", alt: "BTS 7" },
  { src: "/IMG_8925.JPG", alt: "BTS 8" },
];

const blooperVideos = [
  { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Blooper 1" },
  { src: "https://www.youtube.com/embed/y6120QOlsfU", title: "Blooper 2" },
];

export default function BehindTheScenesPage() {
  return (
    <div className="space-y-12 py-8 md:py-16">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight font-chunky">
          Behind the Scenes & Bloopers
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore exclusive behind-the-scenes photos, fun moments, and blooper
          reels from our music video productions.
        </p>
      </div>

      <section>
        <Card className="bg-card/70">
          <CardHeader>
            <CardTitle className="font-chunky text-2xl text-primary">
              Behind the Scenes Photos
            </CardTitle>
            <CardDescription>
              Get a glimpse of our creative process and the team in action.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {behindTheScenes.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md group transition-transform"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90 group-hover:shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="bg-card/70 mt-12">
          <CardHeader>
            <CardTitle className="font-chunky text-2xl text-primary">
              Bloopers & Fun Moments
            </CardTitle>
            <CardDescription>
              Laugh with us! Enjoy some of the lighter moments and outtakes from
              our shoots.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blooperVideos.map((video, idx) => (
                <div
                  key={idx}
                  className="aspect-video rounded-lg overflow-hidden shadow-md"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full border-0 rounded-lg"
                  ></iframe>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
