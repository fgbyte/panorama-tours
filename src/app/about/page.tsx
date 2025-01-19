import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const images = [
	"images/IMG_9522.webp",
	"images/IMG_9575.webp",
	"images/_MG_2243.webp",
	"images/IMG_9526.webp",
	"images/_MG_0092.webp",
	"images/IMG_9532.webp",
	"images/IMG_9544.webp",
	"images/_MG_0098.webp",
	"images/IMG_9564.webp",
	"images/IMG_9550.webp",
	"images/_MG_0094.webp",
];

const content = `
Discover the charm of Matanzas from our cozy private terrace home.
Located in a quiet and central area, this accommodation offers a unique experience with bright rooms, authentic decor, and a perfect outdoor space to relax. Ideal for couples or travelers who are looking for comfort and a home environment. Enjoy local hospitality and proximity to the city's main attractions. Your perfect retreat awaits!

## The space
Our rooms are designed to offer comfort and privacy. Each account features:
- Spacious and ventilated spaces, decorated in a simple and functional style.
- Air conditioning and ceiling fans to ensure a cool stay any time of the year.
- Comfortable bed and quality bedding, ensuring a good rest.
- Access to a private bathroom, equipped with essentials for your comfort.

## Guest access
Our home is a modern construction of the capitalist era, in excellent condition, offering a warm, spacious and welcoming environment. Guests will have access to:
- Spacious common spaces, including a dining room and shared kitchen, available from 7:30 am to 10:00 pm.
- One outdoor patio ideal for relaxing after a day exploring the city.
- A rooftop with unique panoramic views of the surrounding city, bay and rivers. Access to the rooftop is under the supervision of our co-host, ensuring a safe and special experience.
- An exclusive photo viewpoint area, perfect for capturing unforgettable memories.

## Additional Amenities
To enrich your experience, we offer:
- Breakfast and dinner prepared with fresh and local ingredients.
- National and international beverages.
- Laundromat.
- Excursions in and around Matanzas
- Professional photo shoot indoors and outdoors
- Personalized attention to help you make the most of your visit.
- Taxi service

## Your Home in Matanzas
Whether you're looking to relax in our common areas, enjoy a unique view from the terrace, or explore the most charming corners of Matanzas, our place is the perfect choice.
`;

export async function generateMetadata() {
	return {
		title: "About Us",
		description: "Learn more about Panorama Tours travels and adventures",
		openGraph: {
			title: "About Us",
			description: "Learn more about Panorama Tours travels and adventures",
		},
	};
}

const Page = async () => {
	return (
		<div className="container mx-auto px-5">
			<Header />
			<main className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
				<h1 className="text-center">About Us</h1>

				<div>
					<Image
						src="/images/logoblue.webp"
						alt="b&b logo"
						width={800}
						height={800}
						className="m-0"
					/>
					<Markdown>{content}</Markdown>
				</div>
				{/* Contact Button */}
				<div className="flex flex-col items-center gap-2 my-8 justify-center">
					<p className="text-center font-bold text-xl text-blue-800">
						Book your stay with us and save 20% on all our tours
					</p>
					<Link
						className="py-6 px-6 rounded-lg max-h-4 text-white font-semibold text-base bg-black sm:w-1/2 hover:bg-green-500 flex items-center gap-2 justify-center no-underline"
						href="http://airbnb.com/h/panorama-b-b"
						target="_blank"
					>
						Book in AirBnB
						<SquareArrowOutUpRight className="w-4 h-4" />
					</Link>
				</div>

				{/* Gallery Section */}
				<div className="flex justify-center">
					<div className="masonry sm:masonry-sm">
						{images.map((image, index) => (
							<Image
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								width={500}
								height={500}
								src={`/${image}`}
								alt={"b&b room"}
								className="rounded-lg mt-5"
							/>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Page;
