import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
	posts: Post[];
};

export default function BlogList({ posts }: Props) {
	console.log("posts =>", posts);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4">
			{posts?.length > 0 ? (
				posts.map((post) => (
					<ClientSideRoute key={post._id} route={`post/${post.slug.current}`}>
						<div className="flex flex-col group shadow-lg hover:shadow-xl p-2 rounded hover:cursor-pointer transition">
							<div className="overflow-hidden">
								<div className="relative w-full h-80 group-hover:scale-105 transition-transform ease-in-out duration-200">
									<Image
										className="object-left lg:object-center"
										src={urlFor(post.mainImage).url()}
										alt={post.title}
										fill
									/>
								</div>
							</div>
							<h2 className="text-2xl font-semibold my-2 group-hover:text-yellow-400 transition">
								{post.title}
							</h2>
							<div className="flex justify-between items-center text-gray-600 group-hover:text-yellow-400 font-semibold mt-4 transition">
								<p>{post.author.name}</p>
								<p>
									{new Date(post._createdAt).toLocaleDateString("en-US", {
										day: "numeric",
										month: "long",
										year: "numeric",
									})}
								</p>
							</div>
						</div>
					</ClientSideRoute>
				))
			) : (
				<div>No data found!</div>
			)}
		</div>
	);
}
