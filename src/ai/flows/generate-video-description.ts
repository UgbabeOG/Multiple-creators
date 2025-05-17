'use server';
/**
 * @fileOverview AI-powered video description generator.
 *
 * - generateVideoDescription - A function that generates video descriptions.
 * - GenerateVideoDescriptionInput - The input type for the generateVideoDescription function.
 * - GenerateVideoDescriptionOutput - The return type for the generateVideoDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateVideoDescriptionInputSchema = z.object({
  videoTitle: z.string().describe('The title of the video.'),
  videoContentSummary: z
    .string()
    .describe('A summary of the video content.'),
  directorStyle: z
    .string()
    .optional()
    .describe('The director’s specific style or approach.'),
});
export type GenerateVideoDescriptionInput = z.infer<
  typeof GenerateVideoDescriptionInputSchema
>;

const GenerateVideoDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated video description.'),
});
export type GenerateVideoDescriptionOutput = z.infer<
  typeof GenerateVideoDescriptionOutputSchema
>;

export async function generateVideoDescription(
  input: GenerateVideoDescriptionInput
): Promise<GenerateVideoDescriptionOutput> {
  return generateVideoDescriptionFlow(input);
}

const generateVideoDescriptionPrompt = ai.definePrompt({
  name: 'generateVideoDescriptionPrompt',
  input: {schema: GenerateVideoDescriptionInputSchema},
  output: {schema: GenerateVideoDescriptionOutputSchema},
  prompt: `You are a creative assistant helping a music video director generate compelling descriptions for their videos.

  Given the video's title, a summary of its content, and the director's style, create a description that captures the essence of the video and entices viewers.

  Video Title: {{{videoTitle}}}
  Content Summary: {{{videoContentSummary}}}
  Director's Style: {{{directorStyle}}}
  `,
});

const generateVideoDescriptionFlow = ai.defineFlow(
  {
    name: 'generateVideoDescriptionFlow',
    inputSchema: GenerateVideoDescriptionInputSchema,
    outputSchema: GenerateVideoDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateVideoDescriptionPrompt(input);
    return output!;
  }
);
