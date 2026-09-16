import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg">
          Bharat Darshan — travel India with a guide who knows the stories.
        </p>
        <div className="flex gap-5 text-sm text-muted-foreground">
          <Link to="/destinations" className="hover:text-primary">
            Destinations
          </Link>
          <Link to="/heritage" className="hover:text-primary">
            Heritage
          </Link>
          <Link to="/guide" className="hover:text-primary">
            AI Guide
          </Link>
        </div>
      </div>
    </footer>
  );
}
