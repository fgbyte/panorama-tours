import { config } from "@/config";
import {
	type GetPostResult,
	type GetPostsResult,
	buildWispClient,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
	blogId: config.wisp.blogId,
});

export type { GetPostsResult, GetPostResult };
