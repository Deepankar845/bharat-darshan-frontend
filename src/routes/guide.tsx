import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

import { sampleChat, suggestedPrompts } from "@/lib/data";

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

type Msg = { role: "user" | "guide"; text: string };

const demoReply =
  "Here's a preview answer — this guide is a design demo for now. Once it's connected, it will answer with routes, timings, local etiquette and food picks for exactly this question.";

function Guide() {
  const [messages, setMessages] = useState<Msg[]>(sampleChat);
  const [input, setInput] = useState("");

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTimeout(
      () => setMessages((m) => [...m, { role: "guide", text: demoReply }]),
      500,
    );
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
        <div className="flex max-h-[26rem] flex-col gap-4 overflow-y-auto p-6">
          {messages.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <p
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "rounded-br-sm bg-primary text-primary-foreground"
                    : "rounded-bl-sm bg-secondary text-secondary-foreground"
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-border p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Where should I go in November?"
            className="flex-1 rounded-full bg-muted px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            aria-label="Send"
            className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
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
            className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {p}
          </button>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Preview mode: replies are samples while the guide is being connected.
      </p>
    </div>
  );
}
