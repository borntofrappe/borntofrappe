import path from 'path';
import fs from 'fs';

export async function getSession() {
  const extname = '.md';

  const files = fs.readdirSync('src/blog', 'utf-8')

  const markdownFiles = files.filter(file => path.extname(file) === extname);

  const posts = markdownFiles.map(file => {
    const slug = path.basename(file, extname);
    return { slug };
  });

  return {
    posts
  }
}