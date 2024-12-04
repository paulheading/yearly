// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  scopedStyleStrategy: "class",
  site: "https://yearly.paul.ly",
  image: {
    service: passthroughImageService(),
  },
  vite: {
    ssr: {
      noExternal: ["paully"],
    },
  },
});
