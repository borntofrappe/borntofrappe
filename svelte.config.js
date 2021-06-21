/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: mdsvex({ extensions: ['.md', '.svx'] }),
  kit: {
    adapter: adapter(),
    target: '#svelte',
  },
};

export default config;
