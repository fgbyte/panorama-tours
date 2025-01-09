import mock from "@/data/mock.json";

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
						{tour.duration.days} days, {tour.duration.nights} nights
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
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
							<span className="font-semibold">Rating:</span>{" "}
							{tour.rating.average}/5 ({tour.rating.reviews} reviews)
						</p>
					</div>
				</div>
			</div>

			{/* Itinerary Section */}
			<div className="mb-8">
				<h2 className="text-2xl font-bold mb-4">Itinerary</h2>
				<div className="space-y-4">
					{tour.itinerary.map((day) => (
						<div key={day.day} className="border-l-4 border-gray-200 pl-4">
							<h3 className="font-semibold">
								Day {day.day}: {day.title}
							</h3>
							<ul className="list-disc list-inside mt-2">
								{day.activities.map((activity, index) => (
									<li key={index}>{activity}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{/* Images Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{tour.images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`${tour.name} - Image ${index + 1}`}
						className="rounded-lg object-cover w-full h-64"
					/>
				))}
			</div>
		</article>
	);
}
