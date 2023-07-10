import { parse } from 'node:path';
import site from '$lib/utils/site.js';

export async function content() {
	const { origin } = site;

	const modules = import.meta.glob('$blog/**/*.{md,svx}');

	const blog = await Promise.all(
		Object.entries(modules).map(async ([path, module]) => {
			const { name: slug } = parse(path);
			const url = `${origin}/${slug}`;

			const { metadata } = await module();

			const date = new Date(metadata.date);

			return {
				...metadata,
				date,
				path,
				slug,
				url
			};
		})
	);

	return [...blog].sort((a, b) => b.date - a.date);
}
