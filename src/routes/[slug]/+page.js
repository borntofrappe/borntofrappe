import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ parent, params }) {
  const { blog } = await parent();
  const article = blog.find((d) => d.slug === params.slug);

  if (article === undefined) {
    throw error(404, "Article not found");
  }

  const { path } = article;
  /** @type {{ metadata: import('$lib/types').Frontmatter, default: Function}} */
  const module = await import(path);
  const { metadata, default: content } = module;

  return {
    ...metadata,
    content,
  };
}
