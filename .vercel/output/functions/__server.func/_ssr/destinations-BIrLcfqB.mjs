import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations-BIrLcfqB.js
var $$splitComponentImporter = () => import("./destinations-CEo9QKeu.mjs");
var Route = createFileRoute("/destinations")({
	validateSearch: (search) => ({ q: typeof search.q === "string" ? search.q : void 0 }),
	head: () => ({ meta: [
		{ title: "Destination Guides Across India — Bharat Darshan" },
		{
			name: "description",
			content: "Guides across north, south, east and west India with exact coordinates, transport connectivity, best seasons, trip length and verified heritage highlights."
		},
		{
			property: "og:title",
			content: "Destination Guides Across India — Bharat Darshan"
		},
		{
			property: "og:description",
			content: "Guides across north, south, east and west India with exact coordinates, transport connectivity, best seasons, trip length and verified heritage highlights."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
