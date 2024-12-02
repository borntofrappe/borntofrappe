import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const modules = import.meta.glob("/src/blog/**/*.{md,svx}");
  for (const path in modules) {
    const slug = path.split("/").pop()?.split(".")[0];
    if (slug === params.slug) {
      const { metadata, default: content } =
        /** @type {{ metadata: import('$lib/types').Frontmatter, default: Function}} */ (
          await modules[path]()
        );

      return {
        ...metadata,
        content,
      };
    }
  }

  error(404, "Article not found");
}
