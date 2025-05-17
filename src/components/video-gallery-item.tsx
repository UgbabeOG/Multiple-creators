
import Link from 'next/link';
import Image from 'next/image';
import { Video } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

interface VideoGalleryItemProps {
  video: Video;
  'data-ai-hint': string; 
}

export default function VideoGalleryItem({ video, 'data-ai-hint': dataAiHint }: VideoGalleryItemProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl hover:border-accent transition-all duration-300 ease-in-out transform hover:-translate-y-1 group">
      <CardHeader className="p-0 relative">
        <div className="aspect-video relative">
          {video.videoUrl ? (
            <iframe
              src={video.videoUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          ) : (
            <>
              <Image
                src={video.thumbnailUrl}
                alt={`Thumbnail for ${video.title}`}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
                data-ai-hint={dataAiHint}
              />
              <Link href={`/videos/${video.id}`} className="absolute inset-0">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <PlayCircle className="w-16 h-16 text-white/80" />
                </div>
              </Link>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col justify-between">
        <Link href={`/videos/${video.id}`} className="block">
          <div>
            <CardTitle className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
              {video.title}
            </CardTitle>
            {video.artist && (
              <CardDescription className="text-sm text-muted-foreground mt-1">
                By {video.artist}
              </CardDescription>
            )}
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
