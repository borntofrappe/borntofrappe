import { blog } from "$lib/blog";

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const page = Number(url.searchParams.get("page")) || 1;
  const articlesPerPage = 8;
  const pages = Math.ceil(blog.length / articlesPerPage);
  const i = (page - 1) * articlesPerPage;

  return {
    blog: blog.slice(i, i + articlesPerPage),
    pages,
    page,
  };
}
