
import { videos } from '@/lib/data';
import VideoGalleryItem from '@/components/video-gallery-item';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Gallery - Multiple Creators',
  description: 'Explore a curated collection of music videos by Multiple Creators.',
};

export default function VideoGalleryPage() {
  const hints = ["galaxy space", "neon city", "flower timelapse", "city street"];
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary tracking-tight">Video Gallery</h1>
      <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
        Discover a diverse portfolio of music videos, each crafted with a unique vision and artistic flair. Click on any video to learn more and see AI-generated insights.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {videos.map((video, index) => (
          <VideoGalleryItem key={video.id} video={video} data-ai-hint={hints[index % hints.length]} />
        ))}
      </div>
    </div>
  );
}
