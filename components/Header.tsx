import React from "react";
import Logo from "./Logo";

export default function Header() {
	return (
		<div className="flex space-x-2 justify-between items-center py-6 shadow px-10">
			<Logo />
			<div className="">
				<div className="bg-gray-800 text-yellow-400 font-semibold px-4 py-2 rounded-full shadow hover:shadow-lg transition">
					Lorem ipsum dolor sit amet
				</div>
			</div>
		</div>
	);
}
