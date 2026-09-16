import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { toast } from "sonner";

import { suggestedPrompts } from "@/lib/data";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "AI Tour Guide for India — Bharat Darshan" },
      {
        name: "description",
        content:
          "Ask an AI tour guide about Indian destinations, rituals, food and routes, and get traveller-friendly answers.",
      },
      { property: "og:title", content: "AI Tour Guide for India — Bharat Darshan" },
      {
        property: "og:description",
        content:
          "Ask an AI tour guide about Indian destinations, rituals, food and routes, and get traveller-friendly answers.",
      },
    ],
  }),
  component: Guide,
});

const greeting: UIMessage = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Namaste! Ask me about routes, seasons, rituals, food or anything else in India — I'll answer like a friend who has been everywhere.",
    },
  ],
};

function messageText(message: UIMessage) {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("")
    .trim();
}

function Guide() {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    messages: [greeting],
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onError: (error) =>
      toast.error(error.message || "The guide could not answer right now."),
  });

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (!isBusy) inputRef.current?.focus();
  }, [isBusy]);

  function send(text: string) {
    const q = text.trim();
    if (!q || isBusy) return;
    setInput("");
    void sendMessage({ text: q });
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
        <Sparkles className="size-3.5" /> AI tour guide
      </p>
      <h1 className="mt-4 text-5xl">Ask anything about India</h1>
      <p className="mt-3 text-muted-foreground">
        Rituals, routes, seasons, street food, temple etiquette — ask the way you
        would ask a friend who has been everywhere.
      </p>

      <div className="mt-8 rounded-3xl border border-border bg-card shadow-lift">
        <div ref={scrollRef} className="flex max-h-[26rem] flex-col gap-4 overflow-y-auto p-6">
          {messages.map((m) => {
            const text = messageText(m);
            if (!text) return null;
            return (
              <div
                key={m.id}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <p
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-secondary text-secondary-foreground"
                  }`}
                >
                  {text}
                </p>
              </div>
            );
          })}
          {status === "submitted" && (
            <div className="flex justify-start">
              <p className="animate-pulse rounded-2xl rounded-bl-sm bg-secondary px-4 py-3 text-sm text-muted-foreground">
                Thinking…
              </p>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-border p-3"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Where should I go in November?"
            className="flex-1 rounded-full bg-muted px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            aria-label="Send"
            disabled={isBusy}
            className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-50"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {suggestedPrompts.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => send(p)}
            disabled={isBusy}
            className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground disabled:opacity-50"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
