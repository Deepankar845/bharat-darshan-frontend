import React, { useState, useEffect } from "react";
import {
  Navigation,
  ExternalLink,
  MapPin,
  Layers,
  Compass,
  Key,
  Copy,
  Check,
  Plane,
  Train,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface GoogleMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  state?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  highlights?: string[];
  nearestAirport?: string;
  nearestRailway?: string;
  mapUrl?: string;
  elevation?: string;
}

export function GoogleMapModal({
  isOpen,
  onClose,
  title,
  state,
  coordinates,
  highlights = [],
  nearestAirport,
  nearestRailway,
  mapUrl,
  elevation,
}: GoogleMapModalProps) {
  const [mapType, setMapType] = useState<"roadmap" | "satellite" | "terrain">("roadmap");
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [customKey, setCustomKey] = useState<string>("");

  // Retrieve API key from environment variable or localStorage
  const envKey = (import.meta as unknown as { env: Record<string, string> }).env?.VITE_GOOGLE_MAPS_API_KEY || "";
  const [activeApiKey, setActiveApiKey] = useState<string>(envKey);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("bharat_darshan_google_maps_api_key");
      if (stored) {
        setActiveApiKey(stored);
        setCustomKey(stored);
      } else if (envKey) {
        setActiveApiKey(envKey);
      }
    }
  }, [envKey]);

  useEffect(() => {
    setSelectedSpot(null);
  }, [title]);

  const targetQuery = selectedSpot
    ? `${selectedSpot}, ${title}, ${state || "India"}`
    : `${title}, ${state || "India"}`;

  // Build the embed URL: official Google Maps Embed API if key is present, otherwise high-def embed
  let embedUrl = "";
  if (activeApiKey && activeApiKey.trim().length > 10) {
    const mapTypeParam = mapType === "satellite" ? "&maptype=satellite" : "";
    embedUrl = `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(
      activeApiKey.trim(),
    )}&q=${encodeURIComponent(targetQuery)}${mapTypeParam}&zoom=14`;
  } else {
    // Zero-config Google Maps interactive embed
    const tParam = mapType === "satellite" ? "k" : mapType === "terrain" ? "p" : "m";
    embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
      targetQuery,
    )}&t=${tParam}&z=14&ie=UTF8&iwloc=&output=embed`;
  }

  const directGoogleMapUrl =
    mapUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${coordinates.lat},${coordinates.lng}`,
    )}`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${coordinates.lat},${coordinates.lng}`;
  const hotelsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `hotels near ${title} ${state || "India"}`,
  )}`;

  const copyCoordinates = () => {
    const text = `${coordinates.lat}° N, ${coordinates.lng}° E`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Coordinates copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveApiKey = () => {
    if (typeof window !== "undefined") {
      if (customKey.trim()) {
        localStorage.setItem("bharat_darshan_google_maps_api_key", customKey.trim());
        setActiveApiKey(customKey.trim());
        toast.success("Google Maps API Key saved successfully!");
      } else {
        localStorage.removeItem("bharat_darshan_google_maps_api_key");
        setActiveApiKey(envKey);
        toast.info("Using default embed mode.");
      }
      setShowKeyInput(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-border shadow-2xl rounded-3xl">
        <DialogHeader className="p-6 pb-4 border-b border-border/70 bg-card/60 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3 pr-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Compass className="size-4" />
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                  Google Maps Explorer · {state}
                </span>
                {elevation && (
                  <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                    {elevation}
                  </span>
                )}
              </div>
              <DialogTitle className="mt-1 text-2xl font-display font-medium text-foreground flex items-center gap-2">
                <span>{selectedSpot || title}</span>
                {selectedSpot && (
                  <span className="text-xs font-sans text-muted-foreground font-normal">
                    (in {title})
                  </span>
                )}
              </DialogTitle>
            </div>

            {/* Coordinates Badge */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyCoordinates}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-mono text-foreground hover:bg-secondary transition-colors"
                title="Click to copy coordinates"
              >
                <Navigation className="size-3 text-primary" />
                <span>
                  {coordinates.lat}° N, {coordinates.lng}° E
                </span>
                {copied ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3 text-muted-foreground" />}
              </button>

              <button
                type="button"
                onClick={() => setShowKeyInput(!showKeyInput)}
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] transition-colors border ${
                  activeApiKey
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
                }`}
                title="Configure Google Maps API Key"
              >
                <Key className="size-3" />
                <span>{activeApiKey ? "API Active" : "Google API"}</span>
              </button>
            </div>
          </div>

          {/* Optional API Key Input Drawer */}
          {showKeyInput && (
            <div className="mt-4 p-3.5 rounded-2xl bg-secondary/50 border border-border text-xs space-y-2 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">Google Maps JavaScript / Embed API Key</span>
                <span className="text-[11px] text-muted-foreground">Optional (works out of the box without key)</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  placeholder="Paste your AIzaSy... Google Maps API Key"
                  className="flex-1 rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-mono outline-none focus:border-primary"
                />
                <button
                  type="button"
                  onClick={handleSaveApiKey}
                  className="rounded-xl bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </DialogHeader>

        {/* Highlights Selector (Dynamic Landmark Pinpoint) */}
        {highlights.length > 0 && (
          <div className="px-6 py-2.5 bg-secondary/30 border-b border-border/60 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
            <span className="text-muted-foreground shrink-0 font-medium flex items-center gap-1">
              <MapPin className="size-3 text-accent" /> Pinpoint:
            </span>
            <button
              type="button"
              onClick={() => setSelectedSpot(null)}
              className={`rounded-full px-3 py-1 shrink-0 font-medium transition-colors ${
                selectedSpot === null
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              Main Landmark
            </button>
            {highlights.map((h) => (
              <button
                key={h}
                type="button"
                onClick={() => setSelectedSpot(h)}
                className={`rounded-full px-3 py-1 shrink-0 transition-colors ${
                  selectedSpot === h
                    ? "bg-primary text-primary-foreground shadow-sm font-medium"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        )}

        {/* Map View Frame */}
        <div className="relative h-[25rem] w-full bg-muted">
          <iframe
            title={`Google Map of ${title}`}
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full"
          />

          {/* Map Controls Overlay (Roadmap / Satellite / Terrain) */}
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-xl bg-background/90 p-1 shadow-warm backdrop-blur-md border border-border/80">
            <button
              type="button"
              onClick={() => setMapType("roadmap")}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                mapType === "roadmap"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Roadmap
            </button>
            <button
              type="button"
              onClick={() => setMapType("satellite")}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                mapType === "satellite"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Satellite 3D
            </button>
            <button
              type="button"
              onClick={() => setMapType("terrain")}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                mapType === "terrain"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Terrain
            </button>
          </div>
        </div>

        {/* Action Bar Footer */}
        <div className="p-5 bg-card border-t border-border flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs">
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            {nearestAirport && (
              <span className="flex items-center gap-1.5" title="Nearest Airport">
                <Plane className="size-3.5 text-primary shrink-0" />
                <span className="truncate max-w-[13rem]">{nearestAirport}</span>
              </span>
            )}
            {nearestRailway && (
              <span className="flex items-center gap-1.5" title="Nearest Railway">
                <Train className="size-3.5 text-primary shrink-0" />
                <span className="truncate max-w-[13rem]">{nearestRailway}</span>
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3 py-1.5 text-foreground hover:border-primary/50 transition-colors"
            >
              <Navigation className="size-3.5 text-primary" />
              <span>Directions</span>
            </a>
            <a
              href={streetViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3 py-1.5 text-foreground hover:border-primary/50 transition-colors"
            >
              <Sparkles className="size-3.5 text-accent" />
              <span>Street View 360°</span>
            </a>
            <a
              href={directGoogleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
