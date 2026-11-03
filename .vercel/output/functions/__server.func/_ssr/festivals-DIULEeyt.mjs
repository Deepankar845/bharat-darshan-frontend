import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as festivals, t as destinations } from "./data--jNeiXNW.mjs";
import { D as CalendarDays, d as Navigation, g as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/festivals-DIULEeyt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var months = [
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
	"December"
];
var categories = [
	"All",
	"Religious",
	"Culture",
	"Harvest",
	"Music & Arts"
];
function FestivalCalendar() {
	const [month, setMonth] = (0, import_react.useState)("All");
	const [category, setCategory] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)("");
	const visibleFestivals = (0, import_react.useMemo)(() => {
		const normalizedQuery = query.trim().toLowerCase();
		return festivals.filter((festival) => {
			const monthMatches = month === "All" || festival.month === month;
			const categoryMatches = category === "All" || festival.category === category;
			const queryMatches = !normalizedQuery || `${festival.name} ${festival.destination} ${festival.state}`.toLowerCase().includes(normalizedQuery);
			return monthMatches && categoryMatches && queryMatches;
		});
	}, [
		category,
		month,
		query
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-primary",
						children: "Plan around the celebration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-5xl",
						children: "India Festival Calendar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Discover regional festivals, harvest celebrations, temple ceremonies and cultural events. Lunar and event-programme dates can change each year."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-4 rounded-3xl border border-border bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "festival-search",
						children: "Search festivals"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "festival-search",
						type: "search",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Search festival, destination or state...",
						className: "rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: "Month"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: months.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMonth(item),
							className: `rounded-full border px-3 py-1.5 text-xs ${month === item ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`,
							children: item
						}, item))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: "Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCategory(item),
							className: `rounded-full border px-3 py-1.5 text-xs ${category === item ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`,
							children: item
						}, item))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-muted-foreground",
				children: [
					"Showing ",
					visibleFestivals.length,
					" ",
					visibleFestivals.length === 1 ? "festival" : "festivals"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: visibleFestivals.map((festival) => {
					const destination = destinations.find((item) => item.slug === festival.destinationSlug);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
									children: festival.month
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground",
									children: festival.category
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-2xl",
								children: festival.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 flex items-center gap-1.5 text-sm font-medium text-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
									festival.destination,
									", ",
									festival.state
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: festival.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-xl bg-secondary/50 p-3 text-xs leading-relaxed text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "mr-1 inline size-3.5 text-primary" }), festival.dateNote]
							}),
							destination ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/destinations",
								hash: destination.slug,
								search: { q: destination.name },
								className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" }), "Open destination guide"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${festival.destination}, ${festival.state}`)}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" }), "View on Google Maps"]
							})
						]
					}, `${festival.name}-${festival.destinationSlug}`);
				})
			}),
			visibleFestivals.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-3xl border border-dashed border-border py-14 text-center text-muted-foreground",
				children: "No festivals match these filters."
			})
		]
	});
}
//#endregion
export { FestivalCalendar as component };
