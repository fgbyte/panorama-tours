import mock from "@/data/mock.json";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "./Icons";
import GoogleMapLocation from "./google-map-location";

const mapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const phone = "41796915893";

export default function TourContent({ id }: { id: string }) {
	const tour = mock.tours.find((tour) => tour.id === id);

	if (!tour) {
		return <div>Tour not found</div>;
	}

	return (
		<article className="my-8">
			{/* Hero Section */}
			<div className="mb-8">
				<h1 className="text-4xl font-bold mb-4">{tour.name}</h1>
				<p className="text-lg text-gray-600">{tour.description}</p>
			</div>

			{/* Key Info Section */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div className="bg-gray-50 p-4 rounded-lg">
					<h3 className="font-semibold mb-2">Duration</h3>
					<p>
						{tour.duration.days < 1
							? `${tour.duration.hours} hours`
							: `${tour.duration.days} days, ${tour.duration.nights} nights`}
					</p>
				</div>
				<div className="bg-gray-50 p-4 rounded-lg">
					<h3 className="font-semibold mb-2">Price</h3>
					<p>
						{tour.price.amount} {tour.price.currency}{" "}
						{tour.price.perPerson ? "per person" : ""}
					</p>
				</div>
				<div className="bg-gray-50 p-4 rounded-lg">
					<h3 className="font-semibold mb-2">Location</h3>
					<p>
						{tour.location.country}, {tour.location.region}
					</p>
				</div>
			</div>

			{/* Details Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 sm:mb-12">
				<div>
					<h2 className="text-2xl font-bold mb-4">What's Included</h2>
					<ul className="list-disc list-inside">
						{tour.included.map((item, index) => (
							<li key={index} className="mb-2">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="text-2xl font-bold mb-4">Tour Information</h2>
					<div className="space-y-2">
						<p>
							<span className="font-semibold">Difficulty:</span>{" "}
							{tour.difficulty}
						</p>
						<p>
							<span className="font-semibold">Max Group Size:</span>{" "}
							{tour.maxGroupSize}
						</p>
						<p>
							<span className="font-semibold">Languages:</span>{" "}
							{tour.languages.join(", ")}
						</p>
						<p>
							<span className="font-semibold">Rating:</span> {tour.rating.stars}
						</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
				{/* Itinerary Section */}
				<div>
					<h2 className="text-2xl font-bold mb-4">Itinerary</h2>
					<div>
						{tour.itinerary[0].day > 0
							? tour.itinerary.map((day) => (
									<div
										key={day.day}
										className="border-l-4 border-gray-200 pl-4 mt-2"
									>
										<h3 className="font-semibold">
											Day {day.day}: {day.title}
										</h3>
										<ul className="list-disc list-inside mt-2">
											{day.activities.map((activity, index) => (
												<li key={index}>{activity}</li>
											))}
										</ul>
									</div>
								))
							: tour.itinerary.map((day) => (
									<ul
										key={day.day}
										className="list-disc list-inside flex flex-col gap-2"
									>
										{day.activities.map((activity, index) => (
											<li key={index}>{activity}</li>
										))}
									</ul>
								))}
					</div>
				</div>
				{/* Start Point Section */}
				<div>
					<h2 className="text-2xl font-bold mb-2">Start Point</h2>
					<Link
						href={(tour.location.startingPoint as { url: string }).url}
						target="_blank"
						className=" flex gap-1 items-center hover:text-green-800 cursor-pointer"
					>
						{`📌 ${(tour.location.startingPoint as { title: string }).title}`}
						<SquareArrowOutUpRight className="w-4 h-4" />
					</Link>
					{/* Contact Button */}
					<div className="flex flex-col gap-2 mt-8">
						<p className="text-red-600 text-center sm:text-start font-semibold">
							At least {tour.id === "tour_001" ? 2 : 3} days in advance
						</p>
						<Link
							className="py-6 rounded-lg max-h-4 text-white font-semibold text-sm bg-black sm:w-1/2 hover:bg-green-500 flex items-center gap-2 justify-center"
							href={`https://wa.me/${phone}?text=*${id}*%20Hello%20I%20am%20interested%20in%20your%20Tour%20`}
						>
							<WhatsAppIcon />
							Book Tour
						</Link>
					</div>
				</div>
			</div>

			{/* Images Section */}
			<div className="flex justify-center">
				<div className="masonry sm:masonry-sm">
					{tour.images.map((image, index) => (
						<Image
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							width={500}
							height={500}
							src={`/${image}`}
							alt={`${tour.name} -  ${index + 1}`}
							className="rounded-lg mt-5"
						/>
					))}
				</div>
			</div>
		</article>
	);
}
