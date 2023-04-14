export async function load({ fetch, params }) {
	const response = await fetch('/api/blog?page=0');
	const { blog } = await response.json();

	return {
		blog
	};
}
