/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: mdsvex(mdsvexConfig),
  kit: {
    adapter: adapter(),
    target: '#svelte',
  },
};

export default config;
