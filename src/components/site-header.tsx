import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/guide", label: "AI Guide" },
  { to: "/itinerary", label: "Itinerary" },
  { to: "/festivals", label: "Festivals" },
] as const;

const contactEmails = [
  "deepankar.k24bcs@srisriuniversity.edu.in",
  "akankhya.k24bcs@srisriuniversity.edu.in",
];

function ContactUs({ mobile = false }: { mobile?: boolean }) {
  return (
    <details className={mobile ? "" : "group relative"}>
      <summary
        className={
          mobile
            ? "block cursor-pointer py-3 text-sm text-muted-foreground"
            : "cursor-pointer list-none rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        }
      >
        Contact Us
      </summary>
      <div
        className={
          mobile
            ? "pb-3 pl-3"
            : "absolute right-0 top-full z-50 mt-2 w-80 max-w-[calc(100vw-2.5rem)] rounded-xl border border-border bg-background p-4 shadow-lift"
        }
      >
        <p className="mb-2 text-sm font-medium text-foreground">Email us</p>
        <ul className="space-y-2">
          {contactEmails.map((email) => (
            <li key={email}>
              <a
                href={`mailto:${email}`}
                className="break-all text-sm text-muted-foreground hover:text-primary"
              >
                {email}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <img
            src="/logo-circle.png"
            alt="Bharat Darshan"
            className="size-11 rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-xl leading-none tracking-tight">Bharat Darshan</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="relative rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/itinerary"
            className="ml-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-warm transition-transform hover:-translate-y-0.5"
          >
            Plan a trip
          </Link>
          <ContactUs />
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-5 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="block py-3 text-sm text-muted-foreground"
            >
              {l.label}
            </Link>
          ))}
          <ContactUs mobile />
        </nav>
      )}
    </header>
  );
}
