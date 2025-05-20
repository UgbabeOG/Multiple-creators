export interface Video {
  id: string;
  title: string;
  artist?: string;
  thumbnailUrl: string;
  videoUrl?: string;
  placeholderImage: string;
  contentSummary: string;
  directorStyle: string;
  initialDescription?: string;
}

export const videos: Video[] = [
  {
    id: "cosmic-echoes",
    title: "Fine Wine",
    artist: "Onuh Emz",
    thumbnailUrl: "https://placehold.co/600x400.png?a=1",
    videoUrl: "https://www.youtube.com/embed/BFjdJWFCpDc?si=GlrBY8KPZaL5G_vV", 
    placeholderImage: "https://youtu.be/BFjdJWFCpDc?si=r3XBPCECXK9iPXND",
    contentSummary:
      "A journey through vibrant nebulae and star clusters, synchronized with an uplifting electronic track. Features abstract visuals and a lone astronaut.",
    directorStyle:
      "Visually rich, narrative-driven, with a focus on color theory and emotional resonance.",
    initialDescription:
      "Experience 'Cosmic Echoes', a stunning voyage into the heart of the universe. Directed with a keen eye for breathtaking visuals and emotive storytelling.",
  },
  {
    id: "neon-dreams",
    title: "Its Okay",
    artist: "Onuh Emz Ft BeeJay",
    videoUrl: "https://www.youtube.com/embed/yUwYAe2mrwU?si=W1nPG9KTkjuU1Cld",
    thumbnailUrl: "https://placehold.co/600x400.png?a=2",
    placeholderImage: "https://placehold.co/1280x720.png?a=2",
    contentSummary:
      "A retro-futuristic cityscape at night, filled with neon lights, fast cars, and a mysterious protagonist. The music is a driving synthwave beat.",
    directorStyle:
      "Fast-paced editing, strong atmospheric lighting, inspired by 80s sci-fi cinema.",
    initialDescription:
      "Dive into 'Neon Dreams', a high-octane tribute to synthwave aesthetics and classic sci-fi. A visual feast of light and motion.",
  },
  {
    id: "silent-bloom",
    title: "Yourside",
    artist: "Ehra",
    thumbnailUrl: "https://placehold.co/600x400.png?a=3",
    videoUrl: "https://www.youtube.com/embed/pW0XOjiCi3I?si=CTRSdNCEnVLghEIi" , 
    placeholderImage: "https://placehold.co/1280x720.png?a=3",
    contentSummary:
      "Time-lapse footage of flowers blooming in surreal, minimalist environments. Accompanied by a delicate ambient soundtrack.",
    directorStyle:
      "Minimalist, focusing on natural beauty and subtle transformations. Poetic and contemplative.",
    initialDescription:
      "'Silent Bloom' captures the ephemeral beauty of nature in a mesmerizing dance of growth and color. A tranquil and poetic visual experience.",
  },
  {
    id: "urban-rhapsody",
    title: "2Mins",
    artist: "Yhung G",
    thumbnailUrl: "https://placehold.co/600x400.png?a=4", videoUrl: "https://www.youtube.com/embed/S0I1Bnt6EDM?si=Z3WDEzkhQUODdfdD"  ,
    placeholderImage: "https://placehold.co/1280x720.png?a=4",
    contentSummary:
      "A dynamic exploration of city life, capturing street art, diverse faces, and the rhythm of urban environments. Set to an energetic hip-hop track.",
    directorStyle:
      "Documentary-style realism mixed with stylized shots, capturing raw energy and authenticity.",
    initialDescription:
      "Feel the pulse of the city in 'Urban Rhapsody'. A vibrant and authentic portrayal of metropolitan life, full of energy and character.",
  },
];

export function getVideoById(id: string): Promise<Video | undefined> {
  return Promise.resolve(videos.find((video) => video.id === id));
}

// Add data-ai-hint attributes to HTML when using these images
// For Cosmic Echoes (thumbnail & placeholder): data-ai-hint="galaxy space"
// For Neon Dreams (thumbnail & placeholder): data-ai-hint="neon city"
// For Silent Bloom (thumbnail & placeholder): data-ai-hint="flower timelapse"
// For Urban Rhapsody (thumbnail & placeholder): data-ai-hint="city street"
