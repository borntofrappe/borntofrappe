import { json } from '@sveltejs/kit';
import { content } from '$lib/search/content.server.js';

export async function GET({ url }) {
	const page = url.searchParams.get('page') !== null && +url.searchParams.get('page');
	const limit = url.searchParams.get('limit') !== null && +url.searchParams.get('limit');

	let blog = await content();
	const postsPerPage = 8;
	const pages = Math.floor((blog.length - 1) / postsPerPage);

	if (Number.isInteger(page) && page >= 0) {
		blog = blog.slice(page * postsPerPage, (page + 1) * postsPerPage);
	}

	if (Number.isInteger(limit) && limit > 0) {
		blog = blog.slice(0, limit);
	}

	return json({
		blog,
		pages
	});
}
