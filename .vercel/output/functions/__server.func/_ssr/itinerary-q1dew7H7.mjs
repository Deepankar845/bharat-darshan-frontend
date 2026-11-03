import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as destinations } from "./data--jNeiXNW.mjs";
import { E as CalendarRange, d as Navigation, i as TramFront, l as Plus, r as Trash2, u as Plane, y as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/itinerary-q1dew7H7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nextId = 1;
function Itinerary() {
	const [days, setDays] = (0, import_react.useState)([
		[],
		[],
		[]
	]);
	const [active, setActive] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(destinations[0].slug);
	const destination = (0, import_react.useMemo)(() => destinations.find((d) => d.slug === picked) ?? destinations[0], [picked]);
	const total = days.reduce((n, d) => n + d.length, 0);
	function addStop(label) {
		setDays((prev) => prev.map((d, i) => i === active ? [...d, {
			id: nextId++,
			label,
			place: destination.name,
			coordinates: destination.coordinates,
			mapUrl: destination.mapUrl
		}] : d));
	}
	function removeStop(dayIndex, id) {
		setDays((prev) => prev.map((d, i) => i === dayIndex ? d.filter((s) => s.id !== id) : d));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-5xl",
				children: "Plan your journey"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted-foreground",
				children: "Pick a destination, choose a day, and add the experiences you want with exact geographic coordinates and maps. Your plan builds itself as you go."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-[22rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-3xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: [
								"Destination (",
								destinations.length,
								" available)"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: picked,
							onChange: (e) => setPicked(e.target.value),
							className: "mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring",
							children: destinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: d.slug,
								children: [
									d.name,
									" · ",
									d.state
								]
							}, d.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-xl bg-secondary/40 p-3 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between font-mono",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									destination.coordinates.lat,
									"° N, ",
									destination.coordinates.lng,
									"° E"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: destination.mapUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1 font-sans text-primary hover:underline",
									children: ["Map ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 space-y-1 pt-2 border-t border-border/50 text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 truncate",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "size-3 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: destination.nearestAirport
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 truncate",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TramFront, { className: "size-3 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: destination.nearestRailway
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: ["Add to day ", active + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: destination.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => addStop(h),
								className: "group flex w-full items-center justify-between rounded-xl border border-border px-4 py-3 text-left text-sm transition-colors hover:border-primary/50 hover:bg-secondary",
								children: [h, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" })]
							}) }, h))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 flex items-center gap-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarRange, { className: "size-4 text-accent" }),
								total,
								" ",
								total === 1 ? "stop" : "stops",
								" across ",
								days.length,
								" days"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [days.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActive(i),
						className: `rounded-full border px-4 py-2 text-sm transition-colors ${active === i ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`,
						children: ["Day ", i + 1]
					}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setDays((d) => [...d, []]),
						className: "rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground",
						children: "+ Add day"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-5",
					children: days.map((stops, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-3xl border bg-card p-6 transition-colors ${active === i ? "border-primary/50" : "border-border"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-2xl",
							children: ["Day ", i + 1]
						}), stops.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Nothing planned yet — add highlights from the left."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 space-y-2",
							children: stops.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 rounded-xl bg-secondary px-4 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-mono",
											children: String(idx + 1).padStart(2, "0")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.label }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-muted-foreground",
											children: ["· ", s.place]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [s.mapUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: s.mapUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": `View ${s.label} on map`,
										className: "text-muted-foreground transition-colors hover:text-primary",
										title: "Open on map",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Remove ${s.label}`,
										onClick: () => removeStop(i, s.id),
										className: "text-muted-foreground transition-colors hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})]
								})]
							}, s.id))
						})]
					}, i))
				})] })]
			})
		]
	});
}
//#endregion
export { Itinerary as component };
