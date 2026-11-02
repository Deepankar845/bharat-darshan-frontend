import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useMemo } from "react";
import {
  Send,
  Sparkles,
  Key,
  Settings,
  Bot,
  User,
  Copy,
  Check,
  RotateCcw,
  ExternalLink,
  Eye,
  EyeOff,
  Cpu,
  Compass,
} from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { toast } from "sonner";

import { suggestedPrompts } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const STORAGE_KEY_API_KEY = "bharat_darshan_google_api_key";
const STORAGE_KEY_MODEL = "bharat_darshan_gemini_model";

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
    id: "gemini-1.5-flash",
    name: "Gemini 1.5 Flash",
    tag: "Recommended",
    desc: "Fast, cost-efficient, and multilingual. Ideal for travel Q&A and suggestions.",
  },
  {
    id: "gemini-2.0-flash",
    name: "Gemini 2.0 Flash",
    tag: "Next-Gen",
    desc: "Ultra-fast next-gen model with advanced reasoning and real-time responsiveness.",
  },
  {
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    tag: "In-Depth",
    desc: "Best for comprehensive cultural itineraries, deep history, and detailed travel plans.",
  },
];

export default function Guide() {
  const [input, setInput] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showKey, setShowKey] = useState(false);

  // Load stored Google Gemini API key or env fallback
  const [apiKey, setApiKey] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem(STORAGE_KEY_API_KEY) ||
        (import.meta.env.VITE_GOOGLE_API_KEY as string) ||
        ""
      );
    }
    return "";
  });

  const [selectedModel, setSelectedModel] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(STORAGE_KEY_MODEL) || "gemini-1.5-flash";
    }
    return "gemini-1.5-flash";
  });

  // Working state inside settings dialog
  const [dialogKey, setDialogKey] = useState(apiKey);
  const [dialogModel, setDialogModel] = useState(selectedModel);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync dialog form when modal opens
  useEffect(() => {
    if (isSettingsOpen) {
      setDialogKey(apiKey);
      setDialogModel(selectedModel);
    }
  }, [isSettingsOpen, apiKey, selectedModel]);

  // Configure chat transport with dynamic Google API Key & Model
  const transport = useMemo(() => {
    return new DefaultChatTransport({
      api: "/api/chat",
      body: () => ({
        apiKey: apiKey.trim(),
        model: selectedModel,
      }),
      headers: () => {
        const headers: Record<string, string> = {
          "x-gemini-model": selectedModel,
        };
        if (apiKey.trim()) {
          headers["x-google-api-key"] = apiKey.trim();
        }
        return headers;
      },
    });
  }, [apiKey, selectedModel]);

  const { messages, sendMessage, status, setMessages } = useChat({
    messages: [greeting],
    transport,
    onError: (error) => {
      const msg = error.message || "The guide could not answer right now.";
      if (
        msg.includes("Missing Google Gemini API Key") ||
        msg.includes("Missing Google API Key")
      ) {
        toast.error("Google Gemini API Key is required.", {
          action: {
            label: "Add Key",
            onClick: () => setIsSettingsOpen(true),
          },
          duration: 6000,
        });
      } else {
        toast.error(msg);
      }
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

    if (!apiKey.trim() && !import.meta.env.VITE_GOOGLE_API_KEY) {
      setIsSettingsOpen(true);
      toast.info("Please set your Google Gemini API key to start chatting.");
      return;
    }

    setInput("");
    void sendMessage({ text: q });
  }

  function handleSaveSettings() {
    const cleanKey = dialogKey.trim();
    setApiKey(cleanKey);
    setSelectedModel(dialogModel);

    if (typeof window !== "undefined") {
      if (cleanKey) {
        localStorage.setItem(STORAGE_KEY_API_KEY, cleanKey);
      } else {
        localStorage.removeItem(STORAGE_KEY_API_KEY);
      }
      localStorage.setItem(STORAGE_KEY_MODEL, dialogModel);
    }

    setIsSettingsOpen(false);
    toast.success(
      cleanKey
        ? `Google Gemini connected (${dialogModel})`
        : "Google API key cleared",
    );
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

  const isConfigured = Boolean(apiKey.trim() || import.meta.env.VITE_GOOGLE_API_KEY);
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
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                isConfigured
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
              }`}
            >
              <span
                className={`size-2 rounded-full ${
                  isConfigured ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                }`}
              />
              Google {activeModelObj.name} {isConfigured ? "Active" : "Key Needed"}
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
          <button
            type="button"
            onClick={() => setIsSettingsOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground shadow-sm transition hover:bg-muted hover:border-primary/50"
          >
            <Settings className="size-3.5 text-muted-foreground" />
            <span>Google API Settings</span>
          </button>
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

      {/* Setup Notice Banner if key is missing */}
      {!isConfigured && (
        <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Key className="size-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <p className="text-sm text-foreground">
              <strong>Connect Google Gemini API:</strong> Add your Google API key to enable instant travel guidance powered by Google Gemini.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsSettingsOpen(true)}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-amber-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow hover:bg-amber-700 transition"
          >
            <Key className="size-3" /> Enter Google API Key
          </button>
        </div>
      )}

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
                  <p className="whitespace-pre-wrap">{text}</p>

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

      {/* Google Gemini Settings Dialog */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Sparkles className="size-5 text-primary" />
              Google Gemini API Settings
            </DialogTitle>
            <DialogDescription>
              Configure Google Gemini to provide instant answers, route timings, and cultural etiquette for Bharat Darshan.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-3">
            {/* API Key Input */}
            <div>
              <label
                htmlFor="gemini-key-input"
                className="block text-xs font-semibold text-foreground mb-1.5"
              >
                Google API Key (Gemini)
              </label>
              <div className="relative">
                <input
                  id="gemini-key-input"
                  type={showKey ? "text" : "password"}
                  value={dialogKey}
                  onChange={(e) => setDialogKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full rounded-xl border border-border bg-muted/60 px-3.5 py-2.5 pr-10 text-sm font-mono outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                  title={showKey ? "Hide key" : "Show key"}
                >
                  {showKey ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
              <p className="mt-1.5 text-[11px] text-muted-foreground">
                Your key is stored securely in your browser's local storage and used directly for API requests.
              </p>
              <div className="mt-1">
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                >
                  Get a free Google Gemini API key at Google AI Studio <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            {/* Model Selector */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                Google Gemini Model
              </label>
              <div className="space-y-2">
                {GEMINI_MODELS.map((m) => {
                  const isSelected = dialogModel === m.id;
                  return (
                    <div
                      key={m.id}
                      onClick={() => setDialogModel(m.id)}
                      className={`cursor-pointer rounded-xl border p-3 transition ${
                        isSelected
                          ? "border-primary bg-primary/5 ring-1 ring-primary/40"
                          : "border-border bg-card hover:border-border/80 hover:bg-muted/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-foreground">{m.name}</span>
                          <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            {m.tag}
                          </span>
                        </div>
                        <input
                          type="radio"
                          name="gemini-model"
                          checked={isSelected}
                          onChange={() => setDialogModel(m.id)}
                          className="size-4 text-primary"
                        />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Server .env fallback notice */}
            {import.meta.env.VITE_GOOGLE_API_KEY && (
              <div className="rounded-lg bg-muted/60 p-2.5 text-xs text-muted-foreground border border-border/50">
                ✓ System environment variable <code>VITE_GOOGLE_API_KEY</code> detected. You can still override it above.
              </div>
            )}
          </div>

          <DialogFooter className="flex flex-row justify-between sm:justify-between items-center gap-2">
            {dialogKey ? (
              <button
                type="button"
                onClick={() => {
                  setDialogKey("");
                  toast.info("Key field cleared. Click 'Save' to apply.");
                }}
                className="text-xs text-destructive hover:underline"
              >
                Clear Key
              </button>
            ) : <span />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsSettingsOpen(false)}
                className="rounded-xl border border-border px-4 py-2 text-xs font-medium hover:bg-muted transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveSettings}
                className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow hover:bg-primary/90 transition"
              >
                Save & Apply
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
