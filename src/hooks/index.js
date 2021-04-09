export async function getSession() {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('/src/blog/*.svx')).map(async ([path, post]) => {
      const { metadata } = await post();
      const filename = path.split('/').pop();
      const slug = filename.toLowerCase().replace(' ', '-').slice(0, -4);

      return {
        ...metadata,
        slug
      };
    })
  );

  return posts;
}