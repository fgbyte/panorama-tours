"use client";
import { config } from "@/config";
import type { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export const Footer: FunctionComponent = () => {
	return (
		<section className="mt-8 md:mt-16 mb-12">
			<div className="flex items-center justify-center">
				<div className="text-sm text-muted-foreground">
					© {config.blog.copyright} {new Date().getFullYear()}
				</div>
			</div>
		</section>
	);
};
