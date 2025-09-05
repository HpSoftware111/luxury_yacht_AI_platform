"use server";

import { z } from "zod";

const schema = z.object({
  yachtId: z.string(),
  yachtName: z.string(),
  guests: z.string().optional(),
  requirements: z.string().optional(),
});

export async function requestBooking(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return { error: "Invalid form data. Please try again." };
    }

    // In a real application, you would process the booking request here.
    // For example, save to a database, send an email, etc.
    
    console.log("Booking Request Received:", validatedFields.data);

    return { message: `Your booking request for the ${validatedFields.data.yachtName} has been sent. We will contact you shortly.` };
}
