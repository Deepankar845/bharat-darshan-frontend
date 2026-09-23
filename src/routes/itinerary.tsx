import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plus, Trash2, CalendarRange, Navigation, ExternalLink, Plane, Train } from "lucide-react";

import { destinations } from "@/lib/data";

export const Route = createFileRoute("/itinerary")({
  head: () => ({
    meta: [
      { title: "Plan Your India Itinerary — Bharat Darshan" },
      {
        name: "description",
        content:
          "Build a day-by-day India itinerary with exact coordinates, maps, and travel highlights across 35 destinations.",
      },
      { property: "og:title", content: "Plan Your India Itinerary — Bharat Darshan" },
      {
        property: "og:description",
        content:
          "Build a day-by-day India itinerary with exact coordinates, maps, and travel highlights across 35 destinations.",
      },
    ],
  }),
  component: Itinerary,
});

type Stop = {
  id: number;
  label: string;
  place: string;
  coordinates?: { lat: number; lng: number };
  mapUrl?: string;
};

let nextId = 1;

function Itinerary() {
  const [days, setDays] = useState<Stop[][]>([[], [], []]);
  const [active, setActive] = useState(0);
  const [picked, setPicked] = useState(destinations[0]!.slug);

  const destination = useMemo(
    () => destinations.find((d) => d.slug === picked) ?? destinations[0]!,
    [picked],
  );

  const total = days.reduce((n, d) => n + d.length, 0);

  function addStop(label: string) {
    setDays((prev) =>
      prev.map((d, i) =>
        i === active
          ? [
              ...d,
              {
                id: nextId++,
                label,
                place: destination.name,
                coordinates: destination.coordinates,
                mapUrl: destination.mapUrl,
              },
            ]
          : d,
      ),
    );
  }

  function removeStop(dayIndex: number, id: number) {
    setDays((prev) =>
      prev.map((d, i) => (i === dayIndex ? d.filter((s) => s.id !== id) : d)),
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-5xl">Plan your journey</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Pick a destination, choose a day, and add the experiences you want with
        exact geographic coordinates and maps. Your plan builds itself as you go.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[22rem_1fr]">
        <aside className="h-fit rounded-3xl border border-border bg-card p-6">
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Destination ({destinations.length} available)
          </label>
          <select
            value={picked}
            onChange={(e) => setPicked(e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            {destinations.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name} · {d.state}
              </option>
            ))}
          </select>

          {/* Destination Coordinates & Transport Details */}
          <div className="mt-3 rounded-xl bg-secondary/40 p-3 text-xs text-muted-foreground">
            <div className="flex items-center justify-between font-mono">
              <span>
                {destination.coordinates.lat.toFixed(4)}° N, {destination.coordinates.lng.toFixed(4)}° E
              </span>
              <a
                href={destination.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-sans text-primary hover:underline"
              >
                Map <ExternalLink className="size-3" />
              </a>
            </div>
            <div className="mt-2 space-y-1 pt-2 border-t border-border/50 text-[11px]">
              <div className="flex items-center gap-1.5 truncate">
                <Plane className="size-3 shrink-0 text-accent" />
                <span className="truncate">{destination.nearestAirport}</span>
              </div>
              <div className="flex items-center gap-1.5 truncate">
                <Train className="size-3 shrink-0 text-accent" />
                <span className="truncate">{destination.nearestRailway}</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Add to day {active + 1}
          </p>
          <ul className="mt-3 space-y-2">
            {destination.highlights.map((h) => (
              <li key={h}>
                <button
                  type="button"
                  onClick={() => addStop(h)}
                  className="group flex w-full items-center justify-between rounded-xl border border-border px-4 py-3 text-left text-sm transition-colors hover:border-primary/50 hover:bg-secondary"
                >
                  {h}
                  <Plus className="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarRange className="size-4 text-accent" />
            {total} {total === 1 ? "stop" : "stops"} across {days.length} days
          </p>
        </aside>

        <section>
          <div className="flex flex-wrap items-center gap-2">
            {days.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === i
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                Day {i + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setDays((d) => [...d, []])}
              className="rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground"
            >
              + Add day
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {days.map((stops, i) => (
              <div
                key={i}
                className={`rounded-3xl border bg-card p-6 transition-colors ${
                  active === i ? "border-primary/50" : "border-border"
                }`}
              >
                <h2 className="text-2xl">Day {i + 1}</h2>
                {stops.length === 0 ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Nothing planned yet — add highlights from the left.
                  </p>
                ) : (
                  <ol className="mt-4 space-y-2">
                    {stops.map((s, idx) => (
                      <li
                        key={s.id}
                        className="flex items-center justify-between gap-3 rounded-xl bg-secondary px-4 py-3 text-sm"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-primary font-mono">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span>{s.label}</span>
                          <span className="text-xs text-muted-foreground">
                            · {s.place}
                          </span>
                        </span>
                        <div className="flex items-center gap-3">
                          {s.mapUrl && (
                            <a
                              href={s.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${s.label} on map`}
                              className="text-muted-foreground transition-colors hover:text-primary"
                              title="Open on map"
                            >
                              <Navigation className="size-4" />
                            </a>
                          )}
                          <button
                            type="button"
                            aria-label={`Remove ${s.label}`}
                            onClick={() => removeStop(i, s.id)}
                            className="text-muted-foreground transition-colors hover:text-destructive"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
