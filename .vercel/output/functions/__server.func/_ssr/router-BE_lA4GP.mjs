import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, i as streamText, n as DefaultChatTransport, o as require_react, r as convertToModelMessages, t as useChat } from "../_libs/@ai-sdk/react+[...].mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$6 } from "./destinations-BIrLcfqB.mjs";
import { r as suggestedPrompts } from "./data--jNeiXNW.mjs";
import { O as Bot, S as Compass, T as Check, a as Sparkles, b as Cpu, c as RotateCcw, m as Menu, n as User, o as Send, t as X, x as Copy } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as createOpenAI } from "../_libs/@ai-sdk/openai+[...].mjs";
import { t as Markdown } from "../_libs/react-markdown+[...].mjs";
import { t as remarkGfm } from "../_libs/remark-gfm.mjs";
import { t as createGoogle } from "../_libs/@ai-sdk/google+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BE_lA4GP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CH_O9Fv-.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/destinations",
		label: "Destinations"
	},
	{
		to: "/guide",
		label: "AI Guide"
	},
	{
		to: "/itinerary",
		label: "Itinerary"
	},
	{
		to: "/festivals",
		label: "Festivals"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo-circle.png",
						alt: "Bharat Darshan",
						className: "size-11 rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl leading-none tracking-tight",
						children: "Bharat Darshan"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						activeProps: { className: "text-primary" },
						className: "relative rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/itinerary",
						className: "ml-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-warm transition-transform hover:-translate-y-0.5",
						children: "Plan a trip"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Toggle menu",
					onClick: () => setOpen((v) => !v),
					className: "rounded-full p-2 text-foreground md:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border/60 bg-background px-5 pb-4 md:hidden",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: l.to,
				onClick: () => setOpen(false),
				activeOptions: { exact: l.to === "/" },
				activeProps: { className: "text-primary" },
				className: "block py-3 text-sm text-muted-foreground",
				children: l.label
			}, l.to))
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg",
				children: "Bharat Darshan — travel India with a guide who knows the stories."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-5 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/destinations",
						className: "hover:text-primary",
						children: "Destinations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/festivals",
						className: "hover:text-primary",
						children: "Festivals"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/guide",
						className: "hover:text-primary",
						children: "AI Guide"
					})
				]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Bharat Darshan — AI Tour Guide for India" },
			{
				name: "description",
				content: "Explore India with AI-guided destination guides, itinerary planning and cultural heritage stories."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/logo-circle.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$2 = () => import("./routes-C_FVoYp3.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Bharat Darshan — AI Tour Guide for Exploring India" },
		{
			name: "description",
			content: "Destination guides, an AI tour guide, day-by-day itineraries and cultural heritage stories from across India."
		},
		{
			property: "og:title",
			content: "Bharat Darshan — AI Tour Guide for Exploring India"
		},
		{
			property: "og:description",
			content: "Destination guides, an AI tour guide, day-by-day itineraries and cultural heritage stories from across India."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./festivals-DIULEeyt.mjs");
var Route$3 = createFileRoute("/festivals")({
	head: () => ({ meta: [{ title: "Festival Calendar of India — Bharat Darshan" }, {
		name: "description",
		content: "Explore Indian festivals by month, destination and category, with travel guidance and map links."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var Route$2 = createFileRoute("/guide")({
	head: () => ({ meta: [
		{ title: "AI Tour Guide for India — Bharat Darshan" },
		{
			name: "description",
			content: "Ask an AI tour guide powered by Google Gemini about Indian destinations, rituals, food, and routes."
		},
		{
			property: "og:title",
			content: "AI Tour Guide for India — Bharat Darshan"
		},
		{
			property: "og:description",
			content: "Ask an AI tour guide powered by Google Gemini about Indian destinations, rituals, food, and routes."
		}
	] }),
	component: Guide
});
var greeting = {
	id: "welcome",
	role: "assistant",
	parts: [{
		type: "text",
		text: "Namaste! I am your Bharat Darshan AI tour guide, powered by Google Gemini. Ask me anything about Indian destinations, optimal seasons, temple rituals and etiquette, local food specialties, or road & train routes — I will answer with deep local knowledge."
	}]
};
function messageText(message) {
	return message.parts.map((part) => part.type === "text" ? part.text : "").join("").trim();
}
var GEMINI_MODELS = [
	{
		id: "gemini-3-flash-preview",
		name: "Gemini 3 Flash Preview",
		tag: "Recommended",
		desc: "Fast, cost-efficient, and multilingual. Ideal for travel Q&A and suggestions."
	},
	{
		id: "gemini-2.5-flash",
		name: "Gemini 2.5 Flash",
		tag: "Next-Gen",
		desc: "Ultra-fast next-gen model with advanced reasoning and real-time responsiveness."
	},
	{
		id: "gemini-2.5-pro",
		name: "Gemini 2.5 Pro",
		tag: "In-Depth",
		desc: "Best for comprehensive cultural itineraries, deep history, and detailed travel plans."
	}
];
function Guide() {
	const [input, setInput] = (0, import_react.useState)("");
	const [copiedId, setCopiedId] = (0, import_react.useState)(null);
	const selectedModel = "gemini-3-flash-preview";
	const inputRef = (0, import_react.useRef)(null);
	const scrollRef = (0, import_react.useRef)(null);
	const transport = (0, import_react.useMemo)(() => {
		return new DefaultChatTransport({
			api: "/api/chat",
			body: () => ({ model: selectedModel })
		});
	}, [selectedModel]);
	const { messages, sendMessage, status, setMessages } = useChat({
		messages: [greeting],
		transport,
		onError: (error) => {
			const msg = error.message || "The guide could not answer right now.";
			toast.error(msg);
		}
	});
	const isBusy = status === "submitted" || status === "streaming";
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, status]);
	(0, import_react.useEffect)(() => {
		if (!isBusy) inputRef.current?.focus();
	}, [isBusy]);
	function send(text) {
		const q = text.trim();
		if (!q || isBusy) return;
		setInput("");
		sendMessage({ text: q });
	}
	function handleClearChat() {
		setMessages([greeting]);
		toast.info("Chat conversation reset");
	}
	function copyText(id, text) {
		navigator.clipboard.writeText(text);
		setCopiedId(id);
		toast.success("Copied to clipboard");
		setTimeout(() => setCopiedId(null), 2e3);
	}
	const activeModelObj = GEMINI_MODELS.find((m) => m.id === selectedModel) || GEMINI_MODELS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), " Bharat Darshan AI Guide"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 animate-pulse rounded-full bg-emerald-500" }),
								"Google ",
								activeModelObj.name,
								" Active"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground",
						children: "Ask anything about India"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground sm:text-base",
						children: "Rituals, routes, seasonal weather, temple etiquette, and hidden gems — ask with local depth."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 self-start sm:self-auto",
					children: messages.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: handleClearChat,
						title: "Reset Chat",
						"aria-label": "Reset Chat",
						className: "inline-flex size-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-3xl border border-border bg-card shadow-lg flex flex-col overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: scrollRef,
					className: "flex max-h-[30rem] min-h-[18rem] flex-col gap-5 overflow-y-auto p-5 sm:p-6",
					children: [messages.map((m) => {
						const text = messageText(m);
						if (!text) return null;
						const isUser = m.role === "user";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex gap-3 ${isUser ? "justify-end" : "justify-start"}`,
							children: [
								!isUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `group relative max-w-[85%] rounded-2xl px-4 py-3.5 text-sm leading-relaxed ${isUser ? "rounded-br-sm bg-primary text-primary-foreground shadow-sm" : "rounded-bl-sm bg-muted/70 text-foreground border border-border/60 shadow-sm"}`,
									children: [isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "whitespace-pre-wrap",
										children: text
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "guide-markdown text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1 [&_strong]:font-semibold [&_h1]:text-xl [&_h1]:font-bold [&_h2]:text-lg [&_h2]:font-bold [&_h3]:font-bold [&_p]:my-2 [&_a]:text-primary [&_a]:underline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
											remarkPlugins: [remarkGfm],
											children: text
										})
									}), !isUser && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between border-t border-border/40 pt-2 text-[11px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-3 text-primary/70" }),
												" Google ",
												activeModelObj.name
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => copyText(m.id, text),
											className: "inline-flex items-center gap-1 rounded px-1.5 py-0.5 hover:bg-background/80 hover:text-foreground transition",
											title: "Copy text",
											children: copiedId === m.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-emerald-500" }), " Copied"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), " Copy"] })
										})]
									})]
								}),
								isUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" })
								})
							]
						}, m.id);
					}), status === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-2xl rounded-bl-sm border border-border/60 bg-muted/60 px-4 py-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 animate-ping rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Consulting Google ",
								activeModelObj.name,
								"…"
							] })]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						send(input);
					},
					className: "flex items-center gap-2 border-t border-border bg-card/60 p-3 sm:p-4 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						value: input,
						onChange: (e) => setInput(e.target.value),
						placeholder: "Ask about Varanasi ghats, Ladakh road routes, temple timings...",
						disabled: isBusy,
						className: "flex-1 rounded-full bg-muted/80 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						"aria-label": "Send query",
						disabled: isBusy || !input.trim(),
						className: "flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-all hover:scale-105 hover:bg-primary/90 disabled:opacity-50 disabled:hover:scale-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-3.5 text-primary" }), " Popular Travel Inquiries"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: suggestedPrompts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => send(p),
						disabled: isBusy,
						className: "rounded-full border border-border/80 bg-card px-3.5 py-1.5 text-xs text-muted-foreground shadow-xs transition hover:border-primary/50 hover:bg-primary/5 hover:text-foreground disabled:opacity-50 text-left",
						children: p
					}, p))
				})]
			})
		]
	});
}
var $$splitComponentImporter = () => import("./itinerary-q1dew7H7.mjs");
var Route$1 = createFileRoute("/itinerary")({
	head: () => ({ meta: [
		{ title: "Plan Your India Itinerary — Bharat Darshan" },
		{
			name: "description",
			content: "Build a day-by-day India itinerary with exact coordinates, maps, and travel highlights across 35 destinations."
		},
		{
			property: "og:title",
			content: "Plan Your India Itinerary — Bharat Darshan"
		},
		{
			property: "og:description",
			content: "Build a day-by-day India itinerary with exact coordinates, maps, and travel highlights across 35 destinations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SYSTEM_PROMPT = `You are the Bharat Darshan AI tour guide: a warm, practical, culturally knowledgeable expert on travelling across India.
Answer questions about destinations, routes, itineraries, seasons, festivals, rituals, temple etiquette, food, and travel safety.
Be concrete: mention specific places, timings, best seasons, and local tips.
For every named destination, attraction, monument, viewpoint, temple, city, railway station, airport, trek start point, beach, or hotel, provide the exact place name plus:
- GPS coordinates formatted as latitude, longitude (decimal degrees), if you are confident in the exact point.
- If a place is ambiguous or exact coordinates are uncertain, give its full address and link it with a Google Maps URL using the exact place name and address in the search query; never invent coordinates.
- Do not reduce a specific attraction to only its city name.
- Prefer a place-specific Google Maps link for the attraction itself rather than a map link for the wider city.
Keep answers engaging and concise (under ~200 words) using short paragraphs or bullet points unless the user asks for deep detail.
If a question is completely unrelated to India or travel, politely steer back.`;
var Route = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	let body = {};
	try {
		body = await request.json();
	} catch {
		return new Response("Invalid JSON body", { status: 400 });
	}
	const { messages } = body;
	if (!Array.isArray(messages)) return new Response("Messages are required", { status: 400 });
	const googleApiKey = process.env["GOOGLE_API_KEY"] || process.env["GEMINI_API_KEY"] || "";
	const headerModel = request.headers.get("x-gemini-model") || request.headers.get("x-google-model");
	const requestedModel = body.model || headerModel || process.env["GEMINI_MODEL"] || "gemini-3-flash-preview";
	const lovableApiKey = process.env["LOVABLE_API_KEY"];
	if (!googleApiKey && !lovableApiKey) return new Response(JSON.stringify({ error: "Missing Google Gemini API Key. Please provide your Google API Key in Settings or set GOOGLE_API_KEY in your .env file." }), {
		status: 401,
		headers: { "Content-Type": "application/json" }
	});
	try {
		let client;
		let modelName = requestedModel;
		if (googleApiKey) {
			client = createGoogle({ apiKey: googleApiKey.trim() });
			if (![
				"gemini-3-flash-preview",
				"gemini-2.5-flash",
				"gemini-2.5-pro"
			].includes(modelName)) modelName = "gemini-3-flash-preview";
		} else {
			client = createOpenAI({
				baseURL: "https://ai.gateway.lovable.dev/v1",
				apiKey: lovableApiKey,
				headers: {
					"Lovable-API-Key": lovableApiKey,
					"X-Lovable-AIG-SDK": "vercel-ai-sdk"
				}
			});
			modelName = "openai/gpt-6-astra";
		}
		return streamText({
			model: client(modelName),
			system: SYSTEM_PROMPT,
			messages: await convertToModelMessages(messages),
			abortSignal: request.signal
		}).toUIMessageStreamResponse({ originalMessages: messages });
	} catch (error) {
		if (error instanceof Error && error.name === "AbortError") return new Response("Client closed request", { status: 499 });
		console.error("AI Guide error:", error);
		let errorMsg = error instanceof Error ? error.message : "The guide could not answer right now.";
		if (errorMsg.includes("API_KEY_INVALID") || errorMsg.includes("API key not valid")) errorMsg = "Invalid Google Gemini API key. Please check your key in settings.";
		else if (errorMsg.includes("RESOURCE_EXHAUSTED") || errorMsg.includes("quota")) errorMsg = "Google Gemini API rate limit or quota exceeded. Please try again in a few moments or switch to gemini-3-flash-preview.";
		return new Response(errorMsg, { status: 500 });
	}
} } } });
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	DestinationsRoute: Route$6.update({
		id: "/destinations",
		path: "/destinations",
		getParentRoute: () => Route$5
	}),
	FestivalsRoute: Route$3.update({
		id: "/festivals",
		path: "/festivals",
		getParentRoute: () => Route$5
	}),
	GuideRoute: Route$2.update({
		id: "/guide",
		path: "/guide",
		getParentRoute: () => Route$5
	}),
	ItineraryRoute: Route$1.update({
		id: "/itinerary",
		path: "/itinerary",
		getParentRoute: () => Route$5
	}),
	ApiChatRoute: Route.update({
		id: "/api/chat",
		path: "/api/chat",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
