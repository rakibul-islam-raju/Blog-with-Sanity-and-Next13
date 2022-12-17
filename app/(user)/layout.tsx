import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className="">
				<Header />
				<div className="px-10 mt-6">{children}</div>
			</body>
		</html>
	);
}
