import { createFileRoute } from "@tanstack/react-router";
import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `You are the Bharat Darshan AI tour guide: a warm, practical, culturally knowledgeable expert on travelling across India.
Answer questions about destinations, routes, itineraries, seasons, festivals, rituals, temple etiquette, food, and travel safety.
Be concrete: mention specific places, timings, best seasons, and local tips.
When recommending destinations or monuments, you can mention their coordinates or suggest searching them on Google Maps.
Keep answers engaging and concise (under ~200 words) using short paragraphs or bullet points unless the user asks for deep detail.
If a question is completely unrelated to India or travel, politely steer back.`;

type ChatRequestBody = {
  messages?: unknown;
  apiKey?: string;
  model?: string;
};

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: ChatRequestBody = {};
        try {
          body = (await request.json()) as ChatRequestBody;
        } catch {
          return new Response("Invalid JSON body", { status: 400 });
        }

        const { messages } = body;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        // Check for Google Gemini API key from body, headers, or environment variables
        const headerKey =
          request.headers.get("x-google-api-key") ||
          request.headers.get("x-gemini-api-key");

        const googleApiKey =
          body.apiKey ||
          headerKey ||
          process.env["GOOGLE_API_KEY"] ||
          process.env["GEMINI_API_KEY"] ||
          process.env["VITE_GOOGLE_API_KEY"];

        const headerModel =
          request.headers.get("x-gemini-model") ||
          request.headers.get("x-google-model");

        const requestedModel =
          body.model ||
          headerModel ||
          process.env["GEMINI_MODEL"] ||
          "gemini-1.5-flash";

        const lovableApiKey = process.env["LOVABLE_API_KEY"];

        if (!googleApiKey && !lovableApiKey) {
          return new Response(
            JSON.stringify({
              error:
                "Missing Google Gemini API Key. Please provide your Google API Key in Settings or set GOOGLE_API_KEY in your .env file.",
            }),
            {
              status: 401,
              headers: { "Content-Type": "application/json" },
            },
          );
        }

        try {
          let client;
          let modelName = requestedModel;

          if (googleApiKey) {
            // Google's official OpenAI-compatible endpoint for Gemini models
            client = createOpenAI({
              baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
              apiKey: googleApiKey.trim(),
            });

            // Ensure model name is recognized by Google Gemini endpoint
            if (!modelName.startsWith("gemini")) {
              modelName = "gemini-1.5-flash";
            }
          } else {
            // Lovable gateway fallback
            client = createOpenAI({
              baseURL: "https://ai.gateway.lovable.dev/v1",
              apiKey: lovableApiKey,
              headers: {
                "Lovable-API-Key": lovableApiKey!,
                "X-Lovable-AIG-SDK": "vercel-ai-sdk",
              },
            });
            modelName = "openai/gpt-6-astra";
          }

          const result = streamText({
            model: client(modelName),
            system: SYSTEM_PROMPT,
            messages: await convertToModelMessages(messages as UIMessage[]),
            abortSignal: request.signal,
          });

          return result.toUIMessageStreamResponse({
            originalMessages: messages as UIMessage[],
          });
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            return new Response("Client closed request", { status: 499 });
          }
          console.error("AI Guide error:", error);

          let errorMsg =
            error instanceof Error ? error.message : "The guide could not answer right now.";

          if (errorMsg.includes("API_KEY_INVALID") || errorMsg.includes("API key not valid")) {
            errorMsg = "Invalid Google Gemini API key. Please check your key in settings.";
          } else if (errorMsg.includes("RESOURCE_EXHAUSTED") || errorMsg.includes("quota")) {
            errorMsg = "Google Gemini API rate limit or quota exceeded. Please try again in a few moments or switch to gemini-1.5-flash.";
          }

          return new Response(errorMsg, { status: 500 });
        }
      },
    },
  },
});

