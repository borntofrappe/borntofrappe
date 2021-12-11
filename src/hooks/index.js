export async function getSession() {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/blog/*.{md,svx}')).map(async ([path, module]) => {
			const [slug] = path.split('/').pop().split('.');
			const { metadata } = await module();

			return {
				...metadata,
				slug,
				path
			};
		})
	);

	return {
		posts: posts.reduce((acc, curr) => {
			acc[curr.slug] = curr;
			return acc;
		}, {})
	};
}
