import { createHmac } from "crypto";
import { config } from "@/config";
import urlJoin from "url-join";

// Secret is used for signing and verifying the url to prevent misuse of your service to generate images for others
const secret = config.ogImageSecret;

export interface OpenGraphImageParams {
	name: string;
	label?: string;
	brand?: string;
}

export const signOgImageParams = ({
	name,
	label,
	brand,
}: OpenGraphImageParams) => {
	const valueString = `${name}.${label}.${brand}`;
	const signature = createHmac("sha256", secret)
		.update(valueString)
		.digest("hex");
	return { valueString, signature };
};

export const verifyOgImageSignature = (
	params: OpenGraphImageParams,
	signature: string,
) => {
	const { signature: expectedSignature } = signOgImageParams(params);
	return expectedSignature === signature;
};

export const signOgImageUrl = (param: OpenGraphImageParams) => {
	const queryParams = new URLSearchParams();
	queryParams.append("name", param.name);
	if (param.label) {
		queryParams.append("label", param.label);
	}
	if (param.brand) {
		queryParams.append("brand", param.brand);
	}
	const { signature } = signOgImageParams(param);
	queryParams.append("s", signature);
	return urlJoin(config.baseUrl, `/api/og-image/?${queryParams.toString()}`);
};
