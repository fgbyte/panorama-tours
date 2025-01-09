import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/fonts/fonts";

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
		images: [
			signOgImageUrl({
				name: config.blog.name,
			}),
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased max-w-6xl m-auto text-black",
					inter.className,
				)}
			>
				<main>{children}</main>
			</body>
		</html>
	);
}
