
import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UserCircle, Film, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About the Director - Visionary Vault',
  description: 'Learn more about the visionary director behind the lens, their inspirations, and their unique approach to music video creation.',
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary tracking-tight">Meet the Visionary</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Delve into the story and artistic philosophy of the director.
        </p>
      </div>

      <Card className="shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Director's Portrait"
              layout="fill"
              objectFit="cover"
              className="data-ai-hint='director portrait'"
              data-ai-hint="director portrait"
            />
          </div>
          <div className="md:w-2/3">
            <CardHeader className="p-6">
              <CardTitle className="text-3xl flex items-center gap-2">
                <UserCircle className="w-8 h-8 text-accent" />
                Alex Vision (Director)
              </CardTitle>
              <CardDescription className="text-md">
                A passionate storyteller and visual innovator.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4 text-base">
              <p>
                Alex Vision is a critically acclaimed music video director known for their distinctive visual style and innovative narrative approach. With a career spanning over a decade, Alex has collaborated with a diverse range of artists, bringing their musical visions to life with breathtaking creativity.
              </p>
              <p>
                Driven by a passion for cinema and a deep understanding of musical rhythm, Alex crafts videos that are not just accompaniments to songs, but standalone pieces of art. Each project is a meticulous exploration of theme, emotion, and aesthetic, resulting in works that resonate long after the music fades.
              </p>
              <p>
                Alex's work is characterized by bold color palettes, dynamic camera movements, and a seamless blend of practical effects and cutting-edge digital techniques. The goal is always to create an immersive experience that captivates and moves the audience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                  <Film className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Expertise</h4>
                    <p className="text-sm text-muted-foreground">Music Videos, Short Films, Visual Art Installations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                  <Award className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Philosophy</h4>
                    <p className="text-sm text-muted-foreground">"Every frame a painting, every scene a story."</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
