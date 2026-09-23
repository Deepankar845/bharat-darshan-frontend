import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Search,
  Navigation,
  ExternalLink,
  Plane,
  Train,
  Mountain,
  Info,
  ChevronDown,
} from "lucide-react";

import { destinations } from "@/lib/data";

type DestinationSearch = {
  q?: string;
};

export const Route = createFileRoute("/destinations")({
  validateSearch: (search: Record<string, unknown>): DestinationSearch => ({
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Destination Guides Across India — Bharat Darshan" },
      {
        name: "description",
        content:
          "Guides across north, south, east and west India with exact coordinates, transport connectivity, best seasons, trip length and verified heritage highlights.",
      },
      {
        property: "og:title",
        content: "Destination Guides Across India — Bharat Darshan",
      },
      {
        property: "og:description",
        content:
          "Guides across north, south, east and west India with exact coordinates, transport connectivity, best seasons, trip length and verified heritage highlights.",
      },
    ],
  }),
  component: Destinations,
});

const regions = ["All", "North", "South", "East", "West"] as const;

function Destinations() {
  const searchParams = Route.useSearch();
  const [region, setRegion] = useState<(typeof regions)[number]>("All");
  const [query, setQuery] = useState(searchParams?.q ?? "");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams?.q !== undefined) {
      setQuery(searchParams.q);
    }
  }, [searchParams?.q]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "center" });
        setExpandedSlug(id);
      }
    }
  }, []);

  const list = useMemo(() => {
    const byRegion =
      region === "All" ? destinations : destinations.filter((d) => d.region === region);
    const q = query.trim().toLowerCase();
    if (!q) return byRegion;
    return byRegion.filter(
      (d) =>
        d.state.toLowerCase().includes(q) ||
        d.name.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q) ||
        d.nearestAirport.toLowerCase().includes(q) ||
        d.nearestRailway.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.highlights.some((h) => h.toLowerCase().includes(q)) ||
        d.coordinates.lat.toString().includes(q) ||
        d.coordinates.lng.toString().includes(q),
    );
  }, [region, query]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-5xl">Destination guides</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Explore 35 curated destinations across India with exact geographic
            coordinates, transport connectivity, optimal seasons, and heritage insights.
          </p>
        </div>
        <p className="text-sm font-mono text-muted-foreground">
          Showing {list.length} destinations
        </p>
      </div>

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

      <div className="mt-4">
        <label htmlFor="destination-search" className="sr-only">
          Search states, destinations, or coordinates
        </label>
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id="destination-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destination, state, airport, coordinates…"
            className="w-full rounded-full border border-border bg-card py-2.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-8">
        {list.map((d) => {
          const isExpanded = expandedSlug === d.slug;
          return (
            <article
              key={d.slug}
              id={d.slug}
              className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lift md:grid-cols-[1.05fr_1fr]"
            >
              <div className="relative h-72 md:h-full">
                <img
                  src={d.image}
                  alt={`${d.name}, ${d.state}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="size-full object-cover"
                />
                <a
                  href={d.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-md shadow-warm transition-transform hover:scale-105 hover:bg-background"
                  title="View on Google Maps"
                >
                  <Navigation className="size-3.5 text-primary" />
                  <span>
                    {d.coordinates.lat.toFixed(4)}° N, {d.coordinates.lng.toFixed(4)}° E
                  </span>
                  <ExternalLink className="size-3 text-muted-foreground" />
                </a>
              </div>

              <div className="flex flex-col justify-between p-7">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary">
                      <MapPin className="size-3.5" /> {d.state} · {d.region}
                    </p>
                    {d.elevation && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] text-muted-foreground font-mono">
                        <Mountain className="size-3 text-accent" />
                        {d.elevation}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-2 text-3xl font-display">{d.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{d.tagline}</p>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-accent" /> {d.days}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-3.5 text-accent" /> {d.bestTime}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {d.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Transport Connectivity */}
                  <div className="mt-5 space-y-1.5 rounded-2xl bg-secondary/35 p-3.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Plane className="size-3.5 shrink-0 text-primary" />
                      <span className="truncate">
                        <strong className="text-foreground">Airport:</strong> {d.nearestAirport}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Train className="size-3.5 shrink-0 text-primary" />
                      <span className="truncate">
                        <strong className="text-foreground">Rail:</strong> {d.nearestRailway}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scraped Encyclopedic Details Toggle */}
                <div className="mt-4 border-t border-border/60 pt-3">
                  <button
                    type="button"
                    onClick={() => setExpandedSlug(isExpanded ? null : d.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    <Info className="size-3.5" />
                    {isExpanded ? "Hide overview" : "Heritage overview & background"}
                    <ChevronDown
                      className={`size-3 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="mt-2.5 animate-fadeIn rounded-xl bg-card border border-border p-3.5 text-xs leading-relaxed text-muted-foreground shadow-sm">
                      <p>{d.description}</p>
                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-border/50 text-[11px]">
                        <span className="font-mono text-muted-foreground/80">
                          Coordinates: {d.coordinates.lat}, {d.coordinates.lng}
                        </span>
                        <a
                          href={d.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                        >
                          Open in Maps <ExternalLink className="size-3" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
