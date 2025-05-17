
import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UserCircle, Film, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Multiple Creators',
  description: 'Learn more about the talented creators behind the lens, their inspirations, and their unique approach to music video creation.',
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">Meet the Creators</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Delve into the story and artistic philosophy of our creators.
        </p>
      </div>

      <Card className="shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
        <div className="md:flex">
          <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Team of Creators"
              layout="fill"
              objectFit="cover"
              data-ai-hint="team creative"
            />
          </div>
          <div className="md:w-2/3">
            <CardHeader className="p-6">
              <CardTitle className="flex items-center gap-2"> {/* Font size handled by CardTitle component */}
                <Users className="w-8 h-8 text-accent" />
                Multiple Creators Team
              </CardTitle>
              <CardDescription className="text-md">
                A collective of passionate storytellers and visual innovators.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4 text-base">
              <p>
                Multiple Creators is a dynamic team of acclaimed music video directors, cinematographers, and editors, known for their distinctive visual styles and innovative narrative approaches. With diverse backgrounds and a shared passion for filmmaking, we collaborate to bring a wide range of artistic visions to life.
              </p>
              <p>
                Driven by a love for cinema and a deep understanding of musical rhythm, our team crafts videos that are not just accompaniments to songs, but standalone pieces of art. Each project is a meticulous exploration of theme, emotion, and aesthetic, resulting in works that resonate long after the music fades.
              </p>
              <p>
                Our collective work is characterized by bold color palettes, dynamic camera movements, and a seamless blend of practical effects and cutting-edge digital techniques. The goal is always to create an immersive experience that captivates and moves the audience, reflecting the unique voice of each artist we partner with.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                  <Film className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Expertise</h4>
                    <p className="text-sm text-muted-foreground">Music Videos, Short Films, Commercials, Visual Art Installations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                  <Award className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Philosophy</h4>
                    <p className="text-sm text-muted-foreground">"Collaborative vision, cinematic excellence."</p>
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
