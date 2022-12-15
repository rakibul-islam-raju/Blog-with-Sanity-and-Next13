import "../styles/globals.css";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function StudioNavbar(props: any) {
	return (
		<div>
			<div className="p-6">
				<Link href="/" className="text-yellow-400 flex items-center gap-2">
					<ArrowUturnLeftIcon className="h-6 w-6 text-yellow-400" />
					<span className="">Go To Website</span>
				</Link>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
}
