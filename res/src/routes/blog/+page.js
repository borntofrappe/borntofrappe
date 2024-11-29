export async function load({ fetch, url }) {
	const page = +url.searchParams.get('page') || 0;
	const response = await fetch(`/api/blog?page=${page}`);
	const { blog, pages } = await response.json();

	return {
		blog,
		pages,
		page
	};
}
