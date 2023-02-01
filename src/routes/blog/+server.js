import { json } from '@sveltejs/kit';
import { content } from '$lib/search/content.server.js';

export async function GET() {
	const blog = await content();

	return json({
		blog
	});
}
