"use client";

import { useState, useRef, useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { askAI } from "@/app/concierge/actions";
import { Send, User, Bot, Sparkles, CornerDownLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialState = {
  response: "",
  error: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      {pending ? (
        <Sparkles className="h-5 w-5 animate-spin" />
      ) : (
        <Send className="h-5 w-5" />
      )}
      <span className="sr-only">Send message</span>
    </Button>
  );
}

export default function ConciergeChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [formState, formAction] = useActionState(askAI, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formState.response) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: formState.response },
      ]);
    }
    if (formState.error) {
       setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${formState.error}` },
      ]);
    }
  }, [formState]);
  
  useEffect(() => {
     if(scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth'
        });
     }
  }, [messages])

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const userInput = formData.get('userInput') as string;

      if (!userInput.trim()) return;

      setMessages((prev) => [...prev, { role: "user", content: userInput }]);
      formAction(formData);
      formRef.current?.reset();
  }

  return (
    <Card className="w-full h-[70vh] flex flex-col">
      <CardHeader className="border-b">
          <div className="flex items-center gap-3">
            <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground"><Bot /></AvatarFallback>
            </Avatar>
            <div>
                <p className="font-bold">AI Concierge</p>
                <p className="text-xs text-muted-foreground">Ready to assist you</p>
            </div>
          </div>
      </CardHeader>
      <CardContent className="flex-grow p-0 overflow-hidden">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="p-6 space-y-6">
            {messages.length === 0 && (
                <div className="text-center text-muted-foreground p-8">
                    <Sparkles className="mx-auto h-10 w-10 mb-4"/>
                    <p>Welcome! How can I help you plan your perfect yacht trip today?</p>
                    <p className="text-sm">e.g., "Find me a modern yacht for 8 people in Greece for a week in August."</p>
                </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className={cn("flex gap-3", message.role === "user" ? "justify-end" : "justify-start")}>
                 {message.role === 'assistant' && (
                    <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-primary-foreground"><Bot /></AvatarFallback>
                    </Avatar>
                 )}
                <div
                  className={cn(
                    "max-w-sm md:max-w-md lg:max-w-lg rounded-xl px-4 py-3 text-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                  )}
                >
                  {message.content}
                </div>
                 {message.role === 'user' && (
                    <Avatar className="w-8 h-8">
                        <AvatarFallback><User /></AvatarFallback>
                    </Avatar>
                 )}
              </div>
            ))}
            {useFormStatus().pending && (
                <div className="flex gap-3 justify-start">
                    <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-primary-foreground"><Bot /></AvatarFallback>
                    </Avatar>
                    <div className="bg-secondary rounded-xl px-4 py-3 text-sm flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 animate-spin"/>
                        Thinking...
                    </div>
                </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t pt-6">
        <form ref={formRef} onSubmit={handleFormSubmit} className="w-full flex items-center gap-3">
          <Input name="userInput" placeholder="Describe your dream yacht experience..." className="flex-grow" autoComplete="off" />
          <SubmitButton />
        </form>
      </CardFooter>
    </Card>
  );
}
