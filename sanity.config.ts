import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";

const projectId: string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset: string = process.env.NEXT_PUBLIC_SANITY_DARASET as string;

export default defineConfig({
	basePath: "/studio",
	name: "Next13Blog_Content_studio",
	title: "Nest 13 Blog Studio",

	projectId,
	dataset,

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},

	studio: {
		components: {
			logo: Logo,
			navbar: StudioNavbar,
		},
	},

	theme: myTheme,
});
