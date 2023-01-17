import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const modules = import.meta.glob('$blog/**/*.{md,svx}');

	for (const path in modules) {
		const [slug] = path.split('/').pop().split('.');

		if (params.slug === slug) {
			const { default: Component } = await modules[path]();

			return {
				Component
			};
		}
	}

	throw error(404, `'/${params.slug}' page does not exist.`);
}
