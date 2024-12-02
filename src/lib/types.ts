export type Frontmatter = {
  title: string;
  description: string;
  date: string;
};

export type Article = Frontmatter & {
  slug: string;
};
