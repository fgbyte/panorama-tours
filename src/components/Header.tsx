"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FunctionComponent } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
interface MenuItem {
	name: string;
	href: string;
	openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
	{ name: "Tours", href: "/" },
	{ name: "About Us", href: "/about" },
];
export const Navigation: FunctionComponent = () => {
	const pathname = usePathname();

	return (
		<nav>
			<div className="hidden md:flex items-center">
				{menuItems.map((item) => (
					<div key={item.href} className="ml-4 md:ml-8">
						<a
							href={item.href}
							target={item.openInNewTab ? "_blank" : "_self"}
							className={cn(
								"hover:text-gray-900",
								pathname === item.href && "font-semibold",
							)}
						>
							{item.name}
						</a>
					</div>
				))}
			</div>
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger>
						<Menu size="24" />
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetDescription>
								{menuItems.map((item) => (
									<a
										key={item.href}
										href={item.href}
										target={item.openInNewTab ? "_blank" : "_self"}
										className={cn(
											"block py-2",
											pathname === item.href && "font-semibold",
										)}
									>
										{item.name}
									</a>
								))}
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export const Header: FunctionComponent = () => {
	return (
		<section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
			{/* <Link href="/">
				<Avatar className="w-14 h-14 sm:w-20 sm:h-20">
					<AvatarImage src="/images/logo.webp" alt="Logo" />
				</Avatar>
			</Link> */}
			<Link href="/">
				<h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
					{config.blog.name}🧭
				</h1>
			</Link>
			<Navigation />
		</section>
	);
};
