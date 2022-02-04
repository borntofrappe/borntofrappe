export async function getSession() {
	const entries = await Promise.all(
		Object.entries(import.meta.glob('/src/blog/**/*.{md,svx}')).map(async ([path, module]) => {
			const slug = path
				.split('/')
				.pop()
				.replace(/\.(md|svx)$/, '');

			const { metadata } = await module();
			const { title, datetime, brief } = metadata;

			const date = new Date(
				...datetime.split(/[-T:]/).map((d, i) => (i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)))
			);

			return {
				path,
				slug,
				title,
				datetime,
				date,
				brief
			};
		})
	);

	return {
		entries: new Map(
			[...entries]
				.sort((a, b) => b.date - a.date)
				.reduce((acc, curr) => [...acc, [curr.slug, curr]], [])
		)
	};
}
