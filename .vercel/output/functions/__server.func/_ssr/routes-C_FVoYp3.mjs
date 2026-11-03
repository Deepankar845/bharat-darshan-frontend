import { a as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as destinations } from "./data--jNeiXNW.mjs";
import { A as ArrowRight, a as Sparkles, d as Navigation, h as Map, p as MessageCircle, y as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C_FVoYp3.js
var import_jsx_runtime = require_jsx_runtime();
var hero_india_montage_default = "/assets/hero-india-montage-BZpXt_mp.jpg";
var features = [
	{
		icon: Map,
		title: "Destination guides",
		text: "Curated city and region guides with the right number of days, seasons and must-see stops.",
		to: "/destinations"
	},
	{
		icon: MessageCircle,
		title: "AI tour guide",
		text: "Ask anything — rituals, routes, food, history — and get an answer in a traveller's language.",
		to: "/guide"
	},
	{
		icon: Sparkles,
		title: "Itinerary planner",
		text: "Build a day-by-day plan by dragging places into your trip and shaping the pace.",
		to: "/itinerary"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_india_montage_default,
					alt: "Panorama of the Taj Mahal, Somnath Temple, Nalanda University and Ramanathaswamy Temple",
					width: 1920,
					height: 1088,
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/45 to-background" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-5 py-28 sm:py-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise-in inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/15 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-background",
							children: "Incredible India, guided"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "rise-in mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-background sm:text-7xl",
							children: ["Every stone here has a story.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gold",
								children: " Let it speak."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise-in mt-6 max-w-xl text-lg text-background/85",
							children: "Bharat Darshan is your AI travel companion for India — guiding you from Rajasthan's forts to Kerala's backwaters, one story at a time."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise-in mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/guide",
								className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-warm transition-transform hover:-translate-y-0.5",
								children: ["Ask the AI guide", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/destinations",
								className: "inline-flex items-center gap-2 rounded-full border border-background/50 px-6 py-3 font-medium text-background transition-colors hover:bg-background/10",
								children: "Browse destinations"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: f.to,
					className: "group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-xl",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: f.text
						})
					]
				}, f.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl",
					children: "Start with a classic"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Four journeys that cover four very different Indias."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/destinations",
					className: "hidden shrink-0 items-center gap-2 text-sm text-primary hover:underline sm:inline-flex",
					children: ["All destinations ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2",
				children: destinations.slice(0, 4).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/destinations",
					search: { q: d.name },
					hash: d.slug,
					className: "group relative block overflow-hidden rounded-3xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: d.image,
							alt: `${d.name}, ${d.state}`,
							loading: "lazy",
							width: 1024,
							height: 768,
							className: "h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.2em] text-gold",
										children: d.state
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: d.mapUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										onClick: (e) => e.stopPropagation(),
										className: "inline-flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 font-mono text-[11px] text-background backdrop-blur-md transition-colors hover:bg-background hover:text-foreground",
										title: "Open exact coordinates in Google Maps",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3 text-gold" }),
											d.coordinates.lat,
											"°N, ",
											d.coordinates.lng,
											"°E",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-2.5 opacity-70" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl text-background transition-colors group-hover:text-gold",
										children: d.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 text-xs font-medium text-background/80 opacity-0 transition-opacity group-hover:opacity-100",
										children: ["Explore guide ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-sm text-sm text-background/80",
									children: d.tagline
								})
							]
						})
					]
				}, d.slug))
			})]
		})
	] });
}
//#endregion
export { Index as component };
