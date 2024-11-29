import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const response = await fetch('/api/blog');
	const { blog } = await response.json();

	const post = blog.find(({ slug }) => slug === params.slug);

	if (!post) error(404, `'/${params.slug}' page does not exist.`);

	const modules = import.meta.glob('$blog/**/*.{md,svx}');
	const { default: Component } = await modules[post.path]();

	return {
		Component
	};
}
