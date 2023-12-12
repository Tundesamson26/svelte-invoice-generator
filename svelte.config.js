import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-netlify";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about p
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  },
};
