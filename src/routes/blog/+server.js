import { json } from '@sveltejs/kit';

export async function GET() {
	const modules = import.meta.glob('$blog/**/*.{md,svx}');

	const blog = await Promise.all(
		Object.entries(modules).map(async ([path, module]) => {
			const [slug] = path.split('/').pop().split('.');
			const { metadata } = await module();

			const date = new Date(metadata.date);

			return {
				...metadata,
				path,
				slug,
				date
			};
		})
	);

	return json({
		blog: [...blog].sort((a, b) => b.date - a.date)
	});
}
