export async function getSession() {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('/src/blog/*.svx')).map(
      async ([path, page]) => {
			  const {metadata} = await page();
        const {title} = metadata;
        const filename = path.split('/').pop();
        const slug = filename.toLowerCase().replace(/ /g, '-').slice(0, -4);
        return { slug, title, filename };
      }
    )
  );

  return {
    posts
  }
}