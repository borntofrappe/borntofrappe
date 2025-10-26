import { blog } from "$lib/blog";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const metadata = blog.find((d) => d.slug === params.slug);
  if (metadata === undefined) {
    error(404, `Page not found: /${params.slug}`);
  }

  const modules = import.meta.glob("$blog/**/*.{md,svx}");
  const { default: content } = await modules[metadata.path]();

  return {
    ...metadata,
    content,
  };
}
