import { createClient } from "next-sanity";

export const projectId: string = process.env
	.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
export const dataset: string = process.env.NEXT_PUBLIC_SANITY_DARASET as string;
const apiVersion: string = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
});
