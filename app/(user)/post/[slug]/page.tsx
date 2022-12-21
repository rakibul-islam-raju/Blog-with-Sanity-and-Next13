import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { RichTextComponent } from "../../../../components/RichTextComponent";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

type Props = {
	params: {
		slug: string;
	};
};

export const revalidate = 3600; // revalidate this page every 3600 seconds

export async function generateStaticParams() {
	const query = groq`*[_type=='post'] 
	{
		slug
	}`;

	const slugs: Post[] = await client.fetch(query);
	const slugRouted = slugs.map((slug) => slug.slug.current);

	return slugRouted.map((slug) => ({
		slug,
	}));
}

export default async function Post({ params }: Props) {
	const query = groq`
	*[_type=='post' && slug.current == $slug][0]
	{
		...,
		author->,
		categories[]->
	}
	`;

	const post: Post = await client.fetch(query, { slug: params.slug });

	return (
		<div>
			<div className="relative w-full h-96">
				<div className="">
					<Image
						className="object-center object-fill"
						src={urlFor(post.mainImage).url()}
						alt={post.title}
						fill
					/>
				</div>
			</div>
			<h2 className="text-4xl font-semibold my-4">{post.title}</h2>

			<div className="font-semibold text-gray-600">
				<p>{post.author.name}</p>
				<p>
					{new Date(post._createdAt).toLocaleDateString("en-US", {
						day: "numeric",
						month: "long",
						year: "numeric",
					})}
				</p>
			</div>

			<div className="my-4">
				<PortableText value={post.body} components={RichTextComponent} />
			</div>
		</div>
	);
}
