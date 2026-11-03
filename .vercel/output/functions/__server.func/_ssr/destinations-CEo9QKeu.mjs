import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Route } from "./destinations-BIrLcfqB.mjs";
import { t as destinations } from "./data--jNeiXNW.mjs";
import { C as Clock, D as CalendarDays, _ as Info, d as Navigation, f as Mountain, g as MapPin, i as TramFront, k as BedDouble, s as Search, u as Plane, v as Hotel, w as ChevronDown, y as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations-CEo9QKeu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var regions = [
	"All",
	"North",
	"South",
	"East",
	"West"
];
function Destinations() {
	const searchParams = Route.useSearch();
	const [region, setRegion] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)(searchParams?.q ?? "");
	const [expandedSlug, setExpandedSlug] = (0, import_react.useState)(null);
	const [hotelsSlug, setHotelsSlug] = (0, import_react.useState)(null);
	const [hotelBudget, setHotelBudget] = (0, import_react.useState)("budget");
	(0, import_react.useEffect)(() => {
		if (searchParams?.q !== void 0) setQuery(searchParams.q);
	}, [searchParams?.q]);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && window.location.hash) {
			const id = window.location.hash.replace("#", "");
			const elem = document.getElementById(id);
			if (elem) {
				elem.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
				setExpandedSlug(id);
			}
		}
	}, []);
	const list = (0, import_react.useMemo)(() => {
		const byRegion = region === "All" ? destinations : destinations.filter((d) => d.region === region);
		const q = query.trim().toLowerCase();
		if (!q) return byRegion;
		return byRegion.filter((d) => d.state.toLowerCase().includes(q) || d.name.toLowerCase().includes(q) || d.tagline.toLowerCase().includes(q) || d.nearestAirport.toLowerCase().includes(q) || d.nearestRailway.toLowerCase().includes(q) || d.description.toLowerCase().includes(q) || d.highlights.some((h) => h.toLowerCase().includes(q)) || d.coordinates.lat.toString().includes(q) || d.coordinates.lng.toString().includes(q));
	}, [region, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-5xl",
					children: "Destination guides"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted-foreground",
					children: "Explore 35 curated destinations across India with exact geographic coordinates, transport connectivity, optimal seasons, and heritage insights."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-mono text-muted-foreground",
					children: [
						"Showing ",
						list.length,
						" destinations"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setRegion(r),
					className: `rounded-full border px-4 py-2 text-sm transition-colors ${region === r ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`,
					children: r
				}, r))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "destination-search",
					className: "sr-only",
					children: "Search states, destinations, or coordinates"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "destination-search",
						type: "search",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search destination, state, airport, coordinates…",
						className: "w-full rounded-full border border-border bg-card py-2.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-8",
				children: list.map((d) => {
					const isExpanded = expandedSlug === d.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: d.slug,
						className: "grid gap-0 overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lift md:grid-cols-[1.05fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-72 md:h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: d.image,
								alt: `${d.name}, ${d.state}`,
								loading: "lazy",
								width: 1024,
								height: 768,
								className: "size-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: d.mapUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-md shadow-warm transition-transform hover:scale-105 hover:bg-background",
								title: "View on Google Maps",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										d.coordinates.lat,
										"° N, ",
										d.coordinates.lng,
										"° E"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3 text-muted-foreground" })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
											" ",
											d.state,
											" · ",
											d.region
										]
									}), d.elevation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] text-muted-foreground font-mono",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { className: "size-3 text-accent" }), d.elevation]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-3xl font-display",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: d.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-accent" }),
											" ",
											d.days
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5 text-accent" }),
											" ",
											d.bestTime
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-2xl border border-border/70 bg-background/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setHotelsSlug(hotelsSlug === d.slug ? null : d.slug),
										className: "flex w-full items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "size-4 text-primary" }), "Nearby hotels by budget"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-4 transition-transform ${hotelsSlug === d.slug ? "rotate-180" : ""}` })]
									}), hotelsSlug === d.slug && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-border/70 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-3 gap-2",
												children: [
													["budget", "Budget"],
													["mid", "Mid-range"],
													["premium", "Luxury"]
												].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setHotelBudget(value),
													className: `rounded-xl border px-2 py-2 text-xs font-medium transition-colors ${hotelBudget === value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
													children: label
												}, value))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-3 text-xs leading-relaxed text-muted-foreground",
												children: [
													"Map area anchor: ",
													d.coordinates.lat,
													", ",
													d.coordinates.lng,
													". Live hotel availability and exact hotel coordinates are shown on the booking sites."
												]
											}),
											(() => {
												const hotelSearch = encodeURIComponent(`${hotelBudget === "budget" ? "budget cheap" : hotelBudget === "mid" ? "mid range" : "luxury"} hotels near ${d.name} ${d.state} India`);
												const bookingLinks = [
													["Google Hotels", `https://www.google.com/travel/hotels/${encodeURIComponent(d.name)}?hl=en-IN`],
													["Booking.com", `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(`${d.name}, India`)}`],
													["MakeMyTrip", `https://www.makemytrip.com/hotels/${encodeURIComponent(d.name.toLowerCase().replace(/ /g, "-"))}-hotels.html`],
													["Goibibo", `https://www.goibibo.com/hotels/${encodeURIComponent(d.name.toLowerCase().replace(/ /g, "-"))}-hotels/`],
													["OYO", `https://www.oyorooms.com/search?location=${encodeURIComponent(`${d.name}, ${d.state}`)}`],
													["Nearby on Maps", `https://www.google.com/maps/search/?api=1&query=${hotelSearch}`]
												];
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 grid gap-2 sm:grid-cols-2",
													children: bookingLinks.map(([name, url]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: url,
														target: "_blank",
														rel: "noopener noreferrer",
														className: "flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5 text-xs font-medium hover:border-primary/50 hover:bg-secondary/50",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotel, { className: "size-3.5 text-primary" }), name]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3 text-muted-foreground" })]
													}, name))
												});
											})()
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: d.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground",
										children: h
									}, h))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-1.5 rounded-2xl bg-secondary/35 p-3.5 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "size-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "truncate",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Airport:"
												}),
												" ",
												d.nearestAirport
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TramFront, { className: "size-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "truncate",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Rail:"
												}),
												" ",
												d.nearestRailway
											]
										})]
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 border-t border-border/60 pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setExpandedSlug(isExpanded ? null : d.slug),
									className: "inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-3.5" }),
										isExpanded ? "Hide overview" : "Heritage overview & background",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-3 transition-transform ${isExpanded ? "rotate-180" : ""}` })
									]
								}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2.5 animate-fadeIn rounded-xl bg-card border border-border p-3.5 text-xs leading-relaxed text-muted-foreground shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d.description }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-center justify-between pt-2 border-t border-border/50 text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-muted-foreground/80",
											children: [
												"Exact coordinates: ",
												d.coordinates.lat,
												", ",
												d.coordinates.lng
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: d.mapUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-1 text-primary hover:underline font-medium",
											children: ["Open in Maps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
										})]
									})]
								})]
							})]
						})]
					}, d.slug);
				})
			})
		]
	});
}
//#endregion
export { Destinations as component };
