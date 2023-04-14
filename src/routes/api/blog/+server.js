import { json } from '@sveltejs/kit';
import { content } from '$lib/search/content.server.js';

export async function GET({ url }) {
	const limit = +url.searchParams.get('limit');

	let blog = await content();

	if (Number.isInteger(limit) && limit > 0) {
		blog = blog.slice(0, limit);
	}

	return json({
		blog
	});
}
