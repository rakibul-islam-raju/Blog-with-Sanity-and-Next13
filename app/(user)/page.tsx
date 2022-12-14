import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
	*[_type=='post'] {
		...,
		author->,
		categories[]->
	} | order(_createdAt desc)
`;

export const revalidate = 3600; // revalidate this page every 3600 seconds

export default async function HomePage() {
	if (previewData()) {
		return (
			<PreviewSuspense
				fallback={
					<div className="text-yellow-400 font-semibold text-center animate-pulse">
						<div>Loading...</div>
					</div>
				}
			>
				<PreviewBlogList query={query} />
			</PreviewSuspense>
		);
	}

	const posts = await client.fetch(query);

	return <BlogList posts={posts} />;
}
