import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Navigation } from "lucide-react";
import { useMemo, useState } from "react";

import { destinations, festivals } from "@/lib/data";

export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { title: "Festival Calendar of India — Bharat Darshan" },
      {
        name: "description",
        content:
          "Explore Indian festivals by month, destination and category, with travel guidance and map links.",
      },
    ],
  }),
  component: FestivalCalendar,
});

const months = [
  "All",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const categories = ["All", "Religious", "Culture", "Harvest", "Music & Arts"] as const;

function FestivalCalendar() {
  const [month, setMonth] = useState<(typeof months)[number]>("All");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const visibleFestivals = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return festivals.filter((festival) => {
      const monthMatches = month === "All" || festival.month === month;
      const categoryMatches = category === "All" || festival.category === category;
      const queryMatches =
        !normalizedQuery ||
        `${festival.name} ${festival.destination} ${festival.state}`
          .toLowerCase()
          .includes(normalizedQuery);
      return monthMatches && categoryMatches && queryMatches;
    });
  }, [category, month, query]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Plan around the celebration</p>
        <h1 className="mt-3 text-5xl">India Festival Calendar</h1>
        <p className="mt-4 text-muted-foreground">
          Discover regional festivals, harvest celebrations, temple ceremonies and cultural
          events. Lunar and event-programme dates can change each year.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-border bg-card p-5">
        <label className="sr-only" htmlFor="festival-search">
          Search festivals
        </label>
        <input
          id="festival-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search festival, destination or state..."
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
        />

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Month</p>
          <div className="flex flex-wrap gap-2">
            {months.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setMonth(item)}
                className={`rounded-full border px-3 py-1.5 text-xs ${
                  month === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Category</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-3 py-1.5 text-xs ${
                  category === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Showing {visibleFestivals.length} {visibleFestivals.length === 1 ? "festival" : "festivals"}
      </p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleFestivals.map((festival) => {
          const destination = destinations.find((item) => item.slug === festival.destinationSlug);
          return (
            <article
              key={`${festival.name}-${festival.destinationSlug}`}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {festival.month}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                  {festival.category}
                </span>
              </div>
              <h2 className="mt-5 text-2xl">{festival.name}</h2>
              <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-accent">
                <MapPin className="size-4" />
                {festival.destination}, {festival.state}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {festival.description}
              </p>
              <div className="mt-4 rounded-xl bg-secondary/50 p-3 text-xs leading-relaxed text-muted-foreground">
                <CalendarDays className="mr-1 inline size-3.5 text-primary" />
                {festival.dateNote}
              </div>
              {destination ? (
                <Link
                  to="/destinations"
                  hash={destination.slug}
                  search={{ q: destination.name }}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Navigation className="size-4" />
                  Open destination guide
                </Link>
              ) : (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${festival.destination}, ${festival.state}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Navigation className="size-4" />
                  View on Google Maps
                </a>
              )}
            </article>
          );
        })}
      </div>

      {visibleFestivals.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-border py-14 text-center text-muted-foreground">
          No festivals match these filters.
        </div>
      )}
    </div>
  );
}
