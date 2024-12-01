import adapter from "@sveltejs/adapter-netlify";
import { mdsvex } from "mdsvex";

const mdsvexConfig = {
  extensions: [".md", ".svx"],
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
