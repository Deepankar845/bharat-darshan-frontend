import { createFileRoute } from "@tanstack/react-router";
import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `You are the Bharat Darshan AI tour guide: a warm, practical expert on travelling in India.
Answer questions about destinations, routes, itineraries, seasons, festivals, rituals, temple etiquette, food and safety.
Be concrete: name places, rough timings, best seasons and local tips. Keep answers tight (under ~180 words) unless asked for detail.
Use short paragraphs or bullets. If a question is not about India or travel, gently steer back.`;

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        const lovable = createOpenAI({
          baseURL: "https://ai.gateway.lovable.dev/v1",
          apiKey,
          headers: {
            "Lovable-API-Key": apiKey,
            "X-Lovable-AIG-SDK": "vercel-ai-sdk",
          },
        });

        try {
          const result = streamText({
            model: lovable.responses("openai/gpt-6-astra"),
            system: SYSTEM_PROMPT,
            messages: await convertToModelMessages(messages as UIMessage[]),
            abortSignal: request.signal,
            providerOptions: {
              openai: {
                forceReasoning: true,
                reasoningEffort: "low",
                reasoningSummary: "auto",
                store: false,
                include: ["reasoning.encrypted_content"],
              },
            },
          });

          return result.toUIMessageStreamResponse({
            originalMessages: messages as UIMessage[],
          });
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            return new Response("Client closed request", { status: 499 });
          }
          console.error(error);
          return new Response("The guide could not answer right now.", { status: 500 });
        }
      },
    },
  },
});
