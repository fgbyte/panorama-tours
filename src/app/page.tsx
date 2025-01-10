import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ToursPreview } from "@/components/ToursPreview";
import mock from "@/data/mock.json";

const { tours: mockTours } = mock;
const tours = mockTours.map((tour) => ({
	...tour,
	title: tour.name,
	maxGroupSize: tour.maxGroupSize || 0,
	images: tour.images[0], // Use first image from the array
}));

const Page = async () => {
	return (
		<div className="container mx-auto px-5 mb-10">
			<Header />
			<ToursPreview tours={tours} />
			<Footer />
		</div>
	);
};

export default Page;
