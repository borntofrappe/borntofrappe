import adapter from "@sveltejs/adapter-netlify";
import { escapeSvelte, mdsvex } from "mdsvex";
import { createHighlighter } from "shiki";

const theme = "catppuccin-mocha";
const highlighter = await createHighlighter({
  themes: [theme],
  langs: ["html", "css", "javascript", "diff", "lua", "bash", "json", "svelte", "sql", "csv", "md", "xml", "sh"],
});

const mdsvexConfig = {
  extensions: [".md", ".svx"],
  highlight: {
    highlighter: (code, lang) => {
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          lang,
          theme,
        })
      );

      return `{@html \`${html}\`}`;
    },
  },
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [mdsvex(mdsvexConfig)],
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter({
      edge: false,
      split: false,
    }),
  },
};

export default config;
