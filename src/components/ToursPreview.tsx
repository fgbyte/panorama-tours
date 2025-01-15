"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent } from "react";

interface Tour {
	id: string;
	title: string;
	name: string;
	images?: string;
	price: {
		amount: number;
		currency: string;
	};
	description: string;
	maxGroupSize: number;
}

export function TourPreview({ tour }: { tour: Tour }) {
	return (
		<div className="break-words">
			<Link href={`/tours/${tour.id}`}>
				<div className="aspect-[16/10] relative">
					<Image
						alt={tour.title}
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover rounded-lg"
						src={`/${tour.images}` || "/placeholder.webp"}
						fill
					/>
				</div>
			</Link>
			<div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
				<h2 className="font-sans font-semibold tracking-tighter text-black text-2xl md:text-3xl">
					<Link href={`/tours/${tour.id}`}>{tour.name}</Link>
				</h2>
				<div className="prose lg:prose-lg font-bold text-black tracking-tighter">
					{tour.price.amount} {tour.price.currency}
				</div>
				<div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4">
					{tour.description}
				</div>
				<p className="text-sm font-bold">Up to {tour.maxGroupSize} people</p>
			</div>
		</div>
	);
}

export const ToursPreview: FunctionComponent<{
	tours: Tour[];
	className?: string;
}> = ({ tours, className }) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8",
				className,
			)}
		>
			{/* Este mapea los de arriba */}
			{tours.map((tour) => (
				<TourPreview key={tour.id} tour={tour} />
			))}
		</div>
	);
};
