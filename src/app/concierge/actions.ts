"use server";

import { aiConciergeChat } from "@/ai/flows/ai-chat-concierge";
import { z } from "zod";

const inputSchema = z.object({
    userInput: z.string().min(1, "Message cannot be empty."),
});

export async function askAI(prevState: any, formData: FormData) {
    const validatedFields = inputSchema.safeParse({
        userInput: formData.get('userInput')
    });

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors.userInput?.[0]
        };
    }
    
    try {
        const output = await aiConciergeChat({ userInput: validatedFields.data.userInput });
        return { response: output.response };
    } catch(e) {
        return { error: "An unexpected error occurred. Please try again." };
    }
}
