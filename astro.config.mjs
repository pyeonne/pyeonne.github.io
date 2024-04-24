import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://pyeonne.github.io",
  integrations: [
    starlight({
      plugins: [
        starlightBlog({
          title: "Demo Blog",
          authors: {
            hideoo: {
              name: "HiDeoo",
              title: "Starlight Aficionado",
              picture: "/hideoo.png",
              url: "https://hideoo.dev",
            },
          },
        }),
      ],
      title: "My Docs",
      customCss: ["./src/styles/tailwind.css", "./src/styles/custom.css"],
      social: {
        github: "https://github.com/pyeonne",
        twitter: "https://twitter.com/pyeonne",
        linkedin: "https://www.linkedin.com/in/pyeonne/",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
