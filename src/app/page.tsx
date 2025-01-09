import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ToursPreview } from "@/components/ToursPreview";
import mock from "@/data/mock.json";
import { wisp } from "@/lib/wisp";

const { tours: mockTours } = mock;
const tours = mockTours.map((tour) => ({
	...tour,
	title: tour.name,
	maxGroupSize: tour.maxGroupSize || 0,
}));

const Page = async ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const page = searchParams.page
		? Number.parseInt(searchParams.page as string)
		: 1;
	const result = await wisp.getPosts({ limit: 6, page });
	return (
		<div className="container mx-auto px-5 mb-10">
			<Header />
			<ToursPreview tours={tours} />
			{/* <BlogPostsPagination pagination={result.pagination} /> */}
			<Footer />
		</div>
	);
};

export default Page;
