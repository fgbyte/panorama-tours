import { config } from "@/config";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: {
		absolute: config.blog.metadata.title.absolute,
		default: config.blog.metadata.title.default,
		template: config.blog.metadata.title.template,
	},
	description: config.blog.metadata.description,
	openGraph: {
		title: config.blog.metadata.title.default,
		description: config.blog.metadata.description,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/logo-yellow.webp" />
			</head>
			<body
				className={`min-h-screen bg-background font-sans antialiased max-w-6xl m-auto text-black
					${inter.className}`}
			>
				<main>{children}</main>
			</body>
		</html>
	);
}
