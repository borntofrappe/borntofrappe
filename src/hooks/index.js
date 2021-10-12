export async function getSession() {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/blog/*.{md,svx}')).map(async ([path, post]) => {
			const { metadata } = await post();
			const filename = path.split('/').pop();
			const extension = filename.split('.').pop();
			const slug = filename.slice(0, (extension.length + 1) * -1);

			return {
				path,
				slug,
				...metadata
			};
		})
	);

	const sortedPosts = posts
		.map((post) => {
			const date = new Date(
				...post.datetime
					.split(/[-T:]/)
					.map((d, i) => (i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)))
			);
			return { ...post, date };
		})
		.sort((a, b) => (b.date > a.date ? 1 : -1));

	return {
		posts: sortedPosts
	};
}
