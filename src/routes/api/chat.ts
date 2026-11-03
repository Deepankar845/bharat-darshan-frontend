import { createFileRoute } from "@tanstack/react-router";
import { createOpenAI } from "@ai-sdk/openai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `You are the Bharat Darshan AI tour guide: a warm, practical, culturally knowledgeable expert on travelling across India.
Answer questions about destinations, routes, itineraries, seasons, festivals, rituals, temple etiquette, food, and travel safety.
Be concrete: mention specific places, timings, best seasons, and local tips.
For every named destination, attraction, monument, viewpoint, temple, city, railway station, airport, trek start point, beach, or hotel, provide the exact place name plus:
- GPS coordinates formatted as latitude, longitude (decimal degrees), if you are confident in the exact point.
- If a place is ambiguous or exact coordinates are uncertain, give its full address and link it with a Google Maps URL using the exact place name and address in the search query; never invent coordinates.
- Do not reduce a specific attraction to only its city name.
- Prefer a place-specific Google Maps link for the attraction itself rather than a map link for the wider city.
Keep answers engaging and concise (under ~200 words) using short paragraphs or bullet points unless the user asks for deep detail.
If a question is completely unrelated to India or travel, politely steer back.`;

type ChatRequestBody = {
  messages?: unknown;
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

        const googleApiKey =
          process.env["GOOGLE_API_KEY"] ||
          process.env["GEMINI_API_KEY"] ||
          "";

        const headerModel =
          request.headers.get("x-gemini-model") ||
          request.headers.get("x-google-model");

        const requestedModel =
          body.model ||
          headerModel ||
          process.env["GEMINI_MODEL"] ||
          "gemini-3-flash-preview";

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
            client = createGoogleGenerativeAI({
              apiKey: googleApiKey.trim(),
            });

            // Ensure model name is recognized by Google Gemini endpoint
            if (!["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-2.5-pro"].includes(modelName)) {
              modelName = "gemini-3-flash-preview";
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
            errorMsg = "Google Gemini API rate limit or quota exceeded. Please try again in a few moments or switch to gemini-3-flash-preview.";
          }

          return new Response(errorMsg, { status: 500 });
        }
      },
    },
  },
});
