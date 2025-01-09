import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import TourContent from "@/components/TourContent";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import mock from "@/data/mock.json";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
	const { name, description } = result;

	return {
		name,
		description,
	};
}

const Page = async ({ params: { id } }: { params: Params }) => {
	return (
		<div>
			<div className="container mx-auto px-5">
				<Header />
				<Button>
					<Link className="flex items-center" href={"/"}>
						{/* <ArrowLeft className="h-5 w-5 mr-2" /> */}
						Go Back
					</Link>
				</Button>
				<TourContent id={id} />

				<Footer />
			</div>
		</div>
	);
};

export default Page;
