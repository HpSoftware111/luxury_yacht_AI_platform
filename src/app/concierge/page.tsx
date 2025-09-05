import ConciergeChat from "@/components/concierge-chat";
import { Sparkles } from "lucide-react";

export default function ConciergePage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="text-center mb-8 max-w-2xl">
        <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
        <h1 className="font-headline text-4xl font-bold">AI Concierge</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Your personal assistant for crafting the perfect yachting experience.
          Simply describe your ideal trip, and let our AI find the best options for you.
        </p>
      </div>
      <div className="w-full max-w-3xl">
        <ConciergeChat />
      </div>
    </div>
  );
}
