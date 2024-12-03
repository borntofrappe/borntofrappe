/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  /** @type Array<import('$lib/types').Article> */
  const blog = [];

  const modules = import.meta.glob("/src/blog/**/*.{md,svx}", { eager: true });
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

  const page = Number(url.searchParams.get("page")) || 1;
  const articlesPerPage = 8;
  const pages = Math.ceil(blog.length / articlesPerPage);
  const i = (page - 1) * articlesPerPage;

  return {
    blog: [...blog]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(i, i + articlesPerPage),
    pages,
    page,
  };
}
