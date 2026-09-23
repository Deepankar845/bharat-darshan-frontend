import { createFileRoute } from "@tanstack/react-router";
import { Navigation, ExternalLink } from "lucide-react";

import carving from "@/assets/heritage-carving.jpg";
import { heritage } from "@/lib/data";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Cultural Heritage of India — Bharat Darshan" },
      {
        name: "description",
        content:
          "Temples, Mughal gardens, classical dance, textiles, festivals and cuisines — the living heritage of India with verified locations and coordinates.",
      },
      { property: "og:title", content: "Cultural Heritage of India — Bharat Darshan" },
      {
        property: "og:description",
        content:
          "Temples, Mughal gardens, classical dance, textiles, festivals and cuisines — the living heritage of India with verified locations and coordinates.",
      },
    ],
  }),
  component: Heritage,
});

function Heritage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img
          src={carving}
          alt="Detailed stone carving on an ancient Indian temple"
          loading="lazy"
          width={1536}
          height={864}
          className="h-[22rem] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-foreground/40 to-foreground/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10">
          <h1 className="font-display text-5xl text-background sm:text-6xl">
            Heritage you can still walk into
          </h1>
          <p className="mt-3 max-w-xl text-background/85">
            India's culture is not behind glass. It is sung, danced, woven and
            cooked every single day across historical epicentres.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {heritage.map((h) => (
            <article
              key={h.title}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  {h.era}
                </p>
                <h2 className="mt-2 text-2xl">{h.title}</h2>
                <div className="ink-rule mt-4 h-px w-16 transition-all duration-300 group-hover:w-28" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {h.blurb}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-border/50 pt-4">
                <p className="text-sm font-medium text-accent">{h.place}</p>
                {h.coordinates && h.mapUrl && (
                  <a
                    href={h.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline"
                    title="View region on map"
                  >
                    <Navigation className="size-3" />
                    {h.coordinates.lat.toFixed(2)}°N, {h.coordinates.lng.toFixed(2)}°E
                    <ExternalLink className="size-2.5 opacity-70" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
