export const prerender = true;

import site from '$lib/utils/site.js';

export async function GET() {
	const { title, description, origin, author } = site;
	const { name, email } = author;

	const modules = import.meta.glob('$blog/**/*.{md,svx}');
	const blog = await Promise.all(
		Object.entries(modules).map(async ([path, module]) => {
			const [slug] = path.split('/').pop().split('.');
			const url = `${origin}/${slug}`;
			const { metadata } = await module();

			const date = new Date(metadata.date);

			return {
				...metadata,
				url,
				date
			};
		})
	);

	// prettier-ignore
	const feed = `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>${title}</title>
        <subtitle>${description}</subtitle>
        <link href="${origin}/feed.xml" rel="self" />
        <link href="${origin}" />
        <updated>${new Date().toISOString()}</updated>
        <id>${origin}/</id>
        <author>
        <name>${name}</name>
        <email>${email}</email>
        </author>
        ${blog
			.sort((a, b) => b.date - a.date)
			.map(({ url, title, date, description }) => `
            <entry>
                <title>${title}</title>
                <link href="${url}"/>
                <id>${url}</id>
                <updated>${new Date(date).toISOString()}</updated>
                <summary>${description}</summary>
            </entry>`).join('')}
    </feed>`;

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
