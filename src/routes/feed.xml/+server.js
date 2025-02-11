export const prerender = true;

import site from "$lib/site.js";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const { title, description, origin, author } = site;
  const { name, email } = author;

  /** @type Array<import('$lib/types').Article> */
  const blog = [];

  const modules = import.meta.glob("$blog/**/*.{md,svx}", { eager: true });
  for (const path in modules) {
    const slug = path.split("/").pop()?.split(".")[0];
    const mod = modules[path];

    if (
      mod &&
      typeof mod === "object" &&
      "metadata" in mod &&
      typeof mod.metadata === "object" &&
      slug
    ) {
      const metadata = /** @type {import('$lib/types').Frontmatter} */ (
        mod.metadata
      );
      blog.push({
        ...metadata,
        slug,
      });
    }
  }

  const feed = `<?xml version="1.0" encoding="utf-8"?>
	<feed xmlns="http://www.w3.org/2005/Atom">
		<title>${title}</title>
		<subtitle>${description}</subtitle>
		<link href="${origin}/feed.xml" rel="self" />
		<link href="${origin}/" />
		<id>${origin}/</id>
		<updated>${new Date().toISOString()}</updated>
		<author>
			<name>${name}</name>
			<email>${email}</email>
        </author>
		${[...blog]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(
        ({ slug, title, description, date }) => `<entry>
			<title>${title}</title>
			<link href="${origin}/${slug}/" />
			<id>${origin}/${slug}/</id>
			<updated>${new Date(date).toISOString()}</updated>
			<summary>${description}</summary>
		</entry>`
      )
      .join("")}
	</feed>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
