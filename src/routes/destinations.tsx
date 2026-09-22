import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CalendarDays, Clock, MapPin, Search } from "lucide-react";

import { destinations } from "@/lib/data";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destination Guides Across India — Bharat Darshan" },
      {
        name: "description",
        content:
          "Guides to eight Indian states across north, south, east and west — Rajasthan, Uttar Pradesh, Kerala, Tamil Nadu, Bihar, Odisha, Maharashtra and Gujarat — with best seasons, trip length and highlights.",
      },
      {
        property: "og:title",
        content: "Destination Guides Across India — Bharat Darshan",
      },
      {
        property: "og:description",
        content:
          "Guides to eight Indian states across north, south, east and west — Rajasthan, Uttar Pradesh, Kerala, Tamil Nadu, Bihar, Odisha, Maharashtra and Gujarat — with best seasons, trip length and highlights.",
      },
    ],
  }),
  component: Destinations,
});

const regions = ["All", "North", "South", "East", "West"] as const;

function Destinations() {
  const [region, setRegion] = useState<(typeof regions)[number]>("All");
  const list =
    region === "All" ? destinations : destinations.filter((d) => d.region === region);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-5xl">Destination guides</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Pick a region and see how long to stay, when to go, and what actually
        deserves your mornings.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {regions.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRegion(r)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              region === r
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8">
        {list.map((d) => (
          <article
            key={d.slug}
            className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[1.1fr_1fr]"
          >
            <img
              src={d.image}
              alt={`${d.name}, ${d.state}`}
              loading="lazy"
              width={1024}
              height={768}
              className="h-64 w-full object-cover md:h-full"
            />
            <div className="p-7">
              <p className="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary">
                <MapPin className="size-3.5" /> {d.state}
              </p>
              <h2 className="mt-2 text-4xl">{d.name}</h2>
              <p className="mt-2 text-muted-foreground">{d.tagline}</p>

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4 text-accent" /> {d.days}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4 text-accent" /> {d.bestTime}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {d.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
