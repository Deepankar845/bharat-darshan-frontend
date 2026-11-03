import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useMemo } from "react";
import { Send, Sparkles, Bot, User, Copy, Check, RotateCcw, Cpu, Compass } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { suggestedPrompts } from "@/lib/data";
export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "AI Tour Guide for India — Bharat Darshan" },
      {
        name: "description",
        content:
          "Ask an AI tour guide powered by Google Gemini about Indian destinations, rituals, food, and routes.",
      },
      { property: "og:title", content: "AI Tour Guide for India — Bharat Darshan" },
      {
        property: "og:description",
        content:
          "Ask an AI tour guide powered by Google Gemini about Indian destinations, rituals, food, and routes.",
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
      text: "Namaste! I am your Bharat Darshan AI tour guide, powered by Google Gemini. Ask me anything about Indian destinations, optimal seasons, temple rituals and etiquette, local food specialties, or road & train routes — I will answer with deep local knowledge.",
    },
  ],
};

function messageText(message: UIMessage): string {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("")
    .trim();
}

const GEMINI_MODELS = [
  {
    id: "gemini-3-flash-preview",
    name: "Gemini 3 Flash Preview",
    tag: "Recommended",
    desc: "Fast, cost-efficient, and multilingual. Ideal for travel Q&A and suggestions.",
  },
  {
    id: "gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    tag: "Next-Gen",
    desc: "Ultra-fast next-gen model with advanced reasoning and real-time responsiveness.",
  },
  {
    id: "gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    tag: "In-Depth",
    desc: "Best for comprehensive cultural itineraries, deep history, and detailed travel plans.",
  },
];

export default function Guide() {
  const [input, setInput] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const selectedModel = "gemini-3-flash-preview";

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Configure chat transport with the server-managed model.
  const transport = useMemo(() => {
    return new DefaultChatTransport({
      api: "/api/chat",
      body: () => ({
        model: selectedModel,
      }),
    });
  }, [selectedModel]);

  const { messages, sendMessage, status, setMessages } = useChat({
    messages: [greeting],
    transport,
    onError: (error) => {
      const msg = error.message || "The guide could not answer right now.";
      toast.error(msg);
    },
  });

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
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

  function handleClearChat() {
    setMessages([greeting]);
    toast.info("Chat conversation reset");
  }

  function copyText(id: string, text: string) {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopiedId(null), 2000);
  }

  const activeModelObj =
    GEMINI_MODELS.find((m) => m.id === selectedModel) || GEMINI_MODELS[0];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Top Banner / Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary">
              <Sparkles className="size-3.5" /> Bharat Darshan AI Guide
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              Google {activeModelObj.name} Active
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Ask anything about India
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Rituals, routes, seasonal weather, temple etiquette, and hidden gems — ask with local depth.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {messages.length > 1 && (
            <button
              type="button"
              onClick={handleClearChat}
              title="Reset Chat"
              aria-label="Reset Chat"
              className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
            >
              <RotateCcw className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Chat Box */}
      <div className="mt-6 rounded-3xl border border-border bg-card shadow-lg flex flex-col overflow-hidden">
        {/* Messages Stream */}
        <div
          ref={scrollRef}
          className="flex max-h-[30rem] min-h-[18rem] flex-col gap-5 overflow-y-auto p-5 sm:p-6"
        >
          {messages.map((m) => {
            const text = messageText(m);
            if (!text) return null;
            const isUser = m.role === "user";

            return (
              <div
                key={m.id}
                className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
              >
                {!isUser && (
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                    <Bot className="size-4" />
                  </div>
                )}

                <div
                  className={`group relative max-w-[85%] rounded-2xl px-4 py-3.5 text-sm leading-relaxed ${
                    isUser
                      ? "rounded-br-sm bg-primary text-primary-foreground shadow-sm"
                      : "rounded-bl-sm bg-muted/70 text-foreground border border-border/60 shadow-sm"
                  }`}
                >
                  {isUser ? (
                    <p className="whitespace-pre-wrap">{text}</p>
                  ) : (
                    <div className="guide-markdown text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1 [&_strong]:font-semibold [&_h1]:text-xl [&_h1]:font-bold [&_h2]:text-lg [&_h2]:font-bold [&_h3]:font-bold [&_p]:my-2 [&_a]:text-primary [&_a]:underline">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
                    </div>
                  )}

                  {!isUser && (
                    <div className="mt-2 flex items-center justify-between border-t border-border/40 pt-2 text-[11px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Cpu className="size-3 text-primary/70" /> Google {activeModelObj.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => copyText(m.id, text)}
                        className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 hover:bg-background/80 hover:text-foreground transition"
                        title="Copy text"
                      >
                        {copiedId === m.id ? (
                          <>
                            <Check className="size-3 text-emerald-500" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="size-3" /> Copy
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground border border-border">
                    <User className="size-4" />
                  </div>
                )}
              </div>
            );
          })}

          {status === "submitted" && (
            <div className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                <Bot className="size-4" />
              </div>
              <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-border/60 bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
                <span className="size-2 animate-ping rounded-full bg-primary" />
                <span>Consulting Google {activeModelObj.name}…</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-border bg-card/60 p-3 sm:p-4 backdrop-blur-sm"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Varanasi ghats, Ladakh road routes, temple timings..."
            disabled={isBusy}
            className="flex-1 rounded-full bg-muted/80 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
          />
          <button
            type="submit"
            aria-label="Send query"
            disabled={isBusy || !input.trim()}
            className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-all hover:scale-105 hover:bg-primary/90 disabled:opacity-50 disabled:hover:scale-100"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>

      {/* Suggested Prompts */}
      <div className="mt-6">
        <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
          <Compass className="size-3.5 text-primary" /> Popular Travel Inquiries
        </p>
        <div className="flex flex-wrap gap-2">
          {suggestedPrompts.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => send(p)}
              disabled={isBusy}
              className="rounded-full border border-border/80 bg-card px-3.5 py-1.5 text-xs text-muted-foreground shadow-xs transition hover:border-primary/50 hover:bg-primary/5 hover:text-foreground disabled:opacity-50 text-left"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
