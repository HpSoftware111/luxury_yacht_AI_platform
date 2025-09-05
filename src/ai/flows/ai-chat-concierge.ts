'use server';

/**
 * @fileOverview AI Concierge Chat flow for personalized yacht recommendations.
 *
 * - aiConciergeChat - A function that handles the AI concierge chat process.
 * - AiConciergeChatInput - The input type for the aiConciergeChat function.
 * - AiConciergeChatOutput - The return type for the aiConciergeChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiConciergeChatInputSchema = z.object({
  userInput: z.string().describe('The user\u2019s natural language input describing their preferences for a yacht experience.'),
});
export type AiConciergeChatInput = z.infer<typeof AiConciergeChatInputSchema>;

const AiConciergeChatOutputSchema = z.object({
  response: z.string().describe('The AI\u2019s response with personalized yacht recommendations and tailored experiences.'),
});
export type AiConciergeChatOutput = z.infer<typeof AiConciergeChatOutputSchema>;

export async function aiConciergeChat(input: AiConciergeChatInput): Promise<AiConciergeChatOutput> {
  return aiConciergeChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiConciergeChatPrompt',
  input: {schema: AiConciergeChatInputSchema},
  output: {schema: AiConciergeChatOutputSchema},
  prompt: `You are a luxury yacht concierge assistant. Respond to the user's request with personalized yacht recommendations and tailored experiences based on their preferences.\n\nUser Input: {{{userInput}}}`,
});

const aiConciergeChatFlow = ai.defineFlow(
  {
    name: 'aiConciergeChatFlow',
    inputSchema: AiConciergeChatInputSchema,
    outputSchema: AiConciergeChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
