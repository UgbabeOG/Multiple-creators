// src/app/videos/[id]/actions.ts
"use server";

import { generateVideoDescription, type GenerateVideoDescriptionInput } from '@/ai/flows/generate-video-description';

export async function createVideoDescriptionAction(input: GenerateVideoDescriptionInput): Promise<{ success: boolean; description?: string; error?: string }> {
  try {
    console.log("Generating description for:", input.videoTitle);
    const result = await generateVideoDescription(input);
    console.log("AI Result:", result);
    if (result && result.description) {
      return { success: true, description: result.description };
    }
    return { success: false, error: "AI did not return a description."}
  } catch (error) {
    console.error("Error in createVideoDescriptionAction:", error);
    // Attempt to get a more specific error message
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: `Failed to generate description: ${errorMessage}` };
  }
}
