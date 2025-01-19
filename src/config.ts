const buildConfig = () => {
	const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "Panorama Tours";
	const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "Panorama B&B";
	const defaultTitle =
		process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Panorama Tours";
	const defaultDescription =
		process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
		"Find your new adventure in Matanzas";

	return {
		baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
		blog: {
			name,
			copyright,
			metadata: {
				title: {
					absolute: defaultTitle,
					default: defaultTitle,
					template: `%s - ${defaultTitle}`,
				},
				description: defaultDescription,
			},
		},
	};
};

export const config = buildConfig();
