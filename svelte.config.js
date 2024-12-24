import adapter from "@sveltejs/adapter-netlify";
import { escapeSvelte, mdsvex } from "mdsvex";
import { createHighlighter } from "shiki";

const theme = "catppuccin-mocha";
const { codeToHtml } = await createHighlighter({
  themes: [theme],
  // prettier-ignore
  langs: ["html","css","javascript","svelte","diff","bash","sh","json","md","xml","csv","sql","lua"],
});

const mdsvexConfig = {
  extensions: [".md", ".svx"],
  highlight: {
    highlighter: (code, lang) => {
      const html = codeToHtml(code, {
        lang,
        theme,
      }).replace(/class="[\w -]+"/, `data-lang="${lang}"`);
      return escapeSvelte(html);
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
    alias: {
      $blog: "src/blog",
      $styles: "src/styles",
    },
  },
  compilerOptions: {
    runes: true,
    warningFilter: (warning) =>
      !warning.filename.endsWith(".md") && !warning.filename.endsWith(".svx"),
  },
};

export default config;
