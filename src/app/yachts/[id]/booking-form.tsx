"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { requestBooking } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { type Yacht } from "@/lib/yachts";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface BookingFormProps {
    yacht: Yacht;
}

const initialState = {
  message: "",
  error: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" size="lg" disabled={pending}>
      {pending ? "Sending..." : "Send Booking Request"}
    </Button>
  );
}

export default function BookingForm({ yacht }: BookingFormProps) {
  const [state, formAction] = useActionState(requestBooking, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Booking Request Sent!",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="yachtId" value={yacht.id} />
      <input type="hidden" name="yachtName" value={yacht.name} />
       <div>
        <Label htmlFor="dates">Select Dates</Label>
         <Calendar
            id="dates"
            mode="range"
            className="rounded-md border p-0"
            // Note: In a real app, you would handle date state here
        />
       </div>
       <div>
            <Label htmlFor="guests">Number of Guests</Label>
            <Input id="guests" name="guests" type="number" placeholder="e.g. 8" min="1" max={yacht.guests}/>
       </div>
       <div>
            <Label htmlFor="requirements">Special Requirements</Label>
            <Textarea id="requirements" name="requirements" placeholder="Tell us about any special requests..."/>
       </div>
       <SubmitButton />
        {state.error && (
             <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {state.error}
                </AlertDescription>
            </Alert>
        )}
    </form>
  );
}
