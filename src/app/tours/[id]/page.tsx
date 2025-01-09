import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import TourContent from "@/components/TourContent";
import { config } from "@/config";
import mock from "@/data/mock.json";
import { signOgImageUrl } from "@/lib/og-image";

const { tours } = mock;

type Params = {
	id: string;
};

export async function generateMetadata({
	params: { id },
}: {
	params: Params;
}) {
	const result = tours.find((tour) => tour.id === id);
	if (!result) {
		return {
			title: "Blog post not found",
		};
	}
	const { name, description, images } = result;
	const generatedOgImage = signOgImageUrl({ name, brand: config.blog.name });

	return {
		name,
		description,
		openGraph: {
			name,
			description,
			images: images ? [generatedOgImage, images] : [generatedOgImage],
		},
	};
}

const Page = async ({ params: { id } }: { params: Params }) => {
	return (
		<div>
			<div className="container mx-auto px-5">
				<Header />
				<TourContent id={id} />

				<Footer />
			</div>
		</div>
	);
};

export default Page;
