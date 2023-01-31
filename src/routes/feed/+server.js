import site from '$lib/utils/site.js';

export async function GET({ fetch }) {
	const { title, description, origin, author } = site;
	const { name, email } = author;

	const response = await fetch('/blog');
	const { blog } = await response.json();

	// prettier-ignore
	const feed = `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>${title}</title>
        <subtitle>${description}</subtitle>
        <link href="${origin}/feed" rel="self" />
        <link href="${origin}" />
        <updated>${new Date().toISOString()}</updated>
        <id>${origin}/</id>
        <author>
        <name>${name}</name>
        <email>${email}</email>
        </author>
        ${blog
			.map(({ slug, title, date, description }) => `
            <entry>
                <title>${title}</title>
                <link href="${origin}/${slug}"/>
                <id>${origin}/${slug}</id>
                <updated>${new Date(date).toISOString()}</updated>
                <content type="html"><![CDATA[${description}]]></content>
            </entry>`).join('')}
    </feed>`;

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
