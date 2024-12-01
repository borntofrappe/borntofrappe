import { parse } from "node:path";

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  /** @type Array<import('$lib/types').Article> */
  const blog = [];

  const modules = import.meta.glob("/src/blog/**/*.{md,svx}", { eager: true });
  for (const path in modules) {
    const { name: slug } = parse(path);
    const mod = modules[path];

    if (
      mod &&
      typeof mod === "object" &&
      "metadata" in mod &&
      typeof mod.metadata === "object"
    ) {
      const metadata = /** @type {import('$lib/types').Frontmatter} */ (
        mod.metadata
      );
      blog.push({
        ...metadata,
        slug,
        path,
      });
    }
  }

  return {
    blog,
  };
}
