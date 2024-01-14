import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";

import Subscription from "../components/Subscription";

export const metadata: Metadata = {
	title: "Bellingham",
	description: "- Official Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='overflow-x-hidden'>
				<NavBar />

				{children}

				<div className='md:hidden'>
					<Subscription />
				</div>
			</body>
		</html>
	);
}
