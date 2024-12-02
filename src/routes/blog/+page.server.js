/** @type {import('./$types').PageServerLoad} */
export async function load() {
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

  return {
    blog,
  };
}
