import Image from 'next/image';

interface VideoPlayerProps {
  title: string;
  videoUrl?: string;
  placeholderImage: string;
  dataAiHint?: string;
}

export default function VideoPlayer({ title, videoUrl, placeholderImage, dataAiHint }: VideoPlayerProps) {
  if (videoUrl) {
    return (
      <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="border-0"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="aspect-video relative bg-muted rounded-lg overflow-hidden shadow-2xl">
      <Image
        src={placeholderImage}
        alt={`Placeholder for ${title}`}
        layout="fill"
        objectFit="cover"  loading="lazy"
        data-ai-hint={dataAiHint || "video content"}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <p className="text-white text-xl font-semibold">Video Coming Soon</p>
      </div>
    </div>
  );
}
