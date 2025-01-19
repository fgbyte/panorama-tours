"use client";
import { config } from "@/config";
import Link from "next/link";
import type { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export const Footer: FunctionComponent = () => {
	return (
		<section className="mt-8 md:mt-16 mb-12">
			<div className="flex items-center justify-center">
				<div className="text-sm text-muted-foreground">
					© <Link href="/about"> {config.blog.copyright}</Link> |{" "}
					{new Date().getFullYear()}
				</div>
			</div>
		</section>
	);
};
