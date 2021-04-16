export async function getSession() {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('/src/blog/*.svx')).map(async ([path, post]) => {
      const { metadata } = await post();
      const filename = path.split('/').pop();
      const slug = filename.slice(0, -4);

      return {
        ...metadata,
        slug
      };
    })
  );

  return {
    posts: posts.sort((a, b) => new Date(...b.date.split(' ').map(d => parseInt(d, 10))) - new Date(...a.date.split(' ').map(d => parseInt(d, 10))))
  }
}