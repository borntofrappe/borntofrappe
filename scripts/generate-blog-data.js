import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.resolve(__dirname, "../src/blog");
const outputFilePath = path.resolve(__dirname, "../src/lib/blog.js");

(async () => {
  const blogFiles = await fs.readdir(contentDir, { recursive: true });
  const files = blogFiles.filter(
    (file) => file.endsWith(".svx") || file.endsWith(".md")
  );

  const blogMetadata = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const rawContent = await fs.readFile(filePath, "utf-8");
    const { data } = matter(rawContent);

    const slug = path.basename(file).replace(/\.(md|svx)$/, "");

    blogMetadata.push({
      slug,
      path: `/src/blog/${file.replace("\\", "/")}`,
      ...data,
    });
  }

  blogMetadata.sort((a, b) => new Date(b.date) - new Date(a.date));

  const jsContent = `export const blog = ${JSON.stringify(
    blogMetadata,
    null,
    2
  )};\n`;
  await fs.writeFile(outputFilePath, jsContent, "utf-8");

  console.log(`Generated ${blogMetadata.length} entries.`);
})().catch(console.error);
