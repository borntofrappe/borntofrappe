export async function getSession() {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('/src/blog/*.{md,svx}')).map(async ([path, post]) => {
      const { metadata } = await post();
      const filename = path.split('/').pop();
      const extension = filename.split('.').pop();
      const slug = filename.slice(0, (extension.length + 1) * -1);

      return {
        path,
        ...metadata,
        slug
      };
    })
  );

  return {
    posts
  }
}