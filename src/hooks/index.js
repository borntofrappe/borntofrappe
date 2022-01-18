export async function getSession() {
	const articles = await Promise.all(
		Object.entries(import.meta.glob('/src/blog/*.{md,svx}')).map(async ([path, module]) => {
			const { metadata } = await module();

			const date = new Date(
				...metadata.datetime
					.split(/[-T:]/)
					.map((d, i) => (i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)))
			);

			const slug = path
				.split('/')
				.pop()
				.replace(/\.(md|svx)/, '');

			return {
				...metadata,
				date,
				slug,
				path
			};
		})
	);

	return {
		articles: articles
			.sort((a, b) => b.date - a.date)
			.reduce(
				(acc, curr, i) => ({
					...acc,
					[curr.slug]: {
						...curr,
						latest: i === 0
					}
				}),
				{}
			)
	};
}
