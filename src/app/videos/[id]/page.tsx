import { getVideoById, Video } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import AIDescriptionGenerator from '@/components/ai-description-generator';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const video = await getVideoById(id);

  if (!video) {
    return {
      title: 'Video Not Found - Multiple Creators',
    };
  }

  return {
    title: `${video.title} - Multiple Creators`,
    description: video.initialDescription || `Details for the music video ${video.title}.`,
  };
}


export default async function VideoDetailsPage({ params }: { params: { id: string } }) {
  const video = await getVideoById(params.id);

  if (!video) {
    notFound();
  }
  
  const videoHints = {
    "cosmic-echoes": "galaxy space",
    "neon-dreams": "neon city",
    "silent-bloom": "flower timelapse",
    "urban-rhapsody": "city street"
  };
  const dataAiHint = videoHints[video.id as keyof typeof videoHints] || "video still";


  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary tracking-tight">{video.title}</h1>
      {video.artist && <p className="text-xl text-muted-foreground -mt-6">By {video.artist}</p>}

      <Card className="overflow-hidden shadow-lg">
        <CardContent className="p-0">
          {video.videoUrl ? (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={video.videoUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video relative bg-muted">
              <Image
                src={video.placeholderImage}
                alt={`Placeholder for ${video.title}`}
                layout="fill"
                objectFit="cover"
                data-ai-hint={dataAiHint}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {video.initialDescription && (
        <Card>
          <CardHeader>
            <CardTitle>Original Description</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">{video.initialDescription}</CardDescription>
          </CardContent>
        </Card>
      )}
      
      <Separator className="my-8" />

      <AIDescriptionGenerator video={video} />
    </div>
  );
}
