"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Video } from '@/lib/data';
import { createVideoDescriptionAction } from '@/app/videos/[id]/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  videoTitle: z.string().min(1, "Video title is required."),
  videoContentSummary: z.string().min(10, "Content summary must be at least 10 characters."),
  directorStyle: z.string().optional(),
});

type AIDescriptionFormValues = z.infer<typeof formSchema>;

interface AIDescriptionGeneratorProps {
  video: Video;
}

export default function AIDescriptionGenerator({ video }: AIDescriptionGeneratorProps) {
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<AIDescriptionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoTitle: video.title,
      videoContentSummary: video.contentSummary || "",
      directorStyle: video.directorStyle || "",
    },
  });

  async function onSubmit(values: AIDescriptionFormValues) {
    setIsLoading(true);
    setGeneratedDescription(null);
    try {
      const result = await createVideoDescriptionAction(values);
      if (result.success && result.description) {
        setGeneratedDescription(result.description);
        toast({
          title: "Description Generated!",
          description: "The AI has crafted a new description for your video.",
          variant: "default",
        });
      } else {
        toast({
          title: "Error Generating Description",
          description: result.error || "An unknown error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate description. Please try again.",
        variant: "destructive",
      });
      console.error("AI Description generation error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Wand2 className="w-6 h-6 text-accent" />
          AI Description Generator
        </CardTitle>
        <CardDescription>
          Provide some details about the video, and let AI craft a compelling description.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="videoTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the video title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="videoContentSummary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content Summary</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly summarize the video's content, key scenes, and themes."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This helps the AI understand the essence of your video.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="directorStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Director's Style (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Visually rich, narrative-driven, minimalist" {...field} />
                  </FormControl>
                  <FormDescription>
                    Describe your stylistic approach if you want it reflected in the description.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading} size="lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Description
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>

      {generatedDescription && (
        <Card className="mt-6 bg-background/50 border-accent">
          <CardHeader>
            <CardTitle className="text-accent">AI Generated Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed whitespace-pre-wrap">{generatedDescription}</p>
          </CardContent>
        </Card>
      )}
    </Card>
  );
}
