import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Map, Landmark, MessageCircle } from "lucide-react";

import hero from "@/assets/hero-india.jpg";
import { destinations } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharat Darshan — AI Tour Guide for Exploring India" },
      {
        name: "description",
        content:
          "Destination guides, an AI tour guide, day-by-day itineraries and cultural heritage stories from across India.",
      },
      {
        property: "og:title",
        content: "Bharat Darshan — AI Tour Guide for Exploring India",
      },
      {
        property: "og:description",
        content:
          "Destination guides, an AI tour guide, day-by-day itineraries and cultural heritage stories from across India.",
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Map,
    title: "Destination guides",
    text: "Curated city and region guides with the right number of days, seasons and must-see stops.",
    to: "/destinations" as const,
  },
  {
    icon: MessageCircle,
    title: "AI tour guide",
    text: "Ask anything — rituals, routes, food, history — and get an answer in a traveller's language.",
    to: "/guide" as const,
  },
  {
    icon: Sparkles,
    title: "Itinerary planner",
    text: "Build a day-by-day plan by dragging places into your trip and shaping the pace.",
    to: "/itinerary" as const,
  },
  {
    icon: Landmark,
    title: "Cultural heritage",
    text: "Temples, textiles, dance and festivals — the living traditions behind the monuments.",
    to: "/heritage" as const,
  },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Sunrise over the Taj Mahal reflected in still water"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/45 to-background" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-40">
          <p className="rise-in inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/15 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-background">
            Incredible India, guided
          </p>
          <h1 className="rise-in mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-background sm:text-7xl">
            Every stone here has a story.
            <em className="text-gold"> Let it speak.</em>
          </h1>
          <p className="rise-in mt-6 max-w-xl text-lg text-background/85">
            Bharat Darshan is your AI travel companion for India — guiding you
            from Rajasthan's forts to Kerala's backwaters, one story at a time.
          </p>
          <div className="rise-in mt-9 flex flex-wrap gap-3">
            <Link
              to="/guide"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-warm transition-transform hover:-translate-y-0.5"
            >
              Ask the AI guide
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-full border border-background/50 px-6 py-3 font-medium text-background transition-colors hover:bg-background/10"
            >
              Browse destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl">Start with a classic</h2>
            <p className="mt-2 text-muted-foreground">
              Four journeys that cover four very different Indias.
            </p>
          </div>
          <Link
            to="/destinations"
            className="hidden shrink-0 items-center gap-2 text-sm text-primary hover:underline sm:inline-flex"
          >
            All destinations <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {destinations.slice(0, 4).map((d) => (
            <article
              key={d.slug}
              className="group relative overflow-hidden rounded-3xl border border-border"
            >
              <img
                src={d.image}
                alt={`${d.name}, ${d.state}`}
                loading="lazy"
                width={1024}
                height={768}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                  {d.state}
                </p>
                <h3 className="mt-1 font-display text-3xl text-background">
                  {d.name}
                </h3>
                <p className="mt-1 max-w-sm text-sm text-background/80">
                  {d.tagline}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
